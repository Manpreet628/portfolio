export const personalInfo = {
  name: "Manpreet Kaur",
  title: "Web Designer & Frontend Developer",
  tagline: "Crafting beautiful, modern, high-performance web applications & digital experiences.",
  email: "mk62837584@gmail.com",
  phone: "+91 6283758448",
  location: "Punjab, India",
  availableForFreelance: true,
  socialLinks: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
    dribbble: "https://dribbble.com/",
  },
  bio: "I am a passionate Web Designer and Frontend Developer with a deep love for creating clean, user-centric, and visually captivating web applications. With expertise in modern JavaScript frameworks, responsive UI design, and responsive styling, I transform complex concepts into elegant digital solutions.",
  metrics: [
    { label: "Years Experience", value: "3+", icon: "Award" },
    { label: "Completed Projects", value: "25+", icon: "FolderCheck" },
    { label: "Satisfied Clients", value: "100%", icon: "Smile" },
    { label: "Clean Code", value: "99.9%", icon: "Code2" }
  ]
};

export const skillsData = {
  frontend: [
    { name: "React.js", level: 92, icon: "Code2" },
    { name: "JavaScript (ES6+)", level: 90, icon: "FileCode" },
    { name: "Tailwind CSS", level: 95, icon: "Palette" },
    { name: "HTML5 & CSS3", level: 98, icon: "Layout" },
    { name: "Next.js", level: 85, icon: "Globe" },
    { name: "Redux / Context API", level: 88, icon: "Layers" }
  ],
  backend: [
    { name: "Node.js", level: 82, icon: "Server" },
    { name: "Express.js", level: 80, icon: "Cpu" },
    { name: "RESTful APIs", level: 90, icon: "Link" },
    { name: "MongoDB", level: 78, icon: "Database" },
    { name: "Firebase", level: 85, icon: "Flame" }
  ],
  tools: [
    { name: "Git & GitHub", level: 92, icon: "GitBranch" },
    { name: "Figma (UI/UX)", level: 88, icon: "Figma" },
    { name: "VS Code", level: 95, icon: "Terminal" },
    { name: "Vite / Webpack", level: 85, icon: "Zap" },
    { name: "Vercel / Netlify", level: 90, icon: "Cloud" }
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Analytics & Sales Dashboard",
    category: "Full Stack",
    description: "A high-performance analytics dashboard featuring real-time revenue graphs, sales funnel visualizations, and customer management widgets.",
    image: "/public/images/ecommerce.jpg",
    tags: ["React", "Tailwind CSS", "Recharts", "Node.js"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "NovaTech AI SaaS Platform",
    category: "Web Design",
    description: "Futuristic SaaS landing page and product dashboard with dark glassmorphism aesthetic, 3D card displays, and smooth scroll animations.",
    image: "/public/images/saas.jpg",
    tags: ["React", "Tailwind CSS", "Glassmorphism", "Lucide"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 3,
    title: "Apex Digital Agency Portfolio",
    category: "Web Design",
    description: "Modern creative agency showcase platform designed to highlight creative work, case studies, and brand identities with bold layout dynamics.",
    image: "/public/images/agency.jpg",
    tags: ["React", "Tailwind CSS", "UX/UI Design", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 4,
    title: "NeuraCode AI Workspace Studio",
    category: "Frontend",
    description: "Interactive AI code editor and content generation workspace featuring split-pane chat interface, snippet export, and syntax highlight themes.",
    image: "/public/images/ai_workspace.jpg",
    tags: ["React", "JavaScript", "Tailwind CSS", "REST API"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    featured: true
  }
];
