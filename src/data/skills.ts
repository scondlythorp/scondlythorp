import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for production web backends, client applications, data processing, and enterprise software.",
    skills: [
      { name: "JavaScript (ES6+)", level: "Core Practical", highlight: "Modern asynchronous workflows, Node.js event loop, frontend interactivity" },
      { name: "TypeScript", level: "Core Practical", highlight: "Strict type modeling, generic interfaces, full-stack contract sharing" },
      { name: "Python", level: "Core Practical", highlight: "Data preprocessing, algorithm design, simulation scripts, Streamlit apps" },
      { name: "Java", level: "Core Practical", highlight: "Object-oriented architecture, Spring Boot, Android SDK, enterprise design" },
      { name: "SQL", level: "Core Practical", highlight: "Relational queries, joins, transactions, constraints, index optimization" },
      { name: "HTML5 & CSS3", level: "Core Practical", highlight: "Semantic markup, responsive viewports, CSS grid, accessible forms" }
    ]
  },
  {
    title: "Web & Full-Stack Development",
    description: "Frameworks, runtime environments, and architectural patterns for resilient web systems.",
    skills: [
      { name: "React (incl. React 19)", level: "Core Practical", highlight: "Component lifecycle, hooks, state management, modern SPA architecture" },
      { name: "Node.js & Express.js", level: "Core Practical", highlight: "REST API architecture, routing, middleware pipelines, error handling" },
      { name: "Next.js", level: "Working Experience", highlight: "Server-side rendering, routing conventions, hybrid page architecture" },
      { name: "Tailwind CSS", level: "Core Practical", highlight: "Utility-first responsive layouts, design token harmony, dark themes" },
      { name: "RESTful API Design", level: "Core Practical", highlight: "Resource routing, status code conventions, JSON serialization, pagination" },
      { name: "Vite", level: "Core Practical", highlight: "Fast frontend build bundling, TypeScript transpilation, dev workflows" }
    ]
  },
  {
    title: "Databases & Data Engineering Foundations",
    description: "Relational schemas, ORM workflows, and data persistence guarantees.",
    skills: [
      { name: "PostgreSQL", level: "Core Practical", highlight: "Relational modeling, foreign keys, multi-tenant schemas, ACID transactions" },
      { name: "Prisma ORM", level: "Core Practical", highlight: "Schema declarations, automated database migrations, type-safe queries" },
      { name: "MySQL", level: "Working Experience", highlight: "Relational table structures, indexing, stored queries" },
      { name: "MongoDB", level: "Working Experience", highlight: "Document-oriented schemas, aggregation pipelines, NoSQL concepts" },
      { name: "Database Design & Normalization", level: "Core Practical", highlight: "1NF to 3NF relational design, relationship cardinality, data integrity" }
    ]
  },
  {
    title: "Security, Validation & Architecture",
    description: "Defensive programming, authentication mechanisms, and operational data safety.",
    skills: [
      { name: "JWT (JSON Web Tokens)", level: "Core Practical", highlight: "Stateless bearer token authentication, payload signing, expiry enforcement" },
      { name: "bcrypt & Password Hashing", level: "Core Practical", highlight: "Salt generation, cryptographic password storage, timing-safe checks" },
      { name: "Role-Based Access Control (RBAC)", level: "Core Practical", highlight: "Endpoint permission guards, administrative and staff role scoping" },
      { name: "Zod Schema Validation", level: "Core Practical", highlight: "Runtime input validation, request parsing, preventing SQL/schema injection" },
      { name: "Environment Security", level: "Core Practical", highlight: "Secret isolation, dotenv configuration, secure deployment baselines" }
    ]
  },
  {
    title: "AI, Machine Learning & Data-Oriented Development",
    description: "Applied machine learning heuristics, analytical dashboards, and scientific data manipulation.",
    skills: [
      { name: "Python-Based Applications", level: "Core Practical", highlight: "Scripting, algorithmic computation, CLI utilities, analytical scripts" },
      { name: "Streamlit", level: "Core Practical", highlight: "Rapid deployment of interactive data tools, decision dashboards, inputs" },
      { name: "Data Preprocessing (Pandas, NumPy)", level: "Working Experience", highlight: "Data cleaning, feature transformation, array math, CSV ingestion" },
      { name: "Decision Support Systems", level: "Working Experience", highlight: "Heuristic recommendation engines, risk alerts for agriculture" },
      { name: "Predictive Modeling Concepts", level: "Working Experience", highlight: "Model evaluation metrics, regression/classification fundamentals" }
    ]
  },
  {
    title: "Emerging Technologies & Exploration Areas",
    description: "Active research frontiers, computational simulations, robotics, and hardware software interfaces.",
    skills: [
      { name: "Drone Flight & Telemetry Concepts", level: "Active Exploration", highlight: "GPS waypoint navigation math, flight telemetry simulation, mission paths" },
      { name: "Robotics & Automation Fundamentals", level: "Active Exploration", highlight: "Sensor polling loops, actuators, kinematics, embedded control logic" },
      { name: "Computer Vision Concepts", level: "Active Exploration", highlight: "Image color spaces (RGB/HSV), contour detection, lesion segmentation" },
      { name: "Computational Simulation", level: "Active Exploration", highlight: "Physical state simulation, battery discharge curves, numerical models" },
      { name: "Computer Networking Fundamentals", level: "Working Experience", highlight: "TCP/IP, HTTP/HTTPS protocols, OSI model, socket communication" }
    ]
  }
];
