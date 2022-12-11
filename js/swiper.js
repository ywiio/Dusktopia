const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
  scrollbar: {
    el:'.swiper-slide',
    draggable:true,
  },

  grabCursor:true,
//???????
  slideToClickedSlide:true,
  
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // mousewheel:{
  //   sensitivity:1,
  // },

  slidesPerView:3.5,
  watchOverflow:true, //если у слайдера меньше слайдов чем нужно отобразить
 
  spaceBetween:30,

  centeredSlides:true,
});