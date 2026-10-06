import React from 'react';
import {
  GraduationCap,
  Building,
  Terminal,
  BookOpen,
  ShieldCheck,
  Layers,
  Sparkles,
} from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Narrative */}
          <div className="about-narrative">
            <span className="eyebrow">Professional Profile</span>
            <h2 className="section-title">
              Bridging Enterprise Software Engineering & Academic Classroom Learning
            </h2>

            <p className="about-lead">
              Rahul Abhay Kamat brings <strong>17 years of enterprise industry experience</strong> in 
              Software Engineering, Quality Assurance, Test Automation, and Technology Leadership
              across tier-1 global financial institutions into undergraduate and postgraduate academic curricula.
            </p>

            <p className="about-body">
              Having led QA strategies, automated mission-critical banking platforms (including SWIFT payment engines),
              and designed enterprise automation frameworks at institutions like <strong>J.P. Morgan</strong>, 
              <strong> Bank of America</strong>, <strong>Travelex</strong>, <strong>Infosys</strong>, and 
              <strong> Inadev</strong>, Rahul translates real-world system complexities into structured, intuitive learning for students.
            </p>

            <p className="about-body">
              An alumnus of the prestigious <strong>Indian Institute of Management Calcutta (IIM Calcutta)</strong> 
              with a Bachelor of Science in Information Technology from the <strong>University of Mumbai</strong>, 
              he currently serves as <strong>Visiting Faculty at St. Xavier’s College (Autonomous), Mumbai</strong>, teaching 
              Data Structures and Algorithms using Java (M.Sc. IT), Art of Programming (F.Y. B.Sc. IT), and Vibe Coding using AI, alongside leading the 
              <strong> NextGen Testing Academy</strong>.
            </p>

            <div className="about-highlights-list">
              <div className="highlight-row">
                <ShieldCheck size={20} className="highlight-icon" />
                <div>
                  <strong>Global Financial Technology Pedigree</strong>
                  <span>Extensive exposure to high-volume transaction processing, financial compliance, and resilient software design.</span>
                </div>
              </div>

              <div className="highlight-row">
                <BookOpen size={20} className="highlight-icon" />
                <div>
                  <strong>M.Sc. IT Curriculum Delivery at St. Xavier's College</strong>
                  <span>Active classroom teaching experience translating academic algorithm syllabi into practical Java implementations.</span>
                </div>
              </div>

              <div className="highlight-row">
                <Terminal size={20} className="highlight-icon" />
                <div>
                  <strong>Hands-on Tool & Framework Expertise</strong>
                  <span>Deep mastery of Java, Selenium, Cypress, Postman, JMeter, Jenkins, Git, and automated testing architectures.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Strategic Dimension Cards */}
          <div className="about-cards-col">
            <div className="profile-dimension-card">
              <div className="dimension-icon-wrap icon-blue">
                <Building size={24} />
              </div>
              <div className="dimension-content">
                <span className="dimension-sub">17+ Years Industry</span>
                <h3 className="dimension-title">Banking & Financial Tech</h3>
                <p className="dimension-desc">
                  Led QA initiatives, automation transformation, and payment systems for J.P. Morgan, Bank of America, Travelex, and Inadev.
                </p>
              </div>
            </div>

            <div className="profile-dimension-card">
              <div className="dimension-icon-wrap icon-indigo">
                <GraduationCap size={24} />
              </div>
              <div className="dimension-content">
                <span className="dimension-sub">Academic Teaching</span>
                <h3 className="dimension-title">IT & Computer Science Faculty</h3>
                <p className="dimension-desc">
                  Visiting Faculty at St. Xavier’s College, Mumbai. Guides M.Sc. IT scholars through rigorous algorithmic analysis and data structure construction.
                </p>
              </div>
            </div>

            <div className="profile-dimension-card">
              <div className="dimension-icon-wrap icon-cyan">
                <Layers size={24} />
              </div>
              <div className="dimension-content">
                <span className="dimension-sub">Corporate Upskilling</span>
                <h3 className="dimension-title">Technical Corporate Trainer</h3>
                <p className="dimension-desc">
                  Mentored and trained fresh engineering recruits and senior QA engineers at J.P. Morgan, Bank of America, and Travelex in automation frameworks.
                </p>
              </div>
            </div>

            <div className="profile-dimension-card">
              <div className="dimension-icon-wrap icon-amber">
                <Sparkles size={24} />
              </div>
              <div className="dimension-content">
                <span className="dimension-sub">Academic Pedigree</span>
                <h3 className="dimension-title">IIM Calcutta Alumnus</h3>
                <p className="dimension-desc">
                  Post Graduate Diploma in Finance from IIM Calcutta and B.Sc. IT from University of Mumbai, uniting technical precision with strategic thinking.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Storytelling Flow: Industry -> Teaching -> Skills */}
        <div className="journey-flow-banner">
          <div className="flow-step">
            <span className="flow-num">01</span>
            <span className="flow-title">17+ Years Enterprise Industry</span>
            <span className="flow-sub">Enterprise banking, FinTech & QA Leadership</span>
          </div>
          <div className="flow-arrow" aria-hidden="true">&rarr;</div>
          <div className="flow-step">
            <span className="flow-num">02</span>
            <span className="flow-title">Deep Technology Mastery</span>
            <span className="flow-sub">Java, Algorithms, Selenium, Postman & JMeter</span>
          </div>
          <div className="flow-arrow" aria-hidden="true">&rarr;</div>
          <div className="flow-step">
            <span className="flow-num">03</span>
            <span className="flow-title">Academic & Corporate Teaching</span>
            <span className="flow-sub">Visiting Faculty at St. Xavier's & Corporate Mentor</span>
          </div>
          <div className="flow-arrow" aria-hidden="true">&rarr;</div>
          <div className="flow-step">
            <span className="flow-num">04</span>
            <span className="flow-title">Industry-Ready Graduates</span>
            <span className="flow-sub">Students equipped with practical engineering rigor</span>
          </div>
        </div>
      </div>
    </section>
  );
};
