"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Search,
  ArrowRight,
  X,
  Command,
  Bot,
  Send,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Zap,
  Briefcase,
  Terminal,
  FileText,
  Image,
  Star,
  LucideIcon,
  Activity,
  Rocket,
  Heart,
  Coffee,
  Play,
} from "lucide-react";
import { COMMANDS, AGENT_RESPONSES, CONTACT_LINKS } from "@/lib/constants";
import { currentValue } from "@dnd-kit/react/utilities";
import { Arrow } from "radix-ui/internal";

// Animated Counter
export function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="font-mono">
      {count}
      {suffix}
    </div>
  );
}

// Command Palette
export function CommandPalette({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [search, setSearch] = useState("");

  const handleCommand = useCallback(
    (label: string) => {
      switch (label) {
        case "Send Email":
          window.location.href = CONTACT_LINKS[0].href;
          break;
        case "View GitHub":
          window.open(CONTACT_LINKS[1].href, "_blank");
          break;
        case "Download Resume":
          console.log("download");
          break;
        case "Chat with Agent":
          document.getElementById("chat")?.scrollIntoView({
            behavior: "smooth",
          });
          break;
        case "View Projects":
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" });
          break;
        case "View Experience":
          document
            .getElementById("experience")
            ?.scrollIntoView({ behavior: "smooth" });
          break;
        case "View Gallery":
          document
            .getElementById("gallery")
            ?.scrollIntoView({ behavior: "smooth" });
          break;
      }
      onClose();
    },
    [onClose],
  );

  const filteredCommands = COMMANDS.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-slide-down">
        <div className="flex items-center gap-3 p-4 border-b border-gray-100">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent outline-none text-sm"
            autoFocus
          />
          <kbd className="px-2 py-1 text-[10px] font-mono bg-gray-100 rounded text-gray-500">
            ESC
          </kbd>
        </div>
        <div className="max-h-80 overflow-y-auto p-2">
          {filteredCommands.map((cmd, i) => (
            <button
              key={i}
              onClick={() => handleCommand(cmd.label)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-50 transition-colors text-left group"
            >
              <cmd.icon className="w-4 h-4 text-gray-400 group-hover:text-orange-500" />
              <span className="text-sm text-gray-700 group-hover:text-orange-600">
                {cmd.label}
              </span>
              <ArrowRight className="w-3 h-3 ml-auto text-gray-300 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Section Title
export function SectionTitle({
  icon: Icon,
  title,
  badge,
}: {
  icon: LucideIcon;
  title: string;
  badge?: string;
}) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="p-2 rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 border border-orange-100 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-4 h-4 text-orange-600" />
      </div>
      <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
      {badge && (
        <span className="ml-auto px-2 py-0.5 rounded-full text-[10px] font-medium bg-orange-100 text-orange-700 animate-pulse">
          {badge}
        </span>
      )}
    </div>
  );
}

// Keyboard Shortcut Hint
export function KeyboardShortcut() {
  return (
    <div className="fixed bottom-4 left-4 z-20 hidden md:flex items-center gap-2 text-xs text-gray-400">
      <Command className="w-3 h-3" />
      <span>+</span>
      <kbd className="fixed bottom-4 left-4 z-20 hidden md:flex items-center gap-2 text-xs text-gray-400">
        K
      </kbd>
      <span className="ml-1">Quick Actions</span>
    </div>
  );
}
