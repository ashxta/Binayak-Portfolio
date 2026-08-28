export const profile = {
  name: "Binayak Mohanta",
  role: "Data Analyst & Applied ML Engineer",
  location: "Kolkata, West Bengal",
  email: "binayakmohanta3124@gmail.com",
  phone: "+91 9717060310",
  github: "https://github.com/BinayakMohanta",
  linkedin: "https://www.linkedin.com/in/binayakmohanta/",
  resume: "/Binayak_Resume.pdf",
  positioning: "Data Analyst and Applied ML Engineer focused on building data-driven solutions with Python, SQL, machine learning, and clear analytics.",
  summary: [
    "I combine analytical thinking with machine learning to turn complex data into practical, interpretable solutions—from internal HR systems to customer analytics and crop-yield prediction.",
    "I'm pursuing a BTech in Computer Science and Engineering at SRM Institute of Science and Technology, with foundations in object-oriented programming, computer networks, software engineering, and project management.",
  ],
};

export const metrics = [
  { value: 0.85, prefix: "R² ", decimals: 2, label: "Crop-yield model accuracy using satellite + climate data" },
  { value: 100, suffix: "%", label: "Compatibility achieved for legacy HR infrastructure at HAL" },
  { value: 8.8, suffix: "/10", decimals: 1, label: "CGPA through sixth semester, BTech CSE" },
  { value: 70, suffix: "+", label: "Problems solved on HackerRank, active on CodeChef" },
];

export const experience = [
  {
    org: "Hindustan Aeronautics Limited (HAL)",
    role: "Developer Intern",
    period: "Dec 2025 – Jan 2026",
    place: "Barrackpore, Kolkata",
    points: [
      "Engineered a centralized HR web portal using ASP, Python, and Oracle, streamlining internal workflows and accelerating organizational data access.",
      "Architected automated Python data pipelines and optimized Oracle queries, ensuring 100% system compatibility within legacy infrastructure.",
    ],
  },
  {
    org: "Aaruush, SRM IST",
    role: "Committee Head",
    period: "Aug 2024 – July 2026",
    place: "SRM IST",
    points: [
      "Led workshops on business, entrepreneurship, and logical thinking, coordinating teams and event operations.",
      "Managed stakeholder communication, planning, and execution across activities at SRM's flagship fest.",
    ],
  },
];

export type Project = {
  index: string;
  title: string;
  year: string;
  status: "Live" | "Shipped";
  premise: string;
  outcomes: string[];
  stack: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "OmniStyle: customer analytics platform",
    year: "2026",
    status: "Shipped",
    premise: "An end-to-end analytics platform for understanding customer behaviour, sales performance, and loyalty trends.",
    outcomes: [
      "Built the analysis workflow with Python, MongoDB, and SQL to surface customer and sales insights.",
      "Developed Power BI dashboards and ML models for customer segmentation and churn prediction, identifying retention drivers and actionable business insights.",
    ],
    stack: ["Python", "Pandas", "NumPy", "MongoDB", "MySQL", "Power BI"],
    github: "https://github.com/BinayakMohanta/OmniStyle",
  },
  {
    index: "02",
    title: "YieldSense: AI-based crop-yield prediction",
    year: "2026",
    status: "Shipped",
    premise: "An end-to-end machine-learning pipeline that predicts crop yields from satellite imagery and climate data.",
    outcomes: [
      "Integrated Sentinel-1/2 imagery, CHIRPS precipitation, and ERA5 climate data via Google Earth Engine, reaching R² ≈ 0.85.",
      "Performed feature engineering and applied SHAP explainability to identify critical agronomic drivers, including NDVI and rainfall.",
    ],
    stack: ["Python", "Machine Learning", "Google Earth Engine", "SHAP"],
    github: "https://github.com/BinayakMohanta/YieldSense-2.0",
  },
];

export const skillGroups = [
  { label: "Languages & tools", items: ["C / C++", "Java", "Python", "SQL", "Bash", "Flask", "FastAPI"] },
  { label: "Data analytics", items: ["Power BI", "Excel", "Data analysis", "Data visualization", "EDA", "Pandas", "NumPy"] },
  { label: "AI & ML", items: ["Machine learning", "Feature engineering", "Predictive modelling", "SHAP explainability"] },
  { label: "Databases & platforms", items: ["Oracle", "MySQL", "MongoDB", "Google Earth Engine", "Google Colab", "GitHub"] },
];

export const education = {
  school: "SRM Institute of Science and Technology",
  degree: "BTech, Computer Science and Engineering",
  period: "August 2023 – May 2027",
  detail: "CGPA 8.8 / 10 through sixth semester",
};

export const certifications = [
  { name: "NPTEL: Java Programming", issuer: "NPTEL" },
  { name: "NPTEL: Machine Learning", issuer: "NPTEL" },
  { name: "SAP Implementation Consultant: End-to-End Business Processes", issuer: "SAP" },
  { name: "Intel Unnati: Get Started with Generative AI", issuer: "Intel" },
];

export const achievements = [
  { label: "Best Project", body: "TeckNow 2023–24, Dept. of Physics & Nanotechnology, SRM IST." },
  { label: "First Prize", body: "Creative Ingenuity '23, Dept. of Mechanical Engineering, SRM IST." },
  { label: "Competitive coding", body: "70+ problems on HackerRank (C++/Bash); active participant on CodeChef." },
];
