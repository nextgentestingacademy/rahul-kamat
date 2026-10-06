import React from 'react';
import { PROFILE_INFO, NAV_ITEMS } from '../data/profileData';
import {
  GraduationCap,
  Mail,
  Phone,
  Download,
  ArrowUp,
  MapPin,
} from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-content-grid">
        {/* Brand & Mission Column */}
        <div className="footer-brand-col">
          <div className="footer-brand-header">
            <div className="brand-mark-footer" aria-hidden="true">
              <GraduationCap size={22} />
            </div>
            <div>
              <span className="footer-name">{PROFILE_INFO.name}</span>
              <span className="footer-subtitle">Technology Educator • Industry Leader</span>
            </div>
          </div>
          <p className="footer-bio">
            17+ years of software engineering & test automation leadership across global financial institutions
            (J.P. Morgan, Bank of America, Travelex, Infosys, Inadev). Visiting Faculty at St. Xavier's College, Mumbai.
            IIM Calcutta Alumni.
          </p>
          <div className="footer-loc">
            <MapPin size={15} />
            <span>Based in Mumbai, Maharashtra, India</span>
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="footer-links-col">
          <h4 className="footer-heading">Academic & Industry Navigation</h4>
          <ul className="footer-links-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="footer-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Direct Connect & Document Column */}
        <div className="footer-action-col">
          <h4 className="footer-heading">Direct Connect</h4>
          <div className="footer-contact-links">
            <a href={`mailto:${PROFILE_INFO.email}`} className="footer-contact-item">
              <Mail size={16} />
              <span>{PROFILE_INFO.email}</span>
            </a>
            <a href={`tel:${PROFILE_INFO.phoneClean}`} className="footer-contact-item">
              <Phone size={16} />
              <span>{PROFILE_INFO.phone}</span>
            </a>
            <a
              href={PROFILE_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-item"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span>LinkedIn Profile</span>
            </a>
          </div>

          <div className="footer-doc-box">
            <span className="doc-box-title">Faculty Dossier</span>
            <a
              href={PROFILE_INFO.pdfPath}
              download="Rahul-Kamat-Faculty-Profile.pdf"
              className="btn btn-secondary btn-sm footer-doc-btn"
            >
              <Download size={14} />
              <span>Download Faculty Profile</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sub Footer */}
      <div className="container sub-footer">
        <p className="sub-footer-text">
          &copy; {new Date().getFullYear()} Rahul Abhay Kamat. All rights reserved. Strictly grounded in verified professional experience.
        </p>
        <button
          type="button"
          onClick={scrollToTop}
          className="back-to-top-btn"
          aria-label="Back to top of page"
        >
          <span>Back to top</span>
          <ArrowUp size={15} />
        </button>
      </div>
    </footer>
  );
};
