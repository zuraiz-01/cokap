function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-container footer-grid">
        <section>
          <a href="#" className="brand footer-brand">
            <span className="brand-dot" />
            cakap
          </a>
          <p>Learn language, build confidence, and communicate globally.</p>
          <ul className="footer-social">
            <li>fb</li>
            <li>ig</li>
            <li>yt</li>
          </ul>
        </section>

        <section>
          <h4>Office</h4>
          <ul>
            <li>JAKARTA</li>
            <li>Indonesia</li>
            <li>+62 812 8900 777</li>
            <li>contact@cakap.com</li>
          </ul>
        </section>

        <section>
          <h4>List Program</h4>
          <ul>
            <li>Private Class</li>
            <li>Group Class</li>
            <li>Corporate Class</li>
            <li>Online Webinar</li>
          </ul>
        </section>

        <section>
          <h4>Information</h4>
          <ul>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </section>
      </div>
    </footer>
  )
}

export default SiteFooter
