export const profile = {
  name: "Binayak Mohanta",
  role: "Software Developer",
  location: "Kolkata, West Bengal",
  email: "binayakmohanta3124@gmail.com",
  phone: "+91 8700051669",
  github: "https://github.com/BinayakMohanta",
  linkedin: "https://www.linkedin.com/in/binayakmohanta/",
  resume: "/Binayak_Resume.pdf",
  positioning:
    "I build software that ships — from a production HR portal inside Hindustan Aeronautics to a real-time multiplayer game and an ML pipeline reading crop yield off satellite imagery.",
  summary: [
    "The thread through my work is aerospace and signal: an internship at Hindustan Aeronautics Limited, remote-sensing research under IEEE GRSS, and a machine-learning project that predicts crop yield from Sentinel satellite data.",
    "I'm finishing a BTech in Computer Science at SRM Institute of Science and Technology, and I like the whole span of a build — backend, frontend, data — taken from first commit to live deployment.",
  ],
};

export const metrics = [
  { value: 0.85, prefix: "R² ", decimals: 2, label: "Crop-yield model accuracy on satellite + climate data" },
  { value: 5, label: "Backing services in one real-time app — React, Node, Socket.IO, MongoDB, Sheets" },
  { value: 8.8, suffix: "/10", decimals: 1, label: "CGPA through sixth semester, BTech CSE" },
  { value: 70, suffix: "+", label: "Problems solved on HackerRank, active on CodeChef" },
];

export const experience = [
  {
    org: "Hindustan Aeronautics Limited (HAL)",
    role: "Developer Intern",
    period: "Dec 2025 — Jan 2026",
    place: "Barrackpore, Kolkata",
    points: [
      "Built a web portal for the HR department that streamlined internal workflows and centralized data access for the team.",
      "Ensured compatibility with the organization's legacy hardware and software — real infrastructure constraints inside a defence PSU.",
    ],
  },
  {
    org: "IEEE GRSS SRM Student Chapter",
    role: "Research Team Member",
    period: "Oct 2024 — Feb 2025",
    place: "SRM IST",
    points: [
      "Conducted research in geoscience and remote sensing, working with satellite and geospatial data under the IEEE GRSS chapter.",
    ],
  },
  {
    org: "Aaruush, SRM IST",
    role: "Committee Head",
    period: "Aug 2024 — Present",
    place: "SRM IST",
    points: [
      "Led a committee running events and workshops on business, entrepreneurship, and logical thinking at the university's flagship techno-management fest.",
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
    title: "Treasure Hunt — real-time multiplayer game",
    year: "2025",
    status: "Live",
    premise:
      "A full-stack treasure hunt where teams race through QR-coded clues, with everyone's progress synced live.",
    outcomes: [
      "React frontend and Node.js/Express backend communicating over Socket.IO WebSockets for real-time team progress.",
      "QR-code clue validation with camera scanning, MongoDB persistence, and game data synced from Google Sheets; deployed on Vercel.",
    ],
    stack: ["React", "Node.js", "Express", "Socket.IO", "MongoDB"],
    github: "https://github.com/BinayakMohanta/treasure-hunt-app",
    demo: "https://treasure-hunt-app-swart.vercel.app",
  },
  {
    index: "02",
    title: "YieldSense — crop yield from orbit",
    year: "2025",
    status: "Shipped",
    premise:
      "An end-to-end ML pipeline that reads Sentinel satellite imagery and climate data to predict crop yield before harvest.",
    outcomes: [
      "Integrated Sentinel-1/2 imagery, CHIRPS precipitation and ERA5 climate data via Google Earth Engine, reaching R² ≈ 0.85.",
      "SHAP explainability surfaces the drivers behind each prediction — NDVI, rainfall — in an interactive Streamlit dashboard with yield maps.",
    ],
    stack: ["Python", "Google Earth Engine", "SHAP", "Streamlit"],
    github: "https://colab.research.google.com/drive/1yhRUBt6byPtceaglDe4odHoJwphnUGmy",
  },
];

export const skillGroups = [
  { label: "Languages", items: ["Python", "Java", "JavaScript", "C / C++", "SQL", "HTML/CSS"] },
  { label: "Frameworks & platforms", items: ["React", "Node.js", "Express", "Socket.IO", "Streamlit", "Google Earth Engine"] },
  { label: "AI & ML", items: ["Machine learning", "Feature engineering", "SHAP explainability", "Predictive modelling"] },
  { label: "Databases & tools", items: ["MongoDB", "MySQL", "Git", "GitHub", "VS Code", "Google Colab"] },
];

export const education = {
  school: "SRM Institute of Science and Technology",
  degree: "BTech, Computer Science and Engineering",
  period: "August 2023 — May 2027",
  detail: "CGPA 8.8 / 10 through sixth semester",
};

export const certifications = [
  { name: "NPTEL — Java Programming", issuer: "NPTEL" },
  { name: "NPTEL — Machine Learning", issuer: "NPTEL" },
  { name: "SAP Implementation Consultant — End-to-End Business Processes", issuer: "SAP" },
  { name: "Intel Unnati — Get Started with Generative AI", issuer: "Intel" },
];

export const achievements = [
  { label: "Best Project", body: "TeckNow 2023–24, Dept. of Physics & Nanotechnology, SRM IST." },
  { label: "First Prize", body: "Creative Ingenuity '23, Dept. of Mechanical Engineering, SRM IST." },
  { label: "Competitive coding", body: "70+ problems on HackerRank (C++/Bash); active participant on CodeChef." },
];
