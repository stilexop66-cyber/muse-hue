import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>MUSE & HUE</h2>
          <p>UNISEX SALON</p>
        </div>

        {/* Pages */}
        <div className="footer-column">
          <h3>Pages</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Services</h3>
          <span>Hair</span>
          <span>Beard</span>
          <span>Skin</span>
          <span>Makeup</span>
          <span>Nail</span>
          <span>Waxing</span>
          <span>Threading</span>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Join a Newsletter</h3>
          <label htmlFor="newsletter-email">Your Email</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter Your Email"
          />
          <button type="button">Know More</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 muse&hue. All rights reserved.</p>
        <p>Designed by Createdge</p>
      </div>

      <div className="footer-big-text">MUSE & HUE</div>
    </footer>
  );
}