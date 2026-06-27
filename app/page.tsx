import "./styles.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/impact">Impact</Link>
        <Link href="/join">Join / Contact Us</Link>
        <Link href="/donate">Donate</Link>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h1 className="title">
          <span className="title-empower">Empower</span>
          <br />
          Essentials
        </h1>

        <p className="motto">empower through the essentials :)</p>

        <div className="stats">
          <div className="stat">
            <div className="stat-number">13,000+</div>
            <div className="stat-label">items donated</div>
          </div>

          <div className="stat">
            <div className="stat-number">2,600+</div>
            <div className="stat-label">kits created</div>
          </div>

          <div className="stat">
            <div className="stat-number">5,000+</div>
            <div className="stat-label">dollars raised</div>
          </div>
        </div>

        <div className="actions">
          <a href="/donate" className="btn">
            Donate ›
          </a>

          <a href="/join" className="btn">
            Join Us ›
          </a>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="mission">
        <div className="mission-content">
          <h2>Our Mission</h2>

          <p>
            We are a student-led nonprofit organization focused on uplifting the
            homeless community. We raise money through tutoring, bake sales,
            fundraisers, etc. We use funds to create and donate dental and
            feminine hygiene, first aid, and mental wellness kits to homeless
            shelters.
          </p>

          <a href="/about" className="btn btn--outline">
            Learn more ›
          </a>
        </div>
      </section>

      {/* Get Involved */}
      <section id="join" className="get-involved">
        <div className="get-involved-card">
          <h2>Get involved!</h2>

          <p>
            We meet for a few hours (~3) monthly to build kits and plan out
            future events! We have a lot of officer positions open and are
            looking for new members, so fill out our interest form to join!
          </p>

          <a href="/join" className="btn btn--solid">
            Join Us ›
          </a>
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
            >
              Instagram
            </a>

            <a
              href="https://tiktok.com/@empoweressentials25"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
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
