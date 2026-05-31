/* =========================================================
   PORTFOLIO DATA  —  edit this file to update all content
   ========================================================= */

window.MANIFEST = {
  me: {
    name: "Sushant Bisht",
    handle: "sushant.bisht",
    role: "Full-Stack Engineer",
    roles: ["Full-Stack Engineer", "Problem Solver", "Builder", "Tinkerer"],
    tagline:
      "I build software at the intersection of payments, AI, and product. By day I ship bank-grade systems at Juspay — at night I tinker on whatever pulls me in.",
    location: "Bengaluru, India",
    available: "Available for interesting problems",
    bio:
      "Software engineer based in Bengaluru. I work across the full stack — currently shipping production payment systems at Juspay in Haskell, PureScript and Rust. Off-hours I build health-tech, learning tools, and the occasional weekend hackathon project. Equally happy in a backend systems doc or a fresh Figma file.",
    email: "bishtsushant1649@gmail.com",
    github: "https://github.com/SuShAnTBiShT407",
    linkedin: "https://www.linkedin.com/in/sushant-bisht",
  },

  stats: [
    { num: "3+",  label: "Years shipping" },
    { num: "30+", label: "Repos touched" },
    { num: "10+", label: "Apps hardened" },
    { num: "1",   label: "Live SaaS" },
  ],

  experience: [
    {
      company: "Juspay",
      role: "Software Engineer — Full Stack",
      period: "2023 — Present",
      location: "Bengaluru",
      points: [
        "Architected and shipped a production-grade UPI payments SDK for RBL Bank, end-to-end in Haskell & PureScript — cut partner integration effort by 40%.",
        "Built a context-preserving payment retry engine that recovers failed transactions inside SLA — lifted success rate ~4%, salvaged ~15% of otherwise-lost payments.",
        "Owned a Fixed Deposit product backend with a two-person team: infra, 20+ APIs, HSM-backed encryption, and a Diffie–Hellman key exchange.",
        "Built an LLM-powered RCA tool that diagnoses production incidents and pings the right engineer on Slack — ~40% faster recovery, ~70% cheaper than the previous setup.",
        "Automated PR review and reviewer assignment across 30+ repos (Bitbucket + JIRA via MCP) — ~85% reduction in assignment time.",
        "Hardened 10+ merchant apps with NDK-level security (Frida / root / .so tamper detection) and authenticated .aar publishing via Maven.",
      ],
    },
    {
      company: "iNeuron",
      role: "Machine Learning Intern",
      period: "Jan 2023 — Jun 2023",
      location: "Remote",
      points: [
        "Built an end-to-end thyroid disease risk predictor using the CRISP-DM workflow — ~96% accuracy on 9K+ records, served at ~120ms median latency.",
      ],
    },
  ],

  projects: [
    {
      slug: "amreon",
      name: "Amreon",
      year: "2024",
      type: "AI Health-Tracking Platform",
      meta: "Solo build · Live",
      desc:
        "Designed the entire stack alone — data model, auth, REST APIs, and an LLM-powered insight engine for personalised health guidance. Launched on Vercel with Meta Business integration; took it from blank canvas to live product with ~50 active users.",
      stack: ["Next.js", "LLM", "Vercel", "Meta API"],
      link: "https://amreon.com",
      linkLabel: "amreon.com",
      thumb: "assets/proj-amreon.svg",
      live: true,
    },
    {
      slug: "aayodhan",
      name: "Aayodhan",
      year: "2024",
      type: "Trip & Event Companion",
      meta: "Flutter · Cross-platform",
      desc:
        "Real-time matching of travellers and events, built in Flutter — cross-platform state management with backend sync so people can find a crew, discover happenings, and join expeditions on the fly.",
      stack: ["Flutter", "Realtime", "Firebase", "Mobile"],
      link: "",
      linkLabel: "",
      thumb: "assets/proj-aayodhan.svg",
      live: false,
    },
    {
      slug: "shiksha",
      name: "Shiksha Mirage",
      year: "2023",
      type: "Immersive AI Learning",
      meta: "36-hour Hackathon",
      desc:
        "Real-time AR/VR concept renderer built under a 36-hour run at the Rajasthan IT Hackathon — wiring AI-generated scenes into interactive 3D learning environments.",
      stack: ["AR/VR", "AI", "3D", "Hackathon"],
      link: "https://youtu.be/zrZv5UOCkTI?si=rm2dEcPwWyQCiuf2",
      linkLabel: "Watch the demo",
      thumb: "assets/proj-shiksha.svg",
      live: false,
    },
  ],

  skills: {
    Languages:     ["Haskell", "PureScript", "TypeScript", "Python", "Rust", "Dart", "Java", "C++"],
    Frameworks:    ["Next.js", "React", "Flutter", "Presto-DOM", "Axum"],
    "Infra & Data":["AWS", "GCP", "PostgreSQL", "Cassandra", "ClickHouse", "Redis", "HSM"],
    Tools:         ["Git", "Bitbucket", "JIRA", "MCP", "LLMs", "Figma", "Vercel", "Selenium"],
  },

  marquee: [
    "Haskell", "TypeScript", "Rust", "PureScript", "Next.js", "Flutter",
    "PostgreSQL", "Redis", "AWS", "Vercel", "LLMs", "React",
  ],

  writing: [
    {
      title: "Securing the Hull — HSM & Diffie–Hellman for Payment APIs",
      date: "March 2025",
      tag: "security",
      excerpt:
        "How we sealed 20+ APIs with hardware-backed keys and a fresh key-exchange handshake — without losing a knot of speed.",
      link: "#",
    },
    {
      title: "An LLM in the Crow's Nest — Automating RCA",
      date: "December 2024",
      tag: "ai/infra",
      excerpt:
        "Teaching a language model to read the storm — diagnosing production incidents and paging the right engineer at ~70% lower cost.",
      link: "#",
    },
    {
      title: "Riding the Tide — Recovering Failed Payments Within SLA",
      date: "October 2024",
      tag: "payments",
      excerpt:
        "A context-preserving retry engine that salvages payments the network tried to swallow.",
      link: "#",
    },
  ],
};
