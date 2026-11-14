export const portfolioData = {
  personal: {
    name: "Karthikeyan S",
    shortName: "SK",
    title: "Software Developer",
    subtitle: "MERN Stack Developer",
    bio: "Passionate MERN Stack Developer skilled in building responsive and dynamic web applications using MongoDB, Express.js, React.js, and Node.js. Strong in REST API development, React Hooks, component-based architecture, and full-stack integration.",
    avatar: "/asset/karthikeyan-hd-cutout.png",
    email: "karthikeyanshankar2004@gmail.com",
    phone: "9655942705",
    location: "Tamil Nadu, India",
    github: "https://github.com/karthikeyan343",
    linkedin: "https://www.linkedin.com/in/karthikeyan-s-5ab8b5267/",
  },
  skills: [
    { name: "JavaScript", level: 85, category: "Frontend", color: "#F7DF1E", badge: "JS" },
    { name: "React.js", level: 80, category: "Frontend", color: "#61DAFB", badge: "React" },
    { name: "Node.js", level: 70, category: "Backend", color: "#68A063", badge: "Node" },
    { name: "Express.js", level: 65, category: "Backend", color: "#ffffff", badge: "EX" },
    { name: "MongoDB", level: 60, category: "Database", color: "#13AA52", badge: "DB" },
    { name: "HTML5", level: 90, category: "Frontend", color: "#E44D26", badge: "HTML" },
    { name: "CSS3", level: 85, category: "Frontend", color: "#1572B6", badge: "CSS" },
    { name: "Bootstrap", level: 75, category: "Frontend", color: "#7952B3", badge: "Boot" },
    { name: "MySQL", level: 65, category: "Database", color: "#00618A", badge: "SQL" },
    { name: "Java", level: 50, category: "Languages", color: "#007396", badge: "Java" },
    { name: "Git", level: 70, category: "Tools", color: "#F05032", badge: "Git" },
    { name: "GitHub", level: 75, category: "Tools", color: "#ffffff", badge: "GitHub" },
    { name: "VS Code", level: 85, category: "Tools", color: "#007ACC", badge: "VS" },
    { name: "JSON", level: 75, category: "Languages", color: "#F29111", badge: "{ }" },
    { name: "Postman", level: 70, category: "Tools", color: "#FF6C37", badge: "API" }
  ],
  projects: [
    {
      id: "blogsphere",
      title: "BlogSphere — Full-Stack CMS",
      fullTitle: "BlogSphere — Full-Stack CMS with JWT Auth & Role-Based Access Control",
      subtitle: "Personal Blog Application",
      description: "Developed BlogSphere, a full-stack MERN CMS with JWT authentication and role-based access control.",
      challenge: "Securing protected operations and ensuring users could access features only according to their roles.",
      solution: "Implemented JWT-based authentication, authorization middleware, protected REST APIs, and role-based permissions. Integrated React.js with Node.js, Express.js, and MongoDB.",
      highlights: [
        "Role-Based Access Control (RBAC) & Secure JWT Authentication",
        "RESTful CRUD API with Node.js, Express & MongoDB Atlas",
        "Protected routing with responsive rich content dashboard"
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "RBAC"],
      github: "https://github.com/karthikeyan343/Blog-App.git",
      demo: "https://blog-app-tau-blue.vercel.app/",
      featured: true,
      category: "Full-Stack"
    },
    {
      id: "taskflow",
      title: "TaskFlow — Productivity Platform",
      fullTitle: "TaskFlow – Multi-User Productivity Platform with Automated Email Reminder",
      subtitle: "TaskFlow Manager",
      description: "Built TaskFlow, a multi-user productivity platform with automated email reminders and task management features.",
      challenge: "Managing tasks for multiple users securely and ensuring users are reminded about pending tasks on time.",
      solution: "Implemented user-specific task management, secure CRUD operations, and automated email reminders for pending tasks. Integrated React.js with Node.js, Express.js, and MongoDB.",
      highlights: [
        "Multi-user task workflow with secure session token authentication",
        "Automated background email reminders for pending deadlines",
        "Full CRUD operations with optimized MongoDB document schemas"
      ],
      tags: ["React.js", "Bootstrap", "Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/karthikeyan343/Todo_app-MERN-.git",
      demo: "https://todo-app-mern-mu-two.vercel.app/",
      featured: true,
      category: "Full-Stack"
    },
    {
      id: "weathernow",
      title: "React WeatherNow Application",
      fullTitle: "React WeatherNow Application",
      subtitle: "Weather Forecast App",
      description: "Developed a Weather Forecast Application using React.js that fetches real-time weather data from a public weather API.",
      challenge: "Handling dynamic API response states, real-time query transitions, and responsive layout across devices.",
      solution: "Implemented Axios API integration to query city weather conditions in real-time with responsive UI cards.",
      highlights: [
        "Real-time weather data queries via OpenWeather REST API",
        "Dynamic city search with live meteorological state transitions",
        "Responsive cards displaying humidity, wind velocity & temperature"
      ],
      tags: ["React.js", "API Integration", "JavaScript", "CSS"],
      github: "https://github.com/karthikeyan343/WeatherNow-App.git",
      demo: "https://karthikweathernow.netlify.app/",
      featured: false,
      category: "Frontend"
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      fullTitle: "Personal Developer Portfolio Website",
      subtitle: "Personal Portfolio",
      description: "Designed and developed a responsive personal portfolio website to showcase my projects, technical skills, and contact information.",
      challenge: "Creating an engaging modern aesthetic with seamless responsiveness and 100vh fit across screens.",
      solution: "Refactored into React.js + Material UI (MUI) with sleek animations, responsive design, and optimized layout.",
      highlights: [
        "Single Page Application refactored with React.js & Material UI",
        "Interactive Bento skills showcase, infinite marquee & dark mode",
        "Integrated Web3Forms messaging with instant toast notifications"
      ],
      tags: ["React.js", "MUI", "JavaScript", "CSS3"],
      github: "https://github.com/karthikeyan343/CODSOFT.git",
      demo: null,
      featured: false,
      category: "Frontend"
    },
    {
      id: "webbrand",
      title: "Webbrand Landing Page",
      fullTitle: "Webbrand Modern Landing Page",
      subtitle: "Responsive Landing Page",
      description: "Built a responsive landing page with modern UI design using HTML, CSS, and JavaScript featuring services and hero sections.",
      challenge: "Achieving high-converting layout with clean visual hierarchy on both desktop and mobile screens.",
      solution: "Implemented responsive hero banner, features grid, service cards, and interactive contact form.",
      highlights: [
        "High-converting modern landing page with semantic HTML5 & CSS3",
        "Mobile-first responsive multi-device layout with CSS grid",
        "Interactive service features showcase & client-side form validation"
      ],
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/karthikeyan343/Codsoft2.git",
      demo: null,
      featured: false,
      category: "Frontend"
    },
    {
      id: "calculator",
      title: "Web Calculator Application",
      fullTitle: "Interactive Web Calculator Application",
      subtitle: "Calculator Application",
      description: "Developed a functional calculator application that performs arithmetic operations such as addition, subtraction, multiplication, and division.",
      challenge: "Ensuring accurate chained evaluations and handling division by zero and input validation.",
      solution: "Implemented interactive UI, clean event handling, keyboard listeners, and instant display updates.",
      highlights: [
        "Accurate mathematical expression evaluator with operator precedence",
        "Full keyboard event listener support & edge-case zero checks",
        "Sleek responsive neumorphic calculator interface"
      ],
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/karthikeyan343/CodSoft3.git",
      demo: null,
      featured: false,
      category: "Frontend"
    }
  ],
  education: [
    {
      degree: "B.Tech Information Technology",
      institution: "Mahendra Institute of Technology, Namakkal",
      score: "CGPA: 8.85 / 10",
      period: "2022 - 2026"
    },
    {
      degree: "HSC (12th Grade)",
      institution: "St.Paul's Her Sec School, Salem",
      score: "512 / 600",
      period: "2021 - 2022"
    },
    {
      degree: "SSLC (10th Grade)",
      institution: "St.Paul's Her Sec School, Salem",
      score: "424 / 500",
      period: "2019 - 2020"
    }
  ],
  achievements: [
    {
      title: "NPTEL Elite Certificate in Programming in Java",
      description: "Completed NPTEL Online Certification in Programming in Java with Elite Certificate, demonstrating strong understanding of Java fundamentals."
    },
    {
      title: "Project Team Leadership",
      description: "Successfully led a college project team to successful completion with full-stack delivery."
    },
    {
      title: "HackerRank 30 Days of Code",
      description: "Completed the 30 Days of Code Challenge on HackerRank, strengthening problem-solving and algorithmic fundamentals."
    },
    {
      title: "Full-Stack Production Deployments",
      description: "Deployed multiple full-stack MERN applications to production (Vercel & Netlify), integrating responsive frontends, REST APIs, authentication, and cloud MongoDB."
    }
  ]
};

