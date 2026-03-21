import {
  Mail,
  Github,
  Linkedin,
  FileText,
  Bot,
  Terminal,
  Briefcase,
  Image,
  Rocket,
  Heart,
  Coffee,
  Activity,
  LucideIcon,
  GithubIcon,
  LucideGithub,
} from "lucide-react";

// Contact links
export const CONTACT_LINKS = [
  {
    href: "mailto:czechlouie06@gmail.com",
    icon: Mail,
    label: "czechlouie06@gmail.com",
    type: "email",
  },
  {
    href: "https://github.com/ZeckLowe",
    icon: Github,
    label: "Github",
    type: "link",
  },
  {
    href: "https://www.linkedin.com/in/czech-louie-sadiang-abay",
    icon: Linkedin,
    label: "LinkedIn",
    type: "link",
  },
];

// Location
export const LOCATION = "Cebu City, Philippines";

// Navigation commands for command palette
export const COMMANDS = [
  { icon: Mail, label: "Send Email" },
  { icon: Github, label: "View Github" },
  { icon: FileText, label: "Download Resume" },
  { icon: Bot, label: "Chat with Agent" },
  { icon: Terminal, label: "View Projects" },
  { icon: Briefcase, label: "View Experience" },
  { icon: Image, label: "View Gallery" },
];

// AI Skills
export const AI_SKILLS = [
  { name: "LLM Integration", level: 95, ai: true },
  { name: "Prompt Engineering", level: 90, ai: true },
  { name: "RAG Systems", level: 85, ai: true },
  { name: "AI Agent Development", level: 88, ai: true },
];

// Core tech stack
export const TECH_STACK = [
  { name: "TypeScript", variant: "orange" as const },
  { name: "React", variant: "orange" as const },
  { name: "Node.js", variant: "default" as const },
  { name: "Python", variant: "default" as const },
  { name: "LangChain", variant: "ai" as const },
  { name: "OpenAI", variant: "ai" as const },
  { name: "PostgreSQL", variant: "default" as const },
  { name: "AWS", variant: "default" as const },
  { name: "Docker", variant: "default" as const },
  { name: "Next.js", variant: "default" as const },
];

// Experience
export const EXPERIENCE = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description:
      "Led development of AI-powered microservices serving 2M+ users. Implemented LLM-based features that improved user engagement by 40%.",
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description:
      "Built core product features from scratch. Integrated AI capabilities and improved deployment velocity by 3x.",
  },
];

// Gallery items
export const GALLERY_ITEMS = [
  { emoji: "🏔️", label: "Hiking", color: "from-emerald-400 to-teal-500" },
  { emoji: "💻", label: "Coding", color: "from-violet-400 to-purple-500" },
  { emoji: "🎤", label: "Speaking", color: "from-orange-400 to-amber-500" },
  { emoji: "🏆", label: "Winning", color: "from-yellow-400 to-orange-500" },
  { emoji: "✈️", label: "Traveling", color: "from-blue-400 to-indigo-500" },
  { emoji: "🎮", label: "Gaming", color: "from-pink-400 to-rose-500" },
];

// Bucket list
export const BUCKET_LIST = [
  { text: "Build a successful AI startup", done: true },
  { text: "Speak at major tech conference", done: true },
  { text: "Contribute to open source (100+ stars)", done: true },
  { text: "Visit 30 countries", done: false, progress: "22/30" },
  { text: "Write a technical book", done: false },
  { text: "Learn to pilot a plane", done: false },
];

// Recommendations
export const RECOMMENDATIONS = [
  {
    name: "Sarah Chen",
    role: "CTO at TechStartup",
    avatar: "SC",
    text: "Alex is one of the most talented engineers I have worked with. His ability to architect complex systems while maintaining clean code is remarkable.",
    rating: 5,
  },
  {
    name: "Michael Park",
    role: "Engineering Manager at Google",
    avatar: "MP",
    text: "His AI integration skills are top-notch. Alex led our LLM initiatives and delivered exceptional results ahead of schedule.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Product Manager at Meta",
    avatar: "EW",
    text: "Working with Alex was a game-changer for our product. He understood requirements deeply and suggested innovative solutions.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Founder at AI Labs",
    avatar: "DK",
    text: "Rare combination of technical excellence and product thinking. Alex transformed our vision into a scalable reality.",
    rating: 5,
  },
  {
    name: "Lisa Rodriguez",
    role: "VP Engineering at Stripe",
    avatar: "LR",
    text: "Alex's attention to detail and systematic approach to problem-solving made him an invaluable team member.",
    rating: 5,
  },
];

// Agent responses for chat
export const AGENT_RESPONSES = [
  "He has 5+ years of experience building scalable web applications and AI-powered systems.",
  "Alex is passionate about open source and has contributed to several major projects.",
  "His recent focus has been on LLM integration and building AI agent systems.",
  "He's available for full-time opportunities and consulting work.",
  "You can reach him at alex@example.com for collaboration opportunities.",
  "He specializes in TypeScript, React, Node.js, and AI/ML integration.",
  "He's worked with companies like TechCorp and StartupXYZ.",
];

// Education
export const EDUCATION = {
  degree: "B.S. Computer Science",
  school: "Stanford University",
  period: "2016 - 2020",
};

// Current focus
export const CURRENT_FOCUS = [
  "AI Agent Systems",
  "LLM Fine-tuning",
  "Open Source",
];

// User info
export const USER_INFO = {
  name: "Czech Louie R. Sadiang-abay",
  initials: "CL",
  title: "Data Analys",
  badge: "AI-Enhanced",
  bio: "Data Analyst who aspires to be a Data Scientist with a strong passion for extracting insights from data, building machine learning models, and developing AI-driven solutions.",
};
