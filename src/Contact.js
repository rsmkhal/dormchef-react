import React from "react";

function Contact() {
  return (
    <main className="contact">
      <h1>Reach Out</h1>
      <div className="contact-content">
        <form>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" placeholder="your@email.com" />

          <label htmlFor="phone">Phone:</label>
          <input id="phone" name="phone" type="tel" placeholder="000-000-0000" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="How can we help?"></textarea>

          <button type="submit">Send</button>
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