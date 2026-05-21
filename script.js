// HAMBURGER MENU — FIXED:
// - Menu opens/closes on desktop + mobile
// - Menu links navigate normally (NO preventDefault on links)

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const menuOverlay = document.getElementById("menuOverlay");
  const menuClose = document.getElementById("menuClose");

  // If any element is missing, do nothing (won't break page)
  if (!menuBtn || !menuOverlay || !menuClose) return;

  function openMenu(e) {
    // Prevent page from interpreting the tap as scroll/zoom on mobile
    if (e) e.preventDefault();
    menuOverlay.classList.add("open");
    menuOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    menuOverlay.classList.remove("open");
    menuOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Open/close buttons: preventDefault is OK here
  menuBtn.addEventListener("pointerdown", openMenu, { passive: false });
  menuBtn.addEventListener("touchstart", openMenu, { passive: false });
  menuBtn.addEventListener("click", openMenu, { passive: false });

  menuClose.addEventListener("pointerdown", (e) => { e.preventDefault(); closeMenu(); }, { passive: false });
  menuClose.addEventListener("touchstart", (e) => { e.preventDefault(); closeMenu(); }, { passive: false });
  menuClose.addEventListener("click", (e) => { e.preventDefault(); closeMenu(); }, { passive: false });

  // ✅ IMPORTANT: links must NOT call preventDefault or they won't navigate
  // Close menu on click, but allow normal navigation
  document.querySelectorAll("#menuOverlay .menu-links a").forEach((a) => {
    a.addEventListener("click", () => {
      closeMenu();
      // no preventDefault here
    });
  });

  // Close if clicking the backdrop (outside the menu content)
  menuOverlay.addEventListener("click", (e) => {
    if (e.target === menuOverlay) closeMenu();
  });

  // Escape closes menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
});
``
