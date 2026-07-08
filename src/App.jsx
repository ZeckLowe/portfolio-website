// import { useEffect, useState } from "react";
// import { motion, stagger, transform } from "motion/react";
// import {
//   Clock,
//   Trophy,
//   User,
//   BriefcaseBusiness,
//   ExternalLink,
//   Mail,
//   User2Icon,
// } from "lucide-react";
// import pp from "../public/pp.png";
// import {
//   personalInfo,
//   projects,
//   socialLinks,
//   experiences,
//   tools,
//   goals,
//   achievements,
//   skills,
//   certificates,
//   animatedBlobs,
// } from "./constants/data.jsx";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [time, setTime] = useState("");
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     setTime(new Date().toLocaleDateString());
//     const timer = setInterval(
//       () => setTime(new Date().toLocaleDateString()),
//       1000,
//     );
//     return () => clearInterval(timer);
//   }, []);

//   const containerVariants = {
//     hidden: { opcaity: 0 },
//     show: {
//       opcaity: 1,
//       transition: {
//         staggerChildren: 0.25,
//         ease: "easeOut",
//         duration: 0.7,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: {
//       opacity: 0,
//       y: 40,
//     },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.22, 1, 0.36, 1],
//       },
//     },
//   };

//   return (
//     <>
//       <div className="relative min-h-screen flex justify-center items-center bg-[#0a0a0a] text-white p-4 md:py-14 font-mono overflow-hidden">
//         {animatedBlobs.map((blob, i) => (
//           <motion.div
//             key={i}
//             className={`absolute rounded-full ${blob.className}`}
//             animate={blob.animate}
//             transition={{
//               duration: blob.duration,
//               ease: "easeInOut",
//               repeat: Infinity,
//               repeatType: "mirror",
//             }}
//           ></motion.div>
//         ))}

//         <motion.main
//           variants={containerVariants}
//           initial="hidden"
//           animate={mounted ? "show" : "hidden"}
//           className="main-grid"
//         >
//           <motion.div
//             variants={itemVariants}
//             className="card card-cyan md:col-span-1 row-span-3 flex flex-col justify-center gap-3"
//           >
//             <img
//               src={pp}
//               className="w-[70px] h-[70px] rounded-full object-cover"
//               alt=""
//             />
//             <h2 className="section-title">
//               <User size={22} className="text-violet-400" />
//               <p>{personalInfo.name}</p>
//             </h2>
//             <p className="text-slate-300 text-sm leading-relaxed">
//               {personalInfo.bio}
//             </p>
//           </motion.div>
//           <motion.div
//             variants={itemVariants}
//             className="card card-violet md:col-span-1 row-span-4 flex flex-col justify-center gap-3"
//           ></motion.div>
//         </motion.main>
//       </div>
//     </>
//   );
// }

// export default App;
import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   DESIGN TOKENS — light mode, Firecrawl orange
───────────────────────────────────────────── */
const T = {
  bg: "#F7F5F2",
  surface: "#FFFFFF",
  surfaceAlt: "#FDFCFB",
  border: "#EAE6E1",
  borderAlt: "#DDD8D2",
  accent: "#FF6B35",
  accentBg: "rgba(255,107,53,0.07)",
  accentBdr: "rgba(255,107,53,0.18)",
  text: "#1A1714",
  textSub: "#6B6560",
  textMuted: "#A09890",
  green: "#16A34A",
  blue: "#2563EB",
  purple: "#7C3AED",
  yellow: "#D97706",
  slate: "#64748B",
};

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  body{background:${T.bg};color:${T.text};font-family:'Inter',sans-serif;-webkit-font-smoothing:antialiased;}
  ::-webkit-scrollbar{width:5px;}
  ::-webkit-scrollbar-track{background:${T.bg};}
  ::-webkit-scrollbar-thumb{background:${T.borderAlt};border-radius:3px;}
  @keyframes pulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:.5;transform:scale(.8);}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(14px);}to{opacity:1;transform:translateY(0);}}
  @keyframes barGrow{from{width:0}to{width:var(--w)}}
  .serif{font-family:'Instrument Serif',serif;}
  .mono{font-family:'JetBrains Mono',monospace;}
  .au{animation:fadeUp .5s ease both;}
  .d1{animation-delay:.06s;}.d2{animation-delay:.12s;}.d3{animation-delay:.18s;}

  /* Bento */
  .bento{display:grid;grid-template-columns:repeat(12,1fr);gap:10px;}
  .c2{grid-column:span 2;}.c3{grid-column:span 3;}.c4{grid-column:span 4;}
  .c5{grid-column:span 5;}.c7{grid-column:span 7;}.c8{grid-column:span 8;}.c12{grid-column:span 12;}
  @media(max-width:1020px){
    .bento{grid-template-columns:repeat(6,1fr);}
    .c7,.c8{grid-column:span 6;}.c5{grid-column:span 3;}.c3,.c2{grid-column:span 3;}.c4{grid-column:span 3;}
  }
  @media(max-width:580px){.bento{grid-template-columns:1fr;gap:8px;}[class*="c"]{grid-column:span 1!important;}}

  /* Card */
  .card{background:${T.surface};border:1px solid ${T.border};border-radius:14px;padding:22px;position:relative;overflow:hidden;transition:border-color .2s,box-shadow .2s;}
  .card:hover{border-color:${T.borderAlt};box-shadow:0 4px 24px rgba(0,0,0,.06);}

  /* Sub-card */
  .sc{background:${T.surfaceAlt};border:1px solid ${T.border};border-radius:9px;transition:border-color .2s;}
  .sc:hover{border-color:${T.borderAlt};}

  /* Buttons */
  .btn-p{display:inline-flex;align-items:center;gap:6px;background:${T.accent};color:#fff;border:none;border-radius:8px;padding:9px 20px;font-family:'Inter',sans-serif;font-size:13px;font-weight:600;cursor:pointer;text-decoration:none;transition:opacity .2s,transform .15s;white-space:nowrap;letter-spacing:-.01em;}
  .btn-p:hover{opacity:.88;transform:translateY(-1px);}
  .btn-o{display:inline-flex;align-items:center;gap:6px;background:transparent;color:${T.text};border:1px solid ${T.border};border-radius:8px;padding:9px 20px;font-family:'Inter',sans-serif;font-size:13px;font-weight:500;cursor:pointer;text-decoration:none;transition:border-color .2s,background .2s,transform .15s;white-space:nowrap;}
  .btn-o:hover{border-color:${T.borderAlt};background:${T.surfaceAlt};transform:translateY(-1px);}

  /* Pill tag */
  .pill{display:inline-flex;align-items:center;gap:4px;font-family:'JetBrains Mono',monospace;font-size:9px;border-radius:20px;padding:3px 9px;text-transform:uppercase;letter-spacing:.05em;font-weight:500;flex-shrink:0;}

  /* Nav link */
  a.nl{font-size:13px;font-weight:500;color:${T.textSub};text-decoration:none;transition:color .15s;letter-spacing:-.01em;}
  a.nl:hover{color:${T.text};}

  /* Bar */
  .bar-t{height:3px;background:${T.border};border-radius:3px;overflow:hidden;}
  .bar-f{height:100%;background:${T.accent};border-radius:3px;transition:width 1s cubic-bezier(.4,0,.2,1);}

  /* Tab */
  .tab{font-family:'JetBrains Mono',monospace;font-size:9px;padding:5px 11px;border-radius:6px;cursor:pointer;text-transform:uppercase;letter-spacing:.06em;transition:all .15s;border:none;}

  /* Status dot */
  .dot-green{width:7px;height:7px;border-radius:50%;background:${T.green};box-shadow:0 0 0 2px rgba(22,163,74,.15);display:inline-block;}
`;

/* ── Tag palettes ── */
const TYPE_C = {
  CURRENT: { c: "#EA580C", bg: "rgba(234,88,12,.08)", b: "rgba(234,88,12,.2)" },
  CONTRACT: {
    c: "#2563EB",
    bg: "rgba(37,99,235,.08)",
    b: "rgba(37,99,235,.2)",
  },
  FULLTIME: {
    c: "#16A34A",
    bg: "rgba(22,163,74,.08)",
    b: "rgba(22,163,74,.2)",
  },
  FOUNDER: {
    c: "#7C3AED",
    bg: "rgba(124,58,237,.08)",
    b: "rgba(124,58,237,.2)",
  },
  EDUCATION: {
    c: "#64748B",
    bg: "rgba(100,116,139,.08)",
    b: "rgba(100,116,139,.2)",
  },
};
const PROJ_C = {
  "OPEN SOURCE": {
    c: "#16A34A",
    bg: "rgba(22,163,74,.08)",
    b: "rgba(22,163,74,.2)",
  },
  DEPLOYED: {
    c: "#EA580C",
    bg: "rgba(234,88,12,.08)",
    b: "rgba(234,88,12,.2)",
  },
  ACQUIRED: {
    c: "#7C3AED",
    bg: "rgba(124,58,237,.08)",
    b: "rgba(124,58,237,.2)",
  },
  LIVE: { c: "#2563EB", bg: "rgba(37,99,235,.08)", b: "rgba(37,99,235,.2)" },
  BETA: { c: "#D97706", bg: "rgba(217,119,6,.08)", b: "rgba(217,119,6,.2)" },
  RESEARCH: {
    c: "#64748B",
    bg: "rgba(100,116,139,.08)",
    b: "rgba(100,116,139,.2)",
  },
};

/* ── Data ── */
const D = {
  name: "Czech Louie Sadiang-abay",
  title: "Data Analyst & AI Automation Engineer",
  // location: "San Francisco, CA",
  // coords: "37.77° N, 122.41° W",
  // tagline:
  //   "I build AI-powered products that scale — from RAG pipelines to agentic systems deployed in production.",
  badge: "YC W24 Founder",
  email: "czechlouie@gmail.com",
  about: [
    "I am a Data Analyst who aspires to be a Data Scientist with a strong passion for extracting insights from data, building machine learning models, and developing AI-driven solutions.\nWith a background in Computer Science, specializing in Mobile Development and Artificial Intelligence, I have worked on projects involving Natural Language Processing, Retrieval-Augmented Generation (RAG), and automated data processing. My goal is to leverage data science to drive innovation, optimize decision-making, and solve complex business problems.\nI am eager to continue learning and expanding my expertise in machine learning, big data analytics, and AI development.",
  ],
  tags: [
    "Agentic AI",
    "RAG / Vector Search",
    "AI Automation",
    "Data Analytics",
    "Data Engineering",
  ],
  stats: [
    { l: "GitHub Commits", v: "2,847" },
    { l: "Open Source Stars", v: "3.8k" },
    { l: "Years Experience", v: "8+" },
    { l: "Happy Clients", v: "30+" },
  ],
  exp: [
    {
      year: "2026 August – Current",
      role: "Data Analyst",
      co: "World Wide Web Development OPC",
      type: "CURRENT",
      d: "Designed and implemented solutions using N8N and Python scripting to eliminate manual bottlenecks in marketing and crossdepartmental operations, boosting efficiency by implementing AI agents with automation and streamlining data collection pipelines.\nMonitored, troubleshooted, and optimized existing integrations of Python scripts and N8N Automations to ensure reliability,scalability, and efficient with cross-functional business teams collaboration to gather requirements and deliver effective integration solutions. Designed and deployed an N8N workflow utilizing AI agents to analyze and draft personalized emails, incorporating a human-inthe-loop verification step that reduced manual effort by 85% while ensuring 100% messaging accuracy. Architected an end-to-end n8n orchestration workflow utilizing a specialized SEO sub-agent for automated keyword selection, generating personalized multi-account Facebook captions with a Trello-integrated Human-in-the-Loop (HITL) validation gate for final scheduling. Built a data-driven tracking system in Trello to monitor individual and team project statuses, automating the delivery of monthly performance reports using N8N that previously required manual compilation. Designed and facilitated an internal n8n upskilling program, leading technical training sessions to empower cross-functional colleagues in building custom AI-driven automation and agentic workflows. Developed an internal Retrieval Augmented Generation system used to retrieve information from multiple deployed website for email generation reference for the Marketing team. Automated the extraction and consolidation of data from web scraping, GA4, and social media APIs using Python, which replaced manual reporting tasks and provided a clearer view for data-driven decisions.",
    },
    {
      year: "2025 January - 2025 May",
      role: "Quality Assurance Intern",
      co: "AMCS Group",
      type: "INTERNSHIP",
      d: "Contributed to multimodal reasoning research and evaluation pipelines.",
    },
    {
      year: "2024 June - 2024 August",
      role: "Full-Stack Engineer Intern",
      co: "Alliance Software Solution Inc.",
      type: "INTERNSHIP",
      d: "Worked on Next.js core, edge runtime, and developer tooling at scale.",
    },
    {
      year: "2021 August - 2025 May",
      role: "B.S. Computer Science",
      co: "University of San Jose-Recoletos",
      type: "EDUCATION",
      d: "Focus on AI/ML. Thesis on reinforcement learning for robotic control.",
    },
  ],
  stack: {
    "AI & ML": [
      { n: "LangChain / LangGraph" },
      { n: "OpenAI / Anthropic / Gemini APIs" },
      { n: "RAG Pipelines" },
      { n: "PyTorch" },
      { n: "Vector DBs" },
    ],
    Frontend: [
      { n: "Streamlit" },
      { n: "React / Next.js" },
      { n: "TypeScript" },
    ],
    Backend: [
      { n: "Node.js / Python", l: 93 },
      { n: "FastAPI / Express", l: 88 },
      { n: "PostgreSQL / Redis", l: 85 },
    ],
    Database: [
      { n: "BigQuery" },
      { n: "PostgreSQL" },
      { n: "Pinecone" },
      { n: "MySQL" },
      { n: "MSSQL" },
      { n: "Firebase" },
      { n: "SQLite" },
    ],
    Infra: [{ n: "GCP" }, { n: "Docker" }, { n: "Vercel" }],
  },
  projects: [
    {
      name: "AgentOS",
      d: "Open-source multi-agent framework with persistent memory and tool use.",
      tag: "OPEN SOURCE",
      stars: "2.4k",
    },
    {
      name: "RAGForge",
      d: "Production-ready RAG pipeline builder with auto chunking and reranking.",
      tag: "DEPLOYED",
      stars: "891",
    },
  ],
  certs: [
    {
      name: "Google Data Analytics Specialization",
      org: "Google",
      year: "2026",
      icon: "◈",
    },
    {
      name: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      org: "Oracle",
      year: "2025",
      icon: "☁",
    },
    {
      name: "AWS Academy Graduate - AWS Academy Cloud Architecting",
      org: "Amazon Web Service",
      year: "2025",
      icon: "☁",
    },
    {
      name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      org: "Amazon Web Service",
      year: "2025",
      icon: "☁",
    },
    {
      name: "Certification for Apache Airflow 3 Fundamentals",
      org: "Astronomer",
      year: "2025",
      icon: "⬡",
    },
  ],
  testimonials: [
    {
      q: "Czech consistently innovates and stays ahead of the curve in software and AI automation, skillfully leveraging modern technologies even within the constraints of a resource-limited organization.",
      name: "Yevgeny Albano",
      role: "Software Engineer, Innodata Inc.",
      i: "YA",
    },
    {
      q: "The solution Czech built with n8n transformed how our team automates workflows. Worked fast, iterated faster, never compromised on reliability.",
      name: "Jestoni Brion",
      role: "Full-stack Engineer, World Wide Web Development OPC",
      i: "JB",
    },
  ],
  bucket: [
    { t: "Get first job", d: true },
    { t: "Speak in a Tech Talk", d: true },
    { t: "Contribute to an open-source AI project", d: false },
    { t: "Live abroad for 3+ months", d: false },
    { t: "Write an AI engineering textbook", d: false },
    { t: "Get a Master's degree", d: false },
    { t: "Build something used by 1M+ people", d: false },
    { t: "Ship a self-managing AI agent", d: false },
    { t: "Mentor 100 engineers", d: false },
    { t: "Publish a research paper", d: false },
  ],
  photos: [
    { l: "Thesis Project", bg: "linear-gradient(135deg,#e8f0fe,#c7d7f5)" },
    { l: "First Tech Talk", bg: "linear-gradient(135deg,#fef3e8,#fcddb8)" },
    { l: "AgentCon", bg: "linear-gradient(135deg,#f0eafe,#ddd0f8)" },
  ],
  // memberships: [
  //   "AI Safety Institute",
  //   "YC Alumni Network",
  //   "ACM — Senior Member",
  // ],
};

/* ── Hooks ── */
function useTypewriter(text, speed = 40, delay = 600) {
  const [d, setD] = useState("");
  const [go, setGo] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGo(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  useEffect(() => {
    if (!go) return;
    let i = 0;
    const iv = setInterval(() => {
      if (i < text.length) setD(text.slice(0, ++i));
      else clearInterval(iv);
    }, speed);
    return () => clearInterval(iv);
  }, [go, text, speed]);
  return [d, d.length < text.length];
}
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setV(true);
      },
      { threshold },
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [threshold]);
  return [ref, v];
}

/* ── Label ── */
function Label({ text }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 16,
      }}
    >
      <span
        className="mono"
        style={{
          fontSize: 9,
          color: T.accent,
          textTransform: "uppercase",
          letterSpacing: ".1em",
          whiteSpace: "nowrap",
          fontWeight: 500,
        }}
      >
        {text}
      </span>
      <div style={{ flex: 1, height: 1, background: T.border }} />
    </div>
  );
}

/* ── Pill ── */
function Pill({ c, bg, b, children }) {
  return (
    <span
      className="pill"
      style={{ color: c, background: bg, border: `1px solid ${b}` }}
    >
      {children}
    </span>
  );
}

/* ════════════════════════════════════
   NAVBAR
════════════════════════════════════ */
function Navbar() {
  const [sc, setSc] = useState(false);
  useEffect(() => {
    const h = () => setSc(window.scrollY > 10);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 0",
        marginBottom: 14,
        borderBottom: `1px solid ${T.border}`,
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: sc ? "rgba(247,245,242,.96)" : "rgba(247,245,242,.85)",
        backdropFilter: "blur(12px)",
        transition: "background .25s",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 9,
            background: T.accentBg,
            border: `1px solid ${T.accentBdr}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 14, color: T.accent }}>✦</span>
        </div>
        <span
          style={{
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: "-.025em",
            color: T.text,
          }}
        >
          czech.ai
        </span>
      </div>
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        {[
          ["#work", "Work"],
          ["#about", "About"],
          ["#contact", "Contact"],
        ].map(([h, l]) => (
          <a key={l} href={h} className="nl">
            {l}
          </a>
        ))}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span className="dot-green" />
          <span
            className="mono"
            style={{
              fontSize: 9,
              color: T.green,
              letterSpacing: ".06em",
              textTransform: "uppercase",
            }}
          >
            Available
          </span>
        </div>
      </div>
    </nav>
  );
}

/* ════════════════════════════════════
   HERO CARD
════════════════════════════════════ */
function HeroCard() {
  const [title, typing] = useTypewriter(D.title, 42, 700);
  return (
    <div
      className="card c7 au"
      style={{
        minHeight: 210,
        background: `linear-gradient(155deg,#fff 0%,#fdfcfb 100%)`,
      }}
    >
      {/* Subtle dot texture top-right */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "45%",
          bottom: 0,
          backgroundImage: `radial-gradient(circle,${T.accentBdr} 1px,transparent 1px)`,
          backgroundSize: "20px 20px",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Top badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 18,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: T.accentBg,
              border: `1px solid ${T.accentBdr}`,
              borderRadius: 20,
              padding: "4px 10px",
            }}
          >
            <span className="dot-green" />
            <span
              className="mono"
              style={{
                fontSize: 9,
                color: T.green,
                letterSpacing: ".06em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Open to Work
            </span>
          </div>
          {/* <span
            style={{
              fontSize: 11,
              color: T.textSub,
              background: T.surfaceAlt,
              border: `1px solid ${T.border}`,
              borderRadius: 20,
              padding: "4px 10px",
              fontWeight: 500,
            }}
          >
            🏆 {D.badge}
          </span> */}
        </div>

        {/* Name */}
        <h1
          className="serif"
          style={{
            fontSize: "clamp(30px,4vw,52px)",
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: 8,
            letterSpacing: "-.01em",
            color: T.text,
          }}
        >
          {D.name}
        </h1>

        {/* Typewriter role */}
        <div style={{ height: 24, marginBottom: 14 }}>
          <p
            className="mono"
            style={{
              fontSize: "clamp(10px,1.1vw,12px)",
              color: T.accent,
              letterSpacing: ".01em",
            }}
          >
            {title}
            {typing && (
              <span
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1em",
                  background: T.accent,
                  marginLeft: 2,
                  verticalAlign: "text-bottom",
                  animation: "pulse 1s step-end infinite",
                }}
              />
            )}
          </p>
        </div>

        <p
          style={{
            fontSize: 14,
            color: T.textSub,
            lineHeight: 1.65,
            maxWidth: 430,
            marginBottom: 24,
            fontWeight: 300,
          }}
        >
          {D.tagline}
        </p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <a href={`mailto:${D.email}`} className="btn-p">
            Get in Touch →
          </a>
          <a href="https://github.com/ZeckLowe" className="btn-o">
            View GitHub
          </a>
          {/* <a href="#" className="btn-o">
            Schedule Call
          </a> */}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════
   STATS CARD
════════════════════════════════════ */
function StatsCard() {
  return (
    <div className="card c3 au d1" style={{ background: "#FEFEFE" }}>
      <Label text="At a Glance" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {D.stats.map((s) => (
          <div key={s.l} className="sc" style={{ padding: "14px 12px" }}>
            <div
              className="serif"
              style={{
                fontSize: 26,
                color: T.accent,
                lineHeight: 1,
                fontWeight: 400,
              }}
            >
              {s.v}
            </div>
            <div
              style={{
                fontSize: 11,
                color: T.textMuted,
                marginTop: 5,
                lineHeight: 1.3,
                fontWeight: 400,
              }}
            >
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════
   LOCATION CARD
════════════════════════════════════ */
function LocationCard() {
  return (
    <div
      className="card c2 au d2"
      style={{
        background: "#FEFEFE",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Label text="Location" />
      <div
        className="serif"
        style={{
          fontSize: 22,
          lineHeight: 1.1,
          color: T.text,
          marginBottom: 3,
        }}
      >
        San Francisco
      </div>
      <div style={{ fontSize: 12, color: T.textMuted, marginBottom: 14 }}>
        California, USA
      </div>
      {/* Map */}
      <div
        style={{
          flex: 1,
          minHeight: 85,
          borderRadius: 9,
          overflow: "hidden",
          background: "linear-gradient(145deg,#EBF4FF,#DDEEFF)",
          border: `1px solid ${T.border}`,
          position: "relative",
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${25 * i}%`,
              width: 1,
              background: "rgba(0,0,0,.04)",
            }}
          />
        ))}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: `${33 * i}%`,
              height: 1,
              background: "rgba(0,0,0,.04)",
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            top: "42%",
            left: "32%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: T.accent,
              boxShadow: `0 0 0 4px ${T.accentBg},0 0 14px rgba(255,107,53,.3)`,
            }}
          />
        </div>
        <span
          className="mono"
          style={{
            position: "absolute",
            bottom: 5,
            right: 6,
            fontSize: 7,
            color: T.textMuted,
          }}
        >
          {D.coords}
        </span>
      </div>
    </div>
  );
}

/* ════════════════════════════════════
   ABOUT CARD
════════════════════════════════════ */
function AboutCard() {
  return (
    <div className="card c5" id="about">
      <Label text="About" />
      {D.about.map((p, i) => (
        <p
          key={i}
          style={{
            fontSize: 13.5,
            lineHeight: 1.75,
            color: i === 0 ? T.text : T.textSub,
            fontWeight: i === 0 ? 400 : 300,
            marginBottom: i < D.about.length - 1 ? 14 : 0,
          }}
        >
          {p}
        </p>
      ))}
      <div
        style={{
          display: "flex",
          gap: 6,
          marginTop: 20,
          paddingTop: 16,
          borderTop: `1px solid ${T.border}`,
          flexWrap: "wrap",
        }}
      >
        {D.tags.map((t) => (
          <span
            key={t}
            style={{
              fontSize: 11,
              color: T.textSub,
              fontWeight: 500,
              background: T.surfaceAlt,
              border: `1px solid ${T.border}`,
              borderRadius: 6,
              padding: "4px 10px",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════
   EXPERIENCE CARD
════════════════════════════════════ */
function ExpCard() {
  return (
    <div className="card c7" id="work">
      <Label text="Experience" />
      {D.exp.map((e, i) => {
        const tc = TYPE_C[e.type] || TYPE_C.FULLTIME;
        const last = i === D.exp.length - 1;
        return (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 14,
              paddingBottom: last ? 0 : 16,
              marginBottom: last ? 0 : 16,
              borderBottom: last ? "none" : `1px solid ${T.border}`,
            }}
          >
            {/* Spine */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: 12,
                paddingTop: 5,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: i === 0 ? T.accent : T.border,
                  border: i === 0 ? `none` : `1px solid ${T.borderAlt}`,
                }}
              />
              {!last && (
                <div
                  style={{
                    width: 1,
                    flex: 1,
                    background: T.border,
                    marginTop: 5,
                  }}
                />
              )}
            </div>
            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 8,
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: 13.5,
                      lineHeight: 1.3,
                      color: T.text,
                    }}
                  >
                    {e.role}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: T.textSub,
                      marginTop: 2,
                      fontWeight: 400,
                    }}
                  >
                    {e.co}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    flexShrink: 0,
                  }}
                >
                  <Pill c={tc.c} bg={tc.bg} b={tc.b}>
                    {e.type}
                  </Pill>
                  <span
                    className="mono"
                    style={{ fontSize: 9, color: T.textMuted }}
                  >
                    {e.year}
                  </span>
                </div>
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: T.textMuted,
                  marginTop: 5,
                  lineHeight: 1.55,
                  fontWeight: 300,
                }}
              >
                {e.d}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ════════════════════════════════════
   TECH STACK CARD
════════════════════════════════════ */
function StackCard() {
  const tabs = Object.keys(D.stack);
  const [tab, setTab] = useState(0);
  const [anim, setAnim] = useState(false);
  const [ref, vis] = useInView();
  useEffect(() => {
    setAnim(false);
    const t = setTimeout(() => {
      if (vis) setAnim(true);
    }, 50);
    return () => clearTimeout(t);
  }, [tab, vis]);
  useEffect(() => {
    if (vis) setAnim(true);
  }, [vis]);
  const skills = D.stack[tabs[tab]];
  return (
    <div className="card c5" ref={ref}>
      <Label text="Skills" />
      <div
        style={{ display: "flex", gap: 5, marginBottom: 18, flexWrap: "wrap" }}
      >
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setTab(i)}
            className="tab"
            style={{
              background: i === tab ? T.accentBg : "transparent",
              border: `1px solid ${i === tab ? T.accentBdr : T.border}`,
              color: i === tab ? T.accent : T.textMuted,
              fontWeight: i === tab ? 500 : 400,
            }}
          >
            {t}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {skills.map((s) => (
          <div key={s.n}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 7,
              }}
            >
              <span style={{ fontSize: 12.5, color: T.text, fontWeight: 400 }}>
                {s.n}
              </span>
              {/* <span
                className="mono"
                style={{ fontSize: 9, color: T.accent, fontWeight: 500 }}
              >
                {s.l}%
              </span> */}
            </div>
            {/* <div className="bar-t">
              <div
                className="bar-f"
                style={{ width: anim ? `${s.l}%` : "0%" }}
              />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════
   PROJECTS CARD
════════════════════════════════════ */
function ProjectsCard() {
  return (
    <div className="card c7">
      <Label text="Selected Projects" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 8,
        }}
      >
        {D.projects.map((p, i) => {
          const tc = PROJ_C[p.tag] || PROJ_C["LIVE"];
          return (
            <div
              key={i}
              className="sc"
              style={{ padding: 14, cursor: "pointer" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 7,
                }}
              >
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 13,
                    color: T.text,
                    letterSpacing: "-.01em",
                  }}
                >
                  {p.name}
                </div>
                <Pill c={tc.c} bg={tc.bg} b={tc.b}>
                  {p.tag}
                </Pill>
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: T.textSub,
                  lineHeight: 1.6,
                  marginBottom: 10,
                  fontWeight: 300,
                }}
              >
                {p.d}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{ fontSize: 12, color: T.accent, fontWeight: 500 }}
                >
                  View →
                </span>
                {p.stars !== "—" && (
                  <span
                    className="mono"
                    style={{ fontSize: 9, color: T.textMuted }}
                  >
                    ★ {p.stars}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ════════════════════════════════════
   CERTIFICATIONS CARD
════════════════════════════════════ */
function CertsCard() {
  return (
    <div className="card c4">
      <Label text="Certifications" />
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {D.certs.map((c, i) => (
          <div
            key={i}
            className="sc"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "11px 13px",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                flexShrink: 0,
                background: T.accentBg,
                border: `1px solid ${T.accentBdr}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                color: T.accent,
              }}
            >
              {c.icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 12.5,
                  fontWeight: 500,
                  color: T.text,
                  lineHeight: 1.3,
                }}
              >
                {c.name}
              </div>
              <div style={{ fontSize: 11, color: T.textMuted, marginTop: 3 }}>
                {c.org} · {c.year}
              </div>
            </div>
            <span
              style={{
                fontSize: 10,
                color: T.green,
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              ✓
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 16,
          paddingTop: 16,
          borderTop: `1px solid ${T.border}`,
        }}
      >
        {/* <div
          style={{
            fontSize: 10,
            color: T.textMuted,
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: ".08em",
            marginBottom: 10,
          }}
        >
          Member of
        </div>
        {D.memberships.map((m) => (
          <div
            key={m}
            style={{
              fontSize: 12,
              color: T.textSub,
              marginBottom: 6,
              paddingLeft: 10,
              borderLeft: `2px solid ${T.border}`,
              fontWeight: 300,
            }}
          >
            {m}
          </div>
        ))} */}
      </div>
    </div>
  );
}

/* ════════════════════════════════════
   TESTIMONIALS CARD
════════════════════════════════════ */
const AVC = ["#FF6B35", "#2563EB", "#16A34A", "#7C3AED"];
function TestimonialsCard() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const iv = setInterval(
      () => setActive((v) => (v + 1) % D.testimonials.length),
      5500,
    );
    return () => clearInterval(iv);
  }, []);
  const t = D.testimonials[active];
  return (
    <div className="card c8">
      <Label text="Recommendations" />
      <div style={{ position: "relative", minHeight: 126 }}>
        {/* Quotemark */}
        <div
          className="serif"
          style={{
            position: "absolute",
            top: -18,
            left: -6,
            fontSize: 90,
            color: T.accentBg,
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          "
        </div>
        <p
          style={{
            fontSize: 14,
            color: T.text,
            lineHeight: 1.72,
            position: "relative",
            zIndex: 1,
            marginBottom: 20,
            fontWeight: 300,
          }}
        >
          {t.q}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Avatar */}
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              flexShrink: 0,
              background: `linear-gradient(135deg,${AVC[active]},${AVC[(active + 1) % AVC.length]})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            {t.i}
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.text }}>
              {t.name}
            </div>
            <div style={{ fontSize: 11, color: T.textMuted, marginTop: 2 }}>
              {t.role}
            </div>
          </div>
          {/* Dots */}
          <div style={{ marginLeft: "auto", display: "flex", gap: 5 }}>
            {D.testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? 18 : 6,
                  height: 6,
                  borderRadius: 3,
                  border: "none",
                  cursor: "pointer",
                  background: i === active ? T.accent : T.border,
                  transition: "all .3s",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════
   BUCKET LIST CARD
════════════════════════════════════ */
function BucketCard() {
  const [chk, setChk] = useState(D.bucket.map((b) => b.d));
  const toggle = (i) => setChk((v) => v.map((c, j) => (j === i ? !c : c)));
  const done = chk.filter(Boolean).length;
  return (
    <div className="card c4">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Label text="Life Goals" />
        <span
          style={{
            fontSize: 11,
            color: T.textMuted,
            fontWeight: 500,
            marginBottom: 16,
          }}
        >
          {done}/{D.bucket.length} done
        </span>
      </div>
      {/* Progress */}
      <div
        style={{
          height: 3,
          background: T.border,
          borderRadius: 3,
          overflow: "hidden",
          marginTop: -10,
          marginBottom: 14,
        }}
      >
        <div
          style={{
            height: "100%",
            background: T.accent,
            borderRadius: 3,
            width: `${(done / D.bucket.length) * 100}%`,
            transition: "width .5s",
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {D.bucket.map((item, i) => (
          <div
            key={i}
            onClick={() => toggle(i)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "7px 6px",
              cursor: "pointer",
              borderRadius: 7,
              transition: "background .12s",
              userSelect: "none",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = T.surfaceAlt)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            <div
              style={{
                width: 17,
                height: 17,
                borderRadius: 5,
                flexShrink: 0,
                border: `1.5px solid ${chk[i] ? T.accent : T.borderAlt}`,
                background: chk[i] ? T.accentBg : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .2s",
              }}
            >
              {chk[i] && (
                <span style={{ fontSize: 9, color: T.accent, fontWeight: 700 }}>
                  ✓
                </span>
              )}
            </div>
            <span
              style={{
                fontSize: 12.5,
                fontWeight: 300,
                color: chk[i] ? T.textMuted : T.text,
                textDecoration: chk[i] ? "line-through" : "none",
                transition: "all .2s",
              }}
            >
              {item.t}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════
   PHOTOS CARD
════════════════════════════════════ */
function PhotosCard() {
  return (
    <div className="card c8">
      <Label text="Gallery" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gridTemplateRows: "repeat(2,90px)",
          gap: 8,
        }}
      >
        {D.photos.map((p, i) => (
          <div
            key={i}
            style={{
              borderRadius: 9,
              overflow: "hidden",
              background: p.bg,
              border: `1px solid ${T.border}`,
              cursor: "pointer",
              position: "relative",
              transition: "transform .22s,box-shadow .22s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "20px 7px 6px",
                background:
                  "linear-gradient(0deg,rgba(255,255,255,.7),transparent)",
              }}
            >
              <span
                style={{
                  fontSize: 8,
                  color: "rgba(0,0,0,.4)",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: ".05em",
                }}
              >
                {p.l}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* <p
        style={{
          fontSize: 11,
          color: T.textMuted,
          marginTop: 10,
          textAlign: "center",
          fontWeight: 300,
        }}
      >
        Replace gradient placeholders with real photos
      </p> */}
    </div>
  );
}

/* ════════════════════════════════════
   CONTACT CARD
════════════════════════════════════ */
function ContactCard() {
  return (
    <div
      className="card c12"
      id="contact"
      style={{
        background: "linear-gradient(155deg,#fff 0%,#FDFAF8 100%)",
        border: `1px solid ${T.border}`,
      }}
    >
      {/* Subtle glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 14,
          background:
            "radial-gradient(ellipse at 60% 50%,rgba(255,107,53,.04) 0%,transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        <div>
          <div
            className="serif"
            style={{
              fontSize: "clamp(22px,3vw,34px)",
              fontWeight: 400,
              letterSpacing: "-.01em",
              lineHeight: 1.15,
              color: T.text,
              marginBottom: 8,
            }}
          >
            Let's build something great together.
          </div>
          <p
            style={{
              fontSize: 13.5,
              color: T.textSub,
              fontWeight: 300,
              lineHeight: 1.6,
              maxWidth: 440,
            }}
          >
            Open to junior data analyst, engineering, scientist roles, contract
            work, and speaking at events about AI and Data.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <a href={`mailto:${D.email}`} className="btn-p">
            Send a Message →
          </a>
          <div
            style={{
              padding: "9px 16px",
              background: T.surfaceAlt,
              border: `1px solid ${T.border}`,
              borderRadius: 8,
            }}
          >
            <span style={{ fontSize: 12, color: T.textMuted, fontWeight: 400 }}>
              {D.email}
            </span>
          </div>
        </div>
      </div>
      {/* Social row */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          gap: 18,
          marginTop: 24,
          paddingTop: 18,
          borderTop: `1px solid ${T.border}`,
          flexWrap: "wrap",
        }}
      >
        {[
          ["GitHub", "#"],
          ["LinkedIn", "#"],
          ["Twitter / X", "#"],
          ["Blog", "#"],
        ].map(([l, h]) => (
          <a
            key={l}
            href={h}
            style={{
              fontSize: 12,
              color: T.textMuted,
              textDecoration: "none",
              fontWeight: 400,
              transition: "color .15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = T.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = T.textMuted)}
          >
            {l} ↗
          </a>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════
   APP
════════════════════════════════════ */
export default function App() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 20px 72px",
          background: T.bg,
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <div className="bento">
          <HeroCard />
          <StatsCard />
          <AboutCard />
          <ExpCard />
          <StackCard />
          <ProjectsCard />
          <CertsCard />
          <TestimonialsCard />
          <BucketCard />
          <PhotosCard />
          <ContactCard />
        </div>
        <p
          style={{
            textAlign: "center",
            paddingTop: 40,
            fontSize: 11,
            color: T.textMuted,
            letterSpacing: ".04em",
            fontWeight: 300,
          }}
        >
          © {new Date().getFullYear()} {D.name} · React + Vite · Deployed on
          Vercel
        </p>
      </div>
    </>
  );
}
