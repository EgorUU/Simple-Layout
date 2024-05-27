const img = document.getElementById('home-main-image');
const img1 = document.getElementById('sketchbook-main-image');
function changeImage() {
  if (window.innerWidth < 768) {
    img.src = './images/media/Layer 2 copy.png';
  } else {
    img.src = './images/home/Layer 2 copy.png';
  }
}
document.addEventListener("DOMContentLoaded", function() {
  const nav = document.querySelector('.header-nav');
  const links = nav.querySelector('.header-nav__links');
  const burger = document.querySelector('.burger');
  const buttons = nav.querySelector('.header-nav__buttons');

  function adaptUI() {
      if (window.innerWidth < 450) {
          if (!burger.parentNode.isSameNode(buttons)) {
              buttons.appendChild(burger); 
              if (!nav.classList.contains('header-nav-adaptive')) {
                  nav.classList.add('header-nav-adaptive');
                  nav.classList.remove('header-nav');
              }
              links.style.display = 'none'; 
          }
      } else {
          if (burger.parentNode.isSameNode(buttons)) {
              nav.insertBefore(burger, nav.firstChild); 
              if (!nav.classList.contains('header-nav')) {
                  nav.classList.add('header-nav');
                  nav.classList.remove('header-nav-adaptive');
              }
              links.style.display = ''; 
          }
      }
  }
  adaptUI();

  window.addEventListener('resize', adaptUI);
});


let burgerImg = document.querySelector('.burger>img');
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-nav__links');
let menu1 = document.querySelector('.header-nav__links ul');
let counter = 2;
burger.addEventListener('click', function burgerClick() {
    if(counter % 2 == 0) {
        burgerImg.src = "images/header/Frame 7.svg";
        menu.style.display = "block";
        document.documentElement.style.overflow = 'hidden';
        
    }
    else {
        burgerImg.src = "images/media/List.svg";
        menu.style.display = 'none';
        document.documentElement.style.overflow = 'auto';
        document.documentElement.style.overflowX = 'hidden';

    }
    counter += 1;
});
