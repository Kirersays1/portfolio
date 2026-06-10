export const personal = {
  name: "EVER_RODRIGUEZ",
  title: "DATA SCIENTIST // ANALYST",
  location: "MEXICO > REMOTE",
  bio: "Turning raw data into actionable insights. Specializing in ML pipelines, statistical modeling, and dashboards that actually get used.",
  email: "everrodriguez7@gmail.com",
  github: "github.com/alexreyes",
  linkedin: "linkedin.com/in/alexreyes",
};

export const skills = [
  { category: "LANGUAGES", items: ["Python", "R", "SQL", "JavaScript", "Bash"] },
  { category: "ML_FRAMEWORKS", items: ["scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "LightGBM"] },
  { category: "DATA_TOOLS", items: ["Pandas", "NumPy", "Spark", "dbt", "Airflow"] },
  { category: "VISUALIZATION", items: ["Tableau", "Power BI", "Plotly", "D3.js", "Seaborn"] },
  { category: "DATABASES", items: ["PostgreSQL", "BigQuery", "Snowflake", "MongoDB", "Redis"] },
  { category: "CLOUD_INFRA", items: ["GCP", "AWS", "Docker", "Kubernetes", "Terraform"] },
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
    company: "DATANEXUS_CORP",
    role: "SR. DATA SCIENTIST",
    period: "2022 — PRESENT",
    location: "MEX_CITY",
    description: "Lead data science initiatives for 3 product lines. Built ML infrastructure serving 50M+ predictions/month. Mentoring team of 4 junior scientists.",
    achievements: ["Reduced model inference latency by 60%", "Launched 2 production ML models", "Established MLOps best practices"],
  },
  {
    company: "ANALYTICS_LABS",
    role: "DATA ANALYST",
    period: "2020 — 2022",
    location: "REMOTE",
    description: "Designed and maintained reporting infrastructure for 15+ stakeholders. Built automated pipeline saving 20hrs/week of manual work.",
    achievements: ["Automated 80% of weekly reports", "Created self-service analytics portal", "Trained 30+ non-technical users"],
  },
  {
    company: "INSIGHT_MX",
    role: "JR. DATA ANALYST",
    period: "2018 — 2020",
    location: "MEX_CITY",
    description: "First data hire. Built the company's first data warehouse from scratch. Created dashboards adopted across all departments.",
    achievements: ["Built data warehouse from zero", "Designed 5 executive dashboards", "Reduced reporting time by 75%"],
  },
];

export const articles = [
  {
    id: "ART_001",
    title: "Why Most ML Models Die in Staging",
    date: "2024-11-15",
    readTime: "8 MIN",
    tags: ["MLOps", "Engineering"],
    excerpt: "The gap between a working Jupyter notebook and a production-grade ML system is wider than most teams expect. Here's what I learned the hard way.",
    link: "#",
  },
  {
    id: "ART_002",
    title: "Bayesian A/B Testing: Stop Waiting for Significance",
    date: "2024-09-03",
    readTime: "12 MIN",
    tags: ["Statistics", "Experimentation"],
    excerpt: "Frequentist A/B tests waste time and money. A practical guide to Bayesian experimentation with real code examples.",
    link: "#",
  },
  {
    id: "ART_003",
    title: "SQL Patterns Every Data Scientist Should Know",
    date: "2024-06-20",
    readTime: "10 MIN",
    tags: ["SQL", "Tutorial"],
    excerpt: "Window functions, CTEs, and recursive queries that will make your analysts love you. Or at least stop pestering you.",
    link: "#",
  },
  {
    id: "ART_004",
    title: "Building a Feature Store on a Startup Budget",
    date: "2024-03-12",
    readTime: "15 MIN",
    tags: ["MLOps", "Architecture"],
    excerpt: "You don't need Feast or Tecton to have a decent feature store. Here's how to build one with dbt, Postgres, and some duct tape.",
    link: "#",
  },
];
