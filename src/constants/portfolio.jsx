export const DATA = {
  hero: {
    name: "Alex Chen",
    initials: "AC",
    title: "AI Engineer & Full-Stack Developer",
    location: "San Francisco, CA",
    coords: "37.7749° N, 122.4194° W",
    tagline:
      "Building intelligent systems at the intersection of AI and product.",
    achievement: "YC W24 Founder",
    email: "hello@alexchen.dev",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "https://twitter.com/alexchen",
    calendly: "https://calendly.com/alexchen",
    blog: "https://blog.alexchen.dev",
  },

  about: [
    "I'm an AI engineer and full-stack developer passionate about building products that leverage the power of modern AI. I specialize in architecting agentic systems, RAG pipelines, and production-ready LLM integrations.",
    "Previously founded two startups and led engineering teams at Series A/B companies. I believe the best software feels invisible — it just works, intuitively, at scale.",
    "Currently exploring the frontier of multi-agent systems, tool-use, and autonomous AI workflows.",
  ],

  tags: ["Agentic AI", "RAG Systems", "Full-Stack", "Open Source"],

  stats: [
    { label: "Commits", value: "2,847" },
    { label: "Projects", value: "42" },
    { label: "Years Exp", value: "8+" },
    { label: "Clients", value: "30+" },
  ],

  experience: [
    {
      year: "2024–Now",
      role: "Principal AI Engineer",
      company: "NeuralStack",
      type: "CURRENT",
      desc: "Leading AI infrastructure and agentic system design for enterprise clients.",
    },
    {
      year: "2023",
      role: "AI Research Engineer",
      company: "DeepMind (Contract)",
      type: "CONTRACT",
      desc: "Contributed to multimodal reasoning research and evaluation pipelines.",
    },
    {
      year: "2022–23",
      role: "Senior Full-Stack Engineer",
      company: "Vercel",
      type: "FULLTIME",
      desc: "Worked on Next.js core, edge runtime, and developer tooling at scale.",
    },
    {
      year: "2021–22",
      role: "Co-Founder & CTO",
      company: "FlowAI (YC W22)",
      type: "FOUNDER",
      desc: "Built an AI-native workflow automation platform. Raised $2M seed round.",
    },
    {
      year: "2019–21",
      role: "Software Engineer",
      company: "Stripe",
      type: "FULLTIME",
      desc: "Payments infrastructure, fraud detection ML models, and API design.",
    },
    {
      year: "2019",
      role: "B.S. Computer Science",
      company: "MIT",
      type: "EDUCATION",
      desc: "Focus on AI/ML. Thesis on reinforcement learning for robotic control systems.",
    },
  ],

  techStack: {
    "AI / ML": [
      { name: "LangChain / LangGraph", level: 95 },
      { name: "OpenAI / Anthropic APIs", level: 98 },
      { name: "PyTorch / Transformers", level: 80 },
      { name: "Vector DBs (Pinecone, Qdrant)", level: 88 },
      { name: "RAG Pipelines", level: 92 },
    ],
    Frontend: [
      { name: "React / Next.js", level: 97 },
      { name: "TypeScript", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
    Backend: [
      { name: "Node.js / Python", level: 93 },
      { name: "FastAPI / Express", level: 88 },
      { name: "PostgreSQL / Redis", level: 85 },
    ],
    Infra: [
      { name: "AWS / GCP", level: 80 },
      { name: "Docker / Kubernetes", level: 78 },
      { name: "Vercel / Railway", level: 92 },
    ],
  },

  projects: [
    {
      name: "AgentOS",
      desc: "Open-source framework for multi-agent systems with persistent memory and tool use.",
      tag: "OPEN SOURCE",
      url: "#",
      stars: "2.4k",
    },
    {
      name: "RAGForge",
      desc: "Production-ready RAG pipeline builder with auto chunking, reranking, and evaluation.",
      tag: "DEPLOYED",
      url: "#",
      stars: "891",
    },
    {
      name: "FlowAI Platform",
      desc: "No-code AI workflow automation used by 500+ companies. Built during YC W22 batch.",
      tag: "ACQUIRED",
      url: "#",
      stars: "—",
    },
    {
      name: "PromptLab",
      desc: "Collaborative prompt engineering tool with version control and A/B testing for LLMs.",
      tag: "LIVE",
      url: "#",
      stars: "312",
    },
    {
      name: "CodeSense",
      desc: "AI code review agent that integrates into GitHub PRs for automated quality checks.",
      tag: "BETA",
      url: "#",
      stars: "156",
    },
    {
      name: "MemoryGraph",
      desc: "Knowledge graph construction from unstructured documents using language models.",
      tag: "RESEARCH",
      url: "#",
      stars: "78",
    },
  ],

  certifications: [
    {
      name: "AWS Solutions Architect",
      org: "Amazon Web Services",
      year: "2024",
      icon: "☁",
    },
    { name: "TensorFlow Developer", org: "Google", year: "2023", icon: "◈" },
    {
      name: "Deep Learning Specialization",
      org: "DeepLearning.AI",
      year: "2023",
      icon: "◉",
    },
    {
      name: "Certified Kubernetes Admin",
      org: "CNCF",
      year: "2022",
      icon: "⬡",
    },
  ],

  testimonials: [
    {
      text: "Alex is one of the most technically sharp engineers I've worked with. Their ability to architect complex AI systems while keeping the product intuitive is genuinely rare.",
      name: "Sarah Kim",
      role: "Engineering Director, OpenAI",
      initials: "SK",
    },
    {
      text: "Working with Alex at Vercel was exceptional. They shipped high-quality features fast and had a knack for identifying the right abstractions at the right time.",
      name: "Guillermo Rauch",
      role: "CEO, Vercel",
      initials: "GR",
    },
    {
      text: "Alex's work on our RAG infrastructure reduced hallucinations by 60% and cut latency in half. Truly exceptional engineering paired with great product instincts.",
      name: "Marcus Lee",
      role: "CTO, Enterprise Client",
      initials: "ML",
    },
    {
      text: "The FlowAI platform Alex built transformed how our team automates workflows. Shipped fast, iterated faster, and never compromised on reliability.",
      name: "Priya Sharma",
      role: "Head of Ops, Series B Startup",
      initials: "PS",
    },
  ],

  bucketList: [
    { task: "Speak at NeurIPS", done: true },
    { task: "Build a profitable AI product", done: true },
    { task: "Contribute to major open-source AI", done: true },
    { task: "Climb Mt. Fuji", done: true },
    { task: "Live abroad for 3+ months", done: true },
    { task: "Write an AI textbook", done: false },
    { task: "Run a marathon", done: false },
    { task: "Build something used by 1M+ people", done: false },
    { task: "Launch a self-managing AI agent", done: false },
    { task: "Mentor 100 engineers", done: false },
  ],

  photos: [
    { label: "NeurIPS 2023", bg: "linear-gradient(135deg,#1a1a2e,#16213e)" },
    { label: "YC Demo Day", bg: "linear-gradient(135deg,#0f2027,#203a43)" },
    { label: "Hackathon Win", bg: "linear-gradient(135deg,#1a1a2e,#2d1b69)" },
    { label: "Japan Trip", bg: "linear-gradient(135deg,#0f3460,#16213e)" },
    { label: "Team Offsite", bg: "linear-gradient(135deg,#1b262c,#0f3460)" },
    { label: "Conference Talk", bg: "linear-gradient(135deg,#2c2c54,#1a1a2e)" },
    { label: "Graduation", bg: "linear-gradient(135deg,#1a1a2e,#533483)" },
    { label: "First Startup", bg: "linear-gradient(135deg,#16213e,#1a1a2e)" },
  ],

  memberships: [
    "AI Safety Institute",
    "YC Alumni Network",
    "Philippine Software Industry Assoc.",
  ],
};

/* ── Tag colour palettes ── */
export const TYPE_STYLE = {
  CURRENT: {
    color: "#FF6B35",
    bg: "rgba(255,107,53,.08)",
    border: "rgba(255,107,53,.25)",
  },
  CONTRACT: {
    color: "#60A5FA",
    bg: "rgba(96,165,250,.08)",
    border: "rgba(96,165,250,.25)",
  },
  FULLTIME: {
    color: "#4ADE80",
    bg: "rgba(74,222,128,.08)",
    border: "rgba(74,222,128,.25)",
  },
  FOUNDER: {
    color: "#C084FC",
    bg: "rgba(192,132,252,.08)",
    border: "rgba(192,132,252,.25)",
  },
  EDUCATION: {
    color: "#94A3B8",
    bg: "rgba(148,163,184,.08)",
    border: "rgba(148,163,184,.25)",
  },
};

export const TAG_STYLE = {
  "OPEN SOURCE": {
    color: "#4ADE80",
    bg: "rgba(74,222,128,.08)",
    border: "rgba(74,222,128,.22)",
  },
  DEPLOYED: {
    color: "#FF6B35",
    bg: "rgba(255,107,53,.08)",
    border: "rgba(255,107,53,.22)",
  },
  ACQUIRED: {
    color: "#C084FC",
    bg: "rgba(192,132,252,.08)",
    border: "rgba(192,132,252,.22)",
  },
  LIVE: {
    color: "#60A5FA",
    bg: "rgba(96,165,250,.08)",
    border: "rgba(96,165,250,.22)",
  },
  BETA: {
    color: "#FBBF24",
    bg: "rgba(251,191,36,.08)",
    border: "rgba(251,191,36,.22)",
  },
  RESEARCH: {
    color: "#94A3B8",
    bg: "rgba(148,163,184,.08)",
    border: "rgba(148,163,184,.22)",
  },
};
