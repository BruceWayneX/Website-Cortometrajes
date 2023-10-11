

// Barra header
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}


// Movimiento Header

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });


  // var swiper = new swiper(".coming-container", {
  //   spaceBetween: 20,
  //   loop:true,
  //   autoplay: {
  //     delay: 55000,
  //     disableOnInteraction: false,
  //   },
  //   centeredSlides: true,
  //   breakpoints:{
  //     0: {
  //       slidesPerView:2,
  //     },
  //     568: {
  //       slidesPerView:3,
  //     },
  //     768: {
  //       slidesPerView: 4,
  //     },
  //   },
  // })


// 
// var swiper2 = new Swiper2(".coming-container", 
// {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 4500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

// SWIPER JS 2

// const swiperEl = document.querySelector('.box-img');
// const swiper = swiperEl.swiper;

// var appendNumber = 4;
// var prependNumber = 1;
// document
//   .querySelector(".prepend-2-slides")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper.prependSlide([
//       '<swiper-slide>Slide ' + --prependNumber + "</swiper-slide>",
//       '<swiper-slide>Slide ' + --prependNumber + "</swiper-slide>",
//     ]);
//   });
// document
//   .querySelector(".prepend-slide")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper.prependSlide(
//       '<swiper-slide>Slide ' + --prependNumber + "</swiper-slide>"
//     );
//   });
// document
//   .querySelector(".append-slide")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper.appendSlide(
//       '<swiper-slide>Slide ' + ++appendNumber + "</swiper-slide>"
//     );
//   });
// document
//   .querySelector(".append-2-slides")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper.appendSlide([
//       '<swiper-slide>Slide ' + ++appendNumber + "</swiper-slide>",
//       '<swiper-slide>Slide ' + ++appendNumber + "</swiper-slide>",
//     ]);
//   });

/* Efecto de movimiento hacia la derecha de coming */
var swiper3 = new Swiper(".coming-container", {
  // direction: "horizontal",
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    // Slider header bolitas
    // el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // me
  centeredSlides:true,
  // slidesPerView: "auto"

  breakpoints: {
    368: {
      slidesPerView: 1,
    },
    468: {
      slidesPerView: 2,
    },
    568:{
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 3 ,

    },
  },
});



// Si quieres saber mas en este video hay mas info
// https://www.youtube.com/watch?v=bMy-mnqBtPk&t=307s&ab_channel=YoelvisMulen%7Bcode%7D
// min 12:21










