import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ABOUT } from "../constants";
import SocialLinks from "./SocialLinks";

// Retain the original public EmailJS configuration; environment values may override it.
const EMAILJS = {
  service: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_k0rryto",
  template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_raw2qjw",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "h2sSq5Jw_ED6HdF1U",
};
export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSending, setIsSending] = useState(false);
  const sending = useRef(false);
  const form = useRef(null);
  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(current => ({ ...current, [name]: value }));
    setErrors(current => ({ ...current, [name]: undefined }));
    setStatus({ type: "", text: "" });
  };
  const handleSubmit = async event => {
    event.preventDefault();
    if (sending.current) return;
    const values = Object.fromEntries(Object.entries(formData).map(([key, value]) => [key, value.trim()]));
    const nextErrors = {};
    if (!values.name) nextErrors.name = "Please enter your name.";
    if (!values.email) nextErrors.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = "Please enter a valid email address.";
    if (!values.message) nextErrors.message = "Please enter a message.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus({ type: "error", text: "Please check the highlighted fields below." });
      form.current.elements.namedItem(Object.keys(nextErrors)[0]).focus();
      return;
    }
    if (!EMAILJS.service || !EMAILJS.template || !EMAILJS.publicKey) {
      setStatus({ type: "error", text: "The form is unavailable. Please use the email link to get in touch." }); return;
    }
    sending.current = true; setIsSending(true);
    setStatus({ type: "pending", text: "Sending your message…" });
    try {
      await emailjs.send(EMAILJS.service, EMAILJS.template, values, EMAILJS.publicKey);
      setStatus({ type: "success", text: "Your message was accepted by the email service. Thank you for reaching out." });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus({ type: "error", text: "Your message could not be sent. Please try again or use the email link." });
    } finally { sending.current = false; setIsSending(false); }
  };
  return <section id="contact" className="section-wrap section-space contact-layout" aria-labelledby="contact-heading">
    <div><p className="eyebrow">Have an idea in mind?</p><h2 id="contact-heading">Let’s build something <span className="accent">together.</span></h2>
      <p className="section-intro">For project ideas, opportunities, or a simple hello, I’d love to hear from you.</p>
      <a className="contact-email text-link" href={`mailto:${ABOUT.email}`}>{ABOUT.email}<span aria-hidden="true">↗</span></a><SocialLinks />
    </div>
    <form ref={form} onSubmit={handleSubmit} noValidate className="contact-form" aria-busy={isSending}>
      <fieldset disabled={isSending}><legend className="sr-only">Send Bryan a message</legend>
      {["name", "email", "message"].map(name => <div className="form-field" key={name}>
        <label htmlFor={name}>{name === "name" ? "Your name" : name === "email" ? "Email address" : "Your message"} <span className="required-note">(required)</span></label>
        {name === "message" ? <textarea id={name} name={name} rows={5} required maxLength={5000} value={formData[name]} onChange={handleChange} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} placeholder="Tell me a little about your idea…" /> :
          <input id={name} name={name} type={name === "email" ? "email" : "text"} autoComplete={name} required maxLength={name === "email" ? 254 : 100} value={formData[name]} onChange={handleChange} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} placeholder={name === "email" ? "you@example.com" : "Your name"} />}
        {errors[name] && <p className="field-error" id={`${name}-error`}>Error: {errors[name]}</p>}
      </div>)}
      <button className="button button-primary" type="submit">{isSending ? "Sending…" : "Send Message"}<span aria-hidden="true">↗</span></button></fieldset>
      <p className={`form-status ${status.type}`} role="status" aria-live="polite">{status.text}</p>
      <p className="form-note">Prefer email? <a href={`mailto:${ABOUT.email}`}>Contact me directly.</a></p>
    </form>
  </section>;
}
