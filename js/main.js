/* =====================================================================
   PORTFOLIO  —  engine room
   ===================================================================== */
(function () {
  "use strict";
  const M = window.MANIFEST;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));

  /* ============== HERO: rotating role typewriter ============== */
  (function rotateRoles() {
    const el = $("#roleTyped"); if (!el) return;
    const roles = M.me.roles;
    let ri = 0, ci = 0, deleting = false;
    function tick() {
      const word = roles[ri];
      if (!deleting) {
        el.textContent = word.slice(0, ++ci);
        if (ci === word.length) { deleting = true; return setTimeout(tick, 1600); }
        return setTimeout(tick, 70 + Math.random() * 40);
      } else {
        el.textContent = word.slice(0, --ci);
        if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; return setTimeout(tick, 280); }
        return setTimeout(tick, 32);
      }
    }
    tick();
  })();

  $("#heroTagline").textContent = M.me.tagline;
  $("#metaLoc").textContent = M.me.location;
  $("#statusText").textContent = M.me.available;

  /* ============== HERO: terminal preview card ============== */
  (function heroTerm() {
    const body = $("#heroTermBody"); if (!body) return;
    const lines = [
      `<span class="c-prompt">~ ❯</span> <span class="c-cmd">whoami</span>`,
      `<span class="c-out">${esc(M.me.name)}</span>`,
      `<span class="c-out">${esc(M.me.role)} — ${esc(M.me.location)}</span>`,
      ``,
      `<span class="c-prompt">~ ❯</span> <span class="c-cmd">cat ./me.json</span>`,
      `<span class="c-out">{</span>`,
      `<span class="c-out">  <span class="c-key">"focus"</span>: <span class="c-val">"payments + AI"</span>,</span>`,
      `<span class="c-out">  <span class="c-key">"stack"</span>: <span class="c-val">["Haskell","Rust","TS"]</span>,</span>`,
      `<span class="c-out">  <span class="c-key">"status"</span>: <span class="c-val">"open to chat"</span>,</span>`,
      `<span class="c-out">  <span class="c-key">"coffee"</span>: <span class="c-val">true</span></span>`,
      `<span class="c-out">}</span>`,
      ``,
      `<span class="c-prompt">~ ❯</span> <span class="c-cmd">./hire-me.sh</span>`,
      `<span class="c-com"># sending signal...</span>`,
    ];
    let i = 0;
    (function nextLine() {
      if (i >= lines.length) return;
      const ln = document.createElement("span");
      ln.className = "ln";
      ln.innerHTML = lines[i] || "&nbsp;";
      body.appendChild(ln);
      i++;
      setTimeout(nextLine, lines[i - 1] ? 140 : 60);
    })();
  })();

  /* ============== STATS ============== */
  $("#heroStats").innerHTML = M.stats.map(s => `
    <div class="stat">
      <div class="stat-num">${esc(s.num)}</div>
      <div class="stat-label">${esc(s.label)}</div>
    </div>`).join("");

  /* ============== ABOUT ============== */
  $("#aboutBio").textContent = M.me.bio;

  /* ============== PROJECTS ============== */
  $("#projectsList").innerHTML = M.projects.map(p => `
    <article class="project">
      <div class="project-thumb">
        <img src="${esc(p.thumb)}" alt="${esc(p.name)} thumbnail" loading="lazy"/>
      </div>
      <div class="project-body">
        <div class="project-head">
          <h3 class="project-name">
            ${esc(p.name)}
            ${p.live ? `<span class="live-badge">● live</span>` : ""}
          </h3>
          <div class="project-meta-row">
            <span>${esc(p.year)}</span>
            <span class="dot-sep"></span>
            <span>${esc(p.meta)}</span>
          </div>
        </div>
        <div class="project-type">${esc(p.type)}</div>
        <p class="project-desc">${esc(p.desc)}</p>
        <div class="project-stack">${p.stack.map(s => `<span>${esc(s)}</span>`).join("")}</div>
        ${p.link ? `<a class="project-link" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.linkLabel || p.link)} ↗</a>` : ""}
      </div>
    </article>`).join("");

  /* ============== EXPERIENCE ============== */
  $("#experienceList").innerHTML = M.experience.map(e => `
    <article class="exp">
      <div class="exp-head">
        <div class="exp-title-row">
          <span class="exp-company">${esc(e.company)}</span>
          <span class="exp-role">${esc(e.role)}</span>
        </div>
        <div class="exp-meta">
          ${esc(e.period)}
          <span class="loc">${esc(e.location)}</span>
        </div>
      </div>
      <ul class="exp-points">
        ${e.points.map(pt => `<li>${esc(pt)}</li>`).join("")}
      </ul>
    </article>`).join("");

  /* ============== SKILLS ============== */
  $("#skillsList").innerHTML = Object.entries(M.skills).map(([k, v]) => `
    <div class="skill-rack">
      <h4>${esc(k)}</h4>
      <div class="skill-chips">${v.map(s => `<span>${esc(s)}</span>`).join("")}</div>
    </div>`).join("");

  // tech marquee (duplicate for seamless scroll)
  const marqueeItems = [...M.marquee, ...M.marquee];
  $("#marqueeTrack").innerHTML = marqueeItems.map(t => `<span>${esc(t)}</span>`).join("");

  /* ============== CONTACT ============== */
  $("#emailLink").href = `mailto:${M.me.email}`;
  $("#emailVal").textContent = M.me.email;
  $("#githubLink").href = M.me.github;
  $("#linkedinLink").href = M.me.linkedin;
  $("#year").textContent = new Date().getFullYear();

  /* ============== SCROLL REVEAL ============== */
  const io = new IntersectionObserver((es) => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("seen"); io.unobserve(e.target); }
  }), { threshold: 0.1 });
  $$(".reveal").forEach(s => io.observe(s));

  /* ============== MOBILE NAV ============== */
  const menuBtn = $("#menuToggle"), nav = $("#navlinks");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  $$("#navlinks a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false);
  }));

  /* ============== INTERACTIVE TERMINAL ============== */
  const term = $("#terminal"), body = $("#termBody"), input = $("#termInput");
  const history = []; let histIdx = 0;

  function print(html, cls = "") {
    const ln = document.createElement("div");
    ln.className = "term-line" + (cls ? " " + cls : "");
    ln.innerHTML = html;
    body.appendChild(ln);
    body.scrollTop = body.scrollHeight;
  }

  function banner() {
    print(`<span class="dim">┌─────────────────────────────────────────────┐</span>`, "dim");
    print(`<span class="dim">│</span>  <span class="ok">sushant@portfolio</span>  <span class="dim">·</span>  v1.0.0          <span class="dim">│</span>`, "dim");
    print(`<span class="dim">│</span>  type <span class="ok">help</span> to see what i can do        <span class="dim">│</span>`, "dim");
    print(`<span class="dim">└─────────────────────────────────────────────┘</span>`, "dim");
    print("");
  }
  banner();

  const COMMANDS = {
    help: () => [
      "available commands:",
      "  <span class='ok'>about</span>        a quick bio",
      "  <span class='ok'>whoami</span>       who's behind this site",
      "  <span class='ok'>work</span>         list projects",
      "  <span class='ok'>experience</span>   list roles",
      "  <span class='ok'>skills</span>       tech i use",
      "  <span class='ok'>contact</span>      get in touch",
      "  <span class='ok'>open &lt;name&gt;</span>  open a section in the page",
      "  <span class='ok'>visit &lt;site&gt;</span> open external link (amreon, github, linkedin)",
      "  <span class='ok'>echo &lt;text&gt;</span> echo back",
      "  <span class='ok'>date</span>         current time",
      "  <span class='ok'>fortune</span>      a developer fortune",
      "  <span class='ok'>sudo</span>         try it",
      "  <span class='ok'>banner</span>       redraw the banner",
      "  <span class='ok'>clear</span>        clear the screen",
    ].join("\n"),

    about: () => M.me.bio,

    whoami: () => `${M.me.name} — ${M.me.role}, ${M.me.location}`,

    work: () => M.projects.map(p =>
      `  <span class="ok">●</span> ${esc(p.name)} <span class="dim">(${esc(p.year)})</span>` +
      ` — ${esc(p.type)}${p.link ? ` <span class="dim">→ ${esc(p.link)}</span>` : ""}`
    ).join("\n"),

    experience: () => M.experience.map(e =>
      `  <span class="ok">●</span> ${esc(e.company)} <span class="dim">(${esc(e.period)})</span>\n     ${esc(e.role)}`
    ).join("\n"),

    skills: () => Object.entries(M.skills).map(([k, v]) =>
      `  <span class="ok">${esc(k)}</span>: ${v.map(esc).join(", ")}`
    ).join("\n"),

    contact: () =>
      `  <span class="ok">email</span>     ${esc(M.me.email)}\n` +
      `  <span class="ok">github</span>    ${esc(M.me.github)}\n` +
      `  <span class="ok">linkedin</span>  ${esc(M.me.linkedin)}`,

    echo: (a) => esc(a || ""),

    date: () => new Date().toString(),

    fortune: () => {
      const lines = [
        "ship something today. perfection ships nothing.",
        "the bug is always in the assumption you didn't check.",
        "comments lie. tests lie less. types lie least.",
        "if it's not in git, it doesn't exist.",
        "the best system is the one that's actually running.",
        "naming is hard. spend the extra minute.",
        "logs are a love letter to your future self.",
      ];
      return `<span class="ok">🥠</span> ${lines[Math.floor(Math.random() * lines.length)]}`;
    },

    sudo: () => `<span class="err">[sudo]</span> nice try. this is a portfolio, not a kernel.`,

    banner: () => { body.innerHTML = ""; banner(); return ""; },

    clear: () => { body.innerHTML = ""; return ""; },

    open: (arg) => {
      const map = {
        about: "#about", work: "#work", projects: "#work",
        experience: "#experience", skills: "#skills",
        contact: "#contact", terminal: "#terminal", top: "#top",
      };
      const id = map[(arg || "").toLowerCase()];
      if (!id) return { html: `<span class="err">no such section: ${esc(arg)}</span>`, raw: true };
      const tgt = $(id);
      if (tgt) tgt.scrollIntoView({ behavior: "smooth" });
      return `→ jumping to ${esc(arg)}…`;
    },

    visit: (arg) => {
      const map = {
        amreon: "https://amreon.com",
        github: M.me.github,
        linkedin: M.me.linkedin,
        email: `mailto:${M.me.email}`,
      };
      const url = map[(arg || "").toLowerCase()];
      if (!url) return { html: `<span class="err">unknown destination: ${esc(arg)}</span>`, raw: true };
      window.open(url, "_blank", "noopener");
      return `↗ opening ${esc(arg)}…`;
    },
  };

  // aliases
  COMMANDS.ls = COMMANDS.help;
  COMMANDS.cd = COMMANDS.open;
  COMMANDS.cat = (a) => a === "me.json"
    ? JSON.stringify({ name: M.me.name, role: M.me.role, location: M.me.location, email: M.me.email }, null, 2)
    : `<span class="err">cat: ${esc(a)}: no such file</span>`;
  COMMANDS.man = () => COMMANDS.help();

  function run(raw) {
    if (!raw.trim()) return;
    history.push(raw); histIdx = history.length;
    print(
      `<span class="ok">sushant@portfolio</span> <span class="dim">~ ❯</span> <span class="cmd">${esc(raw)}</span>`
    );
    const [c, ...rest] = raw.trim().split(/\s+/);
    const arg = rest.join(" ");
    const fn = COMMANDS[c.toLowerCase()];
    if (!fn) return print(`<span class="err">command not found: ${esc(c)}</span> — try <span class="ok">help</span>`);
    const out = fn(arg);
    if (out && typeof out === "object" && out.html) return print(out.html);
    if (out) print(out);
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { run(input.value); input.value = ""; return; }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (histIdx > 0) { histIdx--; input.value = history[histIdx] || ""; }
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx < history.length - 1) { histIdx++; input.value = history[histIdx] || ""; }
      else { histIdx = history.length; input.value = ""; }
    }
    if (e.key === "l" && e.ctrlKey) { e.preventDefault(); body.innerHTML = ""; }
  });

  // focus terminal when user clicks anywhere in it
  term.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    input.focus();
  });
})();
