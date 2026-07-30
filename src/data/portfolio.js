export const personal = {
  name: "EVER_RODRIGUEZ",
  title: "DATA SCIENTIST // ANALYST",
  location: "MEXICO > REMOTE",
  bio: "Men without ideals are only animals.Turning raw data into actionable insights. Specializing in ML pipelines, statistical modeling, and dashboards that actually get used.",
  email: "everrodriguez7@gmail.com",
  github: "github.com/Kirersays1",
  linkedin: "linkedin.com/in/everessaurodriguezsandoval/",
};

export const skills = [
  {
    category: "LANGUAGES",
    items: ["Python", "R", "SQL", "JavaScript", "Bash"],
  },
  {
    category: "ML_FRAMEWORKS",
    items: ["scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "LightGBM"],
  },
  {
    category: "DATA_TOOLS",
    items: ["Pandas", "NumPy", "Spark", "dbt", "Airflow"],
  },
  {
    category: "VISUALIZATION",
    items: ["Tableau", "Power BI", "Plotly", "D3.js", "Seaborn"],
  },
  {
    category: "DATABASES",
    items: ["PostgreSQL", "BigQuery", "Snowflake", "MongoDB", "Redis"],
  },
  { category: "CLOUD_INFRA", items: ["GCP", "AWS", "Docker", "Kubernetes"] },
];

export const projects = [
  {
    id: "PRJ_001",
    category: "Data Science",
    images: ["../assets/kirby.webp", "../assets/kirby.png"],
    name: "CHURN_PREDICTOR.py",
    description:
      "Machine learning system that predicts which customers are likely to cancel a service, allowing the business to act before they leave. Achieved 94% prediction accuracy and helped reduce customer churn by 23% through targeted retention campaigns.",
    tags: ["Python", "XGBoost", "Airflow", "BigQuery"],
    status: "DEPLOYED",
    year: 2024,
    link: "#",
  },
  {
    id: "PRJ_002",
    category: "Mobile Development",
    images: ["src/assets/mobile_apps/poke.webp", "src/assets/mobile_apps/poke2.webp"],
    name: "POCKET_PEDIA",
    description:
      "Mobile app built with React Native that connects to a public API to display detailed information about Pokémon in a clean, easy-to-navigate interface. Published and available on Google Play.",
    tags: ["React Native", "API"],
    status: "DEPLOYED",
    year: 2026,
    link: "https://play.google.com/store/apps/details?id=com.kirer.pokeReact",
  },
  {
    id: "PRJ_003",
    category: "Mobile Development",
    images: ["src/assets/mobile_apps/SIGAMEX1.webp", "src/assets/mobile_apps/SIGAMEX2.webp"],
    name: "SIGAMEX",
    description:
      "Mobile application that helps track and manage empty agrochemical containers for safe recycling, handling, and environmentally responsible disposal. Currently used by more than 500 users, supporting more sustainable agricultural practices.",
    tags: ["Android", "API", "SQLITE", "Mobile Development"],
    status: "DEPLOYED",
    year: 2023,
    link: "https://play.google.com/store/apps/details?id=mx.sigamex.app&pcampaignid=web_share",
  },
  {
    id: "PRJ_004",
    category: "Mobile Development",
    images: ["src/assets/mobile_apps/note.webp", "src/assets/mobile_apps/note2.webp"],
    name: "SIMPLE_NOTER",
    description:
      "Lightweight note-taking app focused on speed, privacy, and simplicity — designed for users who want a distraction-free way to capture ideas. Built in Kotlin and published on Google Play.",
    tags: ["Kotlin", "SQLite", "Mobile Development"],
    status: "DEPLOYED",
    year: 2026,
    link: "https://play.google.com/store/apps/details?id=com.everrs.notasapp_sqlite",
  },
  {
    id: "PRJ_005",
    category: "Data Science",
    images: ["src/assets/healthbook/health1.jpg", "src/assets/healthbook/health2.png", "src/assets/healthbook/health3.png"],
    name: "AI-HEALTHCARE",
    description:
      "Collection of research projects applying artificial intelligence to healthcare challenges, including predicting heart failure risk and classifying early signs of Alzheimer's disease. Aimed at exploring how data science can support earlier and more accurate medical decisions.",
    tags: ["Python", "Jupyter", "Healthcare", "Research"],
    status: "DEPLOYED",
    year: 2026,
    link: "https://github.com/Kirersays1/AI-Healthcare",
  },
  {
    id: "PRJ_006",
    category: "Cibersecurity",
    images: ["src/assets/ciclope/ciclope.png", "src/assets/ciclope/IA.png"],
    name: "CICLOPE",
    description:
      "Cybersecurity tool that monitors network traffic in real time to detect potential intrusions or suspicious activity. Combines traditional rule-based detection with machine learning to identify both known and previously unseen threats.",
    tags: ["Python", "Jupyter", "Healthcare", "Research"],
    status: "DEPLOYED",
    year: 2026,
    link: "https://github.com/Kirersays1/ciclope",
  },
  {
    id: "PRJ_007",
    category: "Mobile Development",
    images: ["src/assets/mobile_apps/block.png"],
    name: "BLOCK_RUNNERS",
    description:
      "Videogame developed in Unity to Mobile devices, endless runner with global multiplayer score",
    tags: ["Unity", "Android", "Game development", "Blender"],
    status: "archived",
    year: 2022,
    link: "",
  }
];
export const work = [
  {
    company: "KEYPLEX",
    role: "FULLSTACK DEVELOPER",
    period: "2025 — 2026",
    location: "REMOTE",
    description:
      "Built and maintained full-stack web platforms using WordPress, PHP, REST APIs, and MySQL, while managing hosting infrastructure and developing responsive frontend interfaces for client-facing products.",
    achievements: [
      "Identified performance bottlenecks in the platform's backend and storage, and redesigned key processes — cutting latency and storage usage by 60%",
      "Analyzed inconsistent UI behavior across devices and delivered fully responsive components, improving usability across mobile and desktop",
      "Documented and standardized development workflows, establishing best practices that improved code quality and consistency across the team",
    ],
  },
  {
    company: "NDA",
    role: "DATA ANALYST",
    period: "2024 — 2025",
    location: "REMOTE",
    description:
      "Designed and maintained reporting infrastructure supporting 15+ business stakeholders, translating raw data into actionable insights for decision-making.",
    achievements: [
      "Identified repetitive manual reporting as a major time sink and built an automated pipeline, saving 20+ hours of work per week",
      "Automated 80% of weekly reports, reducing turnaround time and minimizing manual errors",
      "Designed a self-service analytics portal and trained 10+ non-technical users, increasing team-wide access to data without depending on the analytics team",
    ],
  },
  {
    company: "AMOCALY",
    role: "MOBILE DEVELOPER",
    period: "2023 — 2024",
    location: "REMOTE",
    description:
      "Contributed to the design and maintenance of internal reporting infrastructure supporting 15+ stakeholders, while developing mobile solutions to streamline data collection and reporting.",
    achievements: [
      "Identified inefficiencies in manual reporting processes and implemented an automated pipeline, saving 20+ hours of work per week",
      "Automated 80% of weekly reports, improving reliability and reducing manual workload",
      "Trained 30+ non-technical users on new tools, increasing adoption and reducing reliance on technical staff for routine reporting",
    ],
  },
  {
    company: "TDCREATIVO",
    role: "GRAPHIC DESIGNER / TECHNICAL MAINTENANCE",
    period: "2015 — 2022",
    location: "MEXICO",
    description:
      "First employee at the company. Built the organization's first database from the ground up, while designing visual interfaces, prototypes, and providing ongoing technical support for client projects.",
    achievements: [
      "Identified the lack of a structured data system and built the company's first database, improving information organization from day one",
      "Translated client requirements into high-fidelity mockups and prototypes, improving design approval speed and client satisfaction",
      "Provided ongoing technical maintenance and support, ensuring continuity and reliability of client-facing systems",
    ],
  },
];

export const publications = [
  {
    id: "ART_001",
    title:
      "Sign Language Translation with No Language Left Behind (NLLB): A Mexican Sign Language Case Study",
    date: "PENDING PUBLICATION",
    tags: ["Deep learning", "Transformers"],
    excerpt:
      "Using an LLM you can generate new sentences for unseen problems with language",
    link: "#",
  },
  {
    id: "ART_002",
    title:
      "A Lightweight CNN–Transformer for Histopathological Classification of Pancreatic Cancer",
    date: "PENDING PUBLICATION",
    tags: ["Deep learning", "Hyspatological images"],
    excerpt:
      "Bringing fast, lightweight, and explainable AI to early pancreatic cancer detection.",
    link: "#",
  },
  {
    id: "ART_003",
    title:
      "Convolutional Networks for Agriculture: MobileNetV3 vs. InceptionV3 in Strawberry Disease Recognition",
    date: "2025-12-20",
    tags: ["Python", "Deep Learning"],
    excerpt:
      "Empowering smart agriculture through portable AI for early strawberry disease detection.",
    link: "https://citt.itsm.edu.mx/ingeniantes/pdfversion/ingeniantes12no2vol3-esp.pdf",
  },
  {
    id: "ART_004",
    title:
      "Mobile detection of strawberry plant diseases using MobileNetV3 and Kotlin",
    date: "2025-09-20",
    tags: ["Mobile Development", "Deep learning"],
    excerpt:
      "Bring the tools to everyone, specially the ones who needed them the most",
    link: "https://doi.org/10.35429/JITC.2025.9.20.2.1.7",
  },
  {
    id: "ART_005",
    title:
      "Geolocation mobile application for delivery of agrochemical packages",
    date: "2024-03-12",
    tags: ["Mobile Development", "Geo-information"],
    excerpt: "Creating and promoting tools to ",
    link: "https://doi.org/10.35429/JITC.2023.18.7.31.37",
  },
];

export const education = [
  {
    id: "EDU_001",
    degree: "M.SC. COMPUTER SCIENCE",
    institution: "MEXICAN INSTITUTE OF TECHNOLOGY",
    location: "MEX",
    period: "2024 — 2026",
    gpa: "9.4 / 10.0",
    thesis:
      "Software Component for Detecting Diseases and Pests Based on Images of Strawberry and Blueberry Leaves",
    highlights: [
      "Teaching assistant - Computer lab",
      "Research assistant — AI Lab",
      "Published 2 papers in conferences",
    ],
  },
  {
    id: "EDU_002",
    degree: "B.SC. INFORMATIC ENGINEERING",
    institution: "MEXICAN INSTITUTE OF TECHNOLOGY",
    location: "MEX",
    period: "2019-2023",
    gpa: "9.5 / 10.0",
    thesis: "SIGAMEX APP",
    highlights: ["Graduate with Honor", "Computer Department Honor Roll"],
  },
];

export const certifications = [
  {
    id: "CERT_001",
    name: "GOOGLE DATA ANALYSIS PROFESSIONAL CERTIFICATE",
    issuer: "GOOGLE",
    date: "2023-01",
    expires: "NO-EXPIRATION",
    credentialId: "8B4EM8FD6NTH",
    level: "PROFESSIONAL",
    verified: true,
    link: "https://coursera.org/share/d11eb6175a78695babb89513fa0dbcfb",
  },
  {
    id: "CERT_002",
    name: "GOOGLE CIBERSECURITY PROFESSIONAL CERTIFICATE",
    issuer: "GOOGLE",
    date: "2024-01",
    expires: "NO-EXPIRATION",
    credentialId: "411b5294-4252-497b-b6d7-3a9992b8dd98",
    level: "PROFESSIONAL",
    verified: true,
    link: "https://www.credly.com/earner/earned/badge/411b5294-4252-497b-b6d7-3a9992b8dd98",
  },
  {
    id: "CERT_003",
    name: "DATA SCIENCE PROFESSIONAL",
    issuer: "IBM",
    date: "2025-10",
    expires: "NO-EXPIRATION",
    credentialId: "eb1a2f9a-8705-4b91-beb7-9033725b738d",
    level: "PROFESSIONAL",
    verified: true,
    link: "https://www.credly.com/earner/earned/badge/eb1a2f9a-8705-4b91-beb7-9033725b738d",
  },
  {
    id: "CERT_004",
    name: "GOOGLE CLOUD DATA ANALYTICS",
    issuer: "GOOGLE",
    date: "2026-06",
    expires: "2029-06",
    credentialId: "3082fe71-f494-4f1f-b8e8-fb76f4a4949f",
    level: "ASSOCIATE",
    verified: true,
    link: "https://www.credly.com/earner/earned/badge/3082fe71-f494-4f1f-b8e8-fb76f4a4949f",
  },
];

export const hobbies = [
  {
    id: "HOB_001",
    name: "READING",
    description:
      "Read a lot of technical books, along as poetry, mistery and more romantic stuff",
    tags: ["Reading", "Books", "Mistery"],
    level: 95,
  },
  {
    id: "HOB_002",
    name: "GAMING",
    description: "Competitive online player",
    tags: ["Strategy", "Games"],
    level: 78,
  },
  {
    id: "HOB_004",
    name: "ART",
    description: "Drawing, Illustration and 3D modelling",
    tags: ["Art", "Blender", "Art"],
    level: 70,
  },
  {
    id: "HOB_005",
    name: "DANCING",
    description: "POLINESIAN DANCE, DANCING ALL AROUND MEXICO SINCE 2009",
    tags: ["Dancing", "Polinesian", "IRL"],
    level: 68,
  },
];

export const contact = {
  email: "everrodriguez7@gmail.com",
  github: "github.com/Kirersays1",
  linkedin: "linkedin.com/in/everessaurodriguezsandoval/",
  location: "GUADALAJARA, MX",
  availability: "OPEN_TO_OFFERS",
  responseTime: "< 24 HRS",
};
