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

  const closeMenu = (e) => {
    if (e) e.preventDefault();
    menuOverlay.classList.remove("open");
    menuOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  // Most reliable across iPhone/Android/desktop
  menuBtn.addEventListener("pointerdown", openMenu, { passive: false });
  menuBtn.addEventListener("touchstart", openMenu, { passive: false });
  menuBtn.addEventListener("click", openMenu, { passive: false });

  menuClose.addEventListener("pointerdown", closeMenu, { passive: false });
  menuClose.addEventListener("touchstart", closeMenu, { passive: false });
  menuClose.addEventListener("click", closeMenu, { passive: false });

  document.querySelectorAll("#menuOverlay .menu-links a").forEach((a) => {
    a.addEventListener("pointerdown", closeMenu, { passive: false });
    a.addEventListener("touchstart", closeMenu, { passive: false });
    a.addEventListener("click", closeMenu, { passive: false });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu(e);
  });
});
