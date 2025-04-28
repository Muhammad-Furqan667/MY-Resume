export default function ContactMe() {
  return (
    <div className="contact-me">
      <p className="section-label">-Contact us</p>
      <h1>Lets connect together</h1>
      <p className="description">
        Got a project in mind or want to connect? I'd love to connect with you,
        share new idea and work together as a partner
      </p>
      <div className="contact-details">
        <ContentInfo>
          <span className="icon">✉️</span>
          <p>muhammadfurqan3624515@gmail.com</p>
        </ContentInfo>
        <ContentInfo>
          <span className="icon">📞</span>
          <p>+92 327 5281941</p>
        </ContentInfo>
        <ContentInfo>
          <a
            href="https://www.linkedin.com/in/muhammad-furqan-b555362a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="social-link"
          >
            <img
              src="/images/linkdin.png"
              alt="LinkedIn"
              className="social-icon"
            />
            Muhammad Furqan
          </a>
        </ContentInfo>
        <ContentInfo>
          <a
            href="https://github.com/Muhammad-Furqan667"
            className="social-link"
          >
            <img src="/images/git.png" alt="GitHub" className="social-icon" />
            Muhammad-Furqan667
          </a>
        </ContentInfo>
        <ContentInfo>
          <a
            href="https://www.instagram.com/furqan_awan236?igsh=azF2dW1ocThtN242"
            className="social-link"
          >
            <img
              src="/images/insta.png"
              alt="Instagram"
              className="social-icon"
            />
            Furqan Awan236
          </a>
        </ContentInfo>
        <ContentInfo>
          <span className="icon">📍</span>
          <p>Khanpur, KPK, Pakistan</p>
        </ContentInfo>
      </div>
    </div>
  );
}
function ContentInfo({ className = "", children }) {
  return <div className={`contact-item ${className}`}>{children}</div>;
}
