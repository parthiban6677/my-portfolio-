import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  GraduationCap,
  Menu,
  Moon,
  Palette,
  Send,
  Server,
  Sun,
  X,
} from "lucide-react";

import portrait from "./assets/LS20261027173511.png";
import foodyClubImg from "./assets/foodyClubImg.png";
import HRMS from "./assets/hrms.png";
import Mak from "./assets/Mak.jpeg";

const navigation = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
];

const skills = [
  { name: "React.js", level: 92, color: "mint" },
  { name: "JavaScript (ES6+)", level: 90, color: "blue" },
  { name: "Node.js & Express", level: 86, color: "orange" },
  { name: "PostgreSQL", level: 82, color: "rose" },
];

const marqueeItems = [
  "React.js",
  "JavaScript ES6+",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "REST APIs",
  "JWT Auth",
  "Tailwind CSS",
  "Ant Design",
  "Git & GitHub",
];
const projects = [
  {
    number: "01",
    title: "FoodyClub",
    subtitle: "Food Ordering Web Application",
    description:
      "A full ordering experience with an admin dashboard for menus, orders, and user profiles.",
    stack: ["React.js", "REST API", "JWT", "Bootstrap"],
    points: [
      "CRUD workflows for menus and orders",
      "JWT-based login and role-based access",
      "Responsive layouts with search and filters",
    ],
    accent: "mint",
    image: foodyClubImg,
  },
  {
    number: "02",
    title: "HRMS",
    subtitle: "Multi-tenant Human Resource Management System",
    description:
      "A full stack HRMS experience with a React.js interface and Tailwind CSS UI, supported by a secure multi-tenant backend.",
    stack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
    ],
    points: [
      "Built the React.js frontend UI with Tailwind CSS",
      "Employee, HR, and manager access levels",
      "Implemented the backend with parameterized queries, structured errors, and restricted routes",
    ],
    accent: "blue",
    image: HRMS,
  },
  {
    number: "03",
    title: "Makivshan",
    subtitle: "Corporate Website",
    description:
      "A responsive corporate website translated from Figma with a considered mobile-first structure.",
    stack: ["React.js", "Ant Design"],
    points: [
      "Figma-to-interface implementation",
      "Mobile-first responsive approach",
      "SEO-friendly page structure",
    ],
    accent: "orange",
    image: Mak,
  },
];

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading reveal">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [darkMode]);

  const handleContact = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      {/* Top Navbar */}
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Parthiban home">
          <span className="brand-mark">PB</span>
          <span>Parthiban B</span>
        </a>
        <nav
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label="Primary navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setMenuOpen(false)}>
            Hire Me <ArrowUpRight size={15} />
          </a>
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode((value) => !value)}
            aria-label="Toggle color theme">
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="top">
        {/* 🌟 புதிய Hero Section (Reference Image போன்ற அமைப்பில்) */}
        <section className="hero-cinematic">
          {/* Spotlight Glow Effect Behind Image */}
          <div className="hero-spotlight" />

          <div className="hero-cinematic-container">
            {/* இடதுபுறம்: பெயர் & ரோல் */}
            <div className="hero-left-side reveal">
              <div className="hero-greeting-pill">
                <span>
                  HI, I'M <strong>PARTHIBAN</strong>
                </span>
              </div>
              <h1 className="hero-mega-title">
                FULL STACK
                <span className="gradient-highlight">DEVELOPER</span>
              </h1>
              <div className="hero-status-pill">
                <span className="pulse-dot" /> Available for opportunities
              </div>
            </div>

            {/* மையம் (Center): உங்கள் புகைப்படம் */}
            <div className="hero-center-side reveal">
              <div className="portrait-spotlight-halo" />
              <div className="portrait-image-wrapper">
                <img
                  src={portrait}
                  alt="Parthiban B - Full Stack Developer"
                  className="portrait-center-photo"
                />
              </div>
            </div>

            {/* வலதுபுறம்: குறிக்கோள், சுருக்கம் & பட்டன்கள் */}
            <div className="hero-right-side reveal">
              <span className="hero-motto-label">
                TURNING IDEAS INTO REALITY
              </span>
              <p className="hero-motto-desc">
                Available for hire. Building fast, responsive web applications
                using modern tech stacks — React, Node.js, and PostgreSQL.
              </p>
              <div className="hero-actions-row">
                <a className="button-pill-primary" href="#work">
                  View My Work <ArrowUpRight size={16} />
                </a>
                <a className="button-pill-secondary" href="#contact">
                  Let's Talk
                </a>
              </div>
              <div className="hero-location-text">
                <span>
                  Based in <strong>Kallakurichi, Tamil Nadu</strong>
                </span>
              </div>
            </div>
          </div>

          {/* கீழ் உள்ள ஸ்க்ரோல் இன்டிகேட்டர் */}
          <div className="hero-scroll-indicator">
            <span>↓ SCROLL TO EXPLORE</span>
          </div>
        </section>
        <div className="hero-marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>
        ;{/* About Section */}
        <section id="about" className="section-pad about-section">
          <SectionHeading
            eyebrow="01 / About me"
            title="Turning requirements into work that lasts."
            copy="I care about the details behind the interface — from a clean user journey to a dependable API underneath it."
          />
          <div className="about-grid">
            <div className="about-statement reveal">
              <span className="quote-mark">“</span>
              <p>
                My approach is simple: understand the problem, create a clear
                plan, and build something that feels effortless to use.
              </p>
            </div>
            <div className="about-details reveal">
              <p>
                Entry-level Full Stack Developer experienced with React
                interfaces and Node.js + Express REST APIs backed by PostgreSQL.
                I enjoy working across frontend and backend through API
                integration.
              </p>
              <div className="stat-row">
                <div>
                  <strong>03</strong>
                  <span>Selected projects</span>
                </div>
                <div>
                  <strong>02</strong>
                  <span>Core disciplines</span>
                </div>
                <div>
                  <strong>2024</strong>
                  <span>Graduated</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section id="skills" className="section-pad skills-section">
          <SectionHeading
            eyebrow="02 / Capabilities"
            title="Tools I use to make things work."
            copy="A practical toolkit spanning interface design, application logic, and data."
          />
          <div className="skills-layout">
            <div className="skill-cards reveal">
              <div className="skill-card">
                <Code2 size={22} />
                <span>Frontend</span>
                <p>
                  React.js, JavaScript, HTML5, CSS3, Flexbox, Bootstrap, Ant
                  Design, Axios, Hooks
                </p>
              </div>
              <div className="skill-card">
                <Server size={22} />
                <span>Backend</span>
                <p>
                  Node.js, Express.js, REST APIs, JWT, OTP authentication,
                  bcrypt, middleware
                </p>
              </div>
              <div className="skill-card">
                <Database size={22} />
                <span>Database</span>
                <p>
                  PostgreSQL, Neon's database platform, parameterized queries
                </p>
              </div>
              <div className="skill-card">
                <Palette size={22} />
                <span>Tools</span>
                <p>Git, GitHub, Postman, VS Code, Figma design handoff</p>
              </div>
            </div>
            <div className="bars reveal">
              <div className="bars-label">
                <span>Comfort level</span>
                <span>01 — 04</span>
              </div>
              {skills.map((skill) => (
                <div className="bar-item" key={skill.name}>
                  <div>
                    <span>{skill.name}</span>
                    <b>{skill.level}%</b>
                  </div>
                  <div className="bar-track">
                    <span
                      className={skill.color}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Work Section */}
        <section id="work" className="section-pad work-section">
          <SectionHeading
            eyebrow="03 / Selected work"
            title="A few things I’ve built."
            copy="Real projects from my portfolio — each one a chance to solve a different kind of problem."
          />
          <div className="projects-list">
            {projects.map((project) => (
              <article
                className={`project-card ${project.accent} reveal`}
                key={project.number}>
                <div className="project-number">{project.number}</div>

                {project.image && (
                  <div className="project-media-wrap">
                    <div className="project-image-box">
                      <img src={project.image} alt={project.title} />
                      <div className="image-shine" />
                    </div>
                  </div>
                )}

                <div className="project-main">
                  <div className="project-title">
                    <span>{project.subtitle}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.description}</p>
                  <div className="project-points">
                    {project.points.map((point) => (
                      <span key={point}>
                        <Check size={14} /> {point}
                      </span>
                    ))}
                  </div>
                  <div className="tag-list">
                    {project.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="project-arrow">
                  <ArrowUpRight size={25} />
                </div>
              </article>
            ))}
          </div>
        </section>
        {/* Journey Section */}
        <section id="journey" className="section-pad journey-section">
          <SectionHeading
            eyebrow="04 / Journey"
            title="The foundation behind the work."
          />
          <div className="journey-grid">
            <div className="journey-card reveal">
              <div className="journey-icon">
                <BriefcaseBusiness size={20} />
              </div>
              <div>
                <span className="card-label">Experience</span>
                <h3>Full Stack Developer</h3>
                <p>
                  Building responsive React interfaces and Node.js + Express
                  REST APIs backed by PostgreSQL. Experienced with JWT and OTP
                  authentication, role-based access control, admin dashboards,
                  and API testing with Postman.
                </p>
              </div>
            </div>
            <div className="journey-card reveal">
              <div className="journey-icon">
                <GraduationCap size={20} />
              </div>
              <div>
                <span className="card-label">Education · 2024</span>
                <h3>B.Sc. Chemistry</h3>
                <p>
                  Chikkanna Arts and Science College, Tiruppur
                  <br />
                  (Bharathiar University)
                </p>
              </div>
            </div>
          </div>
          <div className="strengths reveal">
            <span className="card-label">Strengths</span>
            <div>
              <span>Problem-solving mindset</span>
              <span>Self-taught & proactive</span>
              <span>Clear communication</span>
              <span>Frontend + backend thinking</span>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="contact-section section-pad">
          <div className="contact-glow" />
          <div className="contact-copy reveal">
            <span className="eyebrow">05 / Contact</span>
            <h2>
              Have a good problem?
              <br />
              <em>Let’s talk.</em>
            </h2>
            <p>
              I’m open to opportunities where I can bring thoughtful frontend
              work and dependable backend systems together.
            </p>
            <div className="profile">
              <div className="contact-links">
                <a
                  href="https://www.linkedin.com/in/parthiban-frontenddeveloper"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card linkedin">
                  <div className="icon-badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <span>LinkedIn profile</span>
                  <span className="arrow-hint">↗</span>
                </a>
              </div>

              <div className="contact-links">
                <a
                  href="https://github.com/parthiban6677"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card github">
                  <div className="icon-badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </div>
                  <span>GitHub profile</span>
                  <span className="arrow-hint">↗</span>
                </a>
              </div>

              <div className="contact-links">
                <a
                  href="mailto:bharaniparthi710@gmail.com"
                  className="contact-card email">
                  <div className="icon-badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span>bharaniparthi710@gmail.com</span>
                  <span className="arrow-hint">↗</span>
                </a>
              </div>
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={handleContact}>
            <label>
              Name
              <input required name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input
                required
                type="email"
                name="email"
                placeholder="you@email.com"
              />
            </label>
            <label>
              Message
              <textarea
                required
                name="message"
                placeholder="Tell me a little about the opportunity..."
                rows={4}
              />
            </label>
            <button className="button button-primary" type="submit">
              {sent ? "Message ready to send" : "Send a message"}{" "}
              <Send size={16} />
            </button>
            {sent && (
              <p className="form-success">
                Thanks — your message details are ready. Please use your email
                app to send it to Parthiban.
              </p>
            )}
          </form>
        </section>
      </main>

      <footer className="footer">
        <span>© 2024 Parthiban B</span>
        <span>Built with curiosity & care</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
