// Manpreet Kaur Portfolio - Main Consolidated React Application Script
const { useState, useEffect } = React;

// --- Data Models ---
const personalInfo = {
  name: "Manpreet Kaur",
  title: "Web Designer & Frontend Developer",
  tagline: "Crafting beautiful, modern, high-performance web applications & digital experiences.",
  email: "mk62837584@gmail.com",
  phone: "+91 6283758448",
  location: " ludhiana,Punjab, India",
  availableForFreelance: true,
  bio: "I am a passionate Web Designer and Frontend Developer with a deep love for creating clean, user-centric, and visually captivating web applications. With expertise in modern JavaScript frameworks, responsive UI design, and responsive styling, I transform complex concepts into elegant digital solutions.",
  metrics: [
    { label: "Years Experience", value: "3+", icon: "Award" },
    { label: "Completed Projects", value: "25+", icon: "FolderCheck" },
    { label: "Satisfied Clients", value: "100%", icon: "Smile" },
    { label: "Clean Code", value: "99.9%", icon: "Code2" }
  ]
};

const skillsData = {
  frontend: [
    { name: "React.js", level: 92 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "HTML5 & CSS3", level: 98 },
    { name: "Next.js", level: 85 },
    { name: "Redux / Context API", level: 88 }
  ],
  backend: [
    { name: "Node.js", level: 82 },
    { name: "Express.js", level: 80 },
    { name: "RESTful APIs", level: 90 },
    { name: "MongoDB", level: 78 },
    { name: "Firebase", level: 85 }
  ],
  tools: [
    { name: "Git & GitHub", level: 92 },
    { name: "Figma (UI/UX)", level: 88 },
    { name: "VS Code", level: 95 },
    { name: "Vite / Webpack", level: 85 },
    { name: "Vercel / Netlify", level: 90 }
  ]
};

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Analytics & Sales Dashboard",
    category: "Full Stack",
    description: "A high-performance analytics dashboard featuring real-time revenue graphs, sales funnel visualizations, and customer management widgets.",
    image: "./public/images/ecommerce.jpg",
    tags: ["React", "Tailwind CSS", "Recharts", "Node.js"],
    liveUrl: "#",
    githubUrl: "https://github.com"
  },
  {
    id: 2,
    title: "NovaTech AI SaaS Platform",
    category: "Web Design",
    description: "Futuristic SaaS landing page and product dashboard with dark glassmorphism aesthetic, 3D card displays, and smooth scroll animations.",
    image: "./public/images/saas.jpg",
    tags: ["React", "Tailwind CSS", "Glassmorphism", "Lucide"],
    liveUrl: "#",
    githubUrl: "https://github.com"
  },
  {
    id: 3,
    title: "Apex Digital Agency Portfolio",
    category: "Web Design",
    description: "Modern creative agency showcase platform designed to highlight creative work, case studies, and brand identities with bold layout dynamics.",
    image: "./public/images/agency.jpg",
    tags: ["React", "Tailwind CSS", "UX/UI Design", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com"
  },
  {
    id: 4,
    title: "NeuraCode AI Workspace Studio",
    category: "Frontend",
    description: "Interactive AI code editor and content generation workspace featuring split-pane chat interface, snippet export, and syntax highlight themes.",
    image: "./public/images/ai_workspace.jpg",
    tags: ["React", "JavaScript", "Tailwind CSS", "REST API"],
    liveUrl: "#",
    githubUrl: "https://github.com"
  }
];

// --- Navbar Component ---
const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-lg border-b border-slate-700/20 dark:border-slate-800/60' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[2px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-slate-900 dark:bg-slate-950 rounded-[10px] flex items-center justify-center font-extrabold text-white text-lg tracking-wider">
              MK
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Manpreet Kaur
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase">
              Web Designer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-200/50 dark:bg-slate-800/40 p-1.5 rounded-full border border-slate-300/40 dark:border-slate-700/50 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-300/40 dark:hover:bg-slate-700/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Dark Mode Switcher */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-slate-200/70 dark:bg-slate-800/70 border border-slate-300/50 dark:border-slate-700/60 text-slate-700 dark:text-slate-200 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-300 focus:outline-none"
            aria-label="Toggle Theme"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold btn-primary"
          >
            <span>Let's Talk</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 border border-slate-300/50 dark:border-slate-700/60"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pb-4">
          <div className="glass-panel rounded-2xl p-4 flex flex-col gap-2 shadow-2xl border border-slate-300/50 dark:border-slate-700/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-3 rounded-xl text-base font-semibold btn-primary"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

// --- Hero Component ---
const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      <div className="gradient-blob w-96 h-96 bg-indigo-500 top-10 -left-20"></div>
      <div className="gradient-blob w-96 h-96 bg-cyan-400 top-40 right-0"></div>
      <div className="gradient-blob w-80 h-80 bg-purple-600 bottom-10 left-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10 border border-indigo-500/30 dark:border-indigo-400/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold tracking-wide backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for new web projects</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hi, I'm <span className="text-gradient">Manpreet Kaur</span> 👋
            </h1>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-300">
              Web Designer & <span className="text-indigo-600 dark:text-indigo-400">Frontend Developer</span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.tagline} Building modern, pixel-perfect, responsive web applications with clean code and intuitive user interfaces.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl font-bold text-base btn-primary flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl font-bold text-base btn-secondary flex items-center gap-2"
              >
                <span>Contact Me</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-semibold">{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 002 2h1.5a1 1 0 01.95.684l1.2 3.6a1 1 0 01-.26 1.05l-1.3 1.3a16 16 0 006.6 6.6l1.3-1.3a1.5 1.5 0 011.05-.26l3.6 1.2a1 1 0 01.684.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-semibold">{personalInfo.phone}</span>
              </a>
            </div>

          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-40 blur-xl animate-pulse"></div>

              <div className="relative glass-panel rounded-3xl p-8 shadow-2xl space-y-6 text-slate-900 dark:text-white border border-slate-200/80 dark:border-slate-700/60">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-0.5 shadow-lg">
                    <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-white font-extrabold text-2xl">
                      MK
                    </div>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xl text-slate-900 dark:text-white">Manpreet Kaur</h3>
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Web Designer & Frontend Dev</p>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-500 dark:text-slate-400">
                      <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>Punjab, India</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-900 text-slate-200 p-4 font-mono text-xs space-y-2 border border-slate-800 shadow-inner">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                    <span className="ml-2 text-[10px] text-slate-400">developer.js</span>
                  </div>
                  <p><span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> = &#123;</p>
                  <p className="pl-4"><span className="text-cyan-300">name</span>: <span className="text-emerald-300">'Manpreet Kaur'</span>,</p>
                  <p className="pl-4"><span className="text-cyan-300">role</span>: <span className="text-emerald-300">'Web Designer'</span>,</p>
                  <p className="pl-4"><span className="text-cyan-300">skills</span>: [<span className="text-amber-300">'React'</span>, <span className="text-amber-300">'Tailwind'</span>, <span className="text-amber-300">'JS'</span>],</p>
                  <p className="pl-4"><span className="text-cyan-300">passion</span>: <span className="text-emerald-300">'Crafting digital beauty'</span></p>
                  <p>&#125;;</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300 border border-indigo-500/20">
                    ⚡ React 18
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-500/20">
                    🎨 Tailwind CSS
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300 border border-purple-500/20">
                    ✨ UI/UX Design
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- About Component ---
const About = () => {
  return (
    <section id="about" className="py-20 relative z-10 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Passionate About Crafting <span className="text-gradient">Impactful Digital Experiences</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {personalInfo.metrics.map((metric, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-2xl text-center hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white mb-4 shadow-md font-bold">
                {index === 0 && "🏆"}
                {index === 1 && "🚀"}
                {index === 2 && "⭐"}
                {index === 3 && "💻"}
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {metric.value}
              </h3>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xl">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Responsive Web Design</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Crafting mobile-first layouts that fluidly adapt across smartphones, tablets, and wide desktop screens.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xl">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Frontend Architecture</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Writing clean, modular React component trees with optimized state management and fast renders.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-xl">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Modern UI/UX Polish</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Elevating user interfaces with micro-animations, glassmorphism, gradient accents, and accessibility.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- Skills Component ---
const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend Development' },
    { id: 'backend', name: 'Backend & APIs' },
    { id: 'tools', name: 'Tools & Technologies' },
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'frontend') return skillsData.frontend;
    if (activeTab === 'backend') return skillsData.backend;
    if (activeTab === 'tools') return skillsData.tools;
    return [...skillsData.frontend, ...skillsData.backend, ...skillsData.tools];
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A comprehensive overview of my technical toolset, modern web standards, and design proficiency.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredSkills().map((skill, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-2xl space-y-4 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    ⚡
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden p-0.5">
                <div
                  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-panel rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800/80">
          <h3 className="text-center font-bold text-xl text-slate-900 dark:text-white mb-6">
            Frequently Used Frameworks & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Next.js", "Node.js", "Express", "REST API", "Git", "GitHub", "Figma", "Vite", "VS Code"].map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl text-sm font-semibold bg-slate-200/70 dark:bg-slate-800/70 text-slate-800 dark:text-slate-200 border border-slate-300/50 dark:border-slate-700/60 hover:border-indigo-500 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// --- Projects Component ---
const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Web Design', 'Frontend'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 relative z-10 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Explore a selection of recent web applications and digital design projects created with React, Tailwind CSS, and modern web tools.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 shadow-xl group flex flex-col justify-between"
            >
              <div className="relative overflow-hidden aspect-video bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white text-slate-900 font-bold shadow-lg hover:bg-indigo-600 hover:text-white transition-colors"
                    title="Live Demo"
                  >
                    🔗
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-900 text-white font-bold shadow-lg hover:bg-indigo-600 transition-colors"
                    title="GitHub Repository"
                  >
                    💻
                  </a>
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-extrabold bg-slate-900/80 text-white backdrop-blur-md border border-slate-700">
                  {project.category}
                </span>
              </div>

              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-200/80 dark:border-slate-800/80">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                    >
                      <span>Live Preview</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <span>Source Code</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// --- Contact Component ---
const Contact = ({ triggerToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      triggerToast(`Thank you, ${formData.name}! Your message has been received.`);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Build Something <span className="text-gradient">Great Together</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Have a project in mind, a freelance inquiry, or just want to connect? Send a message below or reach out directly!
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:border-indigo-500/50 transition-all duration-300 shadow-md group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0 font-bold group-hover:scale-110 transition-transform">
                ✉️
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email Address</h4>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 truncate block mt-0.5"
                >
                  {personalInfo.email}
                </a>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedField === 'email' ? 'Copied!' : 'Copy'}
              </button>
            </div>

            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:border-indigo-500/50 transition-all duration-300 shadow-md group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0 font-bold group-hover:scale-110 transition-transform">
                📞
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Phone / WhatsApp</h4>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 truncate block mt-0.5"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white transition-colors"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? 'Copied!' : 'Copy'}
              </button>
            </div>

            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0 font-bold">
                📍
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</h4>
                <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                  {personalInfo.location}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Available for Remote Work Worldwide</p>
              </div>
            </div>

          </div>

          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-200/80 dark:border-slate-800/80">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Proposal / Website Design"
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Manpreet, I'd like to talk about a website project..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-extrabold text-base btn-primary flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Footer Component ---
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-extrabold text-white text-sm">
                MK
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Manpreet Kaur
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              Web Designer & Developer crafting sleek, user-friendly digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-400">
            <a href="#home" className="hover:text-indigo-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-2xl bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white transition-all duration-300 border border-slate-700 shadow-lg group"
            title="Back to Top"
          >
            <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Manpreet Kaur. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Toast Component ---
const Toast = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className="glass-panel px-5 py-4 rounded-2xl shadow-2xl border border-emerald-500/40 bg-slate-900/90 text-white flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
          ✓
        </div>
        <div>
          <h4 className="font-bold text-sm text-white">Message Sent Successfully!</h4>
          <p className="text-xs text-slate-300">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="ml-2 text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

// --- App Container ---
const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [darkMode]);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact triggerToast={triggerToast} />
      </main>
      <Footer />
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
};

// Render App safely when DOM is ready
const mountApp = () => {
  try {
    const container = document.getElementById('root');
    if (container) {
      const root = ReactDOM.createRoot(container);
      root.render(<App />);
    }
  } catch (err) {
    console.error("Failed to render React app:", err);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
