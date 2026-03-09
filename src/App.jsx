import { useEffect, useState } from "react";
import { motion, stagger, transform } from "motion/react";
import {
  Clock,
  Trophy,
  User,
  BriefcaseBusiness,
  ExternalLink,
  Mail,
  User2Icon,
} from "lucide-react";
import pp from "../public/pp.png";
import {
  personalInfo,
  projects,
  socialLinks,
  experiences,
  tools,
  goals,
  achievements,
  skills,
  certificates,
  animatedBlobs,
} from "./constants/data.jsx";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(new Date().toLocaleDateString());
    const timer = setInterval(
      () => setTime(new Date().toLocaleDateString()),
      1000,
    );
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opcaity: 0 },
    show: {
      opcaity: 1,
      transition: {
        staggerChildren: 0.25,
        ease: "easeOut",
        duration: 0.7,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <div className="relative min-h-screen flex justify-center items-center bg-[#0a0a0a] text-white p-4 md:py-14 font-mono overflow-hidden">
        {animatedBlobs.map((blob, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${blob.className}`}
            animate={blob.animate}
            transition={{
              duration: blob.duration,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          ></motion.div>
        ))}

        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "show" : "hidden"}
          className="main-grid"
        >
          <motion.div
            variants={itemVariants}
            className="card card-cyan md:col-span-1 row-span-3 flex flex-col justify-center gap-3"
          >
            <img
              src={pp}
              className="w-[70px] h-[70px] rounded-full object-cover"
              alt=""
            />
            <h2 className="section-title">
              <User size={22} className="text-violet-400" />
              <p>{personalInfo.name}</p>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {personalInfo.bio}
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="card card-violet md:col-span-1 row-span-4 flex flex-col justify-center gap-3"
          ></motion.div>
        </motion.main>
      </div>
    </>
  );
}

export default App;
