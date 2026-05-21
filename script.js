document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const menuOverlay = document.getElementById("menuOverlay");
  const menuClose = document.getElementById("menuClose");

  if (!menuBtn || !menuOverlay || !menuClose) return;

  const openMenu = (e) => {
    if (e) e.preventDefault();
    menuOverlay.classList.add("open");
    menuOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    menuOverlay.classList.remove("open");
    menuOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  // open
  menuBtn.addEventListener("pointerdown", openMenu, { passive: false });
  menuBtn.addEventListener("touchstart", openMenu, { passive: false });
  menuBtn.addEventListener("click", openMenu, { passive: false });

  // close
  menuClose.addEventListener("pointerdown", (e) => { e.preventDefault(); closeMenu(); }, { passive: false });
  menuClose.addEventListener("touchstart", (e) => { e.preventDefault(); closeMenu(); }, { passive: false });
  menuClose.addEventListener("click", (e) => { e.preventDefault(); closeMenu(); }, { passive: false });

  // IMPORTANT: do NOT preventDefault on links (so they navigate)
  document.querySelectorAll("#menuOverlay .menu-links a").forEach((a) => {
    a.addEventListener("click", () => {
      closeMenu();
      // navigation happens normally
    });
  });

  // close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
});
``
