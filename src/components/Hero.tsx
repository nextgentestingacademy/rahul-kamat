import React, { useState } from 'react';
import { PROFILE_INFO, CREDIBILITY_METRICS } from '../data/profileData';
import {
  GraduationCap,
  Briefcase,
  Download,
  MapPin,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(true);

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-content-grid">
        {/* Left Column: Positioning & Copy */}
        <div className="hero-text-col">
          <div className="hero-badges-row">
            <span className="eyebrow">
              <GraduationCap size={13} />
              Technology Educator & IT Visiting Faculty
            </span>
            <span className="eyebrow eyebrow-gold">
              IIM Calcutta Alumnus
            </span>
          </div>

          <h1 className="hero-name">{PROFILE_INFO.name}</h1>

          <p className="hero-positioning-tagline">
            Industry Experience. Academic Teaching. Practical Technology Learning.
          </p>

          <p className="hero-lead-description">
            17+ years of software engineering and QA leadership across global financial institutions
            (including J.P. Morgan & Bank of America), with hands-on academic teaching as <strong>Visiting Faculty at St. Xavier's College, Mumbai</strong> teaching
            Data Structures and Algorithms in Java, Art of Programming, and Vibe Coding using AI. Available for Visiting Faculty roles across Mumbai colleges and practical corporate technical training.
          </p>

          {/* Quick Credibility Badges */}
          <div className="hero-pills">
            <div className="hero-pill">
              <MapPin size={13} className="pill-icon" />
              <span>Mumbai, India</span>
            </div>
            <div className="hero-pill">
              <CheckCircle2 size={13} className="pill-icon" />
              <span>Visiting Faculty — St. Xavier's College, Mumbai</span>
            </div>
            <div className="hero-pill">
              <Building2 size={13} className="pill-icon" />
              <span>J.P. Morgan & Bank of America Pedigree</span>
            </div>
          </div>

          {/* Primary Action CTAs */}
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary hero-btn-main">
              <GraduationCap size={17} />
              <span>Invite Me as Visiting Faculty</span>
            </a>
            <a href="#corporate-training" className="btn btn-secondary">
              <Briefcase size={16} />
              <span>Explore Training Programmes</span>
            </a>
            <a
              href={PROFILE_INFO.pdfPath}
              download="Rahul-Kamat-Faculty-Profile.pdf"
              className="btn btn-secondary btn-download"
              title="Download Rahul Kamat IT Faculty Profile PDF"
            >
              <Download size={15} />
              <span>Download Faculty Profile</span>
            </a>
          </div>

          {/* Micro Institutional Trust Footer */}
          <div className="hero-trust-strip">
            <span className="trust-label">Industry & Academic Heritage:</span>
            <div className="trust-logos-row">
              <span className="trust-badge">St. Xavier's College</span>
              <span className="trust-badge">IIM Calcutta</span>
              <span className="trust-badge">J.P. Morgan</span>
              <span className="trust-badge">Bank of America</span>
              <span className="trust-badge">Travelex</span>
              <span className="trust-badge">Infosys</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Portrait Presentation */}
        <div className="hero-visual-col">
          <div className="portrait-card-wrapper">
            <div className="portrait-frame">
              {imgLoaded ? (
                <img
                  src="/Rahul_Profile_Pic.jpeg"
                  alt="Rahul Abhay Kamat - Technology Educator and IT Visiting Faculty"
                  className="portrait-image"
                  onError={() => setImgLoaded(false)}
                />
              ) : (
                <div className="portrait-fallback">
                  <div className="fallback-monogram">RK</div>
                  <div className="fallback-details">
                    <span className="fallback-title">Rahul Abhay Kamat</span>
                    <span className="fallback-subtitle">Technology Educator & QA Leader</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Summary Card Underneath (Clean typography, no giant circles) */}
            <div className="portrait-caption-box">
              <div className="caption-item">
                <span className="caption-metric">17+ Years</span>
                <span className="caption-desc">Software Engineering & QA Leadership</span>
              </div>
              <div className="caption-separator" aria-hidden="true"></div>
              <div className="caption-item">
                <span className="caption-metric">Visiting Faculty</span>
                <span className="caption-desc">St. Xavier's College (M.Sc. & B.Sc. IT)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Credibility Strip */}
      <div className="hero-metrics-bar">
        <div className="container metrics-grid">
          {CREDIBILITY_METRICS.map((metric, idx) => (
            <div key={idx} className="metric-box">
              <span className="metric-value">{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
              <span className="metric-detail">{metric.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
