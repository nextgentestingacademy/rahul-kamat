import React from 'react';
import { ACADEMIC_TEACHING_AREAS, PHILOSOPHY_PRINCIPLES } from '../data/profileData';
import {
  BookCheck,
} from 'lucide-react';
import './AcademicTeaching.css';

export const AcademicTeaching: React.FC = () => {
  return (
    <section className="section" id="academic-teaching">
      <div className="container">
        <div className="section-header-center">
          <span className="eyebrow">Classroom Pedagogy & Higher Academia</span>
          <h2 className="section-title">Academic Teaching Experience</h2>
          <p className="section-desc">
            Direct faculty appointments delivering core algorithmic rigor, disciplined programming foundations,
            and modern AI-assisted engineering practices at premier autonomous institutions.
          </p>
        </div>

        {/* 3 Core Academic Teaching Areas from Latest Profile */}
        <div className="academic-areas-stack">
          {ACADEMIC_TEACHING_AREAS.map((area, idx) => (
            <div key={idx} className="academic-area-card">
              <div className="academic-area-header">
                <div className="area-badges-row">
                  <span className="badge badge-navy">{area.badge}</span>
                  <span className="badge badge-gold">Active Engagement</span>
                  <span className="badge badge-accent">South Mumbai</span>
                </div>
                <h3 className="academic-area-institution">{area.institution}</h3>
                <div className="academic-area-title-wrap">
                  <span className="academic-area-subject">{area.subject}</span>
                  <span className="academic-area-level">({area.level})</span>
                </div>
                <p className="academic-area-summary">{area.summary}</p>
              </div>

              <div className="academic-area-body">
                <h4 className="area-curriculum-heading">
                  <BookCheck size={18} className="area-curriculum-icon" />
                  Key Curriculum & Pedagogical Focus:
                </h4>
                <div className="area-topics-grid">
                  {area.topics.map((topic, tIdx) => (
                    <div key={tIdx} className="area-topic-item">
                      <span className="topic-check-bullet">&bull;</span>
                      <span className="topic-text">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Redesigned Teaching Philosophy: 3 Principles (Clean typography, no giant circular numbers) */}
        <div className="teaching-philosophy-card" id="teaching-philosophy">
          <div className="philosophy-header-block">
            <span className="philosophy-eyebrow">Instructional Approach</span>
            <h3 className="philosophy-headline">
              &ldquo;Technology is easier to learn when students understand why it matters.&rdquo;
            </h3>
            <p className="philosophy-subtitle">
              Three foundational principles bridging theoretical computer science with enterprise engineering reality:
            </p>
          </div>

          <div className="philosophy-principles-grid">
            {PHILOSOPHY_PRINCIPLES.map((principle, idx) => (
              <div key={idx} className="philosophy-principle-box">
                <div className="principle-top">
                  <span className="principle-tag">Principle 0{idx + 1}</span>
                  <h4 className="principle-title">{principle.title}</h4>
                </div>
                <p className="principle-desc">{principle.desc}</p>
              </div>
            ))}
          </div>

          <div className="philosophy-footer-note">
            <div className="philosophy-flow-badge">
              <span>Concept Clarity</span>
              <span className="flow-arrow">&rarr;</span>
              <span>Real-World Context</span>
              <span className="flow-arrow">&rarr;</span>
              <span>Code Construction</span>
              <span className="flow-arrow">&rarr;</span>
              <span>Engineering Verification</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
