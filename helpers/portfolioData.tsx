// Personal Information
export const personalInfo = {
  name: "Muhammad Wasif Ali",
  tagline: "Full Stack Software Engineer",
  bio: "Full‑stack engineer with 3+ years of experience building performant, accessible web apps. I specialize in TypeScript, React, and Node.js, with a strong focus on clean architecture, DX, and delightful UI interactions. Recently, I’ve been exploring 3D experiences with Three.js and React Three Fiber, bringing playful motion and spatial interfaces into product workflows. I care about code quality, measurable impact, and teams that value mentorship and continuous improvement.",
  email: "wasifali248@gmail.com",
  phone: "+923462714754",
  location: "Karachi, PK"
};

// Navigation and Social Links
export const navigationLinks = [
  {
    name: "About me",
    hash: "#about",
    type: "hash" as const,
  },
  {
    name: "Education",
    hash: "#education",
    type: "hash" as const,
  },
  {
    name: "Skills", 
    hash: "#skills",
    type: "hash" as const,
  },
  {
    name: "Projects",
    hash: "#projects", 
    type: "hash" as const,
  },
  {
    name: "Contact",
    hash: "#contact",
    type: "hash" as const,
  },
  {
    name: "Source Code",
    hash: "https://github.com/mrscientist29",
    type: "external" as const,
  },
];

export const socialLinks = [
  {
    name: "Instagram",
    icon: "instagram",
    url: "https://www.instagram.com/mr.scientist29/",
  },
  {
    name: "Facebook", 
    icon: "facebook",
    url: "https://www.facebook.com/mrscientist29",
  },
  {
    name: "Twitter",
    icon: "twitter", 
    url: "https://www.twitter.com/Syyedali5",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/smwasifali",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    url: "https://wa.me/+923462714754",
  },
];

// Skills Interface and Data
export interface Skill {
  name: string;
  imageUrl: string;
  themeColor: string;
}

export const skills: Skill[] = [
  {
    name: "JavaScript",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    themeColor: "#F7DF1E",
  },
  {
    name: "HTML",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    themeColor: "#E34F26",
  },
  {
    name: "CSS",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    themeColor: "#1572B6",
  },
  {
    name: "React.js",
    imageUrl: "https://unpkg.com/simple-icons@v9/icons/react.svg",
    themeColor: "#61DAFB",
  },
  {
    name: "Vue.js",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    themeColor: "#4FC08D",
  },
  {
    name: "Node.js",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    themeColor: "#68A063",
  },
  {
    name: "Python",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    themeColor: "#3776AB",
  },
  {
    name: "PHP",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    themeColor: "#777BB4",
  },
  {
    name: "Laravel",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    themeColor: "#FF2D20",
  },
  {
    name: "PostgreSQL",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    themeColor: "#336791",
  },
  {
    name: "MySQL",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    themeColor: "#4479A1",
  },
  {
    name: "MongoDB",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    themeColor: "#47A248",
  },
  {
    name: "AWS",
    imageUrl: "/icons/aws.svg",
    themeColor: "#FF9900",
  },
  {
    name: "Azure",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    themeColor: "#0078D4",
  },
  {
    name: "DigitalOcean",
    imageUrl: "/icons/digitalocean.svg",
    themeColor: "#0080FF",
  },
  {
    name: "Git",
    imageUrl: "/icons/git.svg",
    themeColor: "#F05032",
  },
  {
    name: "TypeScript",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    themeColor: "#3178C6",
  },
  {
    name: "Next.js",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    themeColor: "#111827",
  },
  {
    name: "Tailwind CSS",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    themeColor: "#06B6D4",
  },
  {
    name: "Three.js",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
    themeColor: "#2F2F2F",
  },
  {
    name: "Express.js",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    themeColor: "#444444",
  },
];

// Experience Interface and Data
export interface Experience {
  title: string;
  company_name: string;
  location: string;
  date: string;
  icon: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    title: "Full Stack Developer",
    company_name: "Aga Khan University Examination Board",
    location: "Karachi",
    date: "01/2025 - Present",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    points: [
      "Designed and delivered full‑stack features in TypeScript (React, Node.js) with clean, modular architectures and automated tests.",
      "Improved page performance and Core Web Vitals (LCP/CLS) by optimizing bundling, code‑splitting, and image strategies.",
      "Built robust APIs and background jobs, backed by PostgreSQL and MongoDB, with meaningful observability metrics.",
      "Drove code quality via reviews, pairing, and mentorship; introduced standards for commit hygiene and testing.",
      "Shipped CI/CD pipelines with preview environments and safe rollbacks to accelerate release cadence.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Digital Virtual Technologies",
    location: "Karachi, PK",
    date: "01/2023 - 12/2024",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    points: [
      "Delivered multiple React/Node projects end‑to‑end, adopting TypeScript for safer refactors and faster onboarding.",
      "Modeled data in PostgreSQL/MySQL and tuned queries, cutting hot endpoint latency by up to 40%.",
      "Worked closely with design and product to scope features and reduce rework with RFCs and acceptance criteria.",
      "Established linting, formatting, and pre‑commit checks; reduced PR cycle time with clear review guidelines.",
      "Onboarded junior engineers through pairing sessions and lightweight internal docs/playbooks.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Tessarect",
    location: "Karachi, PK",
    date: "01/2021 - 12/2022",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    points: [
      "Built responsive React interfaces and reusable component libraries with Storybook and robust props typing.",
      "Instrumented apps with analytics and error tracking to inform roadmap decisions with data.",
      "Implemented performance budgets and profiling workflows to keep interactions smooth on low‑end devices.",
      "Partnered with designers to achieve pixel‑perfect UI with a11y baked in (focus, semantics, color contrast).",
      "Worked across the stack in fast feedback loops with QA, PM, and back‑end engineers.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Softel",
    location: "Karachi, PK",
    date: "01/2020 - 12/2020",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    points: [
      "Built interactive sites with HTML/CSS/JS and contributed to Laravel/PHP back‑end features.",
      "Learned git workflows, issue tracking, and code reviews while shipping real customer‑facing updates.",
    ],
  },
];

// Education Interface and Data
export interface Education {
  degree: string;
  institution: string;
  location: string;
  date: string;
  status?: string;
  focus?: string;
}

export const education: Education[] = [
  {
    degree: "Masters in Data Engineering and Information Management",
    institution: "NED University of Engineering and Technology",
    location: "Karachi",
    date: "In Progress",
    status: "In Progress",
    focus: "Data Engineering, robotics, and Management",
  },
  {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institution: "Newports Institute of Communications",
    location: "Karachi",
    date: "12/2020",
  },
];

// Projects Interface and Data
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  name: string;
  iconUrl: string;
  themeColor: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Authentication App using Node.js",
    name: "Authentication App using Node.js",
    description: "An authentication app with Node.js and MySQL that provides secure user registration, login, and session management. Features include password hashing, JWT tokens, and robust security measures to protect user data.",
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop&crop=center",
    link: "https://github.com/wasifali248/authentication-app-using-nodejs",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    themeColor: "#68A063",
  },
  {
    id: "2",
    title: "My Portfolio",
    name: "My Portfolio", 
    description: "A website to showcase your projects and your bio and your work. Built with modern technologies to create an engaging and interactive experience that highlights my professional journey and technical expertise.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&crop=center",
    link: "#",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    themeColor: "#3178C6",
  },
  {
    id: "3",
    title: "Birthday Website",
    name: "Birthday Website",
    description: "A website to wish a birthday to your gf/wife. A personal project that creates a beautiful and memorable digital birthday celebration with interactive elements and personalized messages.",
    imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=450&fit=crop&crop=center",
    link: "#",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    themeColor: "#F7DF1E",
  },
  {
    id: "4",
    title: "School Registration System",
    name: "School Registration System",
    description: "This app is used to create a registration of schools. A comprehensive system that manages school enrollment, student information, and administrative processes with an intuitive TypeScript-based interface.",
    imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=450&fit=crop&crop=center",
    link: "https://github.com/wasifali248/School-Registration",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    themeColor: "#3178C6",
  },
  {
    id: "5",
    title: "Employee Attendance Tracker",
    name: "Employee Attendance Tracker",
    description: "This app can track employees attendance and manage records. A robust system for monitoring employee presence, generating reports, and maintaining accurate attendance data with TypeScript for enhanced reliability.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop&crop=center",
    link: "https://github.com/wasifali248/EmployeeAttendanceTracker",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    themeColor: "#3178C6",
  },
];

// Tech Stack for 3D FloatingTechIcons
export const techStack = [
  {
    name: "JavaScript",
    icon: "🟨",
    color: "#F7DF1E",
  },
  {
    name: "React.js",
    icon: "⚛️",
    color: "#61DAFB",
  },
  {
    name: "Vue.js",
    icon: "🔷",
    color: "#4FC08D",
  },
  {
    name: "Node.js",
    icon: "🟢",
    color: "#68A063",
  },
  {
    name: "Python",
    icon: "🐍",
    color: "#3776AB",
  },
  {
    name: "PHP",
    icon: "💜",
    color: "#777BB4",
  },
  {
    name: "AWS",
    icon: "☁️",
    color: "#FF9900",
  },
  {
    name: "Git",
    icon: "🐱",
    color: "#F05032",
  },
];