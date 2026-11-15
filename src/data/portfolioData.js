export const portfolioData = {
  personal: {
    name: "Karthikeyan S",
    shortName: "SK",
    title: "Software Developer",
    subtitle: "MERN Stack Developer | React.js & Node.js",
    bio: "B.Tech IT graduate and MERN Stack Developer with 3 months of industry experience as a Frontend SDE Intern at ES EthicSecur SofTec, developing live projects with React.js, TypeScript, and Material UI. Skilled in building responsive full-stack applications with Node.js, Express.js, MongoDB, REST APIs, authentication, and cloud deployment.",
    avatar: "/asset/karthikeyan.jpeg",
    resume: "/asset/Karthikeyan_S_Resume.pdf",
    email: "karthikeyanshankar2004@gmail.com",
    phone: "9655942705",
    location: "Salem, Tamil Nadu, India",
    github: "https://github.com/karthikeyan343",
    linkedin: "https://www.linkedin.com/in/karthikeyan-s-5ab8b5267",
    leetcode: "https://leetcode.com/u/Karthik2004",
  },
  stats: [
    { label: "Internships Completed", value: "2" },
    { label: "Production Projects", value: "4+" },
    { label: "B.Tech IT CGPA", value: "8.85" },
    { label: "Modern Tech Tools", value: "15+" }
  ],
  experience: [
    {
      id: "ethicsecur",
      role: "Frontend SDE Intern",
      company: "ES EthicSecur SofTec Pvt Ltd",
      location: "Salem, Tamil Nadu",
      period: "August 2026 – November 2026",
      duration: "3 Months",
      type: "Onsite",
      certificate: "/asset/ES_EthicSecur_Certificate.pdf",
      skills: ["React.js", "TypeScript", "Material UI (MUI)", "Node.js", "Express.js", "REST APIs", "Git", "Figma"],
      points: [
        "Developed responsive web interfaces for live company projects using React.js, TypeScript, and Material UI (MUI) by translating Figma designs into functional, pixel-perfect screens.",
        "Built backend RESTful APIs using Node.js and Express.js to handle quotation submissions and customer data for the company's portfolio website.",
        "Implemented responsive layouts, integrated REST APIs, optimized UI components, and debugged cross-browser performance issues.",
        "Collaborated with the engineering team using Git and GitHub for version control, branching strategies, and regular code reviews."
      ]
    },
    {
      id: "codsoft",
      role: "Web Development Intern",
      company: "CodSoft",
      location: "Virtual / Remote",
      period: "25 Oct 2025 – 25 Nov 2025",
      duration: "1 Month (4 Weeks)",
      type: "Online / Virtual",
      certificate: "/asset/CodSoft_Certificate.pdf",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git", "GitHub"],
      points: [
        "Successfully completed 4 weeks of virtual internship program in Web Development with wonderful remarks.",
        "Designed and built multiple functional web applications including a Developer Portfolio, Webbrand Landing Page, and Interactive Calculator.",
        "Applied modern CSS techniques, event-driven JavaScript DOM manipulation, and responsive UI best practices.",
        "Managed repository codebases on GitHub, delivering tasks and projects within defined timelines."
      ]
    }
  ],
  skills: [
    { name: "JavaScript", level: 85, category: "Frontend", color: "#F7DF1E", badge: "JS" },
    { name: "React.js", level: 80, category: "Frontend", color: "#61DAFB", badge: "React" },
    { name: "Node.js", level: 70, category: "Backend", color: "#68A063", badge: "Node" },
    { name: "Express.js", level: 65, category: "Backend", color: "#ffffff", badge: "EX" },
    { name: "MongoDB", level: 60, category: "Database", color: "#13AA52", badge: "DB" },
    { name: "TypeScript", level: 70, category: "Languages", color: "#3178C6", badge: "TS" },
    { name: "Material UI", level: 80, category: "Frontend", color: "#007FFF", badge: "MUI" },
    { name: "HTML5", level: 90, category: "Frontend", color: "#E44D26", badge: "HTML" },
    { name: "CSS3", level: 85, category: "Frontend", color: "#1572B6", badge: "CSS" },
    { name: "Bootstrap", level: 75, category: "Frontend", color: "#7952B3", badge: "Boot" },
    { name: "MySQL", level: 65, category: "Database", color: "#00618A", badge: "SQL" },
    { name: "Java", level: 50, category: "Languages", color: "#007396", badge: "Java" },
    { name: "Git", level: 75, category: "Tools", color: "#F05032", badge: "Git" },
    { name: "GitHub", level: 80, category: "Tools", color: "#ffffff", badge: "GitHub" },
    { name: "VS Code", level: 85, category: "Tools", color: "#007ACC", badge: "VS" },
    { name: "JSON & REST APIs", level: 80, category: "Languages", color: "#F29111", badge: "{ }" },
    { name: "Postman", level: 75, category: "Tools", color: "#FF6C37", badge: "API" }
  ],
  projects: [
    {
      id: "interview-ready",
      title: "Interview Ready — AI Platform",
      fullTitle: "Interview Ready — Real-Time Interview Platform with Gemini AI",
      subtitle: "AI Interview Preparation Platform",
      description: "Developed a full-stack interview preparation platform using React.js, TypeScript, Node.js, Express.js, MongoDB, and Google Gemini API for AI-powered, resume-based interview questions.",
      challenge: "Render cold-start delays of ~1.5–3 minutes and repeated client-side loading delays when switching between interview views.",
      solution: "Implemented 5-minute interval backend health checks reducing Render cold-start delays to near-zero, and built client-side caching eliminating 3-4s repeated load times. Integrated Supabase Storage for resume management.",
      tags: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Gemini API", "Supabase"],
      github: "https://github.com/karthikeyan343",
      demo: null,
      featured: true,
      category: "Full-Stack"
    },
    {
      id: "blogsphere",
      title: "BlogSphere — Full-Stack CMS",
      fullTitle: "BlogSphere — Full-Stack CMS with JWT Auth & Role-Based Access Control",
      subtitle: "Personal Blog Application",
      description: "Developed BlogSphere, a full-stack MERN CMS with JWT authentication and role-based access control.",
      challenge: "Securing protected operations and ensuring users could access features only according to their roles.",
      solution: "Built a 12-endpoint REST API with JWT admin auth, protecting 6 administrative endpoints. Implemented parallel API fetching with Promise.all and effect cancellation across 4 core React views.",
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
      challenge: "Managing tasks for multiple users securely and preventing duplicate email reminders during concurrent scheduler executions.",
      solution: "Implemented atomic reminder claiming and state tracking to prevent duplicate notifications during concurrent scheduler execution, validated with 10 eligible tasks across 2 runs (0 duplicates).",
      tags: ["React.js", "Bootstrap", "Node.js", "Express.js", "MongoDB", "JWT", "Nodemailer"],
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
  certifications: [
    {
      title: "Programming in Java (Elite Certificate)",
      issuer: "NPTEL Online Certification",
      period: "Jan - Apr 2024"
    },
    {
      title: "JavaScript Certification",
      issuer: "GUVI",
      period: "Sep 2024"
    },
    {
      title: "Hyper Text Markup Language (HTML)",
      issuer: "Infosys Springboard",
      period: "Feb 2024"
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
