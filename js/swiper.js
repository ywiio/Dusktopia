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
  // watchOverflow:true, 
 
  // spaceBetween:30,
  slidesPerGroup:1,

  autoplay:{
    delay:2000,
  },

  speed: 800,

});

// window.load = function(){
//   // Теперь мы знаем актуальную ширину экрана
//   var media_size = parseInt(window.getComputedStyle(document.body, null)
//                                   .getPropertyValue('width'), 10);

//   switchClass();

//   window.resize = function () {
//       // Обновляем ширину экрана
//       media_size = parseInt(window.getComputedStyle(document.body, null)
//                                   .getPropertyValue('width'), 10);
//       switchClass();
//   };
// };

// function switchClass() {
//   if(media_size  < 780) {
//     document.body.classList.remove('swiper');
//     alert(document.body.className);
//   }
//   else{
      
//   }
// }