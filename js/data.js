/* =========================================================
   SHIP'S MANIFEST  —  edit this file to update your content
   ========================================================= */

window.MANIFEST = {
  captain: {
    name: "Sushant Bisht",
    title: "Full-Stack Buccaneer of the UPI Seas",
    rank: "Software Engineer · Juspay",
    port: "Bengaluru, India",
    creed:
      "A full-stack engineer who builds bank-grade machinery on the high seas of India's payment rails — Haskell, PureScript & Rust below decks, advanced contraptions above. I sail solo when I must and command a crew when the prize is worth it.",
    links: {
      email: "bishtsushant1649@gmail.com",
      github: "https://github.com/SuShAnTBiShT407",
      linkedin: "https://www.linkedin.com/in/sushant-bisht",
    },
  },

  // ---- VOYAGES (experience) ----
  voyages: [
    {
      flag: "JUSPAY",
      ship: "Software Engineer — Full Stack / UPI",
      years: "Jun 1823 – Present", // 19th-century flavour; real-world: 2023–
      realYears: "2023 – Present",
      port: "Bengaluru",
      log: [
        "Architected & shipped a production-grade UPI payments SDK for RBL Bank end-to-end in Haskell & PureScript — cut integration effort by 40%.",
        "Engineered a context-preserving payment-retry engine that recovers failed transactions within the tide (SLA) — lifted success rate ~4%, salvaged ~15% of otherwise-lost payments.",
        "Commanded the full backend of a Fixed Deposit product (2-soul crew): infra, 20+ APIs sealed with HSM encryption & a Diffie–Hellman key exchange.",
        "Built an LLM-powered automated RCA spyglass that diagnoses production storms and tags the right crew on Slack — ~40% faster to calm, ~70% cheaper.",
        "Automated PR review & reviewer-assignment across 30+ repositories (Bitbucket + JIRA via MCP) — assignment time cut ~85%.",
        "Hardened 10+ merchant vessels with an NDK security hull (Frida / root / .so tamper detection) and sealed .aar cargo via authenticated Maven.",
      ],
    },
    {
      flag: "iNEURON",
      ship: "Machine Learning Privateer (Intern)",
      years: "Jan 1823 – Jun 1823",
      realYears: "2023",
      port: "Remote / Open Waters",
      log: [
        "Built an end-to-end thyroid-disease risk-prediction apparatus (CRISP-DM) — ~96% accuracy across 9K+ souls, served at ~120ms median.",
      ],
    },
  ],

  // ---- BOUNTIES (projects) ----
  bounties: [
    {
      name: "Amreon",
      tag: "AI Health-Tracking Vessel",
      doubloons: "~50 souls aboard",
      link: "https://amreon.com",
      linkLabel: "amreon.com",
      desc:
        "Designed the entire stack alone — data model, auth, REST cannons, and an LLM oracle for personalised health insight — then launched on Vercel with Meta Business rigging. Captained the whole voyage from zero to live.",
      loot: ["Solo build", "LLM oracle", "Vercel", "Live"],
    },
    {
      name: "Aayodhan",
      tag: "Trip & Event Companion",
      doubloons: "Flutter-forged",
      link: "",
      linkLabel: "",
      desc:
        "Real-time matching of crews and quests, forged in Flutter — cross-platform state-craft and backend sync so wanderers can muster, discover, and join expeditions on the fly.",
      loot: ["Flutter", "Realtime", "Cross-platform"],
    },
    {
      name: "Shiksha Mirage",
      tag: "Immersive AI Learning",
      doubloons: "36-hour conquest",
      link: "https://youtu.be/zrZv5UOCkTI?si=rm2dEcPwWyQCiuf2",
      linkLabel: "Watch the Dispatch",
      desc:
        "Engineered real-time AR/VR concept-rendering under a 36-hour siege at the Rajasthan IT Hackathon — wiring AI-conjured scenes into interactive 3D learning mirages.",
      loot: ["AR/VR", "Hackathon", "AI", "3D"],
    },
  ],

  // ---- ARSENAL (skills) ----
  arsenal: {
    Tongues: ["Haskell", "PureScript", "Python", "JavaScript", "Dart", "Java", "C++", "Rust"],
    Rigging: ["Presto-DOM", "Flutter", "Axum"],
    "Cargo & Seas": ["AWS", "GCP", "PostgreSQL", "Cassandra", "ClickHouse", "Redis", "HSM"],
    Instruments: ["Git", "Bitbucket", "JIRA", "MCP", "LLMs", "Selenium", "Figma", "Vercel"],
  },

  // ---- THE GALLERY (journey log) ----
  // Drop your own images into /assets and point `src` at them.
  gallery: [
    { src: "assets/plate-01.svg", caption: "Maiden voyage — first commit to the high seas" },
    { src: "assets/plate-02.svg", caption: "Global Fintech Fest — Tap-N-Pay unveiled" },
    { src: "assets/plate-03.svg", caption: "Rajasthan Hackathon — 36 hours, no sleep" },
    { src: "assets/plate-04.svg", caption: "Amreon launch day" },
    { src: "assets/plate-05.svg", caption: "The crew at port" },
    { src: "assets/plate-06.svg", caption: "Add your own plate here →" },
  ],

  // ---- DISPATCHES (blog) ----
  dispatches: [
    {
      title: "Securing the Hull: HSM & Diffie–Hellman for Payment APIs",
      date: "Spring, 1826",
      excerpt:
        "How we sealed 20+ APIs with hardware-backed keys and a key-exchange handshake — without losing a knot of speed.",
      link: "#",
      tag: "Security",
    },
    {
      title: "An LLM in the Crow's Nest: Automating Root-Cause Analysis",
      date: "Winter, 1825",
      excerpt:
        "Teaching a language model to read the storm — diagnosing production incidents and hailing the right crew, for 70% less coin.",
      link: "#",
      tag: "AI / Infra",
    },
    {
      title: "Retrying the Tide: Recovering Failed Payments Within SLA",
      date: "Autumn, 1825",
      excerpt:
        "A context-preserving retry engine that salvages payments the sea tried to swallow.",
      link: "#",
      tag: "Payments",
    },
  ],
};
