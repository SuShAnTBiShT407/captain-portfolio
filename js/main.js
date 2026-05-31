/* =====================================================================
   THE UPI SEAS — engine room
   ===================================================================== */
(function () {
  "use strict";
  const M = window.MANIFEST;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------------- 1. ANIMATED SEA (canvas) ---------------- */
  const cv = $("#sea"), ctx = cv.getContext("2d");
  let W, H, stars = [], waves = [], t = 0;
  function resize() {
    W = cv.width = innerWidth; H = cv.height = innerHeight;
    stars = Array.from({ length: Math.min(140, (W * H) / 12000) }, () => ({
      x: Math.random() * W, y: Math.random() * H * 0.62,
      r: Math.random() * 1.4 + 0.2, tw: Math.random() * Math.PI * 2,
    }));
    waves = [
      { y: 0.74, amp: 14, len: 0.012, sp: 0.6, col: "rgba(20,48,65,.55)" },
      { y: 0.82, amp: 20, len: 0.009, sp: 0.42, col: "rgba(16,38,52,.7)" },
      { y: 0.9, amp: 26, len: 0.007, sp: 0.3, col: "rgba(10,26,36,.9)" },
    ];
  }
  function draw() {
    t += 0.016;
    ctx.clearRect(0, 0, W, H);
    // stars
    for (const s of stars) {
      const a = 0.4 + Math.sin(t * 2 + s.tw) * 0.4;
      ctx.globalAlpha = Math.max(0, a);
      ctx.fillStyle = Math.random() < 0.004 ? "#5ef2a0" : "#e9dab5";
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 7); ctx.fill();
    }
    ctx.globalAlpha = 1;
    // moon glow
    const mg = ctx.createRadialGradient(W * 0.8, H * 0.18, 6, W * 0.8, H * 0.18, 120);
    mg.addColorStop(0, "rgba(201,162,39,.5)"); mg.addColorStop(1, "transparent");
    ctx.fillStyle = mg; ctx.fillRect(W * 0.8 - 130, H * 0.18 - 130, 260, 260);
    ctx.fillStyle = "rgba(233,218,181,.9)";
    ctx.beginPath(); ctx.arc(W * 0.8, H * 0.18, 26, 0, 7); ctx.fill();
    // waves
    for (const w of waves) {
      ctx.beginPath(); ctx.moveTo(0, H);
      for (let x = 0; x <= W; x += 8) {
        const y = H * w.y + Math.sin(x * w.len + t * w.sp) * w.amp
          + Math.sin(x * w.len * 2.3 + t * w.sp * 1.7) * (w.amp * 0.35);
        ctx.lineTo(x, y);
      }
      ctx.lineTo(W, H); ctx.closePath(); ctx.fillStyle = w.col; ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  addEventListener("resize", resize); resize(); draw();

  /* ---------------- 2. BOOT SEQUENCE ---------------- */
  const bootText = $("#boot-text"), bootFill = $("#boot-fill"), boot = $("#boot");
  const lines = [
    "NAUTICUS OS v18.49  —  STEAM-DIFFERENCE ENGINE",
    "booting navigation core ............ OK",
    "spinning up brass dynamos .......... OK",
    "calibrating sextant + compass ...... OK",
    "loading captain's manifest ......... OK",
    "establishing telegraph link ........ OK",
    "",
    "> WELCOME ABOARD, NAVIGATOR.",
    "> charting the UPI seas...",
  ];
  let li = 0, ci = 0, booted = false;
  function typeBoot() {
    if (booted) return;
    if (li < lines.length) {
      const line = lines[li];
      if (ci <= line.length) {
        bootText.textContent = lines.slice(0, li).join("\n") + (li ? "\n" : "") + line.slice(0, ci) + "▋";
        bootFill.style.right = (100 - ((li / lines.length) * 100)) + "%";
        ci++; setTimeout(typeBoot, 14 + Math.random() * 22);
      } else { li++; ci = 0; setTimeout(typeBoot, 120); }
    } else { bootFill.style.right = "0%"; setTimeout(endBoot, 650); }
  }
  function endBoot() {
    if (booted) return; booted = true;
    boot.classList.add("gone");
    setTimeout(() => boot.remove(), 700);
    startName();
  }
  $("#boot-skip").addEventListener("click", endBoot);
  addEventListener("keydown", endBoot, { once: true });
  boot.addEventListener("click", endBoot);
  setTimeout(typeBoot, 350);

  /* ---------------- 3. CAPTAIN NAME TYPEWRITER ---------------- */
  function startName() {
    const el = $("#captainName"); const full = M.captain.name; let i = 0;
    (function tn() {
      el.innerHTML = full.slice(0, i) + '<span class="cursor">▋</span>';
      if (i++ <= full.length) setTimeout(tn, 90);
      else el.innerHTML = full + '<span class="cursor">▋</span>';
    })();
    $("#captainTitle").textContent = M.captain.title;
    $("#captainPort").textContent = "⚓ " + M.captain.port;
  }

  /* ---------------- 4. RENDER CONTENT ---------------- */
  $("#creed").textContent = M.captain.creed;

  // voyages
  $("#voyages-list").innerHTML = M.voyages.map(v => `
    <article class="voyage">
      <div class="voyage-top">
        <div><span class="voyage-flag">${v.flag}</span> &nbsp;<span class="voyage-ship">${v.ship}</span></div>
        <div class="voyage-meta">${v.years} · ${v.port}</div>
      </div>
      <ul>${v.log.map(l => `<li>${l}</li>`).join("")}</ul>
    </article>`).join("");

  // bounties
  $("#bounties-list").innerHTML = M.bounties.map(b => `
    <article class="bounty">
      <h3>${b.name}</h3>
      <div class="tag">${b.tag}</div>
      <div class="doubloons">⊛ ${b.doubloons}</div>
      <p>${b.desc}</p>
      <div class="loot">${b.loot.map(x => `<span>${x}</span>`).join("")}</div>
      ${b.link ? `<a class="link" href="${b.link}" target="_blank" rel="noopener">${b.linkLabel} ↗</a>` : ""}
    </article>`).join("");

  // arsenal
  $("#arsenal-list").innerHTML = Object.entries(M.arsenal).map(([k, v]) => `
    <div class="rack"><h4>${k}</h4>
      <div class="chips">${v.map(s => `<span class="chip">${s}</span>`).join("")}</div>
    </div>`).join("");

  // gallery
  $("#gallery-list").innerHTML = M.gallery.map((g, i) => `
    <figure class="plate" data-i="${i}">
      <img src="${g.src}" alt="${g.caption}" loading="lazy" />
      <figcaption class="cap">${g.caption}</figcaption>
    </figure>`).join("");

  // dispatches
  $("#dispatch-list").innerHTML = M.dispatches.map(d => `
    <article class="dispatch">
      <span class="d-tag">${d.tag}</span>
      <span class="d-date">${d.date}</span>
      <h4>${d.title}</h4>
      <p>${d.excerpt}</p>
      <a class="d-more" href="${d.link}">read the dispatch →</a>
    </article>`).join("");

  // hail
  const L = M.captain.links;
  $("#hail-links").innerHTML = `
    <a href="mailto:${L.email}">✉ Raven (email)</a>
    <a href="${L.github}" target="_blank" rel="noopener">⌥ GitHub</a>
    <a href="${L.linkedin}" target="_blank" rel="noopener">⚑ LinkedIn</a>`;
  $("#year").textContent = new Date().getFullYear();

  /* ---------------- 5. SCROLL REVEAL + COMPASS ---------------- */
  const io = new IntersectionObserver((es) => es.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("seen");
  }), { threshold: 0.12 });
  $$(".reveal").forEach(s => io.observe(s));

  const needle = $("#needle"), navMap = {};
  $$(".compass-links a").forEach(a => navMap[a.getAttribute("href").slice(1)] = +a.dataset.deg);
  const secObs = new IntersectionObserver((es) => es.forEach(e => {
    if (e.isIntersecting && navMap[e.target.id] != null)
      needle.style.transform = `translate(-50%,-100%) rotate(${navMap[e.target.id]}deg)`;
  }), { threshold: 0.4 });
  $$("section[id]").forEach(s => secObs.observe(s));

  $("#menuToggle").addEventListener("click", () => $("#compass").classList.toggle("open"));
  $$(".compass-links a").forEach(a => a.addEventListener("click", () =>
    innerWidth < 860 && $("#compass").classList.remove("open")));

  /* ---------------- 6. LIGHTBOX ---------------- */
  const lb = document.createElement("div"); lb.className = "lightbox";
  lb.innerHTML = `<img alt=""><p></p>`; document.body.appendChild(lb);
  $("#gallery-list").addEventListener("click", (e) => {
    const fig = e.target.closest(".plate"); if (!fig) return;
    const g = M.gallery[+fig.dataset.i];
    lb.querySelector("img").src = g.src; lb.querySelector("p").textContent = g.caption;
    lb.classList.add("open");
  });
  lb.addEventListener("click", () => lb.classList.remove("open"));

  /* ---------------- 7. CANNON ---------------- */
  const cl = $("#cannonLayer");
  $("#fireBtn").addEventListener("click", () => {
    const ball = document.createElement("div"); ball.className = "cannonball";
    const sx = innerWidth / 2, sy = innerHeight * 0.7;
    ball.style.left = sx + "px"; ball.style.top = sy + "px"; cl.appendChild(ball);
    const tx = Math.random() * innerWidth, ty = Math.random() * innerHeight * 0.5;
    ball.animate([{ transform: "translate(0,0)" },
      { transform: `translate(${tx - sx}px,${ty - sy}px)` }],
      { duration: 700, easing: "cubic-bezier(.4,0,.7,1)" }).onfinish = () => {
        ball.remove(); const boom = document.createElement("div"); boom.className = "boom";
        boom.textContent = "BOOM!"; boom.style.left = tx + "px"; boom.style.top = ty + "px";
        document.body.appendChild(boom); setTimeout(() => boom.remove(), 650);
      };
  });

  /* ---------------- 8. DOUBLOON HUNT (mini-game) ---------------- */
  let found = 0; const dblCount = $("#dblCount");
  const spots = [
    { sel: "#log", x: "88%", y: "20%" }, { sel: "#voyages", x: "12%", y: "60%" },
    { sel: "#bounties", x: "70%", y: "85%" }, { sel: "#arsenal", x: "30%", y: "15%" },
    { sel: "#hold", x: "92%", y: "55%" },
  ];
  spots.forEach((s, i) => {
    const sec = $(s.sel); if (!sec) return;
    sec.style.position = "relative";
    const d = document.createElement("div"); d.className = "doubloon"; d.textContent = "🪙";
    d.style.left = s.x; d.style.top = s.y; d.title = "a hidden doubloon!";
    d.addEventListener("click", () => {
      if (d.classList.contains("found")) return;
      d.classList.add("found"); found++; dblCount.textContent = found;
      termPrint(`★ doubloon ${found}/5 plundered!`, "out");
      if (found === 5) {
        $("#cannonHint").innerHTML = "🏴‍☠️ <strong>All 5 doubloons found — ye be a true navigator!</strong> Try <code>treasure</code> in the console.";
        unlockTreasure = true;
      }
      setTimeout(() => d.remove(), 500);
    });
    sec.appendChild(d);
  });

  /* ---------------- 9. SHIP'S CONSOLE (text-adventure terminal) ---------------- */
  const term = $("#terminal"), termBody = $("#termBody"), termInput = $("#termInput");
  let unlockTreasure = false;
  function termPrint(txt, cls = "out") {
    const p = document.createElement("div"); p.className = cls; p.textContent = txt;
    termBody.appendChild(p); termBody.scrollTop = termBody.scrollHeight;
  }
  $("#termHandle").addEventListener("click", () => {
    const open = term.classList.toggle("open");
    term.setAttribute("aria-hidden", !open);
    if (open) { termInput.focus(); if (!termBody.childElementCount) bootConsole(); }
  });
  function bootConsole() {
    termPrint("Ship's console online. Type 'help' for orders.", "out");
  }
  const CMDS = {
    help: () => `available orders:
  about     — the captain's creed
  voyages   — where I've sailed (experience)
  bounties  — treasures claimed (projects)
  arsenal   — weapons & tongues (skills)
  hail      — how to reach me
  goto <x>  — sail to a section (log, voyages, bounties, arsenal, hold, hail)
  doubloons — hunt status
  flip      — flip a coin
  clear     — swab the deck
  treasure  — ??? (locked)`,
    about: () => M.captain.creed,
    voyages: () => M.voyages.map(v => `• ${v.flag} (${v.realYears}) — ${v.ship}`).join("\n"),
    bounties: () => M.bounties.map(b => `• ${b.name} — ${b.tag}`).join("\n"),
    arsenal: () => Object.entries(M.arsenal).map(([k, v]) => `${k}: ${v.join(", ")}`).join("\n"),
    hail: () => `email: ${L.email}\ngithub: ${L.github}\nlinkedin: ${L.linkedin}`,
    doubloons: () => `doubloons plundered: ${found}/5`,
    flip: () => (Math.random() < 0.5 ? "🪙 heads — fortune favours ye" : "🪙 tails — batten the hatches"),
    clear: () => { termBody.innerHTML = ""; return ""; },
    treasure: () => unlockTreasure
      ? "🏴‍☠️ X marks the spot: the real treasure was the commits we pushed along the way.\n   ...also, ⌥ open the GitHub link and give the repo a star, matey."
      : "the chest be locked. plunder all 5 doubloons on deck first.",
  };
  function runCmd(raw) {
    const [c, ...rest] = raw.trim().split(/\s+/);
    const arg = rest.join(" ").toLowerCase();
    if (!c) return;
    termPrint("captain@deck:~$ " + raw, "cmd");
    if (c === "goto") {
      const sec = $("#" + arg);
      if (sec) { sec.scrollIntoView({ behavior: "smooth" }); termPrint("setting sail for " + arg + "..."); }
      else termPrint("no such port: " + arg, "err");
      return;
    }
    const fn = CMDS[c.toLowerCase()];
    if (fn) { const out = fn(); if (out) termPrint(out); }
    else termPrint(`unknown order: '${c}'. type 'help'.`, "err");
  }
  termInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { runCmd(termInput.value); termInput.value = ""; }
  });

  /* ---------------- 10. KONAMI EASTER EGG ---------------- */
  const kseq = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
  let kp = 0;
  addEventListener("keydown", (e) => {
    kp = (e.key === kseq[kp]) ? kp + 1 : 0;
    if (kp === kseq.length) {
      kp = 0; document.body.style.transition = "filter .4s";
      document.body.style.filter = "hue-rotate(180deg) saturate(1.6)";
      setTimeout(() => (document.body.style.filter = ""), 1600);
      term.classList.add("open"); term.setAttribute("aria-hidden", false);
      if (!termBody.childElementCount) bootConsole();
      termPrint("⚡ KRAKEN MODE — the seas turn strange...", "out");
    }
  });
})();
