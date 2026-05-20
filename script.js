document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const menuOverlay = document.getElementById("menuOverlay");
  const menuClose = document.getElementById("menuClose");

  function openMenu(){
    menuOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeMenu(){
    menuOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  if(menuBtn) menuBtn.addEventListener("click", openMenu);
  if(menuClose) menuClose.addEventListener("click", closeMenu);

  document.querySelectorAll(".menu-links a").forEach(a=>{
    a.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape") closeMenu();
  });
});
