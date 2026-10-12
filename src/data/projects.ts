import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "farm-management-system",
    slug: "farm-management-system",
    title: "Farm Management System",
    tagline: "Multi-tenant poultry farm platform organizing flock lifecycle, feed inventory, and financial operations",
    description: "A comprehensive poultry management platform designed for commercial farmers to track flock mortality, feed conversion ratios, egg production, health interventions, and tenant-scoped operational expenses.",
    fullOverview: "Commercial poultry production involves strict margin control, rigorous feed inventory management, and tight biosecurity scheduling. The Farm Management System is engineered as a robust multi-tenant web application where farm managers can monitor flock batches from chick arrival through egg-laying cycles to slaughter scheduling. Built with React 19, Node.js with Express 5, Prisma ORM, and PostgreSQL, the platform enforces strict data validation using Zod and guarantees data isolation per tenant organization.",
    category: "Full-Stack",
    technologies: ["React 19", "Vite", "Node.js", "Express 5", "Prisma", "PostgreSQL", "JWT", "Zod", "Tailwind CSS"],
    status: "Completed MVP",
    image: "/src/assets/images/farm_management_dashboard_1791766906707.jpg",
    isConceptualVisual: true,
    featured: true,
    role: "Full-Stack Software Developer",
    githubUrl: "https://github.com/scondlythorp",
    keyFeatures: [
      "Farm houses & flock lifecycle tracking with bird count and age metrics",
      "Daily mortality logs, automated feed consumption tracking, and egg collection yields",
      "Breed health profiles, vaccination reminder schedules, and quarantine flags",
      "Feed inventory warehouse with dynamic unit conversions and low-stock alerts",
      "Financial ledger: operational income, feed cost accounting, customer receivables, and supplier payables",
      "Tenant-scoped security ensuring strict data isolation across farm operations",
      "Secure authentication using JWT and cryptographic password hashing"
    ],
    architecturePoints: [
      "Multi-tenant relational schema modeled in PostgreSQL using Prisma ORM migrations",
      "RESTful API design with middleware-level tenant identification and role authorization",
      "Strict runtime request validation with Zod schemas preventing data inconsistencies",
      "Optimized query aggregation for real-time mortality rates and feed conversion ratios"
    ],
    businessValue: "Transforms disorganized paper logs and spreadsheet errors into actionable farm intelligence, helping producers minimize feed wastage, prevent disease escalations, and protect poultry margins.",
    dataModelNotes: "Entities include Tenant, User, FarmHouse, FlockBatch, DailyLog (mortality, feed, eggs), VaccinationSchedule, InventoryItem, and FinancialTransaction.",
    challengeSolved: "Ensuring transaction-level atomicity when logging feed consumption so inventory stock is deducted synchronously without race conditions."
  },
  {
    id: "pharmacy-management-system",
    slug: "pharmacy-management-system",
    title: "Pharmacy Management System",
    tagline: "Comprehensive dispensary and inventory management with localized payment modeling",
    description: "An operational dispensary management application engineered to handle pharmaceutical inventory, batch expiry tracking, supplier procurement, sales invoicing, and West African mobile payment methods.",
    fullOverview: "Managing a modern pharmacy in West Africa requires handling frequent supplier price changes, preventing medicine stockouts, and monitoring batch expiry dates while facilitating diverse point-of-sale payments including cash and mobile wallets. This system provides a full-featured dispensary backend with role-based access for pharmacists, cashiers, and administrators.",
    category: "Full-Stack",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT", "bcrypt", "Zod", "React", "Tailwind CSS"],
    status: "Completed MVP",
    image: "/src/assets/images/pharmacy_management_system_1791766919207.jpg",
    isConceptualVisual: true,
    featured: true,
    role: "Backend & Full-Stack Developer",
    githubUrl: "https://github.com/scondlythorp",
    keyFeatures: [
      "Medicine catalogue management with dosage, therapeutic category, and manufacturer records",
      "Batch tracking with expiry date surveillance and proactive shelf-life alerts",
      "Point-of-Sale (POS) checkout supporting Cash, Wave, and Afrimoney record modeling",
      "Supplier order tracking, receiving invoices, and unit-cost recalculations",
      "Role-Based Access Control (RBAC) separating administrative audit logs from counter sales",
      "Comprehensive daily revenue, profit margin, and inventory valuation reporting"
    ],
    architecturePoints: [
      "PostgreSQL relational modeling for complex prescription line-items and inventory transactions",
      "Prisma ORM providing type-safe database queries and automated schema migrations",
      "Zod-validated API payloads preventing invalid dosages or negative inventory counts",
      "JWT authorization with stateless bearer token verification on protected endpoints"
    ],
    businessValue: "Reduces medicine spoilage from expired batches and delivers clear accountability for sales and mobile money reconciliation in local pharmacy businesses.",
    dataModelNotes: "Relational tables include Medicines, Batches, Suppliers, PurchaseOrders, Sales, SaleItems, PaymentMethods, and AuditLogs.",
    challengeSolved: "Designing a flexible schema for payment settlement modeling that natively captures local mobile money identifiers alongside cash transactions."
  },
  {
    id: "chialink-platform",
    slug: "chialink-platform",
    title: "ChiaLink — Agricultural Value Chain Platform",
    tagline: "Digital aggregation and market intelligence connecting smallholder chia farmers and commodity buyers",
    description: "A collaborative agritech MVP engineered during the Africa Elevate DRC Innovation Bootcamp 2026, securing Top 8 out of 20 regional teams by unlocking visibility across smallholder production, cooperative aggregation, and buyer demand.",
    fullOverview: "ChiaLink addresses critical market opacity in African specialty crop value chains. Smallholder farmers frequently lack direct visibility into regional buyer pricing, while commercial buyers struggle to find verified harvest volumes from fragmented cooperatives. Developed as Technical Lead for Team 3 during the intensive Africa Elevate DRC Innovation Bootcamp 2026, ChiaLink models farmer yields, cooperative collection hubs, and institutional buyer orders into a unified data structure.",
    category: "African Innovation",
    technologies: ["React", "TypeScript", "Node.js", "Express", "REST APIs", "Tailwind CSS", "Data Modeling"],
    status: "Completed MVP",
    image: "/src/assets/images/chialink_agritech_platform_1791766929479.jpg",
    isConceptualVisual: true,
    featured: true,
    role: "Developer & Technical Lead (Team 3)",
    teamSize: "6 team members",
    githubUrl: "https://github.com/scondlythorp",
    keyFeatures: [
      "Farmer registry capturing acreage, projected harvest cycles, and localized crop health",
      "Cooperative aggregation center module with real-time intake logging and storage capacity",
      "Buyer demand portal displaying aggregated crop volume availability and pricing index",
      "Traceability pipeline from farm collection point through cooperative storage to fulfillment",
      "Low-bandwidth friendly UI designed for erratic connectivity in rural collection centers"
    ],
    architecturePoints: [
      "Modular full-stack prototype separating farmer data ingestion from market visualization",
      "Normalized aggregation pipeline calculating regional tonnage available for commercial contract",
      "Collaborative agile sprint delivery under strict hackathon evaluation criteria"
    ],
    businessValue: "Empowers smallholder farming communities to bypass predatory middlemen through collective bargaining, while enabling commodity buyers to forecast raw material supply reliably.",
    challengeSolved: "Designing an intuitive aggregation dashboard that balances granular smallholder privacy with macro supply visibility for regional grain buyers."
  },
  {
    id: "ai-agriculture-platform",
    slug: "ai-agriculture-platform",
    title: "AI Agriculture Decision Support Platform",
    tagline: "Data-driven crop recommendations and climate risk insights for Gambian smallholder farmers",
    description: "An agricultural decision-support application built with Python and Streamlit, delivering practical crop selection guidance, weather risk advisories, and soil suitability heuristics tailored to Gambian agro-ecological zones.",
    fullOverview: "Smallholder farmers in The Gambia face erratic rainfall patterns and declining soil fertility. This decision-support system leverages Python-based agronomic modeling to analyze soil parameters (nitrogen, phosphorus, potassium, pH), local seasonal rainfall patterns, and temperature thresholds to recommend suitable crop varieties and optimal planting windows. It is designed as an advisory tool to assist agricultural extension officers and farmers in evaluating risks.",
    category: "AI & Data",
    technologies: ["Python", "Streamlit", "Pandas", "NumPy", "Data Preprocessing", "Agronomic Heuristics"],
    status: "Completed MVP",
    image: "/src/assets/images/ai_agriculture_decision_support_1791766940178.jpg",
    isConceptualVisual: true,
    featured: true,
    role: "Python & Data Application Developer",
    githubUrl: "https://github.com/scondlythorp",
    keyFeatures: [
      "Crop suitability evaluation based on soil N-P-K levels, pH balance, and organic content",
      "Gambian agro-ecological zone mapping with historical rainfall duration modeling",
      "Advisory generation for staple crops (Groundnut, Millet, Maize, Rice, Cassava)",
      "Weather risk mitigation recommendations for mid-season drought or delayed rains",
      "Interactive Streamlit interface enabling rapid scenario adjustments by field workers"
    ],
    architecturePoints: [
      "Deterministic agronomic recommendation rules engine paired with statistical crop tolerance profiles",
      "Efficient data parsing using Pandas for local agricultural and meteorological baselines",
      "Lightweight Streamlit UI deployment optimized for minimal compute requirements"
    ],
    businessValue: "Provides structured guidance to de-risk seasonal planting decisions, reducing crop loss risks caused by shifting Sahel rainfall calendars.",
    challengeSolved: "Bridging complex meteorological data and soil chemistry tables into plain-language, actionable guidance for field practitioners."
  },
  {
    id: "passo-transport-system",
    slug: "passo-transport-system",
    title: "PASSO — Transport Fare Management System",
    tagline: "Standardized route mapping, locality boundaries, and transport fare infrastructure for The Gambia",
    description: "A transportation data management system engineered around vehicle categories, designated stops, and official transport fares across urban and regional transit routes in The Gambia.",
    fullOverview: "Public transit in The Gambia relies on networks of shared taxis, minibuses (gelli-gellis), and vans where fare disputes frequently arise from lack of transparent stage information. PASSO provides a structured backend and query interface cataloguing localities, standard vehicle classes, route stages, and official fare schedules.",
    category: "Backend & APIs",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "SQL", "REST APIs", "Tailwind CSS"],
    status: "Completed MVP",
    image: "/src/assets/images/farm_management_dashboard_1791766906707.jpg",
    isConceptualVisual: true,
    featured: false,
    role: "Backend Software Developer",
    githubUrl: "https://github.com/scondlythorp",
    keyFeatures: [
      "Locality hierarchy structuring administrative wards, junctions, and popular terminals",
      "Vehicle category definitions with seating capacities and regulated tariff bands",
      "Route mapping between origin-destination pairs with intermediate fare stage stops",
      "Fare matrix lookup API returning accurate statutory fare charges between any two points",
      "Administrative portal for transport association route and fare schedule updates"
    ],
    architecturePoints: [
      "Relational schema modeling route nodes and bi-directional fare matrices in PostgreSQL",
      "RESTful endpoint architecture supporting quick passenger mobile lookups",
      "Input sanitation and validation guaranteeing numeric fare integrity across all stages"
    ],
    businessValue: "Introduces digital transparency into passenger fares, minimizing daily terminal disputes and providing transport authorities with clear route utilization records."
  },
  {
    id: "pharmacy-mobile-app",
    slug: "pharmacy-mobile-app",
    title: "Pharmacy Management Mobile Architecture",
    tagline: "Native Android application with Spring Boot REST backend implementing MVVM pattern",
    description: "A native mobile pharmacy client engineered in Java for Android, backed by an enterprise Spring Boot REST API for mobile stock verification and dispensing workflows.",
    fullOverview: "Extending pharmacy management to handheld devices enables mobile floor checks, shelf barcode audits, and bedside dispensary queries. This project implements a modern Android client using Model-View-ViewModel (MVVM) architecture communicating with a robust Java Spring Boot backend over secure REST endpoints.",
    category: "Mobile & Java",
    technologies: ["Java", "Spring Boot", "Android SDK", "MVVM", "JWT", "REST APIs", "SQLite / Room"],
    status: "Active Prototype",
    image: "/src/assets/images/pharmacy_management_system_1791766919207.jpg",
    isConceptualVisual: true,
    featured: false,
    role: "Mobile & Backend Developer",
    githubUrl: "https://github.com/scondlythorp",
    keyFeatures: [
      "Android MVVM pattern separating UI views, LiveData observers, and repository data fetching",
      "Spring Boot RESTful service architecture with Spring Security and JWT validation",
      "Local offline caching of essential drug catalogues using SQLite / Room",
      "Secure token refresh cycles and role-based action gating",
      "Fast medicine search with stock status and expiry alerts"
    ],
    architecturePoints: [
      "Separation of concerns across Spring Boot controllers, services, and JPA repositories",
      "Clean Android architecture utilizing ViewModels and asynchronous background execution",
      "Standardized JSON error handling and DTO serialization"
    ],
    businessValue: "Demonstrates cross-platform mobile-backend development discipline, preparing enterprise pharmacy operations for mobile workforce deployment."
  },
  {
    id: "ecommerce-inventory-system",
    slug: "ecommerce-inventory-system",
    title: "E-Commerce Inventory Management System",
    tagline: "Object-oriented inventory platform managing products, multi-warehouse stock, and customer orders",
    description: "A core enterprise software project written in Java utilizing pure Object-Oriented Design principles and SQL persistence to manage product categories, inventory reorder points, and customer orders.",
    fullOverview: "A fundamental requirement in commercial operations is safeguarding inventory counts during order processing. This system models core retail inventory mechanics—sku identification, safety stock triggers, multi-item purchase receipts, and invoice records—using strict OOP encapsulation, inheritance patterns, and SQL transactions.",
    category: "Mobile & Java",
    technologies: ["Java", "Object-Oriented Programming", "SQL", "Relational Database Design", "JDBC"],
    status: "Completed MVP",
    image: "/src/assets/images/pharmacy_management_system_1791766919207.jpg",
    isConceptualVisual: true,
    featured: false,
    role: "Software Developer",
    githubUrl: "https://github.com/scondlythorp",
    keyFeatures: [
      "Strict object modeling for Products, InventoryBatches, Orders, and Customers",
      "Safety stock threshold calculations and automated reorder alerts",
      "Transaction rollback mechanisms preventing negative inventory allocations",
      "Relational SQL persistence with index-optimized product querying",
      "Console and modular interface architecture for inventory audit reporting"
    ],
    architecturePoints: [
      "Rigorous OOP design enforcing encapsulation and domain entity validation",
      "Transactional consistency guaranteeing order creation and stock decrement occur atomically",
      "Clean separation between business service logic and database persistence layers"
    ],
    businessValue: "Provides a reliable foundational architecture for retail and warehouse operations, eliminating phantom inventory and stockout surprises."
  },
  {
    id: "atm-system-simulator",
    slug: "atm-system-simulator",
    title: "ATM Banking Transaction Simulator",
    tagline: "Academic banking core simulation modeling PIN authentication, balance audits, and ledger transactions",
    description: "An academic computer science project engineered in Java demonstrating state machine management, PIN cryptographic verification, balance invariants, and transaction rollbacks.",
    fullOverview: "Engineered as an in-depth practical implementation of computer science principles at Civil Service University, this system models the finite state transitions of an Automated Teller Machine. It simulates card insertion, credential verification, daily withdrawal caps, cash replenishment counters, and ledger updates with strict defensive programming.",
    category: "Mobile & Java",
    technologies: ["Java", "Object-Oriented Programming", "Database Concepts", "Defensive Programming"],
    status: "Academic / Learning",
    image: "/src/assets/images/drone_telemetry_simulation_1791766951874.jpg",
    isConceptualVisual: true,
    featured: false,
    role: "Developer (Coursework Project)",
    githubUrl: "https://github.com/scondlythorp",
    keyFeatures: [
      "State machine managing terminal modes (Idle, Authenticating, Transaction, Eject)",
      "Defensive PIN attempt throttling to prevent brute-force simulation",
      "Transactional withdrawal verification respecting minimum account balance floors",
      "Audit trail logging tracking every simulated deposit, withdrawal, and transfer",
      "Robust exception handling isolating hardware simulation faults from ledger data"
    ],
    architecturePoints: [
      "State pattern implementation modeling ATM interaction steps cleanly",
      "Invariant assertions preventing unauthorized balance deductions",
      "Modular design allowing database or in-memory persistence swapping"
    ],
    businessValue: "Demonstrates core systems engineering discipline, validation rigor, and transactional integrity essential for mission-critical software engineering."
  }
];
