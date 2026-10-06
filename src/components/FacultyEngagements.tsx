import React from 'react';
import { ENGAGEMENT_MODELS } from '../data/profileData';
import {
  GraduationCap,
  Presentation,
  Wrench,
  Users,
  Compass,
  Award,
  ArrowRight,
} from 'lucide-react';
import './FacultyEngagements.css';

export const FacultyEngagements: React.FC = () => {
  const iconList = [GraduationCap, Presentation, Wrench, Users, Compass, Award];

  return (
    <section className="section section-alt" id="faculty-engagements">
      <div className="container">
        <div className="section-header-center">
          <span className="eyebrow">Institutional Collaboration</span>
          <h2 className="section-title">Faculty Engagement Models</h2>
          <p className="section-desc">
            Flexible academic collaboration models tailored for colleges, universities, and autonomous
            institutions across Mumbai and beyond.
          </p>
        </div>

        <div className="engagements-grid">
          {ENGAGEMENT_MODELS.map((model, idx) => {
            const Icon = iconList[idx] || GraduationCap;
            return (
              <div key={idx} className="engagement-card">
                <div className="engagement-top">
                  <div className="engagement-icon-box">
                    <Icon size={22} />
                  </div>
                  <span className="badge badge-navy">{model.badge}</span>
                </div>

                <h3 className="engagement-title">{model.title}</h3>
                <p className="engagement-desc">{model.desc}</p>

                <div className="engagement-targets">
                  <span className="target-label">Relevant Scope:</span>
                  <div className="target-tags">
                    {model.targets.map((tgt, i) => (
                      <span key={i} className="target-tag">{tgt}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="engagements-cta-box">
          <div className="cta-box-text">
            <h4>Planning Upcoming Semester Faculty Allocations or Department Seminars?</h4>
            <p>Connect to discuss syllabus alignment, credit modules, or customized technical workshops for your students.</p>
          </div>
          <a href="#contact" className="btn btn-primary">
            <span>Initiate Faculty Discussion</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
