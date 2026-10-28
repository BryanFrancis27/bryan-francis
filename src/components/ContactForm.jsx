import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ABOUT } from "../constants";
import SocialLinks from "./SocialLinks";
import { CONTACT_LIMITS, EMPTY_CONTACT, createContactSubmission, resolveEmailJSConfig, validateContact } from "../lib/contact-form";

// Retain the original public EmailJS configuration; environment values may override it.
const EMAILJS = resolveEmailJSConfig({
  service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}, {
  service: "service_k0rryto",
  template: "template_raw2qjw",
  publicKey: "h2sSq5Jw_ED6HdF1U",
});
export default function Contact() {
  const [formData, setFormData] = useState(EMPTY_CONTACT);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", text: "" });
  const attempted = useRef(false);
  const form = useRef(null);
  const [submission] = useState(() => createContactSubmission({
    config: EMAILJS,
    send: emailjs.send,
    onErrors: setErrors,
    onStatus: setStatus,
    onSuccess: () => { setFormData(EMPTY_CONTACT); attempted.current = false; },
    focusField: name => form.current?.elements.namedItem(name)?.focus(),
  }));
  useEffect(() => submission.activate(), [submission]);
  const isSending = status.type === "sending";
  const handleChange = event => {
    if (isSending) return;
    const { name, value } = event.target;
    const nextValues = { ...formData, [name]: value };
    setFormData(nextValues);
    if (attempted.current) setErrors(current => ({ ...current, [name]: validateContact(nextValues).errors[name] }));
    setStatus({ type: "idle", text: "" });
  };
  const handleSubmit = async event => {
    event.preventDefault();
    attempted.current = true;
    await submission.submit(formData);
  };
  return <section id="contact" className="section-wrap section-space contact-layout" aria-labelledby="contact-heading">
    <div><p className="eyebrow">Have an idea in mind?</p><h2 id="contact-heading">Let’s build something <span className="accent">together.</span></h2>
      <p className="section-intro">For project ideas, opportunities, or a simple hello, I’d love to hear from you.</p>
      <a className="contact-email text-link" href={`mailto:${ABOUT.email}`}>{ABOUT.email}<span aria-hidden="true">↗</span></a><SocialLinks />
    </div>
    <form ref={form} onSubmit={handleSubmit} noValidate className="contact-form">
      <fieldset disabled={isSending} aria-busy={isSending}><legend className="sr-only">Send Bryan a message</legend>
      {["name", "email", "message"].map(name => <div className="form-field" key={name}>
        <label htmlFor={name}>{name === "name" ? "Your name" : name === "email" ? "Email address" : "Your message"} <span className="required-note">(required)</span></label>
        {name === "message" ? <textarea id={name} name={name} rows={5} required maxLength={CONTACT_LIMITS.message} value={formData[name]} onChange={handleChange} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} placeholder="Tell me a little about your idea…" /> :
          <input id={name} name={name} type={name === "email" ? "email" : "text"} autoComplete={name} required maxLength={CONTACT_LIMITS[name]} value={formData[name]} onChange={handleChange} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} placeholder={name === "email" ? "you@example.com" : "Your name"} />}
        {errors[name] && <p className="field-error" id={`${name}-error`}>Error: {errors[name]}</p>}
      </div>)}
      <button className="button button-primary" type="submit" disabled={isSending}>{isSending ? "Sending…" : "Send Message"}<span aria-hidden="true">↗</span></button></fieldset>
      <p className={`form-status ${status.type}`}>
        <span role="status" aria-live="polite" aria-atomic="true">{status.type !== "error" ? status.text : ""}</span>
        <span role="alert" aria-atomic="true">{status.type === "error" ? status.text : ""}</span>
      </p>
      <p className="form-note">Prefer email? <a href={`mailto:${ABOUT.email}`}>Contact me directly.</a></p>
    </form>
  </section>;
}
