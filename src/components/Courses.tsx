import React, { useState } from 'react';
import { COURSES_CATALOG } from '../data/profileData';
import {
  Code,
  Binary,
  CheckCircle,
  PlayCircle,
  Activity,
  GitBranch,
} from 'lucide-react';
import './Courses.css';

export const Courses: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categoryIcons = [Binary, Code, CheckCircle, PlayCircle, Activity, GitBranch];

  return (
    <section className="section" id="subjects">
      <div className="container">
        <div className="section-header-center">
          <span className="eyebrow">Academic & Technical Curriculum</span>
          <h2 className="section-title">Subjects & Courses I Can Teach</h2>
          <p className="section-desc">
            Organised across two core pillars: <strong>Computer Science Foundations</strong> (for semester university courses) 
            and <strong>Enterprise QA & Automation</strong> (for hands-on technical workshops & practical electives).
          </p>
          <div className="curriculum-dual-focus-tags" style={{ display: 'flex', gap: '10px', marginTop: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span className="badge badge-navy" style={{ padding: '6px 14px', fontSize: '0.8125rem' }}>
              Academic Core: Data Structures, Algorithms & Java
            </span>
            <span className="badge badge-accent" style={{ padding: '6px 14px', fontSize: '0.8125rem' }}>
              Industry Core: Selenium, Cypress, Postman, JMeter & QA
            </span>
          </div>
        </div>

        {/* Category Tabs for Desktop & Mobile */}
        <div className="course-tabs-container" role="tablist" aria-label="Course Categories">
          {COURSES_CATALOG.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Code;
            const isActive = activeCategory === idx;
            return (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`course-panel-${idx}`}
                id={`course-tab-${idx}`}
                className={`course-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(idx)}
              >
                <Icon size={18} className="tab-icon" />
                <span className="tab-label">{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div
          className="active-category-panel"
          id={`course-panel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`course-tab-${activeCategory}`}
        >
          <div className="category-panel-header">
            <div>
              <h3 className="category-panel-title">{COURSES_CATALOG[activeCategory].category}</h3>
              <p className="category-panel-subtitle">{COURSES_CATALOG[activeCategory].subtitle}</p>
            </div>
            <span className="badge badge-navy">
              {COURSES_CATALOG[activeCategory].topics.length} Core Modules
            </span>
          </div>

          <div className="topics-detail-grid">
            {COURSES_CATALOG[activeCategory].topics.map((t, idx) => (
              <div key={idx} className="topic-card">
                <div className="topic-card-header">
                  <span className="topic-card-num">0{idx + 1}</span>
                  <h4 className="topic-card-title">{t.name}</h4>
                </div>
                <p className="topic-card-desc">{t.desc}</p>
                <div className="topic-card-footer">
                  <span className="topic-tag">Theory + Lab Practice</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-disciplinary Summary Matrix */}
        <div className="curriculum-footer-note">
          <p>
            <strong>University Syllabus Alignment:</strong> All subjects can be aligned with 
            <strong> University of Mumbai</strong>, autonomous college frameworks, or corporate training roadmaps. 
            Detailed syllabus drafts, lecture session breakdowns, and lab programming assignments are available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};
