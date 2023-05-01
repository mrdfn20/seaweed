const menuBar = document.querySelector("#hamburger-menu");
const menuNavbar = document.querySelector(".menu-navbar");

// same(1)
menuBar.onclick = () => {
  menuNavbar.classList.toggle("menu-active");
};

// same(2)
// menuBar.addEventListener("click", function () {
//   menuNavbar.classList.toggle("menu-active");
// });

// if click outside menunavbar ,will closed menunavbar
// document.addEventListener("click", (e) => {
//   if (!menubar.contains(e.target) && !menuNavbar.contains(e.target)) {
//     console.log("worked");

//     menuNavbar.classList.remove("menu-active");
//   }
// });

// swiper
const swiperEl = document.querySelector("swiper-container");

const parameters = {
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  spaceBetween: 20,
  grabCursor: true,
  keyboard: {
    enable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
  scrollBar: true,
  navigation: true,
  pagination: {
    clickable: true,
  },
};

Object.assign(swiperEl, parameters);
swiperEl.initialize();

// property swiper-container htlml
// pagination="true"
//         pagination-clickable="true"
//         navigation="true"
//         pagination-dynamic-bullets="true"
//         space-between="30"
//         slides-per-view="3"
//         loop="false"

// var swiper = new Swiper(".swiper-slide", {
//   slidesPerView: 4,
//   spaceBetween: 20,
//   sliderPerGroup: 4,
//   // loop: true,
//   centerSlide: "true",
//   fade: "true",
//   grabCursor: "true",
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     520: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//     1000: {
//       slidesPerView: 4,
//     },
//   },
// });

// const mobileMode = window.innerWidth;

// const swiper = new Swiper(".mySwiper", {
//   // Optional parameters
//   direction: "vertical",
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//     dynamicBullets: true,
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
