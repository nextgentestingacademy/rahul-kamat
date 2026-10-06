import React, { useState } from 'react';
import { PROFILE_INFO } from '../data/profileData';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Download,
  GraduationCap,
  Briefcase,
  CheckCircle2,
} from 'lucide-react';
import './Contact.css';

export const Contact: React.FC = () => {
  const initialFormData = {
    name: '',
    organisation: '',
    designation: '',
    email: '',
    phone: '',
    interestedIn: 'Visiting Faculty',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Engagement Enquiry: ${formData.interestedIn} - ${formData.organisation || formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Organisation / College: ${formData.organisation}\n` +
      `Designation: ${formData.designation}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Interested In: ${formData.interestedIn}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open user's default email client with structured enquiry
    window.location.href = `mailto:${PROFILE_INFO.email}?subject=${subject}&body=${body}`;
    
    // Set persistent confirmation banner and reset all fields
    setFormSubmitted(true);
    setFormData(initialFormData);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        {/* Dual Conversion Sections Header */}
        <div className="dual-cta-header-grid">
          {/* Academic Banner */}
          <div className="audience-cta-card card-academic">
            <div className="audience-tag">
              <GraduationCap size={16} />
              <span>For College Principals, Deans & HODs</span>
            </div>
            <h3 className="audience-heading">Looking for an Industry-Experienced IT Visiting Faculty?</h3>
            <p className="audience-copy">
              Available for Visiting Faculty roles across South Mumbai and Greater Mumbai colleges,
              as well as guest lectures, hands-on student workshops, and value-added skill development courses.
            </p>
            <div className="audience-actions">
              <a href="#enquiry-form" className="btn btn-primary btn-sm">
                <span>Invite for Faculty Discussion</span>
              </a>
              <a
                href={PROFILE_INFO.pdfPath}
                download="Rahul-Kamat-Faculty-Profile.pdf"
                className="btn btn-secondary btn-sm"
              >
                <Download size={14} />
                <span>Download Faculty Profile</span>
              </a>
            </div>
          </div>

          {/* Corporate Banner */}
          <div className="audience-cta-card card-corporate">
            <div className="audience-tag tag-accent">
              <Briefcase size={16} />
              <span>For Corporate L&D & Engineering Leaders</span>
            </div>
            <h3 className="audience-heading">Need Practical Technology Training for Your Team?</h3>
            <p className="audience-copy">
              Customised corporate training programs in Selenium Automation Frameworks, API Testing with Postman,
              and Performance Testing with JMeter tailored for fresh engineering batches and upskilling QA teams.
            </p>
            <div className="audience-actions">
              <a href="#enquiry-form" className="btn btn-accent btn-sm">
                <span>Discuss Corporate Training</span>
              </a>
              <a
                href={`mailto:${PROFILE_INFO.email}?subject=${encodeURIComponent('Corporate Training Enquiry - Engineering Team')}`}
                className="btn btn-secondary btn-sm"
              >
                <Mail size={14} />
                <span>Email Requirements</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information & Interactive Enquiry Form */}
        <div className="contact-main-grid" id="enquiry-form">
          {/* Left Column: Direct Contact Details */}
          <div className="contact-details-col">
            <span className="eyebrow">Get in Touch Directly</span>
            <h2 className="section-title">Direct Contact Information</h2>
            <p className="contact-intro">
              Feel free to call, email, or connect on LinkedIn to discuss semester availability,
              workshop dates, or tailored training engagements.
            </p>

            <div className="direct-contact-items">
              <a href={`mailto:${PROFILE_INFO.email}`} className="contact-item-card" aria-label="Email Rahul Kamat">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">Email Address</span>
                  <span className="contact-item-value">{PROFILE_INFO.email}</span>
                </div>
              </a>

              <a href={`tel:${PROFILE_INFO.phoneClean}`} className="contact-item-card" aria-label="Call Rahul Kamat">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">Phone / WhatsApp</span>
                  <span className="contact-item-value">{PROFILE_INFO.phone}</span>
                </div>
              </a>

              <a
                href={PROFILE_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item-card"
                aria-label="LinkedIn Profile of Rahul Kamat"
              >
                <div className="contact-icon-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">LinkedIn Profile</span>
                  <span className="contact-item-value">linkedin.com/in/rahul-kamat-85b9994a</span>
                </div>
              </a>

              <div className="contact-item-card card-static">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">Primary Location</span>
                  <span className="contact-item-value">Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>

            <div className="contact-download-box">
              <h4>Official Faculty Profile PDF</h4>
              <p>Download the comprehensive two-page faculty profile document for academic committee review.</p>
              <a
                href={PROFILE_INFO.pdfPath}
                download="Rahul-Kamat-Faculty-Profile.pdf"
                className="btn btn-secondary btn-sm"
              >
                <Download size={14} />
                <span>Download Faculty Profile (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accessible Enquiry Form */}
          <div className="contact-form-col">
            <div className="form-wrapper-card">
              <h3 className="form-title">Send an Engagement Enquiry</h3>
              <p className="form-subtitle">
                Please provide your institution or organisation details. Submissions open your default email client with a structured draft.
              </p>

              {formSubmitted && (
                <div className="form-success-banner" role="alert">
                  <CheckCircle2 size={20} className="success-icon" />
                  <div>
                    <strong>✓ Enquiry generated!</strong>
                    <span> Opening your email client to send the details. Form has been reset for new submissions.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="enquiry-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma / Jane Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="e.g. r.sharma@college.edu.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="organisation" className="form-label">
                      College / Organisation <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="organisation"
                      required
                      placeholder="e.g. St. Xavier's / Tech Corp"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="designation" className="form-label">
                      Designation
                    </label>
                    <input
                      type="text"
                      id="designation"
                      placeholder="e.g. Head of Department / L&D Lead"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="e.g. +91 98200 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="interestedIn" className="form-label">
                      Interested In <span className="req">*</span>
                    </label>
                    <select
                      id="interestedIn"
                      required
                      value={formData.interestedIn}
                      onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                      className="form-select"
                    >
                      <option value="Visiting Faculty">Visiting Faculty (Semester / Module)</option>
                      <option value="Guest Lecture">Guest Lecture (Focused Topic)</option>
                      <option value="Student Workshop">Student Technical Workshop</option>
                      <option value="Corporate Training">Corporate Training for Engineers</option>
                      <option value="Other">Other Enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message / Subject Requirements <span className="req">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Please mention the target student/engineer cohort, preferred subject or workshop topic, and tentative semester or training timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  <Send size={16} />
                  <span>Send Engagement Enquiry</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
