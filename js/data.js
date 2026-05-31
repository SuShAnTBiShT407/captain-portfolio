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
      logo: "assets/logo-juspay.svg",
      link: "https://juspay.in",
    },
    {
      company: "iNeuron",
      role: "Machine Learning Intern",
      period: "Jan 2023 — Jun 2023",
      location: "Remote",
      logo: "assets/logo-ineuron.svg",
      link: "https://ineuron.ai",
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

  // ---- GALLERY ----
  // To add a photo: drop the file in /assets/gallery/ and append an entry.
  // span options: "tall" | "wide" | "square" (controls grid cell size)
  gallery: [
    {
      src: "assets/sushant.png",
      alt: "Sushant Bisht",
      caption: "self · walking around BLR",
      meta: "2026",
      span: "tall",
    },
    {
      src: "assets/gallery/g-workspace.svg",
      alt: "Workspace at night",
      caption: "// late-night build session",
      meta: "home · 2025",
      span: "wide",
    },
    {
      src: "assets/gallery/g-mountains.svg",
      alt: "Mountains under stars",
      caption: "weekend escape · Karnataka hills",
      meta: "2024",
      span: "square",
    },
    {
      src: "assets/gallery/g-hackathon.svg",
      alt: "Hackathon",
      caption: "Rajasthan IT Hackathon · 36 hours, no sleep",
      meta: "2023",
      span: "wide",
    },
    {
      src: "assets/gallery/g-terminal.svg",
      alt: "Terminal",
      caption: "// shipped something today",
      meta: "any day",
      span: "square",
    },
    {
      src: "assets/gallery/g-coffee.svg",
      alt: "Coffee",
      caption: "fuel · before pull requests are merged",
      meta: "every morning",
      span: "square",
    },
  ],

  // ---- BLOG ----
  // To add a post: append an entry. The page renders excerpt cards;
  // `content` (HTML string) is shown inline on expand.
  blog: [
    {
      slug: "securing-the-hull",
      title: "Securing the Hull — HSM & Diffie–Hellman for Payment APIs",
      date: "March 2025",
      readTime: "6 min read",
      tag: "security",
      cover: "assets/gallery/g-terminal.svg",
      excerpt:
        "How we sealed 20+ APIs with hardware-backed keys and a fresh key-exchange handshake — without losing a knot of speed.",
      content: `
        <p>When a payment API touches money, every byte over the wire becomes a target. We re-architected our session bootstrap for a Fixed Deposit product using a hardware security module (HSM) anchored at the bank, with an ephemeral Diffie–Hellman handshake on top.</p>
        <h3>The threat model</h3>
        <p>Replays, downgrade attacks, key exfiltration via a compromised app process. The HSM keeps the master key off the host. The handshake gives us forward secrecy for each session.</p>
        <h3>What we shipped</h3>
        <ul>
          <li>20+ APIs sealed with authenticated-encryption envelopes</li>
          <li>Ephemeral session keys derived inside the HSM enclave</li>
          <li>Zero loss in p99 latency — &lt; 4ms overhead per call</li>
        </ul>
        <p>Full write-up coming soon.</p>
      `,
    },
    {
      slug: "llm-in-the-crows-nest",
      title: "An LLM in the Crow's Nest — Automating RCA",
      date: "December 2024",
      readTime: "5 min read",
      tag: "ai · infra",
      cover: "assets/gallery/g-workspace.svg",
      excerpt:
        "Teaching a language model to read the storm — diagnosing production incidents and paging the right engineer at ~70% lower cost.",
      content: `
        <p>Our on-call dashboard was great at telling us <em>something was wrong</em> — but not what, or whom to wake up. We wired an LLM into the alert pipeline that reads logs, traces, recent deploys, and PR metadata, then proposes a root cause and tags the owner on Slack.</p>
        <h3>What surprised us</h3>
        <p>The model is most useful as a <em>filter</em>, not an oracle. The right framing was: "give us the top 3 candidate causes, ranked, with the snippet of evidence." That kept it honest and fast.</p>
        <ul>
          <li>~40% faster median time to first responder</li>
          <li>~70% cheaper than the heuristic system it replaced</li>
          <li>Engineers still own the diagnosis — the LLM just sets the table</li>
        </ul>
      `,
    },
    {
      slug: "riding-the-tide",
      title: "Riding the Tide — Recovering Failed Payments Within SLA",
      date: "October 2024",
      readTime: "4 min read",
      tag: "payments",
      cover: "assets/gallery/g-mountains.svg",
      excerpt:
        "A context-preserving retry engine that salvages payments the network tried to swallow.",
      content: `
        <p>Most "retry" systems just hit send again and pray. We built a retry engine that remembers the full transaction context — idempotency keys, partial state, downstream acknowledgements — and replays only the steps that actually failed, inside the SLA window.</p>
        <h3>Results</h3>
        <ul>
          <li>~4% lift in end-to-end success rate</li>
          <li>~15% of otherwise-lost payments salvaged</li>
          <li>Zero double-charges (the entire reason for the rebuild)</li>
        </ul>
      `,
    },
  ],
};
