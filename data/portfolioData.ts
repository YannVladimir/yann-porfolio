export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  timeframe: string;
  role: string;
  clientOrOrg: string;
  description: string;
  longDescription?: string;
  highlightPoints: string[];
  technologies: string[];
  status?: 'production' | 'building' | 'research' | 'archived';
  liveUrl?: string;
  featured: boolean;
  architectureType?: string;
  iconName?: string;
  impactMetrics?: { label: string; value: string }[];
}

export interface AdditionalProject {
  id: string;
  name: string;
  category: 'Enterprise' | 'Fintech' | 'Logistics' | 'Education' | 'E-Commerce' | 'Business';
  role: string;
  description: string;
  technologies: string[];
  impact: string;
  year?: string;
}

export interface CareerRole {
  title: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  highlights: string[];
  skills: string[];
  summary: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  honors?: string;
  focus?: string;
  featured?: boolean;
}

export interface AchievementItem {
  title: string;
  organization: string;
  year: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Yann Vladimir Bajeneza",
  eyebrow: "SENIOR SOFTWARE DEVELOPER · TECHNOLOGY BUILDER · PROJECT MANAGER",
  headline: "I build software that turns complex problems into simple experiences.",
  subheadline:
    "Senior Software Developer and Project Manager with 10+ years of experience building, modernizing, and supporting mission-critical digital systems across enterprise, government, education, document management, e-commerce, and AI.",
  location: "Kigali, Rwanda",
  timezone: "CAT (UTC+2)",
  email: "yannvladimirbajeneza@gmail.com",
  phone: "+250 782 767 289",
  whatsapp: "+250782767289",
  whatsappUrl: "https://wa.me/250782767289?text=Hello%20Yann%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  availability: "Open for select advisory & high-impact engineering leadership",
  yearsExperience: "10+",
  productionSystems: "20+",
  academicDegrees: "3",
  industriesCount: "8+",
};

export const CREDIBILITY_METRICS = [
  {
    value: "10+",
    label: "Years Building Software",
    description: "Production engineering from architecture to long-term maintenance",
  },
  {
    value: "20+",
    label: "Digital Products & Systems",
    description: "Government, enterprise, education, e-commerce, and AI platforms",
  },
  {
    value: "3",
    label: "Academic Degrees",
    description: "CMU Africa (MSIT), UoK (MS Project Mgmt), LPU (BCA)",
  },
  {
    value: "8+",
    label: "Industry Domains",
    description: "Proven multi-sector reliability and cross-functional leadership",
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "bika",
    slug: "bika-document-management",
    title: "BIKA",
    subtitle: "Enterprise Digital Document Archiving & Workflow Platform",
    category: "Document Management & Enterprise",
    timeframe: "2020 – Present",
    role: "Lead Architect & Product Engineer",
    clientOrOrg: "Tekafrika / Creative Geeks",
    description:
      "A high-security, multi-tenant digital document management and archiving ecosystem designed to transform paper-heavy institutional workflows into instant, searchable, indexed digital records.",
    longDescription:
      "BIKA was conceived and engineered to resolve chronic document loss, slow paper retrieval, and unstructured data silos across modern organizations. Built with a resilient multi-tenant architecture, robust RESTful APIs, automated metadata extraction, and enterprise-grade access control, BIKA streamlines the lifecycle of records from scanning to automated compliance retention.",
    highlightPoints: [
      "Engineered full document lifecycle pipeline: Ingestion → Metadata Tagging → Fast Indexing → Workflow Routing → Secure Archival",
      "Designed secure multi-tenant role-based access control (RBAC) with complete audit logging",
      "Built resilient REST APIs powering responsive web workflows, bulk ingestion, and third-party integrations",
      "Optimized high-concurrency database queries for rapid retrieval across hundreds of thousands of indexed records",
    ],
    technologies: ["PHP", "JavaScript", "REST APIs", "MySQL", "MVC Architecture", "Docker", "Linux"],
    status: "production",
    liveUrl: "https://bika.rw",
    featured: true,
    architectureType: "Ingestion → Metadata Engine → Search Index → RBAC Security → Storage",
    iconName: "FileText",
    impactMetrics: [
      { label: "Document Retrieval", value: "< 2.0s" },
      { label: "Architecture", value: "Multi-Tenant" },
      { label: "Security Tier", value: "Enterprise RBAC" },
    ],
  },
  {
    id: "winschool",
    slug: "winschool-modernization",
    title: "WinSchool",
    subtitle: "Next-Gen School Management & Academic Administration System",
    category: "Education & Legacy Modernization",
    timeframe: "2025 – Present",
    role: "Senior Software Developer",
    clientOrOrg: "IST Africa Ltd",
    description:
      "Complete architectural modernization of a comprehensive school administration platform, migrating legacy desktop and monolithic paradigms into a responsive, modular Vue.js and Java Spring Boot ecosystem.",
    longDescription:
      "WinSchool serves academic institutions with end-to-end administration: enrollment, grading, scheduling, fee management, and teacher-parent communication. The modernization effort replaced aging systems with a modern decoupled SPA frontend, performant Spring Boot micro-services, and automated CI/CD deployment pipelines.",
    highlightPoints: [
      "Modernized legacy codebases into decoupled Vue.js frontend with clean state management and atomic UI components",
      "Engineered performant Java Spring Boot backend services and secure RESTful endpoints",
      "Refactored complex database schemas to support high-throughput academic period reporting and fee reconciliations",
      "Streamlined institutional administrative workflows, drastically reducing grading submission turnaround time",
    ],
    technologies: ["Vue.js", "Java Spring Boot", "PostgreSQL", "REST APIs", "Agile / Scrum", "Git", "Docker"],
    status: "production",
    featured: true,
    architectureType: "Vue.js SPA ↔ Spring Boot Gateway ↔ PostgreSQL & Reporting Engine",
    iconName: "GraduationCap",
    impactMetrics: [
      { label: "Frontend Speed", value: "3x Faster" },
      { label: "Core Stack", value: "Vue + Spring" },
      { label: "Workflow Type", value: "Academic ERP" },
    ],
  },
  {
    id: "digital-signing",
    slug: "digital-signing-platform",
    title: "Digital Signing Platform",
    subtitle: "Enterprise-Grade Cryptographic Document Signing & Workflow Engine",
    category: "Security & Enterprise Infrastructure",
    timeframe: "2025 – Present",
    role: "Senior Software Developer",
    clientOrOrg: "IST Africa Ltd",
    description:
      "A reusable, shared digital signing micro-platform enabling legally compliant cryptographic signing, multi-party approval chains, and automated audit trails across enterprise applications.",
    longDescription:
      "Designed as a foundational shared service for enterprise systems, this platform handles multi-party document signing workflows, cryptographic signature verification, tamper-evident document hashing, and webhook-driven approval routing without vendor lock-in.",
    highlightPoints: [
      "Architected shared microservice architecture designed for seamless plug-and-play integration across diverse internal products",
      "Implemented multi-party sequential and parallel signing pipelines with immutable verification audit trails",
      "Constructed secure tokenized REST APIs and event-driven webhook listeners for real-time document status updates",
      "Engineered automated PDF manipulation, signature stamping, and cryptographic checksum validation",
    ],
    technologies: ["Java Spring Boot", "Vue.js", "REST APIs", "Cryptographic Hashing", "PostgreSQL", "Docker"],
    status: "building",
    featured: true,
    architectureType: "Client Request → Auth Gate → PDF Cryptographic Signer → Multi-Party Workflow Engine → Immutable Audit Log",
    iconName: "ShieldCheck",
    impactMetrics: [
      { label: "Development Status", value: "Currently Building" },
      { label: "Security", value: "Tamper-Evident" },
      { label: "Integration", value: "API First" },
    ],
  },
  {
    id: "kinyarwanda-ai",
    slug: "kinyarwanda-english-ai-translation",
    title: "Real-Time Kinyarwanda–English Speech Translation & Auto-Captioning",
    subtitle: "Applied AI & Low-Resource Speech Processing Pipeline",
    category: "AI / NLP & Speech Engineering",
    timeframe: "2024 – 2025",
    role: "AI / Machine Learning Engineer & Researcher",
    clientOrOrg: "Carnegie Mellon University Africa",
    description:
      "A real-time end-to-end speech recognition, machine translation, and automatic captioning system tailored for Kinyarwanda audio streams and low-resource African language NLP.",
    longDescription:
      "Low-resource African languages face acute digital exclusion in automated media workflows. Developed at Carnegie Mellon University Africa, this project fine-tuned OpenAI Whisper speech-to-text models alongside specialized cross-lingual translation architectures to deliver low-latency subtitle streams from live speech.",
    highlightPoints: [
      "Engineered end-to-end speech processing pipeline: Audio Ingestion → Feature Extraction → Whisper STT → Cross-Lingual Translation → Synchronized Captioning",
      "Fine-tuned transformer models on curated domain-specific Kinyarwanda speech datasets to handle acoustic dialect variations",
      "Optimized streaming inference latency to enable real-time synchronized caption rendering with minimal lag",
      "Evaluated BLEU and WER metrics to ensure high semantic fidelity in civic and educational broadcast contexts",
    ],
    technologies: ["Python", "Whisper", "NLP / LLMs", "PyTorch", "Pandas", "NumPy", "Speech Processing"],
    status: "research",
    featured: true,
    architectureType: "Audio Stream → Audio Preprocessor → Whisper Acoustic Model → NLP Translation Layer → Real-Time Caption Engine",
    iconName: "Cpu",
    impactMetrics: [
      { label: "Domain", value: "Low-Resource NLP" },
      { label: "Model Family", value: "Whisper & LLMs" },
      { label: "Application", value: "Live Subtitling" },
    ],
  },
  {
    id: "beneficial-ownership",
    slug: "beneficial-ownership-registry",
    title: "Beneficial Ownership Registry",
    subtitle: "National-Scale Enterprise Compliance & Corporate Transparency System",
    category: "Government Technology & Registry",
    timeframe: "2019 – 2022",
    role: "IT Applications Specialist",
    clientOrOrg: "Rwanda Development Board (RDB)",
    description:
      "A mission-critical national digital registry tracking legal entity ownership and compliance to satisfy international financial transparency and anti-money laundering (AML) standards.",
    longDescription:
      "The Beneficial Ownership Registry was deployed as a pivotal component of Rwanda's national business regulatory infrastructure. The system mandates and processes structured corporate ownership disclosures, interfacing directly with existing national registration databases while ensuring strict data privacy and cryptographic integrity.",
    highlightPoints: [
      "Engineered high-reliability government-grade data workflows supporting thousands of registered corporate entities",
      "Interfaced with national business registration platforms to cross-validate identity and ownership hierarchies",
      "Enforced strict data governance, secure RBAC permissions, and comprehensive regulatory audit trails",
      "Maintained 99.9% uptime for mission-critical public and internal civil service submission portals",
    ],
    technologies: ["PHP", "JavaScript", "SQL / Oracle / MySQL", "Enterprise Integration", "Security Compliance"],
    status: "production",
    featured: true,
    architectureType: "Public Submission Portal → Entity Cross-Validation Engine → Compliance Audit DB → Regulatory Inspector UI",
    iconName: "Building2",
    impactMetrics: [
      { label: "Scale", value: "National" },
      { label: "Domain", value: "GovTech / AML" },
      { label: "Reliability", value: "99.9% Uptime" },
    ],
  },
  {
    id: "fanafootball",
    slug: "fanafootball-fantasy-platform",
    title: "FanaFootball",
    subtitle: "African Fantasy Sports & Community Engagement Platform",
    category: "Digital Product & Consumer Platform",
    timeframe: "2021 – 2023",
    role: "Founder & Lead Product Architect",
    clientOrOrg: "Tekafrika / Creative Geeks",
    description:
      "A dedicated fantasy football and digital sports community platform custom-tailored for African football leagues, real-time match stats, and fan gamification.",
    longDescription:
      "Recognized as a runner-up at the prestigious Rwanda Hanga Pitchfest in 2022, FanaFootball created a customized fantasy sports experience centered around domestic African football leagues that were previously overlooked by global platforms.",
    highlightPoints: [
      "Architected high-throughput gamification engine calculating live player points, leaderboard rankings, and transfer logic",
      "Designed responsive, mobile-first web and mobile user interfaces optimized for varied internet bandwidth environments",
      "Scaled backend infrastructure to gracefully manage concurrent traffic spikes before kickoff and match conclusion",
      "Awarded Runner-Up at the national Hanga Pitchfest 2022 among top Rwandan tech innovations",
    ],
    technologies: ["JavaScript", "Node.js / PHP", "MySQL", "REST APIs", "Mobile UI", "Real-Time Scoring"],
    status: "production",
    featured: true,
    architectureType: "Match Feeds → Scoring Rules Engine → Leaderboard Aggregator → Mobile Web App",
    iconName: "Trophy",
    impactMetrics: [
      { label: "Award", value: "Hanga Pitch Runner-Up" },
      { label: "Target Market", value: "African Leagues" },
      { label: "Engine Type", value: "Real-Time Scoring" },
    ],
  },
  {
    id: "schoolbox",
    slug: "schoolbox-education-platform",
    title: "SCHOOLBOX",
    subtitle: "Holistic Digital Administration & Academic Records Platform",
    category: "Education & ERP",
    timeframe: "2018 – 2022",
    role: "Product Manager & Software Architect",
    clientOrOrg: "Creative Geeks",
    description:
      "An integrated educational software suite unifying student lifecycle management, attendance tracking, fee collection, and report card generation for primary and secondary institutions.",
    longDescription:
      "SCHOOLBOX provided private and public schools with a straightforward, reliable digital back-office. Designed for simplicity, the platform eliminated spreadsheet chaos and gave headmasters, bursars, and teachers tailored dashboards.",
    highlightPoints: [
      "Engineered flexible gradebook calculations supporting diverse curriculum standards and automated batch report card generation",
      "Developed parent SMS/email notification bridges for fee reminders, attendance alerts, and term announcements",
      "Implemented role-based portals for school administrators, teachers, accountants, and guardians",
      "Trained school staff and ensured smooth transition from manual paperwork to cloud-stored records",
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap", "SMS Gateway APIs", "MVC"],
    status: "production",
    featured: true,
    architectureType: "Institution Gate → Academic Module / Fee Ledger → SMS Gateway → PDF Report Engine",
    iconName: "BookOpen",
    impactMetrics: [
      { label: "Domain", value: "Education ERP" },
      { label: "Automation", value: "Batch Report Cards" },
      { label: "Integration", value: "SMS Alert Engine" },
    ],
  },
  {
    id: "wipofile-ipas",
    slug: "wipofile-ipas-migration",
    title: "WIPOFILE → IPAS System Migration",
    subtitle: "Enterprise Intellectual Property Data Modernization & Pipeline",
    category: "Legacy Modernization & Data Engineering",
    timeframe: "2019 – 2020",
    role: "IT Applications Specialist",
    clientOrOrg: "Rwanda Development Board (RDB)",
    description:
      "Seamless data extraction, validation, transformation, and migration from legacy WIPOFILE patent/trademark databases into the modernized WIPO Industrial Property Administration System (IPAS).",
    longDescription:
      "National intellectual property records require zero-tolerance for data loss or corrupt records during system upgrades. This project involved deep data mapping, relational database transformations, legacy schema normalization, and rigorous reconciliation testing to guarantee total data integrity.",
    highlightPoints: [
      "Designed and executed automated ETL pipelines for complex multi-decade patent, trademark, and industrial design registries",
      "Authored custom data validation scripts resolving legacy schema discrepancies and missing historical references",
      "Coordinated with international WIPO technical specialists to ensure strict compliance with IPAS relational standards",
      "Achieved zero loss of historical records and seamless switchover for legal IP filings",
    ],
    technologies: ["SQL", "Oracle", "Data Migration / ETL", "Bash Scripting", "System Validation"],
    status: "production",
    featured: true,
    architectureType: "Legacy WIPOFILE Store → Extraction & Cleaning Scripts → Schema Transformer → IPAS Database → Verification",
    iconName: "Database",
    impactMetrics: [
      { label: "Data Integrity", value: "100% Verified" },
      { label: "Domain", value: "National IP Registry" },
      { label: "Complexity", value: "Multi-Decade Records" },
    ],
  },
];

export const ADDITIONAL_PROJECTS: AdditionalProject[] = [
  {
    id: "c-note",
    name: "C-Note",
    category: "Business",
    role: "Lead Developer",
    description:
      "Lightweight commercial note and invoice management system built for small businesses to track transactions, client credits, and settlement receipts.",
    technologies: ["JavaScript", "PHP", "MySQL", "CSS3"],
    impact: "Streamlined daily accounting and credit tracking for retail merchants.",
    year: "2021",
  },
  {
    id: "twisungane-sacco",
    name: "Twisungane SACCO Management System",
    category: "Fintech",
    role: "Software Architect & Developer",
    description:
      "Custom microfinance and cooperative banking management software supporting savings accounts, micro-loan lifecycle, interest accruals, and ledger audits.",
    technologies: ["PHP", "SQL", "MVC", "Security Auditing"],
    impact: "Digitized cooperative credit transactions with full accounting reconciliation.",
    year: "2018",
  },
  {
    id: "umusambi-delivery",
    name: "Umusambi Delivery",
    category: "Logistics",
    role: "Full-Stack Engineer",
    description:
      "On-demand local urban delivery and dispatch coordination platform connecting customers, drivers, and merchant stores with live dispatch routing.",
    technologies: ["Node.js", "React", "REST APIs", "Geolocation APIs"],
    impact: "Enabled real-time order dispatch and delivery tracking.",
    year: "2022",
  },
  {
    id: "custom-erp-platforms",
    name: "Custom Enterprise ERPs",
    category: "Enterprise",
    role: "Project Manager & Architect",
    description:
      "Multiple tailored enterprise resource planning systems deployed for regional businesses covering inventory control, procurement, payroll, and financial reporting.",
    technologies: ["PHP", "Java", "MySQL", "REST APIs", "Bootstrap"],
    impact: "Replaced disconnected paper spreadsheets with centralized real-time business ledgers.",
    year: "2017 – 2024",
  },
  {
    id: "ecommerce-platforms",
    name: "Multi-Vendor E-Commerce Solutions",
    category: "E-Commerce",
    role: "Full-Stack Developer",
    description:
      "Custom merchant storefronts and multi-vendor marketplaces featuring mobile money payment gateways, product catalogs, order fulfillment, and admin telemetry.",
    technologies: ["JavaScript", "PHP", "Payment Gateways", "REST APIs"],
    impact: "Powered direct-to-consumer digital commerce with local payment integrations.",
    year: "2019 – 2023",
  },
];

export const SKILL_CATEGORIES = [
  {
    category: "Languages",
    description: "Core programming languages utilized across production backends, scripts, and frontends",
    skills: [
      { name: "TypeScript", level: "Expert", primary: true },
      { name: "JavaScript", level: "Expert", primary: true },
      { name: "Java", level: "Advanced", primary: true },
      { name: "PHP", level: "Expert", primary: true },
      { name: "Python", level: "Advanced", primary: true },
      { name: "SQL", level: "Expert", primary: true },
      { name: "Dart", level: "Proficient", primary: false },
      { name: "C / C++", level: "Proficient", primary: false },
      { name: "Bash", level: "Advanced", primary: false },
    ],
  },
  {
    category: "Frontend",
    description: "Building responsive, accessible, and performant user interfaces",
    skills: [
      { name: "React", level: "Expert", primary: true },
      { name: "Next.js", level: "Advanced", primary: true },
      { name: "Vue.js", level: "Expert", primary: true },
      { name: "HTML5 / CSS3", level: "Expert", primary: true },
      { name: "Tailwind CSS", level: "Expert", primary: true },
      { name: "Bootstrap", level: "Advanced", primary: false },
      { name: "Framer Motion", level: "Advanced", primary: false },
      { name: "jQuery", level: "Advanced", primary: false },
    ],
  },
  {
    category: "Backend & Architecture",
    description: "Designing resilient REST services, microservices, and system workflows",
    skills: [
      { name: "Java Spring Boot", level: "Advanced", primary: true },
      { name: "Node.js", level: "Advanced", primary: true },
      { name: "PHP / Laravel / Custom MVC", level: "Expert", primary: true },
      { name: "REST APIs & Webhooks", level: "Expert", primary: true },
      { name: "System Architecture", level: "Expert", primary: true },
      { name: "Microservices", level: "Advanced", primary: false },
    ],
  },
  {
    category: "Databases & Storage",
    description: "Relational, document, and analytical data architecture",
    skills: [
      { name: "PostgreSQL", level: "Advanced", primary: true },
      { name: "MySQL", level: "Expert", primary: true },
      { name: "Oracle Database", level: "Proficient", primary: false },
      { name: "MongoDB", level: "Proficient", primary: false },
      { name: "SQLite", level: "Advanced", primary: false },
    ],
  },
  {
    category: "AI, NLP & Data",
    description: "Applied machine learning, language models, and analytics",
    skills: [
      { name: "LLMs & Agentic Systems", level: "Advanced", primary: true },
      { name: "OpenAI Whisper", level: "Advanced", primary: true },
      { name: "Natural Language Processing (NLP)", level: "Advanced", primary: true },
      { name: "Pandas & NumPy", level: "Advanced", primary: false },
      { name: "Tableau & Power BI", level: "Proficient", primary: false },
      { name: "AI-Assisted Engineering", level: "Expert", primary: true },
    ],
  },
  {
    category: "Engineering & DevOps",
    description: "Production lifecycle, collaboration, tooling, and quality assurance",
    skills: [
      { name: "Git & GitHub", level: "Expert", primary: true },
      { name: "Docker & Containerization", level: "Advanced", primary: true },
      { name: "CI / CD Pipelines", level: "Advanced", primary: true },
      { name: "Agile / Scrum Methodologies", level: "Expert", primary: true },
      { name: "Code Review & Refactoring", level: "Expert", primary: true },
      { name: "Jira / Trello / Project Mgmt", level: "Expert", primary: false },
      { name: "Composer & npm", level: "Expert", primary: false },
    ],
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Understand",
    tagline: "Deconstruct the core business reality",
    description:
      "Great software begins with rigorous inquiry into real user needs, business constraints, data lifecycles, and operational bottlenecks before writing a single line of code.",
    points: [
      "Stakeholder interviews and domain workflows analysis",
      "Clarifying edge cases and non-functional requirements",
      "Mapping regulatory, security, and scalability boundaries",
    ],
  },
  {
    number: "02",
    title: "Design",
    tagline: "Architect systems for longevity and clarity",
    description:
      "Design the relational data models, service boundaries, API contracts, and intuitive user experiences that make subsequent development fast and predictable.",
    points: [
      "Modular database schemas and normalized relations",
      "Clean API specifications and security policies (RBAC)",
      "Minimalist UX wireframes focused on operational productivity",
    ],
  },
  {
    number: "03",
    title: "Build",
    tagline: "Develop reliable, testable, maintainable code",
    description:
      "Implement using proven architectural patterns, strong typing, clean abstraction layers, and continuous integration to guarantee high code quality.",
    points: [
      "Robust backend services with comprehensive error handling",
      "Responsive, accessible frontends with modern reactive state",
      "Containerized environments ensuring environment parity",
    ],
  },
  {
    number: "04",
    title: "Improve",
    tagline: "Measure, debug, optimize and evolve",
    description:
      "Software in production is a living system. Continuous performance monitoring, database query profiling, and iterative updates ensure long-term value.",
    points: [
      "Query optimization and caching strategies for high loads",
      "Proactive telemetry, audit logging, and security patching",
      "Seamless migration paths for evolving business logic",
    ],
  },
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    quote: "Simple is harder than complex.",
    elaboration:
      "Anyone can build a complicated system. The real craft lies in stripping away unnecessary layers until the solution is clear, understandable, and robust.",
  },
  {
    quote: "Build for people, not just systems.",
    elaboration:
      "Software exists to empower users, solve human bottlenecks, and drive organizations forward. Ergonomics and reliability are never optional.",
  },
  {
    quote: "Good architecture makes change cheaper.",
    elaboration:
      "Business requirements inevitably evolve. Well-structured codebases with clean service boundaries allow teams to pivot with confidence rather than fear.",
  },
  {
    quote: "Technology should solve a real problem.",
    elaboration:
      "Tooling and frameworks are means to an end. True engineering excellence is measured by real-world adoption, resilience, and business impact.",
  },
];

export const CAREER_TIMELINE: CareerRole[] = [
  {
    title: "Senior Software Developer",
    company: "IST Africa Ltd",
    location: "Kigali, Rwanda",
    period: "May 2025 – Present",
    isCurrent: true,
    summary:
      "Leading software modernization initiatives, architecting enterprise digital signing infrastructure, and building scalable Vue.js and Java Spring Boot services for academic and enterprise platforms.",
    highlights: [
      "Directing the frontend and backend modernization of WinSchool into modern Vue.js and Java Spring Boot microservices",
      "Architecting a shared, enterprise-grade Digital Signing platform supporting cryptographic signatures and multi-party workflows",
      "Designing resilient REST APIs, database schemas, and integration endpoints across enterprise client deployments",
      "Championing AI-assisted development practices, disciplined code reviews, and Agile/Scrum sprint cadences",
    ],
    skills: ["Vue.js", "Java Spring Boot", "PostgreSQL", "REST APIs", "Digital Signing", "Agile / Scrum", "Git"],
  },
  {
    title: "Founder & Project Manager / Software Engineer",
    company: "Creative Geeks / Tekafrika",
    location: "Kigali, Rwanda",
    period: "2016 – 2025",
    isCurrent: false,
    summary:
      "Founded and led a digital engineering consultancy, designing custom software products, SaaS platforms, ERP systems, and e-commerce solutions for private and public sector clients.",
    highlights: [
      "Conceived, architected, and engineered BIKA (bika.rw), a flagship enterprise document archiving and management platform",
      "Engineered SCHOOLBOX, an integrated school administration and reporting software suite",
      "Created FanaFootball, an African fantasy sports platform recognized as Hanga Pitchfest 2022 runner-up",
      "Led end-to-end client engagements: requirements gathering, system architecture, team leadership, deployment, and SLAs",
    ],
    skills: ["Product Management", "Full-Stack Architecture", "BIKA.rw", "SCHOOLBOX", "PHP", "JavaScript", "MySQL", "Client Leadership"],
  },
  {
    title: "Information Technology Applications Specialist",
    company: "Rwanda Development Board (RDB)",
    location: "Kigali, Rwanda",
    period: "2019 – 2022",
    isCurrent: false,
    summary:
      "Managed mission-critical government digital platforms, engineered compliance registries, and executed national-scale legacy data migrations.",
    highlights: [
      "Engineered and maintained the national Beneficial Ownership Registry supporting legal entity compliance",
      "Executed the critical legacy WIPOFILE to IPAS (Industrial Property Administration System) data migration with zero data loss",
      "Maintained 99.9% uptime for high-traffic civil service applications and investor registration systems",
      "Collaborated with international regulatory bodies and internal security teams to enforce compliance standards",
    ],
    skills: ["GovTech", "Beneficial Ownership Registry", "IPAS Migration", "Oracle / SQL", "High Reliability", "Security"],
  },
  {
    title: "Web Manager",
    company: "Rwanda Development Board (RDB)",
    location: "Kigali, Rwanda",
    period: "2017 – 2019",
    isCurrent: false,
    summary:
      "Oversaw digital web presence, public agency portals, and digital communication platforms for Rwanda's national economic development board.",
    highlights: [
      "Managed and maintained high-profile governmental portals attracting international investors and tourists",
      "Honored with the prestigious RDB Award for Outstanding Commitment to Quality Service in 2018",
      "Streamlined content publishing workflows and enhanced mobile responsiveness across web assets",
    ],
    skills: ["Web Management", "Digital Portals", "UX Optimization", "Government Communications", "Quality Award"],
  },
  {
    title: "Junior Developer",
    company: "Nugen Computer & IT Services",
    location: "India / Rwanda",
    period: "2014 – 2016",
    isCurrent: false,
    summary:
      "Began professional software engineering career developing web applications, client database modules, and maintaining enterprise software codebases.",
    highlights: [
      "Built dynamic database-driven web applications using PHP, JavaScript, HTML, and MySQL",
      "Assisted senior engineers with debugging, bug fixes, automated backups, and client feature requests",
      "Cultivated disciplined foundation in software engineering fundamentals, algorithm design, and version control",
    ],
    skills: ["PHP", "JavaScript", "MySQL", "Web Development", "Database Design"],
  },
];

export const CAREER_EVOLUTION = [
  {
    year: "2014",
    role: "Developer",
    focus: "Foundations & Web Systems",
    desc: "Hands-on software development, database design, and web application architecture.",
  },
  {
    year: "2017",
    role: "GovTech & Public Systems",
    focus: "National Digital Portals",
    desc: "Managing high-visibility digital systems at Rwanda Development Board.",
  },
  {
    year: "2019",
    role: "Enterprise & Mission-Critical",
    focus: "Registries & Migrations",
    desc: "National Beneficial Ownership Registry & zero-loss WIPO IPAS migration.",
  },
  {
    year: "2023",
    role: "Carnegie Mellon University",
    focus: "Advanced Tech, AI & NLP",
    desc: "Master of Science in IT, low-resource speech translation, and deep research.",
  },
  {
    year: "2025",
    role: "Senior Software Developer",
    focus: "Modernization & Infrastructure",
    desc: "WinSchool modernization and enterprise Digital Signing platforms at IST Africa.",
  },
  {
    year: "Today",
    role: "Software · AI · Products · Leadership",
    focus: "Global Impact & Architecture",
    desc: "Building resilient digital products, leading engineering teams, and solving complex problems.",
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Master of Science in Information Technology",
    institution: "Carnegie Mellon University Africa",
    location: "Kigali, Rwanda",
    period: "2023 – 2025",
    focus: "Applied AI / NLP, Software Architecture, Enterprise Systems & Applied Machine Learning",
    featured: true,
  },
  {
    degree: "Master of Science in Project Management",
    institution: "University of Kigali",
    location: "Kigali, Rwanda",
    period: "2021 – 2022",
    focus: "Strategic Project Governance, Agile Lifecycle Management & Resource Optimization",
    featured: false,
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    period: "2013 – 2016",
    focus: "Computer Science, Data Structures, Algorithms, Software Engineering & Systems Programming",
    featured: false,
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: "Hanga Pitchfest Runner-Up",
    organization: "Ministry of ICT & Innovation, Rwanda",
    year: "2022",
    description: "Awarded runner-up among top national tech innovations for FanaFootball fantasy sports platform.",
  },
  {
    title: "Outstanding Commitment to Quality Service Award",
    organization: "Rwanda Development Board (RDB)",
    year: "2018",
    description: "Recognized for exceptional engineering leadership, reliability, and service excellence across public digital systems.",
  },
  {
    title: "IT Project Competition Winner",
    organization: "CT Group of Technology, India",
    year: "2016",
    description: "First prize for innovative academic software engineering project and architectural execution.",
  },
];

export const INDUSTRIES_MAP = [
  { name: "Government & Civic Tech", icon: "Building2", desc: "National registries, transparency platforms, public portals" },
  { name: "Education & Academics", icon: "GraduationCap", desc: "School ERPs, gradebooks, institutional workflows" },
  { name: "Enterprise & Modernization", icon: "Boxes", desc: "Legacy migration, shared microservices, digital signing" },
  { name: "Document Management", icon: "FileText", desc: "Digital archiving, OCR, workflow automation, indexing" },
  { name: "E-Commerce & Retail", icon: "ShoppingBag", desc: "Multi-vendor marketplaces, mobile money integrations" },
  { name: "AI, Speech & NLP", icon: "Cpu", desc: "Whisper fine-tuning, real-time captioning, low-resource translation" },
  { name: "Digital Platforms & Sports", icon: "Trophy", desc: "High-concurrency fantasy sports, fan engagement" },
  { name: "Business Systems & SACCOs", icon: "Coins", desc: "Microfinance ledgers, invoicing, custom ERPs" },
];
