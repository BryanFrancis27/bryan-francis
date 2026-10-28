export const CONTACT_LIMITS = { name: 100, email: 254, message: 5000 };
export const EMPTY_CONTACT = { name: "", email: "", message: "" };

export function validateContact(raw) {
  const values = Object.fromEntries(Object.keys(CONTACT_LIMITS).map(field => [field, (raw[field] || "").trim()]));
  const errors = {};
  if (!values.name) errors.name = "Please enter your name.";
  else if (values.name.length > CONTACT_LIMITS.name) errors.name = "Please keep your name to 100 characters or fewer.";
  if (!values.email) errors.email = "Please enter your email address.";
  else if (values.email.length > CONTACT_LIMITS.email) errors.email = "Please keep your email address to 254 characters or fewer.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Please enter a valid email address.";
  if (!values.message) errors.message = "Please enter your message.";
  else if (values.message.length > CONTACT_LIMITS.message) errors.message = "Please keep your message to 5,000 characters or fewer.";
  return { values, errors };
}

// A partial override must not mix identifiers from different EmailJS accounts.
export function resolveEmailJSConfig(overrides, fallback) {
  const source = Object.values(overrides).some(value => value !== undefined) ? overrides : fallback;
  return Object.fromEntries(["service", "template", "publicKey"].map(key => [key, source[key]?.trim() || ""]));
}

// Dependency injection lets tests exercise the actual lifecycle without emails.
export function createContactSubmission({ config, send, onErrors, onStatus, onSuccess, focusField }) {
  let active = false;
  let inFlight = false;
  let generation = 0;
  return {
    activate() {
      active = true;
      return () => { active = false; generation += 1; };
    },
    async submit(raw) {
      if (!active || inFlight) return;
      const { values, errors } = validateContact(raw);
      onErrors(errors);
      if (Object.keys(errors).length) {
        onStatus({ type: "error", text: "Please check the highlighted fields below." });
        focusField(Object.keys(errors)[0]);
        return;
      }
      if (!config.service || !config.template || !config.publicKey) {
        onStatus({ type: "error", text: "The form is unavailable. Please contact me directly by email." });
        return;
      }
      inFlight = true;
      const requestGeneration = generation;
      const isCurrent = () => active && generation === requestGeneration;
      onStatus({ type: "sending", text: "Sending your message…" });
      try {
        await send(config.service, config.template, values, { publicKey: config.publicKey });
        if (!isCurrent()) return;
        onSuccess();
        onStatus({ type: "success", text: "Your message has been submitted successfully. Thank you for reaching out!" });
      } catch {
        if (isCurrent()) onStatus({ type: "error", text: "Your message couldn't be sent. Please try again or contact me directly by email." });
      } finally {
        inFlight = false;
      }
    },
  };
}
