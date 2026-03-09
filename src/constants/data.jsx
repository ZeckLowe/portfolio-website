import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

export const personalInfo = {
  name: "Czech Louie Sadiang-abay",
  role: "Data Analyst",
  bio: "Hi, I'm Czech. I'm a Data Analyst focused on building fast, efficient, and detail-oriented data experiences. My work blends technical precision with a design-driven mindset to create websites that not only work well but feel great.",
  email: "czechlouie06@gmail.com",
  locaiton: "Cebu, Philippines",
};

export const projects = [1, 2, 3, 4, 5, 6];

export const socialLinks = [
  {
    name: "Github",
    icon: Github,
    link: "#",
    color: "hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "#",
    color: "hover:text-blue-400",
  },
];

export const experiences = [
  {
    title: "Intern",
    company: "AMCS Group",
    period: "January 2025 - May 2025",
    desc: "QA",
    color: "violet",
  },
];

export const tools = ["VS Code - Coding"];

export const goals = ["Learn to create an LLM"];

export const achievements = [
  {
    title: "Projects",
    value: "100",
    desc: "developed",
    color: "yellow",
  },
];

export const skills = [
  {
    category: "Frontend",
    skills: [
      "React / Next.js",
      "Tailwind CSS / CSS Animations",
      "Framer Motion",
      "HTML / CSS / JS",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js / Express", "PostgreSQL / Prisma", "REST & GraphQL APIs"],
  },
  {
    category: "Design & Tools",
    skills: ["Figma / Motion Design", "Docker / Git", "Notion / VS Code"],
  },
  {
    category: "Other",
    skills: ["Agile / Scrum", "SEO Basics", "Performance Optimization"],
  },
];

export const certificates = [
  "Microsoft Certified: Power Platform App Maker",
  "Adobe Certified Expert: After Effects",
  "Frontend Developer Nanodegree - Udacity",
  "Docker Essentials - Coursera",
];

export const animatedBlobs = [
  {
    className:
      "top-[-10%] left-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 opacity-40 blur-[180px]",
    animate: {
      x: [0, 150, -100, 0],
      y: [0, -80, 60, 0],
      scale: [1, 1.2, 0.9, 1],
      rotate: [0, 90, 180, 360],
    },
    duration: 20,
  },
  {
    className:
      "bottom-[-15%] right-[-5%] w-[700px] h-[700px] bg-gradient-to-tl from-cyan-500 via-blue-500 to-indigo-600 opacity-50 blur-[160px]",
    animate: {
      x: [0, -140, 100, 0],
      y: [0, 90, -70, 0],
      scale: [1, 0.85, 1.15, 1],
      rotate: [360, 270, 180, 0],
    },
    duration: 25,
  },
  {
    className:
      "top-[10%] left-[80%] -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 opacity-35 blur-[200px]",
    animate: {
      x: [0, 80, -120, 0],
      y: [0, -60, 80, 0],
      scale: [1, 1.1, 0.95, 1],
      rotate: [0, -90, -180, -360],
    },
    duration: 22,
  },
  {
    className:
      "top-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-to-bl from-emerald-500 via-teal-500 to-cyan-600 opacity-30 blur-[190px]",
    animate: {
      x: [0, -70, 110, 0],
      y: [0, 100, -50, 0],
      scale: [1, 0.9, 1.2, 1],
      rotate: [0, 120, 240, 360],
    },
    duration: 18,
  },
  {
    className:
      "bottom-[30%] left-[20%] w-[600px] h-[600px] bg-gradient-to-tr from-amber-500 via-yellow-500 to-lime-500 opacity-25 blur-[210px]",
    animate: {
      x: [0, 130, -90, 0],
      y: [0, -70, 90, 0],
      scale: [1, 1.15, 0.88, 1],
      rotate: [0, -120, -240, -360],
    },
    duration: 28,
  },
];
