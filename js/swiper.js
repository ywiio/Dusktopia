const menu = document.querySelector('#menu-bars'),
      navbar = document.querySelector('.navbar'),
      themeToggler = document.querySelector('.theme-toggler'),
      toggleBtn = document.querySelector('.toggle-btn');

menu.onclick = () => {
  menu.classList.toggle('fa-times')
  navbar.classList.toggle('active')
}

window.onscroll = () => {
  menu.classList.remove('fa-times')
  navbar.classList.remove('active')
  themeToggler.classList.remove('active')
}

toggleBtn.onclick = () => {
  themeToggler.classList.toggle('active')
}


document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn => {
  btn.onclick = () => {
    let color = btn.style.backgroundColor;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }
}) 


//Sliders

const swiper = new Swiper(".home-slider", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1, 
          slideShadows: true, 
        },
        pagination: {
          el: ".swiper-pagination",
        },
});

const slider = new Swiper(".review-slider", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1, 
          slideShadows: true, 
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
        },
}); 
