export interface NavItem {
  label: string;
  href: string;
}

export const ALL_NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Why Colleges', href: '#why-colleges' },
  { label: 'Academic Teaching', href: '#academic-teaching' },
  { label: 'Engagement Models', href: '#faculty-engagements' },
  { label: 'Courses', href: '#subjects' },
  { label: 'Corporate Training', href: '#corporate-training' },
  { label: 'NextGen Academy', href: '#nextgen-academy' },
  { label: 'Industry Experience', href: '#industry-experience' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const NAV_ITEMS = ALL_NAV_ITEMS;

export const DESKTOP_NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Why Colleges', href: '#why-colleges' },
  { label: 'Teaching', href: '#academic-teaching' },
  { label: 'Engagements', href: '#faculty-engagements' },
  { label: 'Courses', href: '#subjects' },
  { label: 'Corporate Training', href: '#corporate-training' },
  { label: 'Experience', href: '#industry-experience' },
  { label: 'Contact', href: '#contact' },
];

export const PROFILE_INFO = {
  name: 'Rahul Abhay Kamat',
  title: 'Technology Educator • QA & Engineering Leader • IIM Calcutta Alumnus',
  location: 'Mumbai, India',
  phone: '+91 9821205094',
  phoneClean: '+919821205094',
  email: 'rahulabhaykamat@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/rahul-kamat-85b9994a',
  pdfPath: '/Rahul-Kamat-Faculty-Profile.pdf',
  experienceYears: '17+',
  almaMater: 'IIM Calcutta Alumnus',
  currentFacultyRole: "Visiting Faculty | St. Xavier's College (Autonomous), Mumbai",
  academy: 'Founder, NextGen Testing Academy',
};

// Compact professional credibility cards (typography driven, no giant numbers)
export const CREDIBILITY_METRICS = [
  { value: '17+ Years', label: 'Industry Experience', detail: 'Enterprise Quality Engineering & Banking Architecture' },
  { value: 'IIM Calcutta', label: 'Executive Alumnus', detail: 'Post Graduate Diploma in Finance' },
  { value: 'Tier-1 Banks', label: 'J.P. Morgan & BofA', detail: 'Mission-Critical Transaction & Payment Platforms' },
  { value: 'Academia + Corporate', label: 'Teaching & Training', detail: "St. Xavier's College Faculty & Corporate Mentorship" },
];

export const TEACHING_PILLARS = [
  {
    title: 'Industry-Aligned Curriculum',
    desc: 'Bridges theoretical computer science with enterprise production architectures and mission-critical transaction platforms.',
  },
  {
    title: 'Practical, Hands-on Learning',
    desc: 'Classroom sessions emphasise live code construction, memory model tracing, and interactive problem solving.',
  },
  {
    title: 'Story-Based Engineering Context',
    desc: 'Translates abstract algorithms into tangible, real-world engineering analogies derived from enterprise systems.',
  },
  {
    title: 'Algorithmic & AI Readiness',
    desc: 'Equips students with rigorous programming logic, asymptotic analysis, and modern AI-augmented engineering workflows.',
  },
];

// Three source-backed philosophy principles from latest profile
export const PHILOSOPHY_PRINCIPLES = [
  {
    title: 'Story-Based Learning',
    desc: 'Translating abstract algorithms into tangible, real-world engineering analogies.',
  },
  {
    title: 'Algorithmic Rigor',
    desc: 'Deep emphasis on core programming logic, memory models, and optimal time-space tradeoffs.',
  },
  {
    title: 'Industry Alignment',
    desc: 'Bridging theoretical computer science with enterprise production architectures.',
  },
];

// All three academic teaching areas from latest profile
export const ACADEMIC_TEACHING_AREAS = [
  {
    level: 'M.Sc. Information Technology',
    institution: "St. Xavier's College (Autonomous), Mumbai",
    subject: 'Data Structures and Algorithms (DSA) using Java',
    badge: 'Postgraduate Higher Academia',
    topics: [
      'Computational Complexity & Asymptotic Analysis (Big-O, Omega, Theta)',
      'Divide & Conquer Methodologies & Recursion Trees',
      'Tree Traversals (Binary Search Trees, Balanced Trees)',
      'Graph Traversals (BFS, DFS, Adjacency Representations)',
      'Dynamic Arrays & Linear Collections',
      'Expression Evaluation & Stack Frame Architecture',
    ],
    summary: 'Instructing postgraduate scholars in computational complexity (asymptotic analysis), divide & conquer, trees, graphs, dynamic arrays, and expression evaluation using Java.',
  },
  {
    level: 'F.Y. B.Sc. Information Technology',
    institution: "St. Xavier's College (Autonomous), Mumbai",
    subject: 'Art of Programming',
    badge: 'Undergraduate Foundations',
    topics: [
      'Foundational Programming Principles & Logic',
      'Disciplined Problem-Solving Methodologies',
      'Structured Algorithmic Thinking',
      'Core Syntax Fluency & Control Structures',
    ],
    summary: 'Establishing disciplined computational thinking and core programming fluency for early-stage undergraduate IT students.',
  },
  {
    level: 'Modern AI Pedagogy',
    institution: "St. Xavier's College (Autonomous), Mumbai",
    subject: 'Vibe Coding using AI',
    badge: 'Emerging AI Engineering',
    topics: [
      'Modern Prompt-Driven Software Architecture',
      'LLM-Assisted Paired Programming Workflows',
      'Rapid Prototyping & Iterative Architecture',
      'AI-Augmented Software Engineering Practices',
    ],
    summary: 'Equipping students with modern prompt-driven development, LLM pair-programming techniques, and accelerated prototyping methodologies.',
  },
];

export const ENGAGEMENT_MODELS = [
  {
    title: 'Visiting Faculty',
    badge: 'Semester / Trimester',
    desc: 'Complete semester course delivery for undergraduate or postgraduate IT / Computer Science programmes, adhering to university syllabus with continuous assessment.',
    targets: ['M.Sc. IT / CS', 'B.Sc. IT / CS', 'B.Tech / B.E. / MCA'],
  },
  {
    title: 'Guest Lectures',
    badge: 'Focused Sessions',
    desc: 'High-impact 2–4 hour interactive lectures introducing students to real-world software testing, banking architectures, or applied algorithmic strategies.',
    targets: ['Department Tech Days', 'Induction Seminars', 'Special Topic Days'],
  },
  {
    title: 'Technical Workshops',
    badge: 'Hands-on Coding',
    desc: 'Intensive 1–3 day hands-on workshops where students build test automation frameworks or master API testing with Postman directly on their laptops.',
    targets: ['Selenium & Cypress', 'Postman API Automation', 'JMeter Performance'],
  },
  {
    title: 'Industry-Academia Sessions',
    badge: 'Bridge Programme',
    desc: 'Seminars for final-year students deciphering industry hiring expectations, engineering workflow lifecycles, and software quality standards.',
    targets: ['Pre-Placement Training', 'Placement Cell Initiatives', 'Career Guidance'],
  },
  {
    title: 'Student Skill Development',
    badge: 'Structured Track',
    desc: 'Multi-week elective modules dedicated to transforming students into job-ready software test engineers and automation specialists.',
    targets: ['Semester Electives', 'Value-Added Courses', 'Skill Certification'],
  },
  {
    title: 'Faculty Development (FDP)',
    badge: 'Faculty Upskilling',
    desc: 'Equipping academic educators with current industry practices in automated quality assurance, CI/CD integration, and modern software verification.',
    targets: ['Department Faculty', 'Colleges Across Mumbai', 'University Workshops'],
  },
];

// Dual-pillar course structure: Academic & Programming + Industry & Engineering
export const COURSES_CATALOG = [
  {
    category: 'Academic & Programming Foundations',
    subtitle: 'University degree curriculum & foundational computational problem-solving',
    topics: [
      { name: 'Data Structures & Algorithms using Java', desc: 'Computational complexity, asymptotic analysis, divide & conquer, trees, graphs, dynamic arrays, and expression evaluation.' },
      { name: 'Art of Programming', desc: 'Foundational programming principles, disciplined problem-solving methodologies, and structured algorithmic thinking.' },
      { name: 'Vibe Coding using AI', desc: 'Modern prompt-driven architecture, LLM-assisted paired programming, rapid prototyping, and AI-augmented software engineering.' },
      { name: 'Algorithmic Problem Solving & Complexity', desc: 'Translating complex real-world requirements into optimal time-space algorithmic solutions in Java and Python.' },
    ],
  },
  {
    category: 'Industry Quality Engineering & Automation',
    subtitle: 'Commercial test automation frameworks, backend verification, and performance profiling',
    topics: [
      { name: 'Full-Stack Test Automation Architecture', desc: 'Architecting enterprise Page Object Model (POM) suites with Selenium, Playwright, and Cypress across distributed systems.' },
      { name: 'API Automation, Mocking & Postman CI Collections', desc: 'Contract verification, automated assertions, environment chaining, and CI integration via Newman.' },
      { name: 'High-Concurrency Load Testing via Apache JMeter', desc: 'Simulating concurrent virtual traffic, thread group tuning, server bottleneck diagnosis, and latency profiling.' },
      { name: 'Programming for SDETs (Java, Python, TypeScript)', desc: 'Clean code principles, OOP patterns, and data structures tailored specifically for automation test engineers.' },
    ],
  },
];

export const CORPORATE_TRAINING_MODULES = [
  {
    title: 'Full-Stack Test Automation Architecture',
    desc: 'Designing and scaling enterprise hybrid automation frameworks with Selenium, Cypress, and Playwright. Covers Page Object Model design, dynamic synchronization, and TestNG/Mocha test runners.',
  },
  {
    title: 'API Automation, Mocking & Postman CI Collections',
    desc: 'Contract validation, request chaining, environment parameterization, automated assertions in JavaScript, mock servers, and automated pipeline execution using Newman.',
  },
  {
    title: 'High-Concurrency Load Testing via Apache JMeter',
    desc: 'Simulating high-volume concurrent virtual user traffic, thread group optimization, throughput timers, latency percentile profiling, and diagnosing production server bottlenecks.',
  },
];

export const CORPORATE_IMPACT_POINTS = [
  'Upskilled manual QA teams into high-velocity Automation SDETs',
  'Embedded clean code principles into enterprise testing routines',
  'Accelerated onboarding cycles for complex banking workflows',
];

export const WORKED_COMPANIES = [
  {
    name: 'Inadev India Pvt. Ltd.',
    role: 'Senior QA Manager',
    period: 'Nov 2023 – Aug 2025',
    location: 'Mumbai',
    summary: 'Directed enterprise QA vision and transformation for high-availability banking platforms. Spearheaded end-to-end automation strategies, modernizing test suites and mentoring lead automation engineers across distributed teams.',
    highlight: 'Enterprise banking platform QA strategy & distributed team leadership',
  },
  {
    name: 'Zentree Labs',
    role: 'QA Test Lead',
    period: 'Jul 2021 – Nov 2023',
    location: 'Mumbai',
    summary: 'Architected scalable hybrid automation frameworks that boosted overall regression execution speed by over 40%. Led multi-functional delivery teams ensuring zero-defect deployments for client systems.',
    highlight: 'Framework architecture boosting regression speed by >40%',
  },
  {
    name: 'Bank of America (B.A. Continuum)',
    role: 'Quality Specialist',
    period: 'Mar 2014 – Jul 2021',
    location: 'Mumbai',
    summary: 'Designed resilient enterprise automation architectures for consumer banking and settlement services. Mentored 40+ QA specialists across projects, championing continuous integration and standardizing automation frameworks.',
    highlight: 'Consumer banking automation & mentored 40+ QA specialists',
  },
  {
    name: 'Travelex India',
    role: 'Senior Test Analyst',
    period: 'Apr 2013 – Mar 2014',
    location: 'Mumbai',
    summary: 'Engineered test automation suites for cross-border financial transactions and foreign exchange platforms while authoring standardized test automation curricula for internal engineering teams.',
    highlight: 'Cross-border foreign exchange automation & internal curricula',
  },
  {
    name: 'J.P. Morgan',
    role: 'Team Leader – QA',
    period: 'Sep 2010 – Mar 2013',
    location: 'Mumbai',
    summary: 'Led testing delivery for high-value financial transaction and SWIFT payment processing platforms, ensuring total alignment with strict financial regulatory benchmarks and zero-tolerance SLA requirements.',
    highlight: 'SWIFT payment platform QA & zero-tolerance financial SLAs',
  },
  {
    name: 'Infosys Technologies',
    role: 'Testing Executive',
    period: 'Sep 2008 – Sep 2010',
    location: 'Pune',
    summary: 'Executed core banking domain test pipelines, scripted automated functional suites, and validated backend transactional database workflows.',
    highlight: 'Core banking test automation & backend workflow validation',
  },
];

export const TECH_STACK = {
  programming: ['Java', 'Python', 'TypeScript', 'JavaScript', 'C', 'VBScript'],
  testing: ['Selenium', 'Playwright', 'Cypress', 'UFT / QTP', 'TestComplete', 'testRigor'],
  apiAndPerf: ['Postman', 'Apache JMeter'],
  devops: ['Jenkins CI/CD', 'GitHub', 'BitBucket'],
};

export const EDUCATION_LIST = [
  {
    institution: 'Indian Institute of Management Calcutta (IIM Calcutta)',
    credential: 'Post Graduate Diploma in Finance',
    tag: 'Executive Alumnus',
    details: 'Executive Management & Financial Engineering — uniting commercial leadership depth with rigorous quantitative disciplines.',
  },
  {
    institution: 'University of Mumbai',
    credential: 'Bachelor of Science in Information Technology',
    tag: 'Computer Science Foundation',
    details: 'Foundations of Computer Science, Programming, Data Structures, Database Systems & Software Engineering.',
  },
];
