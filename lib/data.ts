export const siteConfig = {
  name: "R. Dhayalan",
  title: "Dhayalan | Full Stack Web Developer | Angular Next.js FastAPI",
  description:
    "Innovative Full Stack Web Developer specializing in Angular, Next.js, FastAPI, and WordPress. Building dynamic, responsive, and secure enterprise web applications from Chennai, India.",
  url: "https://dhayalan.dev",
  ogImage: "/images/og.png",
  links: {
    github: "https://github.com/DhayalanWebDeveloper",
    linkedin: "https://www.linkedin.com/in/dhayalan-89ab042b9/",
    email: "dhayalandhaya149@gmail.com",
    phone: "+91 74025 32025",
  },
  location: "Chennai, Tamil Nadu, India",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const techStack = [
  { name: "Angular", icon: "angular", color: "#E85050" },
  { name: "React", icon: "react", color: "#3498DB" },
  { name: "Next.js", icon: "nextjs", color: "#6ECB63" },
  { name: "FastAPI", icon: "fastapi", color: "#48B8D0" },
  { name: "Tailwind", icon: "tailwind", color: "#48B8D0" },
  { name: "WordPress", icon: "wordpress", color: "#6ECB63" },
  { name: "JavaScript", icon: "javascript", color: "#F0D840" },
  { name: "TypeScript", icon: "typescript", color: "#3498DB" },
];

export const projects = [
  {
    id: "be25-interview-platform",
    title: "BE25 Student Interview Practice Platform",
    description:
      "A career validation platform with AI-guided voice interviews using WebSockets and RxJS. Features Company Module for HR teams to configure job roles, interview templates, and evaluation rubrics, and Student Module delivering sub-250ms real-time feedback, practice history, skill-gap analytics, and personalized learning plans.",
    shortDescription:
      "AI-powered career validation with real-time voice interviews & HR dashboards",
    techStack: ["Angular 19", "Tailwind CSS", "FastAPI", "WebSockets", "RxJS", "JWT"],
    category: "Web Apps",
    image: "/images/be25.png",
    liveUrl: "https://be25.com/",
    githubUrl: "#",
    featured: true,
    problem:
      "Traditional hiring is broken — talented people get rejected because they can't prove skills in a 30-minute interview. Companies miss great hires because resumes don't tell the whole story.",
    solution:
      "Built a multi-module platform where students practice AI-guided voice interviews with instant coaching insights, while HR teams configure templates, track candidate performance, and generate downloadable reports in real time.",
  },
  {
    id: "ticket-booking-portal",
    title: "MovieTix - Cinema Ticket Booking Portal",
    description:
      "A complete cinema ticket booking platform with interactive seat selection, food ordering, Razorpay payment integration, and multi-role architecture for users, partners, and admins. Features 214+ components, geolocation-based cinema discovery, and real-time seat availability.",
    shortDescription:
      "Full cinema booking with seat selection, food ordering & Razorpay payments",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Razorpay", "Leaflet"],
    category: "Full Stack",
    image: "/images/MovieTix.png",
    liveUrl: "https://ticketbooking.mo.vc",
    githubUrl: "#",
    featured: true,
    problem:
      "Traditional cinema booking involves long queues, limited seat selection, and fragmented experiences across discovery, booking, and food ordering.",
    solution:
      "Developed a multi-role platform with interactive seat maps, integrated concession ordering, QR code digital tickets, and partner/admin dashboards — reducing booking time from 10+ minutes to 2-3 minutes.",
  },
  {
    id: "hospital-management-system",
    title: "Hospital Management System",
    description:
      "Comprehensive hospital management platform with multi-branch administration, DICOM medical imaging viewer, radiology & pathology management, appointment scheduling, and role-based dashboards for doctors, nurses, and administrators.",
    shortDescription:
      "Enterprise HMS with DICOM viewer, RBAC & multi-branch management",
    techStack: ["Angular 16", "FastAPI", "Bootstrap", "Cornerstone.js", "RxJS"],
    category: "Web Apps",
    image: "/images/Hospital Management System.png",
    liveUrl: "https://hms.mo.vc/",
    githubUrl: "#",
    featured: true,
    problem:
      "Hospitals need efficient digital systems to manage patients, staff, medical imaging, and multi-branch operations with proper role-based access control.",
    solution:
      "Built an enterprise-grade HMS with secure token-based auth, DICOM medical imaging viewer with measurement tools, granular RBAC, and comprehensive patient & staff data management across multiple branches.",
  },
  {
    id: "agent7x",
    title: "Agent 7X - AI Business Automation",
    description:
      "AI-powered business automation platform for retail SMBs. Integrates with ZOHO CRM and Tally ERP, offering 300+ ready-to-use AI agents deployable in minutes. Features seven dimensions of business intelligence with real-time monitoring, predictive insights, and autonomous execution.",
    shortDescription:
      "AI automation platform with 300+ agents, ZOHO & Tally integration",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
    category: "Full Stack",
    image: "/images/Agent 7X.png",
    liveUrl: "https://agent7x.com/",
    githubUrl: "#",
    featured: true,
    problem:
      "Small & medium retail businesses waste 40% of team time on repetitive tasks, use 9+ disconnected tools, and lose revenue due to slow lead response and poor inventory management.",
    solution:
      "Created an AI platform with 300+ agents that automates business operations, delivering 325% average ROI, 95% faster lead response, and 99.5% inventory accuracy through native ZOHO & Tally integration.",
  },
  {
    id: "bommai-ai",
    title: "Bomm.ai - AI Persona Platform",
    description:
      "Revolutionary patent-pending platform that transforms professional expertise into trainable AI personas. Features LinkedIn OAuth authentication, multi-step persona creation workflow, sandbox testing, Stripe monetization engine, and multi-user architecture for admins, creators, and end users.",
    shortDescription:
      "Patent-pending AI persona builder with monetization & LinkedIn auth",
    techStack: ["Angular 19", "TypeScript", "Tailwind CSS", "Node.js", "Stripe", "JWT"],
    category: "Web Apps",
    image: "https://img.freepik.com/free-vector/chat-bot-concept-illustration_114360-5522.jpg",
    liveUrl: "https://bomm.ai",
    githubUrl: "#",
    featured: true,
    problem:
      "Traditional AI tools are generic and impersonal. Professionals have no way to clone their expertise into an AI that can handle consultations and generate income 24/7.",
    solution:
      "Built a platform where professionals create AI personas trained on their knowledge, with resume intelligence, sandbox testing, Stripe monetization, and multi-platform publishing — enabling passive income from expert AI assistants.",
  },
  {
    id: "dinamani-news-portal",
    title: "Dinamani Tamil News Portal",
    description:
      "High-performance Tamil news portal serving millions of readers. Features ISR with 60-second revalidation, multi-layer Redis caching, Quintype CMS integration, breaking news ticker, and sub-2 second page loads with 90+ PageSpeed score.",
    shortDescription:
      "High-traffic Tamil news portal with ISR, Redis caching & 90+ PageSpeed",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Redis"],
    category: "Full Stack",
    image: "/images/Dinamani.png",
    liveUrl: "https://www.dinamani.com/",
    githubUrl: "#",
    featured: false,
    problem:
      "News portals serving millions of Tamil readers need lightning-fast performance, real-time updates, and proper Tamil language rendering across all devices.",
    solution:
      "Built a high-traffic portal with multi-layer caching (Server → Redis → CDN → Browser), ISR revalidation, Suspense streaming, and comprehensive SEO with schema markup — achieving 95%+ CDN cache hit rate and sub-2s loads.",
  },
  {
    id: "landt-asset-management",
    title: "L&T Employee & Admin Portal",
    description:
      "Enterprise asset management dashboard for facilities management. Features multi-building asset tracking, dual view modes (grid/list), real-time search filtering, role-based interfaces for workers and management, and comprehensive CRUD operations.",
    shortDescription:
      "Enterprise asset tracking with role-based dashboards & real-time search",
    techStack: ["Angular 16", "TypeScript", "Bootstrap", "RxJS"],
    category: "Web Apps",
    image: "/images/L&T Employee.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    problem:
      "Large organizations need to track valuable physical assets across multiple buildings, blocks, and floors while maintaining accurate inventory and reducing equipment loss.",
    solution:
      "Created an enterprise dashboard with multi-location asset tracking, dual view modes, real-time filtering, and role-based access for workers and management — streamlining facility operations.",
  },
  {
    id: "odoo-support",
    title: "OdooSupport.in - ERP Services Platform",
    description:
      "Professional business website for Odoo ERP support services. Features dynamic pricing plans, lead generation forms, Resend email integration, user authentication, SEO-optimized with schema markup achieving 82/100 SEO score, and static site generation.",
    shortDescription:
      "Odoo ERP services site with dynamic pricing, email integration & 82 SEO score",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Resend", "Nodemailer"],
    category: "Full Stack",
    image: "/images/OdooSupport.png",
    liveUrl: "https://odoosupport.in/",
    githubUrl: "#",
    featured: false,
    problem:
      "Odoo ERP service companies need a professional online presence with dynamic pricing, lead generation, and strong SEO to attract business clients.",
    solution:
      "Built a full-featured business website with dynamic plan selection, email integration via Resend, comprehensive schema markup, and static site generation — establishing a credible brand with conversion-focused lead systems.",
  },
  {
    id: "ups-battery-ecommerce",
    title: "UPS & Battery - B2B E-Commerce Platform",
    description:
      "Full-featured B2B e-commerce marketplace for enterprise power solutions. Features product catalog with advanced filtering, shopping cart, wishlist, make-an-offer system, Odoo backend integration with 25+ API endpoints, and JSON-LD structured data. 46 total routes with 54 reusable components.",
    shortDescription:
      "B2B power solutions marketplace with Odoo backend & 46 routes",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Radix UI", "Recharts"],
    category: "Full Stack",
    image: "https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg",
    liveUrl: "https://upsandbatterydev.mo.vc/",
    githubUrl: "#",
    featured: false,
    problem:
      "Enterprise buyers and wholesale suppliers need a dedicated B2B marketplace for UPS systems and batteries with bulk pricing, real-time inventory, and negotiation capabilities.",
    solution:
      "Developed a comprehensive B2B platform with 46 routes, advanced product filtering, cart/wishlist, make-an-offer zone, and secure Odoo API integration with ISR caching and full SEO optimization.",
  },
];

export const skills = [
  { name: "Angular", level: 92, category: "Framework" },
  { name: "React.js", level: 85, category: "Framework" },
  { name: "Next.js", level: 88, category: "Framework" },
  { name: "JavaScript", level: 90, category: "Language" },
  { name: "TypeScript", level: 88, category: "Language" },
  { name: "HTML & CSS", level: 95, category: "Frontend" },
  { name: "Tailwind CSS", level: 92, category: "Frontend" },
  { name: "Bootstrap", level: 88, category: "Frontend" },
  { name: "FastAPI", level: 80, category: "Backend" },
  { name: "WordPress", level: 82, category: "CMS" },
  { name: "RxJS", level: 78, category: "Library" },
  { name: "WebSockets", level: 75, category: "Technology" },
];

export const experiences = [
  {
    title: "Web Developer",
    company: "Xmedia Solution, Chennai",
    period: "Mar 2024 – Present",
    description:
      "Building enterprise-grade web applications using Angular, Next.js, FastAPI, and WordPress. Leading frontend development for AI platforms, booking systems, hospital management, and business websites with a focus on token-based auth, role-based access, and real-time data handling.",
    highlights: [
      "Built BE25 AI Interview Platform with real-time voice feedback using WebSockets & RxJS",
      "Led development of MovieTix cinema booking portal with Next.js & Razorpay integration",
      "Developed Hospital Management System with DICOM medical imaging viewer",
      "Created Agent 7X AI automation platform with ZOHO & Tally integration",
      "Built Bomm.ai patent-pending AI persona platform with Stripe monetization",
      "Delivered Dinamani Tamil news portal serving millions of readers",
      "Developed L&T enterprise asset management portal",
      "Built OdooSupport.in and UPS & Battery B2B e-commerce platforms",
    ],
  },
];

export const education = [
  {
    degree: "B.Sc Mathematics",
    institution: "Madras University, Chennai",
    year: "Graduated: 2021",
    percentage: "72.16%",
  },
];

export const services = [
  {
    title: "Full Stack Web Development",
    description:
      "End-to-end web applications with Angular, Next.js, and FastAPI. Enterprise dashboards, booking systems, and AI platforms with secure authentication.",
    icon: "Globe",
  },
  {
    title: "WordPress Development",
    description:
      "Professional WordPress sites with custom themes, WooCommerce integration, plugin customization, and SEO optimization for businesses.",
    icon: "Layout",
  },
  {
    title: "Frontend Development",
    description:
      "Pixel-perfect responsive UIs with Angular, React, and Next.js. Real-time features with WebSockets, RxJS, and modern animation libraries.",
    icon: "Monitor",
  },
  {
    title: "API & Backend Integration",
    description:
      "FastAPI backend development, REST API design, JWT authentication, WebSocket integration, and third-party service connections (Stripe, Razorpay, ZOHO).",
    icon: "Zap",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "B2B and B2C e-commerce platforms with product catalogs, cart systems, payment gateways, and inventory management using modern tech stacks.",
    icon: "Rocket",
  },
];

export const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechStart India",
    content:
      "Dhayalan built our company website and it exceeded all expectations. The design is modern, fast, and our leads increased by 50%.",
    avatar: "RK",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager, HealthTech Co",
    content:
      "The hospital management system Dhayalan developed streamlined our entire workflow. His technical expertise and attention to detail are remarkable.",
    avatar: "PS",
  },
  {
    name: "Michael Chen",
    role: "Founder, BookMyEvent",
    content:
      "Outstanding work on our ticket booking platform. The real-time seat selection feature is seamless and our users love it.",
    avatar: "MC",
  },
  {
    name: "Anitha Rajan",
    role: "Marketing Director, BrandUp",
    content:
      "Dhayalan transformed our online presence with a stunning WordPress site. His SEO knowledge helped us rank on the first page of Google.",
    avatar: "AR",
  },
];

export const blogPosts = [
  {
    slug: "angular-vs-react-2024",
    title: "Angular vs React: Which Framework to Choose in 2024?",
    excerpt:
      "A comprehensive comparison of Angular and React, covering performance, developer experience, ecosystem, and when to use each framework.",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "Frontend",
    tags: ["Angular", "React", "JavaScript"],
    content: [
      "## The Great Debate: Angular vs React",
      "After building enterprise applications with both Angular and React for over a year, I've developed strong opinions about when to use each. Having shipped projects like BE25 (Angular 19) and MovieTix (Next.js/React), I've experienced the strengths and trade-offs of both frameworks firsthand.",
      "## Angular: The Enterprise Powerhouse",
      "Angular is a complete framework — it ships with routing, forms, HTTP client, dependency injection, and RxJS out of the box. When I built the Hospital Management System with Angular 16, I didn't need to research third-party libraries for basic features. Everything was integrated and well-documented.",
      "The opinionated structure of Angular is a huge advantage for teams. Every Angular project looks similar — services go in services, components in components, and modules group related features. This predictability makes onboarding new developers much faster.",
      "RxJS integration is where Angular truly shines. In the BE25 interview platform, I used WebSockets with RxJS Observables to deliver sub-250ms real-time voice feedback. The reactive programming model made complex async data flows manageable and testable.",
      "## React: Flexibility and Ecosystem",
      "React gives you freedom. It's a library, not a framework, so you pick your own router, state management, and data fetching solution. This flexibility is powerful when you need something specific — but it also means more decisions upfront.",
      "With Next.js on top of React, you get the best of both worlds: React's component model with built-in routing, SSR, ISR, and API routes. When I built the Dinamani news portal, Next.js ISR with 60-second revalidation was crucial for serving millions of readers with fresh content and fast page loads.",
      "## When to Choose What",
      "Choose Angular when: you're building large enterprise apps with complex forms, need strong typing throughout, want everything included, or your team values consistency over flexibility. Angular's dependency injection and module system make it excellent for apps with 100+ components.",
      "Choose React/Next.js when: you need server-side rendering or static generation, want a lighter initial setup, are building content-heavy sites, or need the flexibility to choose your own tools. Next.js especially excels for public-facing websites where SEO and performance matter.",
      "## My Verdict",
      "There's no universal winner. I use Angular for complex internal tools and dashboards (like L&T's asset management portal), and Next.js for public-facing products where SEO and performance are critical (like Dinamani and MovieTix). The best framework is the one that fits your project's needs.",
    ],
  },
  {
    slug: "nextjs-performance-tips",
    title: "10 Next.js Performance Tips for Lightning-Fast Websites",
    excerpt:
      "Optimize your Next.js applications with these proven techniques covering image optimization, code splitting, caching, and more.",
    date: "2024-11-20",
    readTime: "6 min read",
    category: "Next.js",
    tags: ["Next.js", "Performance", "Web Development"],
    content: [
      "## Performance Is Not Optional",
      "When I built the Dinamani Tamil news portal serving millions of readers, every millisecond mattered. Here are the performance techniques I've learned from shipping real Next.js applications in production.",
      "## 1. Use ISR (Incremental Static Regeneration)",
      "ISR lets you serve static pages while revalidating in the background. For Dinamani, I used 60-second revalidation — pages load instantly from cache while fresh content is generated behind the scenes. This gave us sub-2 second page loads with always-fresh content.",
      "## 2. Optimize Images with next/image",
      "Always use the Next.js Image component. It automatically serves WebP/AVIF, lazy loads below-the-fold images, and generates responsive sizes. On the MovieTix booking portal, switching from plain img tags to next/image reduced image payload by 60%.",
      "## 3. Implement Multi-Layer Caching",
      "For high-traffic apps, use Server Cache → Redis → CDN → Browser caching. Each layer reduces load on the next. On Dinamani, this strategy achieved a 95%+ CDN cache hit rate, meaning most users never hit the origin server.",
      "## 4. Dynamic Imports for Heavy Components",
      "Use next/dynamic to lazy-load components that aren't needed on initial render. In this portfolio, the 3D hero scene loads via dynamic import with ssr: false, keeping the initial bundle small and the first paint fast.",
      "## 5. Minimize Client-Side JavaScript",
      "Every byte of JavaScript delays interactivity. Prefer CSS animations over JS-driven ones. I replaced GSAP (80KB) with pure CSS @keyframes for route transitions — zero JavaScript, same visual effect, and route changes went from 2+ seconds to instant.",
      "## 6. Use Suspense and Streaming",
      "React Suspense with streaming SSR lets you send the HTML shell immediately while slower data fetches complete. Users see content faster even if the full page takes time to render.",
      "## 7. Prefetch Critical Routes",
      "Next.js Link component automatically prefetches visible links. Make sure your navigation uses Link, not anchor tags. This makes page transitions feel instant because the next page is already loaded in the background.",
      "## 8. Optimize Fonts",
      "Use next/font to self-host Google Fonts with zero layout shift. It automatically subsets fonts and uses font-display: swap. This portfolio uses Playfair Display via next/font — no external requests, no FOUT.",
      "## 9. Add Proper Meta Tags and Schema Markup",
      "While not a speed metric, good metadata improves perceived performance in search results. Use generateMetadata for dynamic pages and add JSON-LD structured data. Search engines reward fast, well-structured sites with better rankings.",
      "## 10. Measure What Matters",
      "Use Lighthouse, Web Vitals, and real user monitoring. Focus on LCP (Largest Contentful Paint), FID (First Input Delay), and CLS (Cumulative Layout Shift). Don't optimize blindly — measure, fix the biggest bottleneck, and measure again.",
    ],
  },
  {
    slug: "fastapi-beginner-guide",
    title: "FastAPI Beginner Guide: Build Your First API in 30 Minutes",
    excerpt:
      "Step-by-step guide to building a RESTful API with FastAPI, including CRUD operations, validation, and automatic documentation.",
    date: "2024-10-10",
    readTime: "10 min read",
    category: "Backend",
    tags: ["FastAPI", "Python", "API"],
    content: [
      "## Why FastAPI?",
      "FastAPI is a modern Python framework that's fast to code, fast to run, and fast to learn. I use it as the backend for multiple production applications including BE25's AI interview platform and the Hospital Management System. Here's why it's become my go-to backend framework.",
      "## Speed and Performance",
      "FastAPI is built on Starlette and Pydantic, making it one of the fastest Python frameworks available. It's on par with Node.js and Go for many workloads. For the BE25 platform, FastAPI handles thousands of concurrent WebSocket connections for real-time voice interviews without breaking a sweat.",
      "## Automatic API Documentation",
      "One of FastAPI's best features is auto-generated interactive documentation. Just by writing your endpoint with type hints, you get Swagger UI at /docs and ReDoc at /redoc — no extra code needed. This saved us weeks of documentation work on the HMS project.",
      "## Type Safety with Pydantic",
      "FastAPI uses Pydantic models for request/response validation. Define your data shape once, and FastAPI validates incoming requests automatically, returns clear error messages for invalid data, and generates accurate API docs. This catches bugs before they reach your database.",
      "## Getting Started",
      "Install FastAPI and Uvicorn: pip install fastapi uvicorn. Create a main.py file with your first endpoint. Use the @app.get, @app.post decorators to define routes. Add Pydantic models for request bodies. Run with uvicorn main:app --reload and visit localhost:8000/docs to see your API.",
      "## Authentication with JWT",
      "For production APIs, you need authentication. FastAPI has excellent support for JWT (JSON Web Tokens). In the BE25 platform, I implemented role-based access control where students, HR teams, and admins each get different permissions based on their JWT claims.",
      "## WebSocket Support",
      "FastAPI natively supports WebSockets, which was critical for BE25's real-time interview feedback system. The @app.websocket decorator makes it straightforward to handle bidirectional communication. Combined with RxJS on the Angular frontend, this delivers sub-250ms response times.",
      "## Database Integration",
      "FastAPI works with any database through SQLAlchemy, Tortoise ORM, or raw queries. I prefer SQLAlchemy with async support for complex applications. For simpler projects, you can use databases like MongoDB with Motor for async operations.",
      "## Deployment Tips",
      "Deploy FastAPI with Uvicorn behind Nginx or use Docker containers. For the Hospital Management System, we use Gunicorn with Uvicorn workers for multi-process handling. Always use environment variables for secrets, enable CORS for frontend access, and add rate limiting for public APIs.",
      "## Summary",
      "FastAPI combines Python's simplicity with production-grade performance. It's ideal for building APIs that need to be fast, well-documented, and type-safe. If you're an Angular or Next.js developer looking for a solid backend, FastAPI is an excellent choice.",
    ],
  },
  {
    slug: "wordpress-seo-tricks",
    title: "WordPress SEO Tricks That Actually Work in 2024",
    excerpt:
      "Proven SEO strategies for WordPress sites covering technical SEO, content optimization, schema markup, and speed improvements.",
    date: "2024-09-05",
    readTime: "7 min read",
    category: "WordPress",
    tags: ["WordPress", "SEO", "Marketing"],
    content: [
      "## SEO That Drives Real Results",
      "Building WordPress sites for business clients taught me that SEO isn't about tricks — it's about fundamentals done right. When I built OdooSupport.in, we achieved an 82/100 SEO score by focusing on what actually moves the needle. Here's what works.",
      "## 1. Technical Foundation First",
      "Before writing a single word of content, fix your technical SEO. Ensure your site has proper SSL (HTTPS), clean URL structure, XML sitemap, and robots.txt. Use a lightweight theme — most bloated themes score below 40 on PageSpeed. I recommend GeneratePress or Astra as base themes.",
      "## 2. Schema Markup Is Non-Negotiable",
      "Add JSON-LD structured data to every page. For business sites, use Organization, LocalBusiness, and Service schemas. For blog posts, use Article schema with author and date information. Google uses this data for rich snippets, which dramatically improve click-through rates.",
      "## 3. Speed Optimization",
      "Google's Core Web Vitals directly impact rankings. Optimize images (use WebP format), enable browser caching, minify CSS/JS, and use a CDN. WP Rocket or LiteSpeed Cache are excellent caching plugins. Aim for sub-3 second load times on mobile — most business sites lose 50% of visitors if they're slower.",
      "## 4. Content Structure Matters",
      "Use proper heading hierarchy (H1 → H2 → H3). Every page should have exactly one H1 tag. Write meta titles under 60 characters and meta descriptions under 155 characters. Include your target keyword in the title, first paragraph, and at least one H2. Don't keyword stuff — write naturally.",
      "## 5. Internal Linking Strategy",
      "Link related pages together. Your homepage should link to key service pages, service pages should link to relevant blog posts, and blog posts should link back to service pages. This creates a web of relevance that helps Google understand your site structure and distributes page authority.",
      "## 6. Mobile-First Design",
      "Google uses mobile-first indexing, meaning it ranks your site based on its mobile version. Test every page on mobile devices. Ensure text is readable without zooming, buttons are large enough to tap, and content doesn't overflow horizontally. Use responsive images and flexible layouts.",
      "## 7. Local SEO for Service Businesses",
      "If your client serves a specific area, optimize for local search. Create a Google Business Profile, add NAP (Name, Address, Phone) consistently across the site, include location-specific keywords, and add a Google Maps embed on the contact page. For OdooSupport.in, local SEO drove 40% of our leads.",
      "## 8. Monitor and Iterate",
      "Use Google Search Console to track impressions, clicks, and average position. Identify pages that rank on page 2 (positions 11-20) — these are your biggest opportunities. Improve their content, add internal links, and update meta descriptions. Small improvements to page-2 results often yield the biggest traffic gains.",
      "## The Bottom Line",
      "SEO is a marathon, not a sprint. Focus on technical health, quality content, and user experience. Avoid shortcut tactics like keyword stuffing or link schemes — they may work briefly but will hurt you long-term. Build a fast, well-structured site with genuinely useful content, and the rankings will follow.",
    ],
  },
];
