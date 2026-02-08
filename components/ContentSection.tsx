'use client';

export default function ContentSection() {
  return (
    <section className="content-section">
      <div className="content-grid">
        <div className="content-text">
          <h2>Streamline Your Institution</h2>
          <p>
            Nexora provides an integrated platform that simplifies academic operations and enhances the learning experience for students, faculty, and administrators.
          </p>
          <ul className="content-list">
            <li>Automated enrollment and registration processes</li>
            <li>Real-time performance tracking and analytics</li>
            <li>Integrated communication tools for collaboration</li>
            <li>Customizable workflows and automation</li>
            <li>24/7 customer support and resources</li>
          </ul>
          <button className="btn btn-primary">Explore Features</button>
        </div>
        <div className="content-image">
          <img src="/nexora-marketing/assets/images/Image_02.avif" alt="Streamlined Operations" />
        </div>
      </div>
    </section>
  );
}
