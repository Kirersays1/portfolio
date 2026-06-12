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
  { category: "LANGUAGES", items: ["Python", "R", "SQL", "JavaScript", "Bash"] },
  { category: "ML_FRAMEWORKS", items: ["scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "LightGBM"] },
  { category: "DATA_TOOLS", items: ["Pandas", "NumPy", "Spark", "dbt", "Airflow"] },
  { category: "VISUALIZATION", items: ["Tableau", "Power BI", "Plotly", "D3.js", "Seaborn"] },
  { category: "DATABASES", items: ["PostgreSQL", "BigQuery", "Snowflake", "MongoDB", "Redis"] },
  { category: "CLOUD_INFRA", items: ["GCP", "AWS", "Docker", "Kubernetes"] },
];

export const projects = [
  {
    id: "PRJ_001",
    name: "CHURN_PREDICTOR.py",
    description: "ML pipeline predicting customer churn with 94% accuracy. Reduced churn by 23% via targeted interventions using gradient boosting ensemble.",
    tags: ["Python", "XGBoost", "Airflow", "BigQuery"],
    status: "DEPLOYED",
    year: 2024,
    link: "#",
  },
  {
    id: "PRJ_002",
    name: "REALTIME_DASHBOARD.js",
    description: "Real-time sales analytics dashboard processing 2M+ events/day. Built with streaming architecture and interactive Plotly visualizations.",
    tags: ["Kafka", "Spark", "Plotly", "PostgreSQL"],
    status: "ACTIVE",
    year: 2024,
    link: "#",
  },
  {
    id: "PRJ_003",
    name: "NLP_CLASSIFIER.ipynb",
    description: "Sentiment analysis system for customer feedback across 12 languages. Fine-tuned multilingual BERT achieving 91% F1-score.",
    tags: ["PyTorch", "HuggingFace", "FastAPI", "Docker"],
    status: "DEPLOYED",
    year: 2023,
    link: "#",
  },
  {
    id: "PRJ_004",
    name: "PRICE_OPTIMIZER.r",
    description: "Dynamic pricing model using Bayesian optimization. Increased revenue by 18% in A/B testing across 500K+ products.",
    tags: ["R", "Stan", "dbt", "Snowflake"],
    status: "ARCHIVED",
    year: 2023,
    link: "#",
  },
];

export const work = [
  {
    company: "KEYPLEX",
    role: "FULLSTACK DEVELOPER",
    period: "2025 — 2026",
    location: "REMOTE",
    description: "Developed and optimized full-stack web platforms using WordPress, PHP, REST APIs, and MySQL, while managing hosting infrastructure and responsive frontend components.",
    achievements: ["Improved latency and storage by 60%", "Developed responsive UI componentes", "Established best practices"],
  },
  {
    company: "NDA",
    role: "DATA ANALYST",
    period: "2024 — 2025",
    location: "REMOTE",
    description: "Designed and maintained reporting infrastructure for 15+ stakeholders. Built automated pipeline saving 20hrs/week of manual work.",
    achievements: ["Automated 80% of weekly reports", "Created self-service analytics portal", "Trained 10+ non-technical users"],
  },
  {
    company: "AMOCALY",
    role: "MOBILE DEVELOPER",
    period: "2023 — 2024",
    location: "REMOTE",
    description: "Designed and maintained reporting infrastructure for 15+ stakeholders. Built automated pipeline saving 20hrs/week of manual work.",
    achievements: ["Automated 80% of weekly reports", "Created self-service analytics portal", "Trained 30+ non-technical users"],
  },
  {
    company: "TDCREATIVO",
    role: "GRAPHIC DESIGNER/TECHNICAL MAINTENANCE",
    period: "2015-2020",
    location: "MEXICO",
    description: "First hire. Built the company's first database from scratch, designed visual interfaces and prototypes while providing technical maintenance and creative solutions for client projects.",
    achievements: ["Created high-fidelity mockups and visual assets", "Translated user requirements into intuitive designs", "Delivered technical support and maintenance services"],
  },
];

export const articles = [
   {
    id: "ART_001",
    title: "Sign Language Translation with No Language Left Behind (NLLB): A Mexican Sign Language Case Study",
    date: "PENDING PUBLICATION",
    tags: ["Deep learning", "Transformers"],
    excerpt: "Using an LLM you can generate new sentences for unseen problems with language",
    link: "#",
  },
  {
    id: "ART_002",
    title: "A Lightweight CNN–Transformer for Histopathological Classification of Pancreatic Cancer",
    date: "PENDING PUBLICATION",
    tags: ["Deep learning", "Hyspatological images"],
    excerpt: "Bringing fast, lightweight, and explainable AI to early pancreatic cancer detection.",
    link: "#",
  },
  {
    id: "ART_003",
    title: "Convolutional Networks for Agriculture: MobileNetV3 vs. InceptionV3 in Strawberry Disease Recognition",
    date: "2025-12-20",
    tags: ["Python", "Deep Learning"],
    excerpt: "Empowering smart agriculture through portable AI for early strawberry disease detection.",
    link: "https://citt.itsm.edu.mx/ingeniantes/pdfversion/ingeniantes12no2vol3-esp.pdf",
  },
  {
    id: "ART_004",
    title: "Mobile detection of strawberry plant diseases using MobileNetV3 and Kotlin",
    date: "2025-09-20",
    tags: ["Mobile Development","Deep learning"],
    excerpt: "Bring the tools to everyone, specially the ones who needed them the most",
    link: "https://doi.org/10.35429/JITC.2025.9.20.2.1.7",
  },
  {
    id: "ART_005",
    title: "Geolocation mobile application for delivery of agrochemical packages",
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
    thesis: "Software Component for Detecting Diseases and Pests Based on Images of Strawberry and Blueberry Leaves",
    highlights: ["Teaching assistant - Computer lab", "Research assistant — AI Lab", "Published 2 papers in conferences"],
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
    description: "Read a lot of technical books, along as poetry, mistery and more romantic stuff",
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
