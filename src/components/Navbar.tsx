import React, { useState, useEffect } from 'react';
import { ALL_NAV_ITEMS, DESKTOP_NAV_ITEMS, PROFILE_INFO } from '../data/profileData';
import { Menu, X, ArrowUpRight, GraduationCap } from 'lucide-react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sections = DESKTOP_NAV_ITEMS.map(item => document.querySelector(item.href));
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && (sec as HTMLElement).offsetTop <= scrollPos) {
          setActiveHash(DESKTOP_NAV_ITEMS[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        {/* Brand Block */}
        <a href="#" className="brand" aria-label="Rahul Abhay Kamat - Home">
          <div className="brand-mark" aria-hidden="true">
            <GraduationCap size={18} className="brand-icon" />
          </div>
          <div className="brand-text">
            <span className="brand-name">{PROFILE_INFO.name}</span>
            <span className="brand-tagline">Technology Educator · IT Professional</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {DESKTOP_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`nav-link ${activeHash === item.href ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header CTA & Mobile Toggle */}
        <div className="header-actions">
          <a href="#contact" className="btn btn-primary btn-sm nav-cta">
            <span>Invite Me</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <span className="mobile-brand">{PROFILE_INFO.name}</span>
              <button
                type="button"
                className="mobile-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav aria-label="Mobile Navigation">
              <ul className="mobile-nav-list">
                {ALL_NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="mobile-nav-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mobile-menu-footer">
              <a
                href="#contact"
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Invite as Visiting Faculty</span>
                <ArrowUpRight size={15} />
              </a>
              <a
                href="#corporate-training"
                className="btn btn-secondary"
                style={{ width: '100%', marginTop: '8px' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Corporate Training</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
