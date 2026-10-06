import React from 'react';
import { EDUCATION_LIST } from '../data/profileData';
import {
  GraduationCap,
  CheckCircle2,
} from 'lucide-react';
import './Education.css';

export const Education: React.FC = () => {
  return (
    <section className="section section-alt" id="education">
      <div className="container">
        <div className="section-header-center">
          <span className="eyebrow eyebrow-gold">Academic Credentials</span>
          <h2 className="section-title">Education & Academic Background</h2>
          <p className="section-desc">
            A potent combination of premier national management education and rigorous computer science foundations.
          </p>
        </div>

        <div className="education-grid">
          {EDUCATION_LIST.map((edu, idx) => (
            <div key={idx} className="education-card">
              <div className="edu-card-top">
                <div className="edu-icon-box">
                  <GraduationCap size={24} />
                </div>
                <span className="badge badge-gold">{edu.tag}</span>
              </div>

              <h3 className="edu-credential">{edu.credential}</h3>
              <p className="edu-institution">{edu.institution}</p>
              
              <div className="edu-details-box">
                <p>{edu.details}</p>
              </div>

              <div className="edu-trust-footer">
                <CheckCircle2 size={16} className="edu-check" />
                <span>Verified Academic Qualification</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
