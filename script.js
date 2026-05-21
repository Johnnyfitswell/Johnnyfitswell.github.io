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

  menuBtn.addEventListener("click", openMenu, { passive: false });
  menuClose.addEventListener("click", (e) => { e.preventDefault(); closeMenu(); }, { passive: false });

  // DO NOT preventDefault on nav links
  document.querySelectorAll("#menuOverlay .menu-links a").forEach((a) => {
    a.addEventListener("click", () => closeMenu());
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
});
