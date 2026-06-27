import Link from "next/link";

export const metadata = {
  title: "About | Empower Essentials",
};

export default function About() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/about" className="active">About</Link>
        <Link href="/impact">Impact</Link>
        <Link href="/join">Join / Contact Us</Link>
        <Link href="/donate">Donate</Link>
      </nav>

      {/* Page Content */}
      <main className="page-content">
        <h1>Our Mission</h1>
        <p>
          We are a student-led nonprofit organization focused on uplifting the
          homeless community. We raise money through tutoring, bake sales,
          fundraisers, and more. We use funds to create and donate dental and
          feminine hygiene, first aid, and mental wellness kits to homeless
          shelters.
        </p>

        <h2>What We Do</h2>
        <p>
          Every kit we create is thoughtfully assembled with essential items that
          make a real difference in someone&apos;s day. From basic hygiene products to
          mental wellness resources, we believe everyone deserves access to these
          fundamentals.
        </p>

        <div className="values-grid">
          <div className="value-card">
            <h3>Student-Led</h3>
            <p>
              Run entirely by students passionate about making a difference in
              our community.
            </p>
          </div>
          <div className="value-card">
            <h3>Community Focused</h3>
            <p>
              Working directly with local shelters to understand and meet real
              needs.
            </p>
          </div>
          <div className="value-card">
            <h3>Sustainable Impact</h3>
            <p>
              Building lasting relationships and consistent support systems.
            </p>
          </div>
        </div>

        <a href="/join" className="btn btn--outline">
          Get Involved
        </a>
      </main>

      {/* Meet The Team Section */}
      <section className="team-section">
        <h2>Meet The Team</h2>
        <div className="team-section-divider"></div>
        <div className="team-grid">
        <div className="team-member">
          <div className="team-member-photo">
            <img
              src="/sakthi.png"
              alt="Sakthi Satrawada"
              className="team-member-img"
            />
          </div>
          <div className="team-member-name">Sakthi Satrawada</div>
          <div className="team-member-role">President and Founder</div>
          <p className="team-member-bio">
            Monta Vista High School
          </p>
          <p className="team-member-bio">
            My favorite part about EE is making a real impact in my community while
            meeting new people, whether that&apos;s through welcoming new members or
            working with new shelters and volunteers.
          </p>
          <p className="team-member-bio">
            My main goal at Empower Essentials is to foster a fun, engaging community
            where students can collaborate to drive meaningful change while gaining
            hands-on experience in community service and nonprofit leadership.
          </p>
          <p className="team-member-bio">
            Fun fact: I am a huge foodie and love trying fun restaurants with my family
            and friends!
          </p>
        </div>
      
        <div className="team-member">
          <div className="team-member-photo">
            <img
              src="/cerie.png"
              alt="Cerie"
              className="team-member-img"
            />
          </div>
          <div className="team-member-name">Cerie</div>
          <div className="team-member-role">Social Media Manager</div>
          <p className="team-member-bio">
            Sunnyvale, CA
          </p>
          <p className="team-member-bio">
            My favorite part about EE is being part of a community of people who take
            action and make change for causes they are passionate about. Every meeting
            is super fun, and putting together donation kits is genuinely relaxing
            while knowing we are helping others.
          </p>
          <p className="team-member-bio">
            My main goal at EE is to raise awareness about homelessness and encourage
            people to contribute, whether through volunteering with us or making
            donations to give back to the community.
          </p>
          <p className="team-member-bio">
            Fun fact: I may come across as really quiet, but once you get to know me, I
            open up a lot.
          </p>
        </div>
      
        <div className="team-member">
          <div className="team-member-photo">
            <img
              src="/riya.png"
              alt="Riya Rajakumar"
              className="team-member-img"
            />
          </div>
          <div className="team-member-name">Riya Rajakumar</div>
          <div className="team-member-role">Secretary</div>
          <p className="team-member-bio">
            My favorite part about EE is the little community that we built within the
            nonprofit, as well as the impact I can make toward feminine hygiene in our
            community.
          </p>
          <p className="team-member-bio">
            My main goal at EE is to expand access to feminine hygiene products
            specifically and bring awareness to the menstrual product crisis that many
            unhoused and underprivileged women face.
          </p>
          <p className="team-member-bio">
            Fun fact: I love to sing and write in my free time.
          </p>
        </div>
      </div>
      </section>

      {/* Footer */}
      <footer className="footer light-footer">
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
