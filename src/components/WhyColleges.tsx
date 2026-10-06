import React from 'react';
import { TEACHING_PILLARS } from '../data/profileData';
import {
  Compass,
  Code2,
  GitBranch,
  Target,
  ArrowRight,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import './WhyColleges.css';

export const WhyColleges: React.FC = () => {
  const iconList = [Compass, Code2, GitBranch, Target];

  return (
    <section className="section section-alt" id="why-colleges">
      <div className="container">
        <div className="section-header-center">
          <span className="eyebrow">Academic Value Proposition</span>
          <h2 className="section-title">Bringing Industry Experience Into the Classroom</h2>
          <p className="section-desc">
            Colleges and universities in Mumbai need faculty who understand both university syllabus rigor 
            and modern enterprise engineering practices. Here is why academic institutions collaborate with Rahul.
          </p>
        </div>

        <div className="pillars-grid">
          {TEACHING_PILLARS.map((pillar, idx) => {
            const Icon = iconList[idx] || Sparkles;
            return (
              <div key={idx} className="pillar-card">
                <div className="pillar-header">
                  <div className="pillar-icon-box">
                    <Icon size={24} />
                  </div>
                  <span className="pillar-num">0{idx + 1}</span>
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Institution Decision-Maker Callout Banner */}
        <div className="college-callout-banner">
          <div className="callout-content">
            <div className="callout-eyebrow">
              <GraduationCap size={16} />
              <span>For Principals, HODs, Deans & Placement Directors</span>
            </div>
            <h3 className="callout-headline">
              Elevate Your Computer Science & IT Students Beyond Textbook Definitions
            </h3>
            <p className="callout-sub">
              Available for Visiting Faculty roles across South Mumbai and Greater Mumbai institutions,
              as well as high-impact guest lectures, curriculum alignment sessions, and student skill workshops.
            </p>
          </div>
          <div className="callout-action">
            <a href="#contact" className="btn btn-primary">
              <span>Discuss Faculty Engagement</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
