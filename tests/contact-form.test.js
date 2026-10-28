import test from "node:test";
import assert from "node:assert/strict";
import { CONTACT_LIMITS, EMPTY_CONTACT, createContactSubmission, resolveEmailJSConfig, validateContact } from "../src/lib/contact-form.js";

const config = { service: "test-service", template: "test-template", publicKey: "test-public-key" };
const valid = { name: "  Jo O'Neil  ", email: " jo+work@example.com ", message: "  Hello!\n\nA short inquiry.  " };

function deferred() {
  let resolve, reject;
  const promise = new Promise((yes, no) => { resolve = yes; reject = no; });
  return { promise, resolve, reject };
}

function harness(send = async () => ({ status: 200 }), settings = config) {
  const state = { data: { ...valid }, errors: {}, statuses: [], focus: [], clears: 0, calls: [] };
  const submission = createContactSubmission({
    config: settings,
    send: (...args) => { state.calls.push(args); return send(...args); },
    onErrors: errors => { state.errors = errors; },
    onStatus: status => { state.statuses.push(status); },
    onSuccess: () => { state.data = { ...EMPTY_CONTACT }; state.clears += 1; },
    focusField: name => { state.focus.push(name); },
  });
  const deactivate = submission.activate();
  return { state, submission, deactivate };
}

test("empty form reports all fields and requests focus on name without calling the sender", async () => {
  const { state, submission } = harness();
  await submission.submit(EMPTY_CONTACT);
  assert.deepEqual(Object.keys(state.errors), ["name", "email", "message"]);
  assert.deepEqual(state.focus, ["name"]);
  assert.equal(state.calls.length, 0);
  assert.equal(state.statuses.at(-1).type, "error");
  assert.equal(state.clears, 0);
});

for (const field of ["name", "email", "message"]) {
  test(`whitespace-only ${field} is blocked with the correct first invalid field`, async () => {
    const { state, submission } = harness();
    await submission.submit({ ...valid, [field]: " \t\r\n " });
    assert.deepEqual(Object.keys(state.errors), [field]);
    assert.deepEqual(state.focus, [field]);
    assert.equal(state.calls.length, 0);
  });
}

for (const email of ["invalid", "jo@", "@example.com", "jo@example", "jo name@example.com", "jo@@example.com"]) {
  test(`invalid email format is rejected: ${email}`, async () => {
    const { state, submission } = harness();
    await submission.submit({ ...valid, email });
    assert.equal(state.errors.email, "Please enter a valid email address.");
    assert.deepEqual(state.focus, ["email"]);
    assert.equal(state.calls.length, 0);
  });
}

for (const [field, limit] of Object.entries(CONTACT_LIMITS)) {
  test(`${field} length limit is enforced before any request`, async () => {
    const { state, submission } = harness();
    await submission.submit({ ...valid, [field]: "a".repeat(limit + 1) });
    assert.ok(state.errors[field]);
    assert.equal(state.calls.length, 0);
  });
}

test("valid names, short inquiries, and maximum lengths are accepted", () => {
  for (const name of ["李", "Anne-Marie O’Neil", "J.", "a".repeat(100)]) {
    assert.deepEqual(validateContact({ name, email: "a+b@example.co.uk", message: "Hi" }).errors, {});
  }
  const email = "a".repeat(254 - "@example.com".length) + "@example.com";
  assert.deepEqual(validateContact({ name: "A", email, message: "a".repeat(5000) }).errors, {});
});

test("corrected field values revalidate while an invalid correction retains an error", () => {
  assert.ok(validateContact({ ...valid, email: "bad" }).errors.email);
  assert.ok(validateContact({ ...valid, email: "still bad" }).errors.email);
  assert.equal(validateContact(valid).errors.email, undefined);
});

test("pending state blocks duplicates; success clears only after resolution and preserves template mapping", async () => {
  const request = deferred();
  const { state, submission } = harness(() => request.promise);
  const first = submission.submit(state.data);
  assert.equal(state.statuses.at(-1).type, "sending");
  assert.deepEqual(state.data, valid);
  assert.equal(state.clears, 0);
  await Promise.all([submission.submit(valid), submission.submit(valid)]);
  assert.equal(state.calls.length, 1);
  assert.deepEqual(state.calls[0], [config.service, config.template, {
    name: "Jo O'Neil", email: "jo+work@example.com", message: "Hello!\n\nA short inquiry.",
  }, { publicKey: config.publicKey }]);
  request.resolve({ status: 200, text: "OK" });
  await first;
  assert.equal(state.statuses.at(-1).type, "success");
  assert.deepEqual(state.data, EMPTY_CONTACT);
  assert.equal(state.clears, 1);
  assert.deepEqual(state.focus, []);
});

test("normalization retains internal CRLF line breaks and ignores extra payload fields", () => {
  const { values } = validateContact({ ...valid, message: " \r\nLine one\r\n\r\nLine two\r\n ", recipient: "ignored" });
  assert.equal(values.message, "Line one\r\n\r\nLine two");
  assert.deepEqual(Object.keys(values), ["name", "email", "message"]);
});

test("failure keeps the draft and permits a user-requested retry, with no automatic retries", async () => {
  const first = deferred();
  const second = deferred();
  let attempt = 0;
  const { state, submission } = harness(() => (++attempt === 1 ? first.promise : second.promise));
  const pending = submission.submit(state.data);
  first.reject(new Error("technical detail must not be shown"));
  await pending;
  assert.equal(state.statuses.at(-1).type, "error");
  assert.equal(state.statuses.at(-1).text.includes("technical detail"), false);
  assert.deepEqual(state.data, valid);
  assert.equal(state.calls.length, 1);
  assert.equal(state.clears, 0);
  const retry = submission.submit(state.data);
  assert.equal(state.statuses.at(-1).type, "sending");
  assert.equal(state.calls.length, 2);
  second.resolve({ status: 200 });
  await retry;
  assert.equal(state.statuses.at(-1).type, "success");
  assert.deepEqual(state.data, EMPTY_CONTACT);
});

test("synchronous SDK errors also produce the safe failure state", async () => {
  const { state, submission } = harness(() => { throw new Error("SDK failure"); });
  await submission.submit(valid);
  assert.equal(state.statuses.at(-1).type, "error");
  assert.deepEqual(state.data, valid);
});

for (const outcome of ["resolve", "reject"]) {
  test(`unmount ignores a late ${outcome} and prevents subsequent requests`, async () => {
    const request = deferred();
    const { state, submission, deactivate } = harness(() => request.promise);
    const pending = submission.submit(valid);
    deactivate();
    const count = state.statuses.length;
    request[outcome]({ status: outcome === "resolve" ? 200 : 500 });
    await pending;
    await submission.submit(valid);
    assert.equal(state.statuses.length, count);
    assert.equal(state.clears, 0);
    assert.equal(state.calls.length, 1);
  });
}

test("effect cleanup/reactivation cannot accept an obsolete request result", async () => {
  const request = deferred();
  const { state, submission, deactivate } = harness(() => request.promise);
  const pending = submission.submit(valid);
  deactivate();
  submission.activate();
  await submission.submit(valid);
  assert.equal(state.calls.length, 1);
  request.resolve({ status: 200 });
  await pending;
  assert.equal(state.clears, 0);
  assert.equal(state.statuses.filter(status => status.type === "success").length, 0);
  await submission.submit(valid);
  assert.equal(state.calls.length, 2);
  assert.equal(state.statuses.at(-1).type, "success");
});

test("absent overrides retain legacy settings; complete overrides are trimmed", () => {
  assert.deepEqual(resolveEmailJSConfig({ service: undefined, template: undefined, publicKey: undefined }, config), config);
  assert.deepEqual(resolveEmailJSConfig({ service: " new-service ", template: " new-template ", publicKey: " new-key " }, config), {
    service: "new-service", template: "new-template", publicKey: "new-key",
  });
});

for (const overrides of [{ service: "new-service" }, { service: "", template: "", publicKey: "" }, { ...config, publicKey: "   " }]) {
  test("incomplete explicit configuration never invokes the sender or clears the draft", async () => {
    const resolved = resolveEmailJSConfig(overrides, config);
    const { state, submission } = harness(undefined, resolved);
    await submission.submit(valid);
    assert.equal(state.calls.length, 0);
    assert.equal(state.clears, 0);
    assert.match(state.statuses.at(-1).text, /unavailable/);
    assert.deepEqual(state.data, valid);
  });
}
