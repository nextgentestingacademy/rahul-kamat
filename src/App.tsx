import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyColleges } from './components/WhyColleges';
import { AcademicTeaching } from './components/AcademicTeaching';
import { FacultyEngagements } from './components/FacultyEngagements';
import { Courses } from './components/Courses';
import { CorporateTraining } from './components/CorporateTraining';
import { NextGenAcademy } from './components/NextGenAcademy';
import { IndustryExperience } from './components/IndustryExperience';
import { TechStack } from './components/TechStack';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

function App() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <WhyColleges />
        <AcademicTeaching />
        <FacultyEngagements />
        <Courses />
        <CorporateTraining />
        <NextGenAcademy />
        <IndustryExperience />
        <TechStack />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
