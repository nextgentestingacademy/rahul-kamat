import React from 'react';
import { CORPORATE_TRAINING_MODULES, CORPORATE_IMPACT_POINTS } from '../data/profileData';
import {
  Briefcase,
  Building2,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import './CorporateTraining.css';

export const CorporateTraining: React.FC = () => {
  return (
    <section className="section section-alt" id="corporate-training">
      <div className="container">
        <div className="section-header-center">
          <span className="eyebrow eyebrow-gold">Corporate Technical Training</span>
          <h2 className="section-title">Practical Technology Training for Engineering Teams</h2>
          <p className="section-desc">
            Technical training programmes and mentoring sessions delivered for software engineers, QA professionals,
            and automation specialists across tier-1 financial institutions.
          </p>
        </div>

        {/* Global Financial Institutions Served Banner */}
        <div className="corp-pedigree-card">
          <div className="pedigree-content">
            <span className="pedigree-label">Corporate Training & Mentoring Heritage</span>
            <h3 className="pedigree-title">
              Delivered Technical Upskilling for Professionals at Global Financial Institutions
            </h3>
            <p className="pedigree-desc">
              Trained both fresh engineers straight out of campus and experienced QA professionals transitioning
              from manual testing into high-velocity automated testing, framework architecture, and load profiling roles.
            </p>
            <div className="pedigree-orgs-pills">
              <span className="corp-org-pill">
                <Building2 size={16} /> J.P. Morgan
              </span>
              <span className="corp-org-pill">
                <Building2 size={16} /> Bank of America
              </span>
              <span className="corp-org-pill">
                <Building2 size={16} /> Travelex
              </span>
            </div>
          </div>
          <div className="pedigree-impact-box">
            <span className="pedigree-impact-title">
              <TrendingUp size={15} /> Demonstrated Organizational Impact:
            </span>
            <div className="pedigree-impact-list">
              {CORPORATE_IMPACT_POINTS.map((impact, i) => (
                <div key={i} className="impact-bullet-item">
                  <CheckCircle2 size={14} className="impact-icon" />
                  <span>{impact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Training Modules Grid */}
        <div className="corp-modules-grid">
          {CORPORATE_TRAINING_MODULES.map((module, idx) => (
            <div key={idx} className="corp-module-card">
              <div className="module-card-top">
                <span className="module-num">0{idx + 1}</span>
                <span className="badge badge-accent">Enterprise Curriculum</span>
              </div>
              <h3 className="module-title">{module.title}</h3>
              <p className="module-desc">{module.desc}</p>
              <div className="module-benefits">
                <div className="benefit-item">
                  <CheckCircle2 size={15} className="benefit-check" />
                  <span>Hands-on lab coding & live debugging</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle2 size={15} className="benefit-check" />
                  <span>Real enterprise application scenarios</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Conversion CTA Box */}
        <div className="corp-cta-banner">
          <div className="corp-cta-text">
            <h3 className="corp-cta-headline">Need Practical Technology Training for Your Team?</h3>
            <p className="corp-cta-sub">
              Whether you are onboarding an engineering cohort, transitioning manual QA specialists into automation engineers,
              or establishing robust API and performance test engineering benchmarks, discuss custom training tailored to your tech stack.
            </p>
          </div>
          <div className="corp-cta-button-wrap">
            <a href="#contact" className="btn btn-primary btn-corp-cta">
              <Briefcase size={18} />
              <span>Discuss Corporate Training</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
