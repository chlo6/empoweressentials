import Link from "next/link";

export const metadata = {
  title: "Donate | Empower Essentials",
};

export default function Donate() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/impact">Impact</Link>
        <Link href="/join">Join / Contact Us</Link>
        <Link href="/donate" className="active">Donate</Link>
      </nav>

      {/* Page Header */}
      <header className="donate-header">
        <h1>Donations</h1>
        <p>All donations go towards buying kit materials and setting up fundraisers!</p>
      </header>

      {/* Donation Content */}
      <section className="donate-content">
        <div className="donate-card">
          <h2>Support Our Mission</h2>
          <p>
            Your generosity helps us create hygiene kits and distribute them to
            those in need. Every dollar makes a difference.
          </p>
          <div className="donate-options">
            <a href="https://donorbox.org/monetary-donation-to-empower-essentials" target="_blank" rel="noopener noreferrer" className="btn btn--solid">
              Donate Now
            </a>
          </div>
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
          <span>A 501(c)(3) with Tax ID: 41-4365462</span>
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
