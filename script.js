document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const menuOverlay = document.getElementById("menuOverlay");
  const menuClose = document.getElementById("menuClose");

  function openMenu(e){
    if(e) e.preventDefault();
    if(!menuOverlay) return;
    menuOverlay.classList.add("open");
    menuOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeMenu(e){
    if(e) e.preventDefault();
    if(!menuOverlay) return;
    menuOverlay.classList.remove("open");
    menuOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if(menuBtn){
    menuBtn.addEventListener("click", openMenu, { passive: false });
    menuBtn.addEventListener("touchstart", openMenu, { passive: false });
  }

  if(menuClose){
    menuClose.addEventListener("click", closeMenu, { passive: false });
    menuClose.addEventListener("touchstart", closeMenu, { passive: false });
  }

  document.querySelectorAll(".menu-links a").forEach(a=>{
    a.addEventListener("click", closeMenu, { passive: false });
    a.addEventListener("touchstart", closeMenu, { passive: false });
  });

  document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape") closeMenu();
  });
});
