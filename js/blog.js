/* =====================================================================
   BLOG PAGE  —  post list with inline expand
   ===================================================================== */
(function () {
  "use strict";
  const M = window.MANIFEST;
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));

  const posts = M.blog || [];
  $("#postCount").textContent = posts.length.toString().padStart(2, "0");
  $("#year").textContent = new Date().getFullYear();

  const list = $("#blogList");
  list.innerHTML = posts.map((p, i) => `
    <article class="post" id="post-${esc(p.slug)}">
      <div class="post-head" data-i="${i}">
        ${p.cover ? `
          <div class="post-cover">
            <img src="${esc(p.cover)}" alt="${esc(p.title)}" loading="lazy"/>
          </div>` : ""}
        <div class="post-info">
          <div class="post-meta-row">
            <span class="post-tag">// ${esc(p.tag)}</span>
            <span class="post-date">${esc(p.date)}</span>
            <span class="post-read">${esc(p.readTime || "")}</span>
          </div>
          <h3 class="post-title">${esc(p.title)}</h3>
          <p class="post-excerpt">${esc(p.excerpt)}</p>
          <button class="post-toggle" type="button">
            <span class="pt-label">read post</span>
            <span class="pt-arr">↓</span>
          </button>
        </div>
      </div>
      <div class="post-body">
        <div class="post-content">${p.content || ""}</div>
        <div class="post-foot">
          <a class="post-back" href="#post-${esc(p.slug)}">↑ back to top of post</a>
          <a class="post-share" href="#">copy link</a>
        </div>
      </div>
    </article>
  `).join("");

  // expand/collapse
  list.addEventListener("click", (e) => {
    const btn = e.target.closest(".post-toggle");
    if (!btn) return;
    const post = btn.closest(".post");
    const open = post.classList.toggle("open");
    btn.querySelector(".pt-label").textContent = open ? "hide post" : "read post";
    btn.querySelector(".pt-arr").textContent = open ? "↑" : "↓";
    if (open) {
      // smooth scroll the post into view
      post.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  // copy link
  list.addEventListener("click", (e) => {
    const share = e.target.closest(".post-share");
    if (!share) return;
    e.preventDefault();
    const post = share.closest(".post");
    const url = `${location.origin}${location.pathname}#${post.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        share.textContent = "✓ link copied";
        setTimeout(() => (share.textContent = "copy link"), 1800);
      });
    }
  });

  // open by hash on load
  if (location.hash) {
    const post = document.querySelector(location.hash);
    if (post && post.classList.contains("post")) {
      post.classList.add("open");
      const btn = post.querySelector(".post-toggle");
      if (btn) {
        btn.querySelector(".pt-label").textContent = "hide post";
        btn.querySelector(".pt-arr").textContent = "↑";
      }
      setTimeout(() => post.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }

  // mobile menu
  const menuBtn = $("#menuToggle"), nav = $("#navlinks");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
})();
