// ===== MENU OVERLAY =====
const menuBtn = document.getElementById("menuBtn");
const menuOverlay = document.getElementById("menuOverlay");
const menuClose = document.getElementById("menuClose");

function openMenu(){
  if(!menuOverlay) return;
  menuOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeMenu(){
  if(!menuOverlay) return;
  menuOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

if(menuBtn) menuBtn.addEventListener("click", openMenu);
if(menuClose) menuClose.addEventListener("click", closeMenu);

document.querySelectorAll(".menu-links a").forEach(a=>{
  a.addEventListener("click", closeMenu);
});

// ===== PORTFOLIO MODAL =====
const imgModal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const modalClose = document.getElementById("modalClose");

function closeImageModal(){
  if(!imgModal || !modalImg) return;
  imgModal.classList.remove("open");
  modalImg.src = "";
}

document.querySelectorAll(".portfolio-img").forEach(img=>{
  img.addEventListener("click", ()=>{
    if(!imgModal || !modalImg) return;
    modalImg.src = img.src;
    imgModal.classList.add("open");
  });
});

if(modalClose) modalClose.addEventListener("click", closeImageModal);

if(imgModal){
  imgModal.addEventListener("click", (e)=>{
    if(e.target === imgModal) closeImageModal();
  });
}

// ESC closes menu + modal
document.addEventListener("keydown", (e)=>{
  if(e.key === "Escape"){
    closeMenu();
    closeImageModal();
  }
});
``
