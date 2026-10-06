import React from 'react';
import './NextGenAcademy.css';

export const NextGenAcademy: React.FC = () => {
  const programmes = [
    {
      title: 'Automation Testing with Selenium',
      tag: 'UI Test Automation',
      desc: 'Industry-standard Selenium WebDriver with Java, dynamic locator strategies, Page Object Model design, TestNG assertions, and execution reporting.',
      focus: ['WebDriver API', 'Page Object Model', 'Hybrid Frameworks', 'TestNG'],
    },
    {
      title: 'API Testing with Postman',
      tag: 'Backend Verification',
      desc: 'Contract validation, request chaining, environment & global variables, automated test scripting in JavaScript, collection runners, and Newman CLI integration.',
      focus: ['REST Endpoints', 'Pre-request Scripts', 'Automated Assertions', 'Newman'],
    },
    {
      title: 'Performance Testing using JMeter',
      tag: 'Enterprise Load Profiling',
      desc: 'Simulating concurrent virtual users, thread group tuning, throughput timers, performance metrics (latency, 90th percentile), and bottleneck diagnosis.',
      focus: ['Thread Groups', 'Response Time Analysis', 'Stress Testing', 'Bottlenecks'],
    },
    {
      title: 'Programming for Test Engineers',
      tag: 'Foundational Rigor',
      desc: 'Core Java programming designed specifically for software QA engineers: collections framework, OOP principles, exception handling, and algorithmic problem solving.',
      focus: ['Core Java', 'OOP Principles', 'Collections Framework', 'Algorithmic Logic'],
    },
  ];

  return (
    <section className="section" id="nextgen-academy">
      <div className="container">
        <div className="section-header-center">
          <span className="eyebrow">Industry-Academia Initiative</span>
          <h2 className="section-title">Founder — NextGen Testing Academy</h2>
          <p className="section-desc">
            An industry-focused training initiative designed to bridge the gap between academic learning 
            and industry expectations through practical, project-based training programmes.
          </p>
        </div>

        {/* Academy Mission Banner */}
        <div className="academy-mission-card">
          <div className="mission-content">
            <span className="mission-tag">Mission & Core Purpose</span>
            <h3 className="mission-title">
              Equipping Tomorrow's Software Engineers with Enterprise-Grade Quality Practices
            </h3>
            <p className="mission-desc">
              NextGen Testing Academy was established by Rahul Kamat as a direct response to a recurring industry challenge:
              graduating computer science students understand theoretical computer science, yet frequently lack the practical,
              hands-on automated verification and testing skills required from Day 1 in high-performing engineering teams.
            </p>
          </div>
          <div className="mission-badges-col">
            <div className="mission-badge-box">
              <span className="m-badge-title">Project-Based Learning</span>
              <span className="m-badge-desc">Live coding exercises matching enterprise project standards</span>
            </div>
            <div className="mission-badge-box">
              <span className="m-badge-title">Direct Mentorship</span>
              <span className="m-badge-desc">Guided directly by a 17-year QA Leader & IIM Calcutta alumnus</span>
            </div>
          </div>
        </div>

        {/* 4 Programmes Offered */}
        <div className="programmes-grid">
          {programmes.map((prog, idx) => (
            <div key={idx} className="programme-card">
              <div className="programme-top">
                <span className="prog-tag">{prog.tag}</span>
                <span className="prog-num">0{idx + 1}</span>
              </div>
              <h3 className="programme-title">{prog.title}</h3>
              <p className="programme-desc">{prog.desc}</p>
              
              <div className="programme-focus-pills">
                {prog.focus.map((f, i) => (
                  <span key={i} className="focus-pill">{f}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Student & Faculty Synergy note */}
        <div className="academy-synergy-note">
          <p>
            <strong>Evidence of Educational Dedication:</strong> NextGen Testing Academy embodies Rahul's continuous
            commitment to practical technology education—providing colleges and corporate teams with battle-tested pedagogical
            frameworks ready for immediate deployment.
          </p>
        </div>
      </div>
    </section>
  );
};
