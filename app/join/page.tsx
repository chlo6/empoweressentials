"use client";

import { useState } from "react";

export default function Join() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Message sent! We'll get back to you soon.");
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/impact">Impact</a>
        <a href="/join" className="active">Join / Contact Us</a>
        <a href="/donate">Donate</a>
      </nav>

      {/* Page Header */}
      <header className="join-header">
        <h1>Get Involved</h1>
      </header>

      {/* Two Images Section */}
      <section className="join-images">
        <div className="join-team-gallery">
        <img src="/team1.png" alt="Empower Essentials Team" className="join-team-img" />
      </div>
      </section>

      {/* Join Today Section */}
      <section className="join-today">
        <div className="join-today-left">
          <h2>
            Join<br />
            today!
          </h2>
        </div>
        <div className="join-today-right">
          <p>
            We meet for a few hours (~3) monthly to build kits and plan out
            future events! We have a lot of officer positions open and are
            looking for new members, so fill out our interest form to join!
          </p>
          <a
            href="https://forms.gle/hZX65Wo9FqeUdLeH7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Interest Form
          </a>
          <a
            href="https://forms.gle/hZX65Wo9FqeUdLeH7"
            target="_blank"
            rel="noopener noreferrer"
            className="join-form-link"
          >
            https://forms.gle/hZX65Wo9FqeUdLeH7
          </a>
        </div>
      </section>

      {/* Contact / Let's Work Together Section */}
      <section className="join-contact">
        <div className="join-contact-left">
          <h2>Let&apos;s Work Together</h2>
          <div className="join-contact-info">
            <div className="join-contact-item">
              <span className="join-contact-label">E-Mail:</span>
              <a href="mailto:empoweressentials25@gmail.com">
                empoweressentials25@gmail.com
              </a>
            </div>
            <div className="join-contact-item">
              <span className="join-contact-label">Tel:</span>
              <a href="tel:+14089159237">408-915-9237</a>
            </div>
            <div className="join-contact-item">
              <span className="join-contact-label">Instagram:</span>
              <span>@empoweressentials25</span>
            </div>
          </div>
        </div>
        <div className="join-contact-right">
          <form onSubmit={handleSubmit} className="join-form">
            <div className="join-form-row">
              <div className="join-form-field">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="join-form-field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="join-form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="join-form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <a href="mailto:empoweressentials25@gmail.com">
            empoweressentials25@gmail.com
          </a>
          <a href="tel:+14089159237">(408) 915 - 9237</a>
          <span>Instagram: @empoweressentials25</span>
          <div className="footer-socials">
            <a
              href="https://instagram.com/empoweressentials25"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@empoweressentials25"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <a href="/privacy">Privacy Policy</a>
          <a href="/accessibility">Accessibility Statement</a>
        </div>
      </footer>
    </>
  );
}
