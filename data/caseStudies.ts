export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  timeframe: string;
  role: string;
  clientOrOrg: string;
  liveUrl?: string;
  statusBadge?: string;
  problem: {
    overview: string;
    keyPainPoints: string[];
  };
  solution: {
    overview: string;
    keyDeliverables: string[];
  };
  architecture: {
    description: string;
    flowSteps: { step: string; label: string; detail: string }[];
    techStack: { category: string; items: string[] }[];
  };
  keyDecisions: { title: string; rationale: string }[];
  impactAndResults: { metric?: string; label: string; text: string }[];
  lessonsLearned: string[];
  relatedProjects: string[];
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "bika-document-management": {
    slug: "bika-document-management",
    title: "BIKA",
    subtitle: "Enterprise Digital Document Archiving, Indexing & Workflow Platform",
    category: "Document Management & Enterprise",
    timeframe: "2020 – Present",
    role: "Lead Architect & Product Engineer",
    clientOrOrg: "Tekafrika / Creative Geeks",
    liveUrl: "https://bika.rw",
    statusBadge: "Active Production",
    problem: {
      overview:
        "Modern enterprises and institutions in East Africa face massive operational friction due to paper document hoarding, manual filing cabinets, lost legal records, and slow search retrieval taking hours or days.",
      keyPainPoints: [
        "Unstructured paper archives vulnerable to physical degradation, loss, and unauthorized access",
        "Zero instant full-text search capability across legacy historical records",
        "Inefficient multi-department approval routing requiring physical handoffs of sensitive paperwork",
        "High cost of physical archive storage and lack of regulatory compliance retention policies",
      ],
    },
    solution: {
      overview:
        "Engineered BIKA as a modern digital document lifecycle platform. It turns physical and digital documents into indexed, structured, searchable assets with fine-grained access control, audit logging, and automated routing.",
      keyDeliverables: [
        "High-throughput document ingestion supporting batch scans, metadata extraction, and categorized indexing",
        "Enterprise Role-Based Access Control (RBAC) preventing unauthorized access with strict tenant boundaries",
        "Sub-second search engine indexing millions of document metadata fields",
        "Digital approval chains with automated notification triggers and immutable audit logs",
      ],
    },
    architecture: {
      description:
        "Multi-tier modular architecture designed for high availability, security, and low memory footprint.",
      flowSteps: [
        { step: "01", label: "Ingestion & Upload", detail: "Multi-file batch upload via secure chunked REST endpoint with mime-type verification." },
        { step: "02", label: "Metadata & Indexing", detail: "Automated tagging, custom taxonomy classification, and database indexing." },
        { step: "03", label: "Security & RBAC", detail: "Tokenized session validation with granular permission gates per document folder." },
        { step: "04", label: "Workflow Routing", detail: "State-machine approval chains dispatching tasks to designated reviewers." },
        { step: "05", label: "Encrypted Archival", detail: "Long-term cold/hot tier storage with SHA-256 tamper-evident checksums." },
      ],
      techStack: [
        { category: "Backend", items: ["PHP", "Custom MVC", "RESTful APIs", "JWT Authentication"] },
        { category: "Database & Storage", items: ["MySQL", "Optimized B-Tree Indices", "Encrypted Blob Storage"] },
        { category: "Frontend", items: ["JavaScript (ES6+)", "Responsive HTML5/CSS3", "Async Upload Handlers"] },
        { category: "Infrastructure", items: ["Docker", "Linux / Nginx", "Automated Backup Daemons"] },
      ],
    },
    keyDecisions: [
      {
        title: "Modular MVC with Custom Routing",
        rationale: "Ensured ultra-light server resource consumption on standard Linux host servers while maximizing throughput.",
      },
      {
        title: "Deterministic Checksum Hashing",
        rationale: "Every uploaded file receives a cryptographic SHA-256 hash to prevent duplicate uploads and guarantee tamper detection.",
      },
    ],
    impactAndResults: [
      { metric: "< 2.0s", label: "Retrieval Time", text: "Reduced average file search turnaround from hours to under two seconds." },
      { metric: "100%", label: "Audit Traceability", text: "Every document view, download, or edit is permanently logged." },
      { metric: "Zero", label: "Document Loss", text: "Eliminated misplaced records across deploying enterprise organizations." },
    ],
    lessonsLearned: [
      "User interface simplicity is the #1 driver of adoption when transitioning non-technical staff from physical paper.",
      "Optimizing database indexing early prevents severe latency spikes when records scale past 100k rows.",
    ],
    relatedProjects: ["winschool-modernization", "digital-signing-platform"],
  },

  "winschool-modernization": {
    slug: "winschool-modernization",
    title: "WinSchool",
    subtitle: "Modernization of Core Academic Administration & Student Information Platform",
    category: "Education & Legacy Modernization",
    timeframe: "2025 – Present",
    role: "Senior Software Developer",
    clientOrOrg: "IST Africa Ltd",
    statusBadge: "Active Modernization",
    problem: {
      overview:
        "The incumbent academic administration system relied on legacy monolithic structures and outdated UI frameworks, leading to slow feature iteration, difficult maintenance, and poor cross-device responsiveness for teachers and administrators.",
      keyPainPoints: [
        "Coupled legacy backend tightly bound to older rendering engines, slowing development cycles",
        "Non-responsive desktop-oriented interfaces making mobile and tablet grading cumbersome for educators",
        "Complex database stored procedures that created performance bottlenecks during end-of-term grading rushes",
      ],
    },
    solution: {
      overview:
        "Architecting a clean migration to a modern decoupled Single Page Application (SPA) frontend in Vue.js communicating with modular, high-performance Java Spring Boot backend microservices.",
      keyDeliverables: [
        "Decoupled Vue.js frontend with reusable atomic design system and reactive state management",
        "Robust Java Spring Boot REST API layer with stateless token authentication and caching",
        "Refactored relational schema supporting complex academic terms, dynamic grading scales, and fee schedules",
        "Agile CI/CD pipelines enabling seamless staging and automated test verification",
      ],
    },
    architecture: {
      description:
        "Decoupled client-server architecture with Spring Boot REST services powering a reactive Vue.js interface.",
      flowSteps: [
        { step: "01", label: "Client SPA (Vue.js)", detail: "Reactive components for grades, attendance, student profiles, and administrative reports." },
        { step: "02", label: "API Gateway & Security", detail: "Spring Security with JWT tokens, role-based URL intercepts, and rate limiting." },
        { step: "03", label: "Spring Boot Micro-Services", detail: "Modular domain logic for Academic Periods, Billing, Examination, and Roster." },
        { step: "04", label: "Data Persistence", detail: "PostgreSQL with connection pooling, JPA/Hibernate mapping, and migration scripts." },
      ],
      techStack: [
        { category: "Frontend", items: ["Vue.js 3", "Pinia / Vuex", "Tailwind CSS / modern UI", "Vite"] },
        { category: "Backend", items: ["Java 17+", "Spring Boot 3", "Spring Data JPA", "Spring Security"] },
        { category: "Database", items: ["PostgreSQL", "Flyway Migrations", "Redis Caching"] },
        { category: "DevOps", items: ["Docker", "Git / GitHub Actions", "Maven"] },
      ],
    },
    keyDecisions: [
      {
        title: "Decoupled Architecture with Vue.js & Spring Boot",
        rationale: "Separating UI and backend allows independent scaling, parallel frontend/backend sprint velocity, and future mobile client readiness.",
      },
      {
        title: "Incremental Migration Strategy (Strangler Pattern)",
        rationale: "Allowed live schools to continue normal operations while modules were iteratively migrated and deployed.",
      },
    ],
    impactAndResults: [
      { metric: "3x", label: "Performance Gain", text: "Page load and batch grading calculations execute over three times faster." },
      { metric: "100%", label: "Responsive Access", text: "Teachers can now record attendance and grades seamlessly from phones and tablets." },
      { metric: "Clean", label: "Code Maintainability", text: "Standardized modern Java Spring Boot stack drastically reduced technical debt." },
    ],
    lessonsLearned: [
      "Incremental data migration with automated schema verification prevents regression errors in complex legacy databases.",
      "Clear API contracts (OpenAPI/Swagger) dramatically improve collaboration between frontend and backend developers.",
    ],
    relatedProjects: ["schoolbox-education-platform", "digital-signing-platform"],
  },

  "digital-signing-platform": {
    slug: "digital-signing-platform",
    title: "Digital Signing Platform",
    subtitle: "Enterprise Cryptographic Document Signing & Verification Micro-Engine",
    category: "Security & Enterprise Infrastructure",
    timeframe: "2025 – Present",
    role: "Senior Software Developer",
    clientOrOrg: "IST Africa Ltd",
    statusBadge: "Currently Building",
    problem: {
      overview:
        "Enterprise client workflows require legally sound, tamper-evident digital signatures on contracts, school transcripts, and administrative documents without dependency on expensive third-party SaaS vendors.",
      keyPainPoints: [
        "High recurring cost and data sovereignty issues with international commercial e-sign vendors",
        "Lack of standardized API endpoints for internal products to request multi-party signatures",
        "Absence of cryptographic verification to prove document integrity after signing",
      ],
    },
    solution: {
      overview:
        "Architecting a shared, reusable enterprise signing microservice handling certificate management, PDF stamp coordinates, multi-party sequential/parallel approvals, and cryptographic tamper verification.",
      keyDeliverables: [
        "Cryptographic signature engine embedding tamper-evident hashes into PDF document structures",
        "Multi-party workflow coordinator with customizable signing orders and webhook notifications",
        "Reusable Vue.js signature canvas component with touch/mouse capture and drawn/typed options",
        "Comprehensive verification endpoint allowing third parties to validate signed document authenticity",
      ],
    },
    architecture: {
      description:
        "Event-driven microservice architecture with asynchronous document rendering and signing queues.",
      flowSteps: [
        { step: "01", label: "Signing Request", detail: "Parent application dispatches document payload and participant matrix via secure REST API." },
        { step: "02", label: "Token Generation", detail: "Unique encrypted one-time access tokens generated per recipient with expiration bounds." },
        { step: "03", label: "Signature Capture", detail: "Recipient signs via web interface; signature coordinates and metadata captured." },
        { step: "04", label: "Cryptographic Hashing", detail: "Java backend stamps PDF, calculates SHA-256 hash, and seals document metadata." },
        { step: "05", label: "Audit & Webhook", detail: "Immutable audit certificate appended; webhooks notify integrated applications." },
      ],
      techStack: [
        { category: "Backend", items: ["Java Spring Boot", "Apache PDFBox / iText", "BouncyCastle Crypto", "REST APIs"] },
        { category: "Frontend", items: ["Vue.js", "HTML5 Canvas", "Tailwind CSS"] },
        { category: "Database & Security", items: ["PostgreSQL", "Cryptographic Hashing", "JWT / One-Time Tokens"] },
      ],
    },
    keyDecisions: [
      {
        title: "Shared Plug-and-Play Microservice Architecture",
        rationale: "Allows WinSchool and other IST Africa enterprise software suites to consume signing capabilities via a single standard API.",
      },
      {
        title: "Stateless Tokenized Signing Links",
        rationale: "External signers can complete signatures without needing a registered system account, maximizing completion rates.",
      },
    ],
    impactAndResults: [
      { metric: "Zero", label: "Vendor Lock-in", text: "Total internal ownership of cryptographic signing infrastructure." },
      { metric: "100%", label: "Tamper-Evident", text: "Any modification to signed PDFs immediately invalidates the verification check." },
      { metric: "Reusable", label: "Enterprise Asset", text: "Engineered to serve multiple downstream applications out of the box." },
    ],
    lessonsLearned: [
      "Precision PDF coordinate handling across varying DPIs requires strict mathematical normalization.",
      "Asynchronous webhook dispatch ensures client systems stay updated without aggressive polling.",
    ],
    relatedProjects: ["bika-document-management", "winschool-modernization"],
  },

  "kinyarwanda-english-ai-translation": {
    slug: "kinyarwanda-english-ai-translation",
    title: "Real-Time Kinyarwanda–English Speech Translation & Auto-Captioning",
    subtitle: "Applied AI, Low-Resource Language Speech Recognition & Live Captioning",
    category: "AI / NLP & Speech Engineering",
    timeframe: "2024 – 2025",
    role: "AI / Machine Learning Engineer & Researcher",
    clientOrOrg: "Carnegie Mellon University Africa",
    statusBadge: "Research & Prototype",
    problem: {
      overview:
        "Kinyarwanda is spoken by over 13 million people, yet it remains under-represented in modern conversational AI and automatic speech recognition (ASR) pipelines. Existing commercial models produce high Word Error Rates (WER) on spontaneous local speech and lack low-latency cross-lingual translation.",
      keyPainPoints: [
        "Severe scarcity of aligned audio-text parallel corpora for Kinyarwanda",
        "Acoustic dialect variations and code-switching between Kinyarwanda, French, and English",
        "High latency in multi-stage ASR + MT pipelines preventing live subtitle generation",
      ],
    },
    solution: {
      overview:
        "Developed an optimized speech-to-text and translation pipeline leveraging fine-tuned OpenAI Whisper architectures and NLP language translation models to generate real-time English subtitles from live Kinyarwanda speech.",
      keyDeliverables: [
        "Curated and normalized speech dataset with audio pre-processing and silence trimming",
        "Fine-tuned Whisper acoustic model checkpoints tailored for Kinyarwanda phonetics",
        "Optimized sequence-to-sequence translation layer converting transcribed tokens into fluent English text",
        "Real-time streaming caption interface displaying synchronized subtitles with confidence indicators",
      ],
    },
    architecture: {
      description:
        "End-to-end neural speech processing pipeline from streaming audio capture to real-time subtitle projection.",
      flowSteps: [
        { step: "01", label: "Audio Ingestion", detail: "16kHz mono audio stream sampled via WebAudio API or microphone input." },
        { step: "02", label: "Spectrogram & Mel-Features", detail: "Raw waveform converted into 80-channel log-mel spectrogram features." },
        { step: "03", label: "Acoustic Modeling (Whisper)", detail: "Transformer encoder-decoder predicts Kinyarwanda phonetic and textual tokens." },
        { step: "04", label: "Neural Machine Translation", detail: "Cross-lingual alignment converts Kinyarwanda semantics to English expressions." },
        { step: "05", label: "Caption Streamer", detail: "Synchronized subtitle overlays projected with low latency on active video stream." },
      ],
      techStack: [
        { category: "AI & Models", items: ["OpenAI Whisper", "Hugging Face Transformers", "PyTorch", "NLP"] },
        { category: "Data & Processing", items: ["Python", "Pandas", "NumPy", "Librosa / SoundFile"] },
        { category: "Evaluation & Benchmarks", items: ["BLEU Score Evaluation", "Word Error Rate (WER)"] },
      ],
    },
    keyDecisions: [
      {
        title: "Direct Speech-to-Translation vs Cascaded Pipeline",
        rationale: "Evaluated both direct multitask decoding and cascaded ASR->MT, optimizing for minimum inference delay in streaming scenarios.",
      },
      {
        title: "Acoustic Pre-filtering & Normalization",
        rationale: "Applied adaptive noise reduction to audio inputs to maintain model confidence across noisy everyday recording environments.",
      },
    ],
    impactAndResults: [
      { metric: "Low", label: "Latency Subtitling", text: "Achieved streaming inference suitable for near-live broadcast captioning." },
      { metric: "High", label: "Semantic Accuracy", text: "Demonstrated strong BLEU and semantic alignment on test validation splits." },
      { metric: "Novel", label: "African NLP Impact", text: "Contributed to expanding AI accessibility for low-resource African languages at CMU Africa." },
    ],
    lessonsLearned: [
      "Domain-specific phonetic vocabulary is essential for handling local civic and geographical terminology.",
      "Audio chunking window sizes must balance translation context with perceptible user latency.",
    ],
    relatedProjects: ["bika-document-management", "beneficial-ownership-registry"],
  },

  "beneficial-ownership-registry": {
    slug: "beneficial-ownership-registry",
    title: "Beneficial Ownership Registry",
    subtitle: "National-Scale Enterprise Compliance & Corporate Transparency System",
    category: "Government Technology & Registry",
    timeframe: "2019 – 2022",
    role: "IT Applications Specialist",
    clientOrOrg: "Rwanda Development Board (RDB)",
    statusBadge: "Active National Registry",
    problem: {
      overview:
        "To comply with international Financial Action Task Force (FATF) standards and enhance national economic governance, Rwanda needed a reliable, high-security digital registry to capture and verify the true beneficial owners of all registered companies.",
      keyPainPoints: [
        "Complex corporate ownership structures with multi-tier holding companies needing clear disclosure",
        "Strict national regulatory deadlines requiring high system availability for tens of thousands of corporate filings",
        "High sensitivity of executive identity information requiring rigorous privacy protection and audit logs",
      ],
    },
    solution: {
      overview:
        "Engineered the digital infrastructure enabling companies to submit structured beneficial ownership declarations, validated against national business registries and scrutinized by regulatory inspectors.",
      keyDeliverables: [
        "Public and agent submission portal with multi-step validation wizard for corporate ownership trees",
        "Integration with core national registration databases for instant business entity verification",
        "Regulatory inspection back-office enabling compliance officers to audit, approve, or request filing amendments",
        "Automated compliance tracking and reminder notifications for annual filings",
      ],
    },
    architecture: {
      description:
        "Secure government portal architecture interfaced with national registration databases and compliance audit data stores.",
      flowSteps: [
        { step: "01", label: "Corporate Authentication", detail: "Authorized company directors authenticate via verified national credentials." },
        { step: "02", label: "Ownership Tree Input", detail: "Interactive submission of direct and indirect shareholding percentages." },
        { step: "03", label: "National DB Cross-Check", detail: "API lookup against business registry to verify legal entity standing and IDs." },
        { step: "04", label: "Compliance Review", detail: "RDB analysts review submissions with automated anomaly flags." },
        { step: "05", label: "Registry Storage", detail: "Secure encrypted record storage with immutable regulatory change log." },
      ],
      techStack: [
        { category: "Web & Logic", items: ["PHP", "JavaScript", "Enterprise MVC Architecture", "REST APIs"] },
        { category: "Database", items: ["Oracle Database", "MySQL", "Relational Integrity Constraints"] },
        { category: "Security", items: ["RBAC", "SSL/TLS", "Encrypted Data at Rest", "Comprehensive Audit Trails"] },
      ],
    },
    keyDecisions: [
      {
        title: "Step-by-Step Validation Wizard",
        rationale: "Drastically reduced incomplete or erroneous filing submissions by breaking complex legal disclosure into guided logical sections.",
      },
      {
        title: "Granular Audit Trail",
        rationale: "Every administrative review, amendment request, or data access was permanently logged to maintain absolute integrity.",
      },
    ],
    impactAndResults: [
      { metric: "National", label: "Scale Deployment", text: "Successfully processed compliance filings for corporate entities across Rwanda." },
      { metric: "99.9%", label: "Uptime Reliability", text: "Maintained continuous system stability throughout high-volume regulatory deadline peaks." },
      { metric: "FATF", label: "Compliance Alignment", text: "Helped advance national economic compliance with international transparency standards." },
    ],
    lessonsLearned: [
      "Government-scale systems require intensive UX validation to ensure high compliance without needing extensive user manuals.",
      "Strict data normalization at intake prevents complex data cleanup efforts in downstream audit databases.",
    ],
    relatedProjects: ["wipofile-ipas-migration", "bika-document-management"],
  },

  "fanafootball-fantasy-platform": {
    slug: "fanafootball-fantasy-platform",
    title: "FanaFootball",
    subtitle: "African Fantasy Sports & Live Match Telemetry Platform",
    category: "Digital Product & Consumer Platform",
    timeframe: "2021 – 2023",
    role: "Founder & Lead Product Architect",
    clientOrOrg: "Tekafrika / Creative Geeks",
    statusBadge: "Award Winning Product",
    problem: {
      overview:
        "African sports enthusiasts had no dedicated digital platform to play fantasy football focused on domestic and regional African leagues, with existing global platforms exclusively prioritizing European leagues.",
      keyPainPoints: [
        "Complete absence of digitized fantasy sports infrastructure for domestic African football",
        "Difficulties managing high concurrent traffic spikes during matchdays in regions with variable mobile internet speeds",
        "Lack of real-time gamified statistics aggregation for local clubs and players",
      ],
    },
    solution: {
      overview:
        "Designed and built FanaFootball from the ground up as a mobile-optimized fantasy sports and community platform offering live scoring, squad management, custom leagues, and real-time leaderboards.",
      keyDeliverables: [
        "High-performance gamification rules engine calculating points based on live match actions",
        "Mobile-first responsive web client designed for fast loading on low-bandwidth mobile networks",
        "Social league features enabling fans to create private leagues and compete with friends",
        "Admin control room for real-time match event entry, score verification, and prize distribution",
      ],
    },
    architecture: {
      description:
        "Event-driven scoring pipeline designed to absorb massive concurrent user spikes before match deadlines.",
      flowSteps: [
        { step: "01", label: "User Squad Selection", detail: "Users assemble squads under budget constraints and submit before gameweek deadline." },
        { step: "02", label: "Match Event Feed", detail: "Admin operators and live feeds input goals, assists, clean sheets, and cards." },
        { step: "03", label: "Point Calculation Engine", detail: "Asynchronous background workers recalculate scores for all active fantasy teams." },
        { step: "04", label: "Leaderboard Aggregation", detail: "Cached Redis/SQL standings update in real-time across global and mini-leagues." },
      ],
      techStack: [
        { category: "Full-Stack", items: ["Node.js", "JavaScript (ES6+)", "PHP", "REST APIs"] },
        { category: "Database & Cache", items: ["MySQL", "Redis Caching", "Indexed Leaderboards"] },
        { category: "Client", items: ["Mobile-Responsive Web App", "WebSockets / Polling", "Tailwind CSS"] },
      ],
    },
    keyDecisions: [
      {
        title: "Deadline Snapshot Architecture",
        rationale: "Freezing team states into cached snapshots at kickoff prevented race conditions and relieved database load during matches.",
      },
      {
        title: "Bandwidth-Optimized UI Asset Delivery",
        rationale: "Used vector graphics and lightweight SVG badges to ensure instant loading over 3G/4G mobile networks.",
      },
    ],
    impactAndResults: [
      { metric: "Runner-Up", label: "Hanga Pitchfest 2022", text: "Recognized as one of Rwanda's top tech startups by the Ministry of ICT & Innovation." },
      { metric: "Real-Time", label: "Live Gamification", text: "Delivered sub-second leaderboard updates during domestic match weekends." },
      { metric: "Community", label: "Fan Engagement", text: "Engaged thousands of passionate domestic football supporters." },
    ],
    lessonsLearned: [
      "Consumer gamification requires meticulous attention to UI micro-interactions to foster continuous daily engagement.",
      "Asynchronous background task processing is essential for handling point recalculations across thousands of fantasy teams.",
    ],
    relatedProjects: ["umusambi-delivery", "ecommerce-platforms"],
  },

  "schoolbox-education-platform": {
    slug: "schoolbox-education-platform",
    title: "SCHOOLBOX",
    subtitle: "Holistic Digital Administration & Academic Records Platform",
    category: "Education & ERP",
    timeframe: "2018 – 2022",
    role: "Product Manager & Software Architect",
    clientOrOrg: "Creative Geeks",
    statusBadge: "Production ERP",
    problem: {
      overview:
        "Primary and secondary schools struggled with paper report card generation, manual fee ledger reconciliations, and disconnected parent communication.",
      keyPainPoints: [
        "Teachers spending weeks manually calculating grade averages and writing report cards by hand",
        "Bursars managing school fees through error-prone paper receipt books",
        "Parents lacking timely visibility into student attendance and academic progress",
      ],
    },
    solution: {
      overview:
        "Engineered SCHOOLBOX as an all-in-one school ERP unifying grading, student enrollment, fee collection ledgers, and automated SMS alerts.",
      keyDeliverables: [
        "Automated grade calculation and batch PDF report card generation in a single click",
        "Financial tracking ledger for tuition fees, installments, and outstanding balances",
        "SMS gateway integration sending attendance notices and fee reminders directly to parents' phones",
        "Role-based access portals for Headmasters, Teachers, Accountants, and Guardians",
      ],
    },
    architecture: {
      description:
        "Relational academic ERP architecture with PDF generation engine and external SMS gateway pipelines.",
      flowSteps: [
        { step: "01", label: "Academic Term Setup", detail: "Configuration of terms, grading weights, courses, and teacher assignments." },
        { step: "02", label: "Grade Entry", detail: "Teachers input marks via clean, spreadsheet-like tabular web interfaces." },
        { step: "03", label: "Calculation Engine", detail: "Automated ranking, GPA calculations, and class performance aggregations." },
        { step: "04", label: "Batch PDF Generation", detail: "High-speed rendering of printable, official school-branded report cards." },
        { step: "05", label: "SMS Broadcast", detail: "Automated notification dispatch to guardian phone numbers." },
      ],
      techStack: [
        { category: "Backend", items: ["PHP", "Custom MVC", "REST APIs", "TCPDF / FPDF Engine"] },
        { category: "Frontend", items: ["JavaScript", "Bootstrap", "AJAX", "HTML5"] },
        { category: "Data & Telephony", items: ["MySQL", "SMS Gateway Integration", "Cron Job Schedulers"] },
      ],
    },
    keyDecisions: [
      {
        title: "Tabular Fast Grade Entry",
        rationale: "Designed keyboard-navigable mark sheets mirroring Excel to allow teachers to enter an entire class in minutes.",
      },
      {
        title: "Batch PDF Generation Queue",
        rationale: "Generated printable report cards asynchronously to prevent server timeouts when processing 500+ student batches.",
      },
    ],
    impactAndResults: [
      { metric: "90%", label: "Time Saved on Reports", text: "Reduced report card preparation time from 2 weeks to less than 1 hour." },
      { metric: "100%", label: "Fee Transparency", text: "Eliminated accounting discrepancies between parents and school bursars." },
      { metric: "Instant", label: "Parent Updates", text: "Automated thousands of SMS alerts across multiple school academic terms." },
    ],
    lessonsLearned: [
      "Offline-friendly and forgiving UI inputs are critical when dealing with intermittent school campus connections.",
      "Clear visual formatting on generated PDF report cards creates immense trust with school leadership.",
    ],
    relatedProjects: ["winschool-modernization", "bika-document-management"],
  },

  "wipofile-ipas-migration": {
    slug: "wipofile-ipas-migration",
    title: "WIPOFILE → IPAS System Migration",
    subtitle: "National Intellectual Property Data Modernization & Zero-Loss ETL Pipeline",
    category: "Legacy Modernization & Data Engineering",
    timeframe: "2019 – 2020",
    role: "IT Applications Specialist",
    clientOrOrg: "Rwanda Development Board (RDB)",
    statusBadge: "Mission Accomplished",
    problem: {
      overview:
        "The Rwanda Development Board needed to migrate multi-decade national patent, trademark, and industrial design registrations from the legacy WIPOFILE system to the modernized WIPO IPAS platform without losing a single historical record or disrupting active legal filings.",
      keyPainPoints: [
        "Incompatible legacy database schemas with decades of accumulated unstructured data",
        "Strict legal compliance: corrupt or missing trademark files could lead to severe intellectual property litigation",
        "Requirement for zero operational downtime during the transition for patent examiners and applicants",
      ],
    },
    solution: {
      overview:
        "Architected and executed an end-to-end Extract, Transform, Load (ETL) pipeline with comprehensive data validation scripts, automated reference reconciliation, and multi-tier verification checks.",
      keyDeliverables: [
        "Custom SQL and Bash extraction pipelines normalizing legacy trademark and patent records",
        "Automated schema translation layer mapping legacy entities into IPAS relational structures",
        "Discrepancy detection scripts highlighting orphaned files and historical data inconsistencies",
        "Post-migration verification suite confirming 100% data integrity before official switchover",
      ],
    },
    architecture: {
      description:
        "Multi-stage ETL migration pipeline with iterative validation and automated integrity rollback guarantees.",
      flowSteps: [
        { step: "01", label: "Legacy Extraction", detail: "Dump and staging of multi-decade historical records from legacy WIPOFILE storage." },
        { step: "02", label: "Data Sanitization", detail: "Automated scripts clean encoding errors, normalize dates, and resolve orphaned foreign keys." },
        { step: "03", label: "Schema Transformation", detail: "Mapping legacy records to modern WIPO IPAS relational database structures." },
        { step: "04", label: "Target Ingestion", detail: "Batched, transactional loading into the production IPAS Oracle/SQL database." },
        { step: "05", label: "Audit & Validation", detail: "Checksum and record-by-record comparison ensuring 100% parity." },
      ],
      techStack: [
        { category: "Data & ETL", items: ["SQL", "Bash Scripting", "ETL Pipelines", "Data Normalization"] },
        { category: "Databases", items: ["Oracle Database", "Relational Schema Design", "Legacy File Stores"] },
        { category: "Standards", items: ["WIPO IPAS Standards", "Regulatory Compliance", "Data Integrity Audits"] },
      ],
    },
    keyDecisions: [
      {
        title: "Iterative Dry-Run Strategy",
        rationale: "Conducted multiple test migrations on staging clones to detect edge cases prior to final production switchover.",
      },
      {
        title: "Automated Record Discrepancy Flagging",
        rationale: "Built scripts that flagged any incomplete historical records for manual legal review before writing to IPAS.",
      },
    ],
    impactAndResults: [
      { metric: "100%", label: "Data Integrity", text: "Zero loss of historical patent, trademark, or industrial design records." },
      { metric: "Zero", label: "Disruption", text: "Flawless cutover with zero downtime for civil service IP examiners." },
      { metric: "WIPO", label: "Compliant", text: "Full compliance with international World Intellectual Property Organization standards." },
    ],
    lessonsLearned: [
      "Rigorous data auditing on legacy systems always uncovers decades-old anomalies that require explicit mapping rules.",
      "Working closely with international technical bodies (WIPO) ensures seamless adoption of enterprise software standards.",
    ],
    relatedProjects: ["beneficial-ownership-registry", "bika-document-management"],
  },
};
