import React, { useState } from "react";

function Contact() {
  const [sending, setSending] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (sending) return;

    const form = e.currentTarget;
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    if (!email || !message) {
      alert("Please include your email and a message.");
      return;
    }

    setSending(true);

    const to = "info@dormchef.com";
    const subject = "Website Contact — DormChef";

    const bodyLines = [
      `From: ${email}`,
      phone ? `Phone: ${phone}` : null,
      "",
      "Message:",
      message,
    ].filter(Boolean);

    const body = bodyLines.join("\n");

    const mailtoUrl =
      `mailto:${encodeURIComponent(to)}?` +
      `subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    setTimeout(() => setSending(false), 500);
  }

  return (
    <main className="contact">
      <h1>Reach Out</h1>
      <div className="contact-content">
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" placeholder="your@email.com" required />

          <label htmlFor="phone">Phone:</label>
          <input id="phone" name="phone" type="tel" placeholder="000-000-0000" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="How can we help?" required></textarea>

          <button type="submit" disabled={sending}>
            {sending ? "Opening your email app…" : "Send"}
          </button>
        </form>

        <div className="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@dormchef.com">info@dormchef.com</a>
          </p>
          <p>
            <strong>Location:</strong> <span>123 College Ave, Dormtown</span>
          </p>
          <p>
            We love to hear from students and partners! Reach out with questions, suggestions, or partnership ideas.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Contact;