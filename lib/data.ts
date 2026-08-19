export const profile = {
  name: "Shreya Sikhwal",
  role: "Data Scientist & Analytics Engineer",
  location: "Kolkata, India",
  email: "shreyasikhwal1210@gmail.com",
  linkedin: "https://linkedin.com/in/shreyasikhwal",
  github: "https://github.com/Shreya-1210-del",
  tagline: "I turn spreadsheets nobody wants to open into decisions someone has to make.",
  summary:
    "CS & Business Systems undergraduate who builds the pipeline between raw data and a decision — SQL analysis across million-row datasets, dashboards in Streamlit, Tableau, and Power BI, and the judgment to know which number in the dashboard actually matters. Seeking a data analyst / data science internship where the data has real stakes attached.",
};

export const stats = [
  { label: "Banking records analysed", value: "1.26M+", tag: "banking" },
  { label: "Countries in education dataset", value: "190+", tag: "education" },
  { label: "Netflix titles cleaned", value: "8,000+", tag: "netflix" },
];

export const about = {
  paragraphs: [
    "I got into data the way most analysts do — by getting frustrated with a spreadsheet. What kept me here is the second half of the job: the point where a clean table stops being a table and starts being an argument for a decision. That's the part I actually optimise for.",
    "Alongside the technical stack, I've spent real time in psychology and behavioural coursework, because the datasets I care most about eventually describe people — customers who churn, students who get left out of a school system, viewers who abandon a title ten minutes in. A model is only as useful as the human judgment it's built with.",
    "That combination — rigorous with the SQL, curious about the 'why' — is what took a team I led to a Top 5 finish at the Hult Prize, and what I bring to every dashboard I ship.",
  ],
};

export type Project = {
  id: string;
  tag: string;
  domain: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  bullets: string[];
  stack: string[];
  href: string;
  accent: "cyan" | "amber" | "coral";
};

export const projects: Project[] = [
  {
    id: "banking",
    tag: "RISK · BANKING",
    domain: "SQL Analytics",
    title: "Banking Risk & Transaction Analysis",
    description:
      "A window-function-driven audit of a 7-table banking schema, built to surface which customers are worth retaining and which loans are quietly concentrating risk.",
    metrics: [
      { label: "records analysed", value: "1.26M+" },
      { label: "customers risk-tiered", value: "1M+" },
      { label: "tables joined", value: "7" },
    ],
    bullets: [
      "Applied RANK, LAG, and windowed SUM to rank customers by spend and track month-over-month transaction deltas.",
      "Chained CTEs to segment customers into risk tiers by average balance, flagging sub-$1,000 balances as churn-risk candidates for a retention programme.",
      "Used CASE-based tiering to show that loans priced above 15% carry the largest average principal — a concentration worth flagging for stress testing.",
    ],
    stack: ["SQL", "Window Functions", "CTEs", "Aggregate Functions"],
    href: "https://github.com/Shreya-1210-del/banking-sql-analysis",
    accent: "coral",
  },
  {
    id: "education",
    tag: "POLICY · EDUCATION",
    domain: "Dashboard Engineering",
    title: "Global Education Inequality Dashboard",
    description:
      "Twenty-three years of UNESCO and World Bank data, rebuilt into three parallel dashboards so policy teams and ed-tech founders can filter the same evidence differently.",
    metrics: [
      { label: "countries covered", value: "190+" },
      { label: "years of data", value: "2000–23" },
      { label: "dashboards shipped", value: "3" },
    ],
    bullets: [
      "Identified 10+ countries with over 1M out-of-school children each, with Sub-Saharan Africa standing out as the region of highest structural exclusion.",
      "Shipped country, region, and income-group filters across Streamlit, Tableau, and Power BI so the same dataset serves three different audiences.",
      "Tracked Gender Parity Index deviations by region to surface downstream labour-force risk for policy planners.",
    ],
    stack: ["Python", "Pandas", "Plotly", "Tableau", "Power BI"],
    href: "#",
    accent: "amber",
  },
  {
    id: "netflix",
    tag: "MEDIA · CONTENT STRATEGY",
    domain: "EDA → Dashboard",
    title: "Netflix Content Analytics",
    description:
      "An end-to-end pipeline from a messy content catalog to a live-filter dashboard, built to answer one question: where is the catalog over-indexed, and where is it thin?",
    metrics: [
      { label: "titles cleaned", value: "8,000+" },
      { label: "of library is film", value: "70%+" },
      { label: "production surge", value: "'16–'19" },
    ],
    bullets: [
      "Cleaned 8,000+ records and found the library skews over 70% movies, with clear geographic content gaps by country.",
      "Shipped a Streamlit + Plotly dashboard with real-time filters and KPI cards comparing films vs. series performance.",
      "Surfaced a 2016–2019 production surge in the data, useful context for acquisition and licensing budget decisions.",
    ],
    stack: ["Python", "Pandas", "NumPy", "Streamlit", "Plotly", "Git"],
    href: "https://github.com/Shreya-1210-del/netflix-analysis",
    accent: "cyan",
  },
];

export type ExperienceItem = {
  org: string;
  role: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    org: "E-Cell, IIT Bombay",
    role: "Campus Ambassador",
    period: "Jun 2026 — Present",
    bullets: [
      "Serve as the campus bridge to E-Cell IIT Bombay, one of India's largest student-run entrepreneurship networks.",
      "Run outreach campaigns connecting peers to internships, financial-literacy programmes, and global entrepreneurship summits.",
    ],
  },
  {
    org: "Institution's Innovation Council, TMSL",
    role: "Content Writer",
    period: "Jul 2025 — Present",
    bullets: [
      "Write analytical reports and structured content strategy aligned to council KPIs across departments.",
      "Own consistent messaging across the council's communication channels, shipping on deadline every cycle.",
    ],
  },
  {
    org: "Hult Prize Campus Competition",
    role: "Team Lead — Top 5 Finalist",
    period: "Feb 2025",
    bullets: [
      "Led a 4-person team from a raw idea to an investor-ready pitch in under six weeks.",
      "Built the data narrative behind the pitch, translating market research into a business case that placed Top 5 on campus.",
    ],
  },
];

export const skills = {
  Languages: ["Python", "SQL", "Java", "C", "C++"],
  "Libraries & Frameworks": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Streamlit"],
  "Tools & Platforms": ["Tableau", "Power BI", "Jupyter", "Git / GitHub", "MS Excel (Advanced)", "VS Code"],
  "Analytical Concepts": [
    "Window Functions",
    "CTEs",
    "EDA",
    "Data Wrangling",
    "KPI Design",
    "Statistical Analysis",
  ],
};

export const achievements = [
  { label: "SOF National Science Olympiad", detail: "Gold Medal — 1st Rank, School" },
  { label: "Campus Hackathon", detail: "1st Place Winner" },
  { label: "HackerRank", detail: "Silver Badge — Python & SQL" },
  { label: "Deloitte Technology Job Simulation", detail: "Data analysis & forensic technology, via Forage" },
  { label: "Commonwealth Bank — Data Science", detail: "Pipelines & anonymisation, via Forage" },
  { label: "Siemens Mobility Job Simulation", detail: "KPI development & Excel dashboards, via Forage" },
];

export const education = {
  school: "Techno Main Salt Lake, Kolkata",
  degree: "B.Tech — Computer Science & Business Systems",
  period: "Aug 2024 — May 2028",
  detail: "SGPA 8.16 / 10",
};
