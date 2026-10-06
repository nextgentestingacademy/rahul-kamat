import React from 'react';
import { WORKED_COMPANIES } from '../data/profileData';
import {
  Building2,
  Calendar,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import './IndustryExperience.css';

export const IndustryExperience: React.FC = () => {
  return (
    <section className="section section-alt" id="industry-experience">
      <div className="container">
        <div className="section-header-center">
          <span className="eyebrow">Enterprise Track Record</span>
          <h2 className="section-title">17+ Years Industry Experience</h2>
          <p className="section-desc">
            "I teach these technologies because I have designed, engineered, and led them in real enterprise banking
            and high-scale financial technology environments."
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          {WORKED_COMPANIES.map((job, idx) => (
            <div key={idx} className="timeline-item">
              {/* Timeline Marker */}
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {idx !== WORKED_COMPANIES.length - 1 && <div className="marker-line"></div>}
              </div>

              {/* Timeline Card */}
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <span className="job-role">{job.role}</span>
                    <h3 className="job-company">
                      <Building2 size={18} className="company-icon" />
                      {job.name}
                    </h3>
                  </div>

                  <div className="job-meta">
                    <span className="job-period">
                      <Calendar size={14} />
                      {job.period}
                    </span>
                    <span className="job-loc">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                  </div>
                </div>

                <p className="job-summary">{job.summary}</p>

                <div className="job-badge-footer">
                  <ShieldCheck size={15} className="footer-icon" />
                  <span>{job.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Reinforcement Callout */}
        <div className="industry-quote-box">
          <p>
            <strong>The Educator's Advantage:</strong> Rather than teaching abstract exercises from outdated textbooks,
            Rahul draws from real incidents, live enterprise architecture decisions, and real production quality gates
            tested over nearly two decades across institutions like J.P. Morgan and Bank of America.
          </p>
        </div>
      </div>
    </section>
  );
};
