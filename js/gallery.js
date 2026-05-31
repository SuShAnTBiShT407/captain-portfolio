/* =====================================================================
   GALLERY PAGE  —  renders the gallery grid + lightbox
   ===================================================================== */
(function () {
  "use strict";
  const M = window.MANIFEST;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));

  const items = M.gallery || [];

  // counts
  $("#galleryCount").textContent = items.length.toString().padStart(2, "0");
  $("#year").textContent = new Date().getFullYear();

  // grid
  const grid = $("#galleryGrid");
  grid.innerHTML = items.map((it, i) => `
    <figure class="g-item g-${esc(it.span || "square")}" data-i="${i}">
      <img src="${esc(it.src)}" alt="${esc(it.alt || it.caption || "image")}" loading="lazy"/>
      <figcaption class="g-cap">
        <span class="g-cap-main">${esc(it.caption || "")}</span>
        ${it.meta ? `<span class="g-cap-meta">${esc(it.meta)}</span>` : ""}
      </figcaption>
    </figure>
  `).join("");

  // lightbox
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = `
    <button class="lb-close" aria-label="Close">×</button>
    <button class="lb-nav lb-prev" aria-label="Previous">‹</button>
    <button class="lb-nav lb-next" aria-label="Next">›</button>
    <img class="lb-img" alt=""/>
    <div class="lb-cap">
      <span class="lb-cap-main"></span>
      <span class="lb-cap-meta"></span>
    </div>
  `;
  document.body.appendChild(lb);

  let idx = 0;
  function show(i) {
    idx = (i + items.length) % items.length;
    const it = items[idx];
    lb.querySelector(".lb-img").src = it.src;
    lb.querySelector(".lb-img").alt = it.alt || "";
    lb.querySelector(".lb-cap-main").textContent = it.caption || "";
    lb.querySelector(".lb-cap-meta").textContent = it.meta || "";
    lb.classList.add("open");
  }
  function close() { lb.classList.remove("open"); }

  grid.addEventListener("click", (e) => {
    const fig = e.target.closest(".g-item"); if (!fig) return;
    show(+fig.dataset.i);
  });
  lb.querySelector(".lb-close").addEventListener("click", close);
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  lb.querySelector(".lb-prev").addEventListener("click", (e) => { e.stopPropagation(); show(idx - 1); });
  lb.querySelector(".lb-next").addEventListener("click", (e) => { e.stopPropagation(); show(idx + 1); });
  addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(idx - 1);
    if (e.key === "ArrowRight") show(idx + 1);
  });

  // mobile menu
  const menuBtn = $("#menuToggle"), nav = $("#navlinks");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
})();
