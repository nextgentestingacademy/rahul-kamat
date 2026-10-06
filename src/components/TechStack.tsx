import React from 'react';
import { TECH_STACK } from '../data/profileData';
import {
  Code2,
  CheckCircle2,
  Activity,
  GitBranch,
} from 'lucide-react';
import './TechStack.css';

export const TechStack: React.FC = () => {
  return (
    <section className="section" id="tech-stack">
      <div className="container">
        <div className="section-header-center">
          <span className="eyebrow">Technical Competence Matrix</span>
          <h2 className="section-title">Verified Technology Stack</h2>
          <p className="section-desc">
            Directly sourced from enterprise banking deployments and active testing initiatives.
            No unverified tools or inflated skill claims.
          </p>
        </div>

        <div className="tech-matrix-grid">
          {/* Programming Languages */}
          <div className="tech-category-card">
            <div className="tech-card-header">
              <div className="tech-icon-box icon-prog">
                <Code2 size={22} />
              </div>
              <div>
                <span className="tech-badge">Languages</span>
                <h3 className="tech-card-title">Programming</h3>
              </div>
            </div>
            <p className="tech-card-desc">
              Core language foundations for enterprise application development, test automation scripting, and algorithmic constructs.
            </p>
            <div className="tech-tags-list">
              {TECH_STACK.programming.map((tech, i) => (
                <div key={i} className="tech-tag-pill">
                  <span className="tech-dot"></span>
                  <strong>{tech}</strong>
                </div>
              ))}
            </div>
          </div>

          {/* Testing Tools */}
          <div className="tech-category-card">
            <div className="tech-card-header">
              <div className="tech-icon-box icon-test">
                <CheckCircle2 size={22} />
              </div>
              <div>
                <span className="tech-badge">Automation & QA</span>
                <h3 className="tech-card-title">Testing Tools</h3>
              </div>
            </div>
            <p className="tech-card-desc">
              Web, UI, and enterprise regression frameworks spanning open-source ecosystems to enterprise and AI-driven platforms.
            </p>
            <div className="tech-tags-list">
              {TECH_STACK.testing.map((tech, i) => (
                <div key={i} className="tech-tag-pill">
                  <span className="tech-dot"></span>
                  <strong>{tech}</strong>
                </div>
              ))}
            </div>
          </div>

          {/* API & Performance Testing */}
          <div className="tech-category-card">
            <div className="tech-card-header">
              <div className="tech-icon-box icon-perf">
                <Activity size={22} />
              </div>
              <div>
                <span className="tech-badge">Backend & Load</span>
                <h3 className="tech-card-title">API & Performance</h3>
              </div>
            </div>
            <p className="tech-card-desc">
              REST endpoint validation, automated collection runs, enterprise load simulations, and response-time SLAs.
            </p>
            <div className="tech-tags-list">
              {TECH_STACK.apiAndPerf.map((tech, i) => (
                <div key={i} className="tech-tag-pill">
                  <span className="tech-dot"></span>
                  <strong>{tech}</strong>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps & Version Control */}
          <div className="tech-category-card">
            <div className="tech-card-header">
              <div className="tech-icon-box icon-devops">
                <GitBranch size={22} />
              </div>
              <div>
                <span className="tech-badge">CI/CD & SCM</span>
                <h3 className="tech-card-title">DevOps & Version Control</h3>
              </div>
            </div>
            <p className="tech-card-desc">
              Distributed source code collaboration, enterprise branch governance, automated test execution pipelines, and builds.
            </p>
            <div className="tech-tags-list">
              {TECH_STACK.devops.map((tech, i) => (
                <div key={i} className="tech-tag-pill">
                  <span className="tech-dot"></span>
                  <strong>{tech}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
