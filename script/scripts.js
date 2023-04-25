const menuBar = document.querySelector("#hamburger-menu");
// remix icon item
// const menuBar = document.querySelector(".hamburger-menu");
const menuNavbar = document.querySelector(".menu-navbar");

// sama aja dua baris kode dibawah
menuBar.onclick = () => {
  menuNavbar.classList.toggle("menu-active");
};

// menuBar.addEventListener("click", function () {
//   menuNavbar.classList.toggle("menu-active");
// });

// // swiper
// var swiper = new Swiper(".slide-container", {
//   slidesPerView: 4,
//   spaceBetween: 20,
//   sliderPerGroup: 4,
//   loop: true,
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
