const menuBtn = document.getElementById("menuBtn");const menuBtn = document.getOverlay.classList.add("open");
  menuOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeMenu(){
  if(!menuOverlay) return;
  menuOverlay.classList.remove("open");
  menuOverlay.setAttribute("aria-hidden", "true");
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
const menuOverlay = document.getElementById("menuOverlay");
const menuClose = document.getElementById("menuClose");

function openMenu(){
  if(!menuOverlay) return;
