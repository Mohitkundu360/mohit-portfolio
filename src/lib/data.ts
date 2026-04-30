// ─── Resume Data ────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content

export const personal = {
  name: "Mohit Kundu",
  role: "Backend Software Engineer",
  tagline: "I build backend systems that scale under pressure, deliver data fast, and hold up in production.",
  email: "mohitkundu2003@gmail.com",
  phone: "+91-9861533270",
  linkedin: "https://linkedin.com/in/mohit-kundu-23071827a",
  github: "https://github.com/Mohitkundu360",
  location: "Bhubaneswar, India",
};

export const about = `Results-driven engineer with 2+ years of hands-on experience shipping backend infrastructure that actually holds up. 
I specialize in distributed systems, real-time APIs, and high-throughput data pipelines — the kind of work where a 40% efficiency improvement 
or sub-100ms latency at 100+ concurrent users is the baseline expectation, not a nice-to-have. 
From 0-to-1 SaaS platforms to Spring Boot chat engines, I build systems with clean architecture, thoughtful performance trade-offs, and an eye for production reality.`;

export const skills = {
  Backend: ["FastAPI", "Node.js", "Express.js", "Spring Boot", "REST APIs", "WebSockets"],
  Frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Pub/Sub"],
  "Cloud & DevOps": ["AWS EC2", "AWS S3", "AWS Lambda", "Docker", "CI/CD", "Git"],
  Systems: ["Microservices", "Event-Driven Architecture", "JWT/RBAC", "Swagger/OpenAPI", "System Design"],
  Languages: ["Python", "Java", "TypeScript", "JavaScript", "SQL"],
};

export const experience = [
  {
    role: "Software Engineer Intern (Founding Team)",
    company: "Answerbase",
    type: "Early-Stage SaaS",
    period: "Sep 2025 – Feb 2026",
    location: "Remote",
    color: "#4DFFB4",
    achievements: [
      { metric: "40%", description: "improved data flow efficiency via request batching & caching" },
      { metric: "25%", description: "reduction in page load time through SSR & React optimizations" },
      { metric: "30%", description: "faster feature development with 15+ reusable UI components" },
      { metric: "20%", description: "reduction in API error rates via structured data validation" },
    ],
    description:
      "Architected and shipped core product features in a 0-to-1 SaaS platform. Led architecture reviews shaping 3+ core system design decisions.",
  },
  {
    role: "Backend Developer",
    company: "Real-Time Chat System",
    type: "Independent Project",
    period: "Apr 2025 – Aug 2025",
    location: "Remote",
    color: "#4D9FFF",
    achievements: [
      { metric: "<100ms", description: "message delivery latency with 100+ concurrent users" },
      { metric: "60%", description: "faster throughput replacing DB polling with Redis streaming" },
      { metric: "35%", description: "reduced avg query time with indexed PostgreSQL queries" },
      { metric: "3×", description: "simultaneous connections via Spring Boot thread pooling" },
    ],
    description:
      "Engineered a real-time chat backend using Spring Boot and Redis Pub/Sub with event-driven, multi-room architecture enabling horizontal scalability with zero message loss.",
  },
  {
    role: "AI Developer Intern",
    company: "CIT",
    type: "AI/ML Engineering",
    period: "Aug 2024 – Sep 2024",
    location: "Remote",
    color: "#B44DFF",
    achievements: [
      { metric: "40%", description: "reduction in ML pipeline processing time" },
      { metric: "15%", description: "improvement in face recognition accuracy" },
      { metric: "<200ms", description: "inference latency in deployed backend REST pipeline" },
    ],
    description:
      "Built real-time face recognition systems with Python, OpenCV, and deep learning — end-to-end ML pipelines from preprocessing to live backend inference.",
  },
  {
    role: "Software Engineering Virtual Experience",
    company: "JPMorgan Chase",
    type: "Financial Technology",
    period: "Mar 2023 – May 2023",
    location: "Remote",
    color: "#FFB44D",
    achievements: [
      { metric: "20+", description: "unit & integration tests written to validate data integrity" },
      { metric: "5+", description: "financial API endpoints processing real-time market data streams" },
    ],
    description:
      "Developed Python scripts for streaming financial data ingestion, processing, and real-time visualization of market anomalies.",
  },
];

export const projects = [
  {
    title: "Real-Time Chat Backend",
    description:
      "Production-grade real-time chat engine built with Spring Boot and Redis Pub/Sub. Event-driven, multi-room architecture with horizontal scalability and zero message loss under load.",
    tech: ["Spring Boot", "Redis", "PostgreSQL", "WebSockets", "Pub/Sub"],
    metrics: [
      { value: "<100ms", label: "Message latency" },
      { value: "100+", label: "Concurrent users" },
      { value: "60%", label: "Throughput gain" },
      { value: "12+", label: "API endpoints" },
    ],
    github: "https://github.com/Mohitkundu360",
    live: null,
    color: "#4D9FFF",
    featured: true,
  },
  {
    title: "Blog API System",
    description:
      "Highly modular FastAPI backend with JWT authentication and RBAC authorization. Fully documented with Swagger/OpenAPI, optimized for 200+ concurrent requests at under 50ms response time.",
    tech: ["FastAPI", "JWT", "SQLAlchemy", "PostgreSQL", "Swagger"],
    metrics: [
      { value: "50ms", label: "Avg response time" },
      { value: "200+", label: "Concurrent requests" },
      { value: "50%", label: "Less codebase coupling" },
      { value: "10+", label: "API endpoints" },
    ],
    github: "https://github.com/Mohitkundu360/fastapi-blog-api",
    live: null,
    color: "#4DFFB4",
    featured: true,
  },
  {
    title: "GitHub Repository Search Service",
    description:
      "Backend service integrating the GitHub REST API to aggregate, normalize, and query metadata across 500+ repositories with filtering, sorting, and cursor-based pagination.",
    tech: ["Spring Boot", "PostgreSQL", "GitHub REST API"],
    metrics: [
      { value: "500+", label: "Repos aggregated" },
      { value: "45%", label: "Faster data retrieval" },
      { value: "10K+", label: "Records paginated" },
    ],
    github: "https://github.com/Mohitkundu360/github-repo-search-service",
    live: null,
    color: "#FFB44D",
    featured: false,
  },
  {
    title: "Slooze Commodities System",
    description:
      "Full-stack inventory management platform with real-time stock tracking, RBAC with 4 permission tiers, and automated workflow triggers for 1,000+ daily transactions.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "RBAC"],
    metrics: [
      { value: "1K+", label: "Daily transactions" },
      { value: "4", label: "Permission tiers" },
      { value: "30%", label: "Fewer data integrity errors" },
      { value: "15+", label: "Backend APIs" },
    ],
    github: "https://github.com/Mohitkundu360/Slooze-Commodities-Management",
    live: null,
    color: "#B44DFF",
    featured: false,
  },
];

export const certifications = [
  {
    title: "AWS Academy Graduate",
    issuer: "Amazon Web Services",
    date: "Mar 2024",
    hours: "60 hrs",
    link: "https://credly.com/go/HTyQy71H",
  },
  {
    title: "AI Internship Certificate",
    issuer: "Internship Studio",
    date: "Sep 2024",
  },
  {
    title: "Software Engineering Virtual Experience",
    issuer: "JPMorgan Chase & Co.",
    date: "May 2023",
  },
];
