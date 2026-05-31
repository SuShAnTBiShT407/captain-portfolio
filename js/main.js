/* =====================================================================
   FROM THE DECK — engine room (kept light & readable)
   ===================================================================== */
(function () {
  "use strict";
  const M = window.MANIFEST;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------------- 1. SEA + SKY (background canvas) ---------------- */
  const cv = $("#sea"), ctx = cv.getContext("2d");
  let W, H, stars = [], waves = [], t = 0;

  function resize() {
    W = cv.width = innerWidth; H = cv.height = innerHeight;
    stars = Array.from({ length: Math.min(160, Math.floor((W * H) / 11000)) }, () => ({
      x: Math.random() * W,
      y: Math.random() * H * 0.6,
      r: Math.random() * 1.4 + 0.2,
      tw: Math.random() * Math.PI * 2,
    }));
    // waves placed near the lower-mid so the deck SVG can sit below them
    waves = [
      { y: 0.62, amp: 10, len: 0.012, sp: 0.55, col: "rgba(20,48,65,.55)" },
      { y: 0.68, amp: 16, len: 0.009, sp: 0.4,  col: "rgba(13,34,54,.7)"  },
      { y: 0.74, amp: 22, len: 0.007, sp: 0.28, col: "rgba(8,22,40,.9)"   },
    ];
  }

  function draw() {
    t += 0.016;
    ctx.clearRect(0, 0, W, H);

    // stars (twinkle)
    for (const s of stars) {
      const a = 0.4 + Math.sin(t * 2 + s.tw) * 0.4;
      ctx.globalAlpha = Math.max(0, a);
      ctx.fillStyle = Math.random() < 0.004 ? "#5fc7c2" : "#f3e6c3";
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 7); ctx.fill();
    }
    ctx.globalAlpha = 1;

    // moon glow
    const mx = W * 0.78, my = H * 0.18;
    const mg = ctx.createRadialGradient(mx, my, 6, mx, my, 140);
    mg.addColorStop(0, "rgba(230,194,94,.55)");
    mg.addColorStop(1, "transparent");
    ctx.fillStyle = mg; ctx.fillRect(mx - 150, my - 150, 300, 300);
    ctx.fillStyle = "rgba(243,230,195,.92)";
    ctx.beginPath(); ctx.arc(mx, my, 28, 0, 7); ctx.fill();

    // moon shadow crater
    ctx.fillStyle = "rgba(15,26,44,.18)";
    ctx.beginPath(); ctx.arc(mx + 8, my - 4, 22, 0, 7); ctx.fill();

    // horizon glow
    const hz = ctx.createLinearGradient(0, H * 0.55, 0, H * 0.62);
    hz.addColorStop(0, "rgba(230,194,94,.08)");
    hz.addColorStop(1, "transparent");
    ctx.fillStyle = hz; ctx.fillRect(0, H * 0.55, W, H * 0.07);

    // waves
    for (const w of waves) {
      ctx.beginPath(); ctx.moveTo(0, H);
      for (let x = 0; x <= W; x += 8) {
        const y = H * w.y
          + Math.sin(x * w.len + t * w.sp) * w.amp
          + Math.sin(x * w.len * 2.3 + t * w.sp * 1.7) * (w.amp * 0.35);
        ctx.lineTo(x, y);
      }
      ctx.lineTo(W, H); ctx.closePath();
      ctx.fillStyle = w.col; ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  addEventListener("resize", resize); resize(); draw();

  /* ---------------- 2. NAME TYPEWRITER (quick, no boot gate) ---------------- */
  (function typeName() {
    const el = $("#captainName"); if (!el) return;
    const full = M.captain.name;
    let i = 0;
    (function tn() {
      if (i <= full.length) {
        el.innerHTML = full.slice(0, i) + '<span class="cursor">▋</span>';
        i++; setTimeout(tn, 70);
      } else {
        el.innerHTML = full + '<span class="cursor">▋</span>';
      }
    })();
    $("#captainTitle").textContent = M.captain.title;
    $("#captainPort").textContent = "⚓ " + M.captain.port;
  })();

  /* ---------------- 3. RENDER CONTENT ---------------- */
  $("#creed").textContent = M.captain.creed;

  // voyages
  $("#voyages-list").innerHTML = M.voyages.map(v => `
    <article class="voyage">
      <div class="voyage-top">
        <div>
          <span class="voyage-flag">${v.flag}</span>
          &nbsp;<span class="voyage-ship">${v.ship}</span>
        </div>
        <div class="voyage-meta">${v.years} · ${v.port}</div>
      </div>
      <ul>${v.log.map(l => `<li>${l}</li>`).join("")}</ul>
    </article>`).join("");

  // bounties
  $("#bounties-list").innerHTML = M.bounties.map(b => `
    <article class="bounty">
      <h3>${b.name}</h3>
      <div class="tag">${b.tag}</div>
      <div class="meta">${b.meta || ""}</div>
      <p>${b.desc}</p>
      <div class="loot">${b.loot.map(x => `<span>${x}</span>`).join("")}</div>
      ${b.link ? `<a class="link" href="${b.link}" target="_blank" rel="noopener">${b.linkLabel} ↗</a>` : ""}
    </article>`).join("");

  // arsenal
  $("#arsenal-list").innerHTML = Object.entries(M.arsenal).map(([k, v]) => `
    <div class="rack">
      <h4>${k}</h4>
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
      <a class="d-more" href="${d.link}">read more →</a>
    </article>`).join("");

  // contact links
  const L = M.captain.links;
  $("#hail-links").innerHTML = `
    <a href="mailto:${L.email}">✉ Email</a>
    <a href="${L.github}" target="_blank" rel="noopener">⌥ GitHub</a>
    <a href="${L.linkedin}" target="_blank" rel="noopener">⚑ LinkedIn</a>`;
  $("#year").textContent = new Date().getFullYear();

  /* ---------------- 4. SCROLL REVEAL ---------------- */
  const io = new IntersectionObserver((es) => es.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("seen");
      io.unobserve(e.target);
    }
  }), { threshold: 0.12 });
  $$(".reveal").forEach(s => io.observe(s));

  /* ---------------- 5. MOBILE MENU ---------------- */
  const menuBtn = $("#menuToggle"), nav = $("#navlinks");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  $$("#navlinks a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", false);
  }));

  /* ---------------- 6. GALLERY LIGHTBOX ---------------- */
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = `<img alt=""><p></p>`;
  document.body.appendChild(lb);
  $("#gallery-list").addEventListener("click", (e) => {
    const fig = e.target.closest(".plate"); if (!fig) return;
    const g = M.gallery[+fig.dataset.i];
    lb.querySelector("img").src = g.src;
    lb.querySelector("img").alt = g.caption;
    lb.querySelector("p").textContent = g.caption;
    lb.classList.add("open");
  });
  lb.addEventListener("click", () => lb.classList.remove("open"));
  addEventListener("keydown", (e) => {
    if (e.key === "Escape") lb.classList.remove("open");
  });
})();
