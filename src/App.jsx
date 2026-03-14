import { useState, useEffect, useRef } from "react";
import profilePhoto from "./assets/photo.jpg";
import iae1Img from "./assets/iae1.png";
import iae2Img from "./assets/iae2.png";
import iae3Img from "./assets/iae3.png";
import tm1Img from "./assets/tm1.png";
import tm2Img from "./assets/tm2.png";
import ibrSteveImg from "./assets/ibr_steve.jpg";
import eseImg from "./assets/ese.jpg";
import ese2Img from "./assets/ese2.jpg";
import medTrackIcon from "./assets/medTrack.png";

const PROFILE = {
  name: "efeSerin",
  tagline: "Senior Computer Engineering Student",
  heroTitle: ["Welcome to ", "my ", "portfolio."],
  heroDesc:
    "A senior Computer Engineering student passionate about building full-stack, mobile, and IoT-integrated solutions — bridging the gap between hardware, web, and mobile applications.",
  aboutText: [
    'I am a senior <strong>Computer Engineering</strong> student with hands-on experience in full-stack, mobile development, and system design. I actively work with <strong>Java, Spring Boot, Flutter, Node.js, and React</strong>, and I am passionate about developing IoT-integrated solutions that bridge the gap between hardware, web, and mobile applications.',
    'Beyond my technical background, I possess strong <strong>leadership and problem-solving skills</strong>, which were notably demonstrated during my 2024 Work & Travel program in the United States. Although I started in an entry-level role, my ability to manage complex situations and optimize workflows led to a rapid promotion to <strong>Assistant Manager</strong>, and eventually to <strong>Manager</strong> of a second location. I find great satisfaction in strategic planning and resolving critical bottlenecks in fast-paced environments, a mindset I apply to software architecture and project lifecycles.',
    'I am currently seeking <strong>internship or part-time opportunities</strong> to deepen my industry experience and contribute to real-world software projects.',
  ],
  stats: [
    { value: "11+", label: "Projects" },
    { value: "7+", label: "Technologies" },
    { value: "2026", label: "Graduation" },
    { value: "C1-C2", label: "English" },
  ],
  email: "efeserin02@gmail.com",
  linkedin: "https://linkedin.com/in/efeSerin",
  github: "https://github.com/efesrnn",
};

const SKILLS = [
  { group: "Languages", items: ["Java", "C#", "C++", "JavaScript", "Python", "Dart", "HTML"] },
  { group: "Frameworks", items: ["Spring Boot", "React", "React Native", "Node.js", ".NET", "Flutter", "JUnit", "JavaFX"] },
  { group: "Architecture & Methodologies", items: ["OOP/D", "Backend for Frontend (BFF)", "Domain Driven Design (DDD)", "Microservices"] },
  { group: "Cloud & Databases", items: ["Firebase (Firestore, RTDB, FCM, Auth)", "MS SQL", "MySQL", "MongoDB", "SQLite"] },
  { group: "Tools & Productivity", items: ["Docker", "Git & GitHub", "Claude (Prompt Eng.)", "GitHub Copilot", "Figma", "ESP32"] },
];

const PROJECTS = [
  {
    icon: medTrackIcon,
    title: "MedTrack: Intelligent Medication Dispensing System",
    desc: "A full-stack, IoT-based intelligent medication management system with automated dosage scheduling, hardware-software handshakes, real-time dispensing, and detailed report generation. Uses a hybrid Firebase database architecture for seamless microcontroller communication.",
    tags: ["Flutter", "Firebase", "ESP32", "BLE", "Dart"],
    github: "https://github.com/efesrnn/medTrack",
    live: "https://youtu.be/bI7RfsWRz98",
    images: [
      "https://github.com/efesrnn/medTrack/raw/main/assets/ScreenShots/DeviceList.jpeg",
      "https://github.com/efesrnn/medTrack/raw/main/assets/ScreenShots/DeviceScheduling.jpeg",
      "https://github.com/efesrnn/medTrack/raw/main/assets/ScreenShots/SynchScreen.jpeg",
      "https://github.com/efesrnn/medTrack/raw/main/assets/ScreenShots/WeeklyReportScreen.jpeg",
      "https://github.com/efesrnn/medTrack/raw/main/assets/ScreenShots/RelativesScreen.jpeg",
    ],
  },
  {
    icon: "🏎️",
    title: "F1 Race Strategy Analyzer",
    desc: "A comprehensive data science pipeline analyzing Formula 1 pit stop strategies from 2018 to 2024. Features end-to-end preprocessing (imputation, IQR outlier detection, discretization), ANOVA-based feature selection, PCA dimensionality reduction, and multi-algorithm classification (Decision Tree, k-NN, Naive Bayes) to predict optimal pit stop counts. Includes linear & polynomial regression for pit lap forecasting, ensemble learning (AdaBoost, Random Forest), and Apriori association rule mining to uncover hidden strategy patterns across seasons.",
    tags: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    github: null,
    images: [],
  },
  {
    icon: "📅",
    title: "Timetable Manager",
    desc: "A desktop academic schedule management application featuring CSV-based data import, classroom-course assignment, automatic student enrollment, weekly schedule generation, and classroom swap functionality for efficient timetable organization.",
    tags: ["Java", "JavaFX", "SQLite", "CSS"],
    github: "https://github.com/efesrnn/Timetable-Manager",
    images: [tm1Img, tm2Img],
  },
  {
    icon: "📚",
    title: "Book Catalog",
    desc: "A desktop book catalog application that allows users to manage a collection of books. Features cover image management, file browsing, and a clean Java-based GUI with Gradle build system.",
    tags: ["Java", "JavaFX", "Gradle"],
    github: "https://github.com/efesrnn/bookCatalog",
    images: [],
  },
  {
    icon: "⚙️",
    title: "The Integrated Assignment Environment (IAE)",
    desc: "A desktop assignment evaluation environment that allows instructors to test and compare the output of student submissions across multiple programming languages, providing an integrated platform for automated assignment grading and output verification.",
    tags: ["C#", ".NET", "WinForms"],
    github: "https://github.com/efesrnn/The-Integrated-Assignment-Environment",
    images: [iae1Img, iae2Img, iae3Img],
  },
  {
    icon: "🎵",
    title: "Metadata Editor",
    desc: "A desktop application for viewing and editing metadata of images and media files. Features a built-in file browser, visual image preview panel, EXIF and audio/video tag editing, and date automation tools with Windows-specific support.",
    tags: ["Python", "PySide6", "Qt", "Pillow", "Mutagen"],
    github: "https://github.com/efesrnn/Metadata-Editor",
    images: [],
  },
];

const EXPERIENCE = [
  {
    date: "06/2025 — 09/2025",
    role: "Manager",
    company: "Island Bike & Cart Rental — Put-In-Bay, OH",
    desc: "Managed operations for a secondary business location. Designed a custom golf cart reservation prototype and led a cost-benefit analysis that resulted in a strategic pivot away from high-commission payment gateways to preserve business margins.",
    reference: {
      name: "Dianne Duggan",
      title: "Owner",
      email: "islandeedee@hotmail.com",
      phone: "+1 419 356 8663",
    },
  },
  {
    date: "06/2024 — 09/2024",
    role: "Rental Clerk → Assistant Manager",
    company: "Island Bike & Cart Rental — Put-In-Bay, OH",
    desc: "Advanced from entry-level to Assistant Manager within a single season through proactive problem-solving and effective team coordination. Demonstrated exceptional leadership in a fast-paced environment.",
    reference: {
      name: "Steve Riddle",
      title: "Manager",
      phone: "+1 419 341 1726",
    },
    image: ibrSteveImg,
  },
  {
    date: "05/2022 — 07/2022",
    role: "Language School",
    company: "European School of English — Malta",
    desc: "Completed an intensive English language program, finishing with B2 proficiency. Currently at C1–C2 level. Enhanced cross-cultural communication skills in an international environment.",
    images: [eseImg, ese2Img],
  },
  {
    date: "2021 — Present",
    role: "Bachelor's Degree — Computer Engineering",
    company: "İzmir University of Economics",
  },
];

/* ─── SCROLL REVEAL HOOK ─── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `all 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── TYPING TEXT COMPONENT ─── */
function TypingText({ text, startDelay = 400, speed = 65 }) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, startDelay, speed]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <span>
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "1em",
          background: "var(--accent)",
          marginLeft: "3px",
          verticalAlign: "text-bottom",
          opacity: showCursor ? 1 : 0,
          transition: "opacity 0.1s",
        }}
      />
    </span>
  );
}

/* ─── ICONS ─── */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);

/* ─── STYLES (injected once) ─── */
const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Manrope:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  --bg: #0a0a14; --bg-card: #12121e; --bg-card-hover: #1a1a2e;
  --text: #e8eaf0; --text-muted: #8890a4;
  --accent: #6C8CFF; --accent-dim: #6C8CFF1a;
  --accent-secondary: #4F6ADB;
  --border: #1e2038;
  --serif: 'DM Serif Display', Georgia, serif;
  --sans: 'Manrope', system-ui, sans-serif;
  --mono: 'JetBrains Mono', monospace;
}
html { scroll-behavior: smooth; }
body { margin:0; background: var(--bg); }
::selection { background: var(--accent); color: var(--bg); }

@keyframes pulse { 0%,100%{opacity:.4} 50%{opacity:1} }
@keyframes fadeUp { from{opacity:0;transform:translateY(25px)} to{opacity:1;transform:translateY(0)} }
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
@keyframes photoReveal {
  0% { opacity: 0; transform: scale(0.7); }
  60% { opacity: 1; transform: scale(1.05); }
  100% { opacity: 1; transform: scale(1); }
}
@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 20px #6C8CFF33, 0 0 60px #6C8CFF11; }
  50% { box-shadow: 0 0 30px #6C8CFF55, 0 0 80px #6C8CFF22; }
}
@keyframes borderRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}
`;

function InjectStyles() {
  useEffect(() => {
    if (document.getElementById("portfolio-css")) return;
    const s = document.createElement("style");
    s.id = "portfolio-css";
    s.textContent = GLOBAL_CSS;
    document.head.appendChild(s);
    return () => s.remove();
  }, []);
  return null;
}

/* ─── COMPONENTS ─── */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = ["about", "skills", "projects", "experience", "contact"];
  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        backdropFilter: "blur(20px)", background: "#0a0a14cc",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "border-color 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: 1400, margin: "0 auto", padding: "1.25rem 3rem",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          boxSizing: "border-box", width: "100%",
        }}
      >
        <div style={{ fontFamily: "var(--serif)", fontSize: "1.35rem", color: "var(--text)", letterSpacing: "-0.02em" }}>
          efeSerin<span style={{ color: "var(--accent)" }}>.</span>
        </div>
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              style={{
                fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.08em",
                textTransform: "uppercase", color: "var(--text-muted)",
                textDecoration: "none", fontFamily: "var(--sans)",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--text-muted)")}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function ProfilePhoto() {
  return (
    <div
      style={{
        position: "relative",
        width: 190,
        height: 190,
        flexShrink: 0,
        animation: "photoReveal 1s 0.3s cubic-bezier(0.22,1,0.36,1) both",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: -4,
          borderRadius: "50%",
          background: "conic-gradient(from 0deg, #6C8CFF, #4F6ADB, #2a3a8f, #6C8CFF)",
          animation: "borderRotate 6s linear infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 2,
          borderRadius: "50%",
          background: "var(--bg)",
        }}
      />
      <img
        src={profilePhoto}
        alt="Efe Serin"
        style={{
          position: "absolute",
          inset: 5,
          width: "calc(100% - 10px)",
          height: "calc(100% - 10px)",
          borderRadius: "50%",
          objectFit: "cover",
          animation: "glowPulse 4s ease-in-out infinite",
        }}
      />
    </div>
  );
}

function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",
        alignItems: "center", textAlign: "center",
        padding: "8rem 2rem 4rem", position: "relative", overflow: "hidden",
        fontFamily: "var(--sans)", color: "var(--text)",
      }}
    >
      <div
        style={{
          position: "absolute", top: "-30%", right: "-15%",
          width: 700, height: 700,
          background: "radial-gradient(circle, var(--accent-dim) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute", bottom: "-20%", left: "-10%",
          width: 500, height: 500,
          background: "radial-gradient(circle, #4F6ADB11 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ marginBottom: "2.5rem", animation: "fadeUp 0.6s 0.1s both" }}>
        <ProfilePhoto />
      </div>

      <div
        style={{
          fontFamily: "var(--mono)", fontSize: "0.82rem", color: "var(--accent)",
          letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.5rem",
          animation: "fadeUp 0.8s 0.3s both",
          lineHeight: 1.8,
        }}
      >
        // <TypingText text={PROFILE.tagline} startDelay={800} speed={55} />
      </div>

      <h1
        style={{
          fontFamily: "var(--serif)", fontSize: "clamp(2.6rem,5.5vw,5rem)",
          lineHeight: 1.1, letterSpacing: "-0.03em", maxWidth: 800, margin: 0,
          animation: "fadeUp 0.8s 0.5s both",
        }}
      >
        {PROFILE.heroTitle[0]}
        {PROFILE.heroTitle[1]}
        <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{PROFILE.heroTitle[2]}</em>
      </h1>

      <p
        style={{
          fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: 560,
          marginTop: "2rem", fontWeight: 300, lineHeight: 1.7,
          animation: "fadeUp 0.8s 0.7s both",
        }}
      >
        {PROFILE.heroDesc}
      </p>

      <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", animation: "fadeUp 0.8s 0.9s both" }}>
        <a href="#projects" style={btnStyle("var(--accent)", "var(--bg)")}>View My Work ↓</a>
        <a href="#contact" style={btnStyle("transparent", "var(--text)", true)}>Get in Touch</a>
      </div>

      <div
        style={{
          position: "absolute", bottom: "2.5rem",
          display: "flex", alignItems: "center", gap: "0.75rem",
          fontFamily: "var(--mono)", fontSize: "0.72rem", color: "var(--text-muted)",
          letterSpacing: "0.1em", textTransform: "uppercase",
          animation: "fadeUp 0.8s 1.1s both",
        }}
      >
        <span style={{ width: 40, height: 1, background: "var(--text-muted)", display: "block", animation: "pulse 2s infinite" }} />
        Scroll to explore
      </div>
    </section>
  );
}

function btnStyle(bg, color, outline = false) {
  return {
    display: "inline-flex", alignItems: "center", gap: "0.5rem",
    padding: "0.85rem 2rem", fontFamily: "var(--sans)", fontSize: "0.85rem",
    fontWeight: 600, letterSpacing: "0.04em", borderRadius: 100,
    background: bg, color, textDecoration: "none",
    border: outline ? "1px solid var(--border)" : "none",
    cursor: "pointer", transition: "all 0.3s",
  };
}

function SectionHeader({ num, label, title }) {
  return (
    <Reveal>
      <span style={{ fontFamily: "var(--mono)", fontSize: "0.72rem", color: "var(--accent)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        {num} — {label}
      </span>
      <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-0.02em", marginTop: "0.75rem", marginBottom: "3rem", color: "var(--text)" }}>
        {title}
      </h2>
    </Reveal>
  );
}

function About() {
  return (
    <section id="about" style={sectionStyle}>
      <div style={containerStyle}>
        <SectionHeader num="01" label="About" title="A little bit about me." />
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "4rem", alignItems: "start" }}>
          <Reveal>
            <div style={{ fontSize: "1.05rem", color: "var(--text-muted)", fontWeight: 300, lineHeight: 1.8, fontFamily: "var(--sans)", textAlign: "left" }}>
              {PROFILE.aboutText.map((p, i) => (
                <p key={i} style={{ marginBottom: "1.2rem" }} dangerouslySetInnerHTML={{ __html: p.replace(/<strong>/g, '<strong style="color:var(--text);font-weight:500">') }} />
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              {PROFILE.stats.map((s, i) => (
                <StatCard key={i} {...s} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--bg-card)", border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        borderRadius: 16, padding: "1.75rem", transition: "all 0.3s",
        transform: hovered ? "translateY(-3px)" : "none",
        boxShadow: hovered ? "0 8px 30px #6C8CFF15" : "none",
      }}
    >
      <div style={{ fontFamily: "var(--serif)", fontSize: "2.5rem", color: "var(--accent)", lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.5rem", fontFamily: "var(--sans)" }}>{label}</div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" style={sectionStyle}>
      <div style={containerStyle}>
        <SectionHeader num="02" label="Skills" title="My toolbox." />
        <Reveal>
          {SKILLS.map((group) => (
            <div key={group.group}>
              <div style={{ fontFamily: "var(--mono)", fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "2rem", marginBottom: "0.6rem" }}>
                {group.group}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {group.items.map((s) => (
                  <SkillChip key={s} label={s} />
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function SkillChip({ label }) {
  const [h, setH] = useState(false);
  return (
    <span
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: "0.4rem",
        padding: "0.55rem 1.15rem", background: h ? "var(--accent-dim)" : "var(--bg-card)",
        border: `1px solid ${h ? "var(--accent)" : "var(--border)"}`,
        borderRadius: 100, fontSize: "0.82rem", fontWeight: 500,
        color: h ? "var(--accent)" : "var(--text-muted)",
        fontFamily: "var(--sans)", transition: "all 0.3s", cursor: "default",
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
      {label}
    </span>
  );
}

function Projects() {
  return (
    <section id="projects" style={sectionStyle}>
      <div style={containerStyle}>
        <SectionHeader num="03" label="Projects" title="Selected work." />
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageGallery({ images }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [lightbox, setLightbox] = useState(null);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 220, behavior: "smooth" });
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        {canScrollLeft && (
          <button onClick={() => scroll(-1)} style={galleryArrowStyle("left")}>‹</button>
        )}
        {canScrollRight && images.length > 2 && (
          <button onClick={() => scroll(1)} style={galleryArrowStyle("right")}>›</button>
        )}
        <div
          ref={scrollRef}
          style={{
            display: "flex", gap: "0.75rem", overflowX: "auto", paddingBottom: "0.5rem",
            scrollbarWidth: "none", msOverflowStyle: "none",
          }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Screenshot ${i + 1}`}
              onClick={() => setLightbox(src)}
              style={{
                height: 180, minWidth: 120, maxWidth: 200,
                objectFit: "cover", borderRadius: 12,
                border: "1px solid var(--border)",
                cursor: "pointer", transition: "transform 0.3s, border-color 0.3s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => { e.target.style.transform = "scale(1.03)"; e.target.style.borderColor = "var(--accent)"; }}
              onMouseLeave={(e) => { e.target.style.transform = "scale(1)"; e.target.style.borderColor = "var(--border)"; }}
            />
          ))}
        </div>
      </div>

      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
    </>
  );
}

function Lightbox({ src, onClose }) {
  const [zoom, setZoom] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, posX: 0, posY: 0 });
  const containerRef = useRef(null);

  const MIN_ZOOM = 0.5;
  const MAX_ZOOM = 4;
  const ZOOM_STEP = 0.25;

  const handleWheel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setZoom((z) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z + (e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP))));
  };

  const zoomIn = (e) => { e.stopPropagation(); setZoom((z) => Math.min(MAX_ZOOM, z + ZOOM_STEP)); };
  const zoomOut = (e) => { e.stopPropagation(); setZoom((z) => Math.max(MIN_ZOOM, z - ZOOM_STEP)); };
  const resetZoom = (e) => { e.stopPropagation(); setZoom(1); setPos({ x: 0, y: 0 }); };

  const handleMouseDown = (e) => {
    if (zoom <= 1) return;
    e.preventDefault();
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, posX: pos.x, posY: pos.y };
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPos({
      x: dragStart.current.posX + (e.clientX - dragStart.current.x),
      y: dragStart.current.posY + (e.clientY - dragStart.current.y),
    });
  };

  const handleMouseUp = () => setDragging(false);

  const handleBackdropClick = (e) => {
    if (e.target === containerRef.current) onClose();
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(MAX_ZOOM, z + ZOOM_STEP));
      if (e.key === "-") setZoom((z) => Math.max(MIN_ZOOM, z - ZOOM_STEP));
      if (e.key === "0") { setZoom(1); setPos({ x: 0, y: 0 }); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const zoomPct = Math.round(zoom * 100);

  return (
    <div
      ref={containerRef}
      onClick={handleBackdropClick}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,0.88)", backdropFilter: "blur(12px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: dragging ? "grabbing" : (zoom > 1 ? "grab" : "default"),
        userSelect: "none",
      }}
    >
      <img
        src={src}
        alt="Enlarged screenshot"
        draggable={false}
        onMouseDown={handleMouseDown}
        style={{
          maxHeight: "85vh",
          maxWidth: "90vw",
          width: "auto",
          height: "auto",
          objectFit: "contain",
          borderRadius: 12,
          boxShadow: "0 0 60px #6C8CFF22",
          transform: `scale(${zoom}) translate(${pos.x / zoom}px, ${pos.y / zoom}px)`,
          transition: dragging ? "none" : "transform 0.2s ease-out",
          pointerEvents: "auto",
          transformOrigin: "center center",
        }}
      />

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", alignItems: "center", gap: "0.5rem",
          background: "rgba(18,18,30,0.9)", border: "1px solid var(--border)",
          borderRadius: 100, padding: "0.5rem 0.75rem",
          backdropFilter: "blur(10px)",
        }}
      >
        <LightboxBtn onClick={zoomOut} label="−" />
        <span
          onClick={resetZoom}
          style={{
            fontFamily: "var(--mono)", fontSize: "0.72rem", color: "var(--text-muted)",
            minWidth: 42, textAlign: "center", cursor: "pointer",
            padding: "0.2rem 0.4rem", borderRadius: 6,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.target.style.color = "var(--text-muted)")}
        >
          {zoomPct}%
        </span>
        <LightboxBtn onClick={zoomIn} label="+" />
      </div>

      <button
        onClick={onClose}
        style={{
          position: "absolute", top: "1.5rem", right: "1.5rem",
          width: 36, height: 36, borderRadius: "50%",
          background: "rgba(18,18,30,0.9)", border: "1px solid var(--border)",
          color: "var(--text-muted)", fontSize: "1rem", fontFamily: "var(--sans)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", transition: "color 0.2s, border-color 0.2s",
        }}
        onMouseEnter={(e) => { e.target.style.color = "var(--text)"; e.target.style.borderColor = "var(--accent)"; }}
        onMouseLeave={(e) => { e.target.style.color = "var(--text-muted)"; e.target.style.borderColor = "var(--border)"; }}
      >✕</button>

      <span style={{
        position: "absolute", bottom: "5rem", left: "50%", transform: "translateX(-50%)",
        fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--text-muted)",
        opacity: 0.5, letterSpacing: "0.05em", whiteSpace: "nowrap",
      }}>
        Scroll to zoom · Drag to pan · ESC to close
      </span>
    </div>
  );
}

function LightboxBtn({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 30, height: 30, borderRadius: "50%",
        background: "transparent", border: "1px solid var(--border)",
        color: "var(--text)", fontSize: "1rem", fontFamily: "var(--sans)",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", transition: "border-color 0.2s, color 0.2s",
        lineHeight: 1, padding: 0,
      }}
      onMouseEnter={(e) => { e.target.style.borderColor = "var(--accent)"; e.target.style.color = "var(--accent)"; }}
      onMouseLeave={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.color = "var(--text)"; }}
    >
      {label}
    </button>
  );
}

function galleryArrowStyle(side) {
  return {
    position: "absolute", top: "50%", [side]: -12, transform: "translateY(-50%)",
    zIndex: 5, width: 28, height: 28, borderRadius: "50%",
    background: "var(--bg-card)", border: "1px solid var(--border)",
    color: "var(--text)", fontSize: "1.1rem", fontFamily: "var(--sans)",
    display: "flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer", lineHeight: 1, padding: 0,
  };
}

function ProjectCard({ icon, title, desc, tags, github, live, images = [] }) {
  const [h, setH] = useState(false);
  const hasImages = images && images.length > 0;

  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: h ? "var(--bg-card-hover)" : "var(--bg-card)",
        border: `1px solid ${h ? "#2a2a4a" : "var(--border)"}`,
        borderRadius: 20, padding: "2.25rem",
        display: "flex", flexDirection: "column",
        transition: "all 0.4s", position: "relative", overflow: "hidden",
        transform: h ? "translateY(-4px)" : "none",
        boxShadow: h ? "0 10px 40px #6C8CFF10" : "none",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--accent), transparent)", opacity: h ? 1 : 0, transition: "opacity 0.4s" }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--accent-dim)", border: "1px solid #6C8CFF33", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", overflow: "hidden" }}>
          {typeof icon === "string" && (icon.startsWith("/") || icon.startsWith("data:") || icon.startsWith("http")) ? (
            <img src={icon} alt="" style={{ width: 32, height: 32, objectFit: "contain" }} />
          ) : icon}
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {github && <IconLink href={github}><GithubIcon /></IconLink>}
          {live && <IconLink href={live}><ExternalIcon /></IconLink>}
        </div>
      </div>

      <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.4rem", marginBottom: "0.6rem", color: "var(--text)" }}>{title}</h3>

      {hasImages ? (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignItems: "start" }}>
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 300, lineHeight: 1.7, fontFamily: "var(--sans)", margin: 0 }}>{desc}</p>
          <ImageGallery images={images} />
        </div>
      ) : (
        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 300, lineHeight: 1.7, flexGrow: 1, fontFamily: "var(--sans)" }}>{desc}</p>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: "1px solid var(--border)" }}>
        {tags.map((t) => (
          <span key={t} style={{ fontFamily: "var(--mono)", fontSize: "0.7rem", padding: "0.3rem 0.7rem", background: "#ffffff06", borderRadius: 6, color: "var(--text-muted)" }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function IconLink({ href, children }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        width: 36, height: 36, borderRadius: "50%",
        border: `1px solid ${h ? "var(--accent)" : "var(--border)"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: h ? "var(--accent)" : "var(--text-muted)",
        textDecoration: "none", transition: "all 0.3s",
      }}
    >
      {children}
    </a>
  );
}

function CopyableEmail({ email }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <a
      href="#"
      onClick={handleCopy}
      style={{
        color: "var(--accent)", textDecoration: "none", fontSize: "0.78rem",
        fontFamily: "var(--mono)", transition: "opacity 0.2s", cursor: "pointer",
      }}
      title="Click to copy"
    >
      {copied ? "✓ Copied!" : email}
    </a>
  );
}

function ReferenceCard({ reference }) {
  return (
    <div
      style={{
        marginTop: "1rem", padding: "0.85rem 1.1rem",
        background: "var(--bg-card)", border: "1px solid var(--border)",
        borderRadius: 12, fontSize: "0.8rem", fontFamily: "var(--sans)",
      }}
    >
      <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem", fontFamily: "var(--mono)" }}>Reference</div>
      <div style={{ fontWeight: 600, color: "var(--text)" }}>{reference.name}</div>
      <div style={{ color: "var(--accent)", fontSize: "0.75rem", marginBottom: "0.35rem" }}>{reference.title}</div>
      {reference.email && (
        <div style={{ marginBottom: "0.2rem" }}>
          <CopyableEmail email={reference.email} />
        </div>
      )}
      {reference.phone && (
        <div style={{ color: "var(--text-muted)", fontSize: "0.78rem", fontFamily: "var(--mono)" }}>{reference.phone}</div>
      )}
    </div>
  );
}

function Experience() {
  const [letterLightbox, setLetterLightbox] = useState(null);
  return (
    <section id="experience" style={sectionStyle}>
      <div style={containerStyle}>
        <SectionHeader num="04" label="Experience" title="Where I've been." />
        <div style={{ maxWidth: 860 }}>
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={i} delay={i * 100}>
              <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", padding: "2rem 0", borderBottom: i < EXPERIENCE.length - 1 ? "1px solid var(--border)" : "none", textAlign: "left" }}>
                <span style={{ fontFamily: "var(--mono)", fontSize: "0.78rem", color: "var(--text-muted)", paddingTop: "0.2rem" }}>{exp.date}</span>
                <div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text)", fontFamily: "var(--sans)" }}>{exp.role}</div>
                  <div style={{ fontSize: "0.88rem", color: "var(--accent)", marginBottom: "0.6rem", fontFamily: "var(--sans)" }}>{exp.company}</div>
                  {exp.desc && <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", fontWeight: 300, lineHeight: 1.7, fontFamily: "var(--sans)" }}>{exp.desc}</p>}
                  {(exp.reference || exp.image) && (
                    <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", flexWrap: "wrap" }}>
                      {exp.reference && <ReferenceCard reference={exp.reference} />}
                      {exp.image && (
                        <div style={{ marginTop: "1rem" }}>
                          <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem", fontFamily: "var(--mono)" }}>Recommendation Letter</div>
                          <img
                            src={exp.image}
                            alt="Recommendation letter"
                            onClick={() => setLetterLightbox(exp.image)}
                            style={{
                              height: 120, borderRadius: 10,
                              border: "1px solid var(--border)",
                              cursor: "pointer", transition: "transform 0.3s, border-color 0.3s",
                              objectFit: "cover",
                            }}
                            onMouseEnter={(e) => { e.target.style.transform = "scale(1.03)"; e.target.style.borderColor = "var(--accent)"; }}
                            onMouseLeave={(e) => { e.target.style.transform = "scale(1)"; e.target.style.borderColor = "var(--border)"; }}
                          />
                        </div>
                      )}
                    </div>
                  )}
                  {exp.images && exp.images.length > 0 && (
                    <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                      {exp.images.map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt={`${exp.company} ${idx + 1}`}
                          onClick={() => setLetterLightbox(src)}
                          style={{
                            height: 120, borderRadius: 10,
                            border: "1px solid var(--border)",
                            cursor: "pointer", transition: "transform 0.3s, border-color 0.3s",
                            objectFit: "cover",
                          }}
                          onMouseEnter={(e) => { e.target.style.transform = "scale(1.03)"; e.target.style.borderColor = "var(--accent)"; }}
                          onMouseLeave={(e) => { e.target.style.transform = "scale(1)"; e.target.style.borderColor = "var(--border)"; }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      {letterLightbox && <Lightbox src={letterLightbox} onClose={() => setLetterLightbox(null)} />}
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ ...sectionStyle, textAlign: "center" }}>
      <div style={containerStyle}>
        <SectionHeader num="05" label="Contact" title="Let's work together." />
        <Reveal>
          <p style={{ color: "var(--text-muted)", fontWeight: 300, fontSize: "1.05rem", marginBottom: "2.5rem", marginTop: "-1.5rem", fontFamily: "var(--sans)" }}>
            I'm always open to new opportunities and interesting conversations.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <ContactPill href={`mailto:${PROFILE.email}`} icon={<MailIcon />} label={PROFILE.email} />
            <ContactPill href={PROFILE.linkedin} icon={<LinkedinIcon />} label="LinkedIn" />
            <ContactPill href={PROFILE.github} icon={<GithubIcon />} label="GitHub" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactPill({ href, icon, label }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: "0.6rem",
        padding: "0.9rem 1.75rem", background: h ? "var(--accent-dim)" : "var(--bg-card)",
        border: `1px solid ${h ? "var(--accent)" : "var(--border)"}`,
        borderRadius: 100, fontSize: "0.88rem", fontWeight: 500,
        color: "var(--text)", textDecoration: "none",
        fontFamily: "var(--sans)", transition: "all 0.3s",
        transform: h ? "translateY(-2px)" : "none",
      }}
    >
      <span style={{ color: "var(--accent)", display: "flex" }}>{icon}</span>
      {label}
    </a>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "2rem 0", fontFamily: "var(--sans)" }}>
      <div style={{ ...containerStyle, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>© 2026 Efe Serin</span>
        <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
          Made with <span style={{ color: "var(--accent)" }}>React</span>
        </span>
      </div>
    </footer>
  );
}

const containerStyle = {
  maxWidth: 1400,
  margin: "0 auto",
  padding: "0 3rem",
  width: "100%",
  boxSizing: "border-box",
};

const sectionStyle = {
  padding: "6rem 0",
  borderTop: "1px solid var(--border)",
  fontFamily: "var(--sans)",
  color: "var(--text)",
};

/* ─── APP ─── */
export default function Portfolio() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <InjectStyles />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}