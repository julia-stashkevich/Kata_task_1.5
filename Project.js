/** @format */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  slideToClickedSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
  },
  slideOverflow: true,
  allowTouchMove: true
});

//Медиаблок на убирание кнопок по размеру экрана
var buttonCompany = document.querySelectorAll(".menu__button-company");

var swiperSlides = document.querySelectorAll(".swiper-slide");
var swiperWrapper = document.querySelector(".swiper-wrapper");
var swiperMain = document.querySelector(".swiper");
var swiperPagin = document.querySelector(".swiper-pagination");

function addClassOnResize() {
  if (window.innerWidth > 768) {
    swiper.destroy();
    for (i = 0; i < swiperSlides.length; i++) {
      swiperSlides[i].classList.remove("swiper-slide");
    }
    swiperWrapper.classList.remove("swiper-wrapper");
    swiperMain.classList.remove("swiper");
    swiperPagin.classList.add("hidden");
  }

  for (var i = 0; i < buttonCompany.length; i++) {
    if (window.innerWidth < 1120) {
      for (var j = 0; j < 5; j++) {
        buttonCompany[j].classList.add("hidden");
      }
    } else {
      for (var j = 0; j < 3; j++) {
        buttonCompany[j].classList.add("hidden");
      }
    }
  }
}
window.onload = addClassOnResize;
window.onresize = addClassOnResize;

//Кнопка показать-скрыть

var buttonView = document.querySelector(".menu__button-view");
var buttonText = document.querySelector(".menu__button-text");
var buttonSvg = document.querySelector(".menu__button-svg");
var rotation = 0;

buttonView.addEventListener("click", function () {
  if (buttonText.textContent === "Показать все") {
    buttonSvg.classList.add("rotated");
    buttonText.textContent = "Скрыть";
    console.log(buttonText.textContent);
    buttonView.style.marginTop = "46px";

    for (var i = 0; i < buttonCompany.length; i++) {
      buttonCompany[i].classList.remove("hidden");
    }
  } else {
    buttonText.textContent = "Показать все";
    buttonSvg.classList.remove("rotated");
    console.log(buttonText.textContent);
    buttonView.style.marginTop = "24px";

    if (window.innerWidth < 1120) {
      for (var j = 0; j < 5; j++) {
        buttonCompany[j].classList.add("hidden");
      }
    } else {
      for (var j = 0; j < 3; j++) {
        buttonCompany[j].classList.add("hidden");
      }
    }
  }
});

//
