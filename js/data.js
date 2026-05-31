/* =========================================================
   SHIP'S MANIFEST  —  edit this file to update your content
   ========================================================= */

window.MANIFEST = {
  captain: {
    name: "Sushant Bisht",
    title: "Full-Stack Engineer · Builder · Explorer",
    rank: "Software Engineer at Juspay",
    port: "Bengaluru, India",
    creed:
      "I'm a software engineer who builds at the intersection of payments, AI, and product. By day I ship bank-grade systems at Juspay — Haskell, PureScript, Rust, the whole rigging. Off-hours I tinker on health-tech, learning tools, and whatever hard problem catches my eye. Give me a tough challenge and a clean whiteboard, and I'll start drawing the map.",
    links: {
      email: "bishtsushant1649@gmail.com",
      github: "https://github.com/SuShAnTBiShT407",
      linkedin: "https://www.linkedin.com/in/sushant-bisht",
    },
  },

  // ---- VOYAGES (experience) ----
  voyages: [
    {
      flag: "Juspay",
      ship: "Software Engineer — Full Stack",
      years: "2023 — Present",
      port: "Bengaluru",
      log: [
        "Architected and shipped a production-grade UPI payments SDK for RBL Bank, end-to-end in Haskell & PureScript — cut partner integration effort by 40%.",
        "Built a context-preserving payment retry engine that recovers failed transactions inside SLA — lifted success rate ~4%, salvaged ~15% of otherwise-lost payments.",
        "Owned a Fixed Deposit product backend with a two-person team: infra, 20+ APIs, HSM-backed encryption, and a Diffie–Hellman key exchange.",
        "Built an LLM-powered RCA tool that diagnoses production incidents and pings the right engineer on Slack — ~40% faster recovery, ~70% cheaper than the previous setup.",
        "Automated PR review and reviewer assignment across 30+ repos (Bitbucket + JIRA via MCP) — ~85% reduction in assignment time.",
        "Hardened 10+ merchant apps with NDK-level security (Frida / root / .so tamper detection) and authenticated .aar publishing via Maven.",
      ],
    },
    {
      flag: "iNeuron",
      ship: "Machine Learning Intern",
      years: "Jan 2023 — Jun 2023",
      port: "Remote",
      log: [
        "Built an end-to-end thyroid disease risk predictor using the CRISP-DM workflow — ~96% accuracy on 9K+ records, served at ~120ms median latency.",
      ],
    },
  ],

  // ---- BOUNTIES (projects) ----
  bounties: [
    {
      name: "Amreon",
      tag: "AI Health-Tracking Platform",
      meta: "Solo build · Live",
      link: "https://amreon.com",
      linkLabel: "amreon.com",
      desc:
        "Designed the entire stack alone — data model, auth, REST APIs, and an LLM-powered insight engine for personalised health guidance. Launched on Vercel with Meta Business integration; took it from blank canvas to live product with ~50 active users.",
      loot: ["LLM", "Next.js", "Vercel", "Live"],
    },
    {
      name: "Aayodhan",
      tag: "Trip & Event Companion",
      meta: "Flutter · Cross-platform",
      link: "",
      linkLabel: "",
      desc:
        "Real-time matching of travellers and events, built in Flutter — cross-platform state management with backend sync so people can find a crew, discover happenings, and join expeditions on the fly.",
      loot: ["Flutter", "Realtime", "Mobile"],
    },
    {
      name: "Shiksha Mirage",
      tag: "Immersive AI Learning",
      meta: "36-hour Hackathon",
      link: "https://youtu.be/zrZv5UOCkTI?si=rm2dEcPwWyQCiuf2",
      linkLabel: "Watch the demo",
      desc:
        "Built a real-time AR/VR concept renderer under a 36-hour run at the Rajasthan IT Hackathon — wiring AI-generated scenes into interactive 3D learning environments.",
      loot: ["AR/VR", "Hackathon", "AI", "3D"],
    },
  ],

  // ---- ARSENAL (skills) ----
  arsenal: {
    Languages: ["Haskell", "PureScript", "Python", "JavaScript", "TypeScript", "Dart", "Java", "C++", "Rust"],
    Frameworks: ["Presto-DOM", "Flutter", "Next.js", "Axum", "React"],
    "Infra & Data": ["AWS", "GCP", "PostgreSQL", "Cassandra", "ClickHouse", "Redis", "HSM"],
    Tools: ["Git", "Bitbucket", "JIRA", "MCP", "LLMs", "Selenium", "Figma", "Vercel"],
  },

  // ---- THE GALLERY ----
  gallery: [
    { src: "assets/plate-01.svg", caption: "Late-night code — where most ideas take shape" },
    { src: "assets/plate-02.svg", caption: "Global Fintech Fest — Tap-N-Pay unveiled" },
    { src: "assets/plate-03.svg", caption: "Rajasthan Hackathon — 36 hours, no sleep" },
    { src: "assets/plate-04.svg", caption: "Amreon — launch day" },
    { src: "assets/plate-05.svg", caption: "Mountains over Bengaluru" },
    { src: "assets/plate-06.svg", caption: "Add your own moment →" },
  ],

  // ---- DISPATCHES (writing) ----
  dispatches: [
    {
      title: "Securing the Hull — HSM & Diffie–Hellman for Payment APIs",
      date: "March 2025",
      excerpt:
        "How we sealed 20+ APIs with hardware-backed keys and a fresh key-exchange handshake — without losing a knot of speed.",
      link: "#",
      tag: "Security",
    },
    {
      title: "An LLM in the Crow's Nest — Automating RCA",
      date: "December 2024",
      excerpt:
        "Teaching a language model to read the storm — diagnosing production incidents and paging the right engineer at ~70% lower cost.",
      link: "#",
      tag: "AI / Infra",
    },
    {
      title: "Riding the Tide — Recovering Failed Payments Within SLA",
      date: "October 2024",
      excerpt:
        "A context-preserving retry engine that salvages payments the network tried to swallow.",
      link: "#",
      tag: "Payments",
    },
  ],
};
