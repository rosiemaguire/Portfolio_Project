

// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'horizontal',
  slidesPerView: 3,
  loop: true,
  
  breakpoints: {
    // when window width is >= 320px
    320: {
     slidesPerView: 2,
     spaceBetween: 5,
     centeredSlides: true,
    },
   },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// window.addEventListener("resize", function() {
//   const swiper = document.querySelector(".add-class");
//   const swiperSlide = document.querySelector(".project");
//   const swiperWrapper = document.querySelector(".project-wrapper");
//   const swiperPagination = document.querySelector(".add-pagination");
//   const swiperPrevious = document.querySelector(".add-prev-button");
//   const swiperNext = document.querySelector(".add-next-button");

//   if (window.innerWidth < 768) {
//     swiper.classList.remove("swiper");
//     swiperSlide.classList.remove("swiper-slide");
//     swiperWrapper.classList.remove("swiper-wrapper");
//     swiperPagination.classList.remove("swiper-pagination");
//     swiperPrevious.classList.remove("swiper-button-prev");
//     swiperNext.classList.remove("swiper-button-next");
//   }
//   else {
//     swiper.classList.add("swiper");
//     swiperSlide.classList.add("swiper-slide");
//     swiperWrapper.classList.add("swiper-wrapper");
//     swiperPagination.classList.add("swiper-pagination");
//     swiperPrevious.classList.add("swiper-button-prev");
//     swiperNext.classList.add("swiper-button-next");
//   }
// });