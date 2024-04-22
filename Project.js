/** @format */


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

});
var buttonCompany = document.querySelectorAll(".menu__button-company");
//Медиаблок на убирание кнопок по размеру экрана
var resize768 = document.querySelectorAll(".resize768");
var resize1120 = document.querySelectorAll(".resize1120");

var swiperSlides = document.querySelectorAll(".swiper-slide")
var swiperWrapper = document.querySelector(".swiper-wrapper")
var swiperMain = document.querySelector(".swiper")
var swiperPagin = document.querySelector(".swiper-pagination")


function addClassOnResize() {

  if (window.innerWidth > 320){
    swiper.destroy();
    for (i=0; i<swiperSlides.length; i++){
      swiperSlides[i].classList.remove("swiper-slide")
    }
    swiperWrapper.classList.remove("swiper-wrapper");
    swiperMain.classList.remove("swiper");
    swiperPagin.classList.add("hidden");

  } else {
    for (i=0; i<swiperSlides.length; i++){
      swiperSlides[i].classList.add("swiper-slide")
    }
    swiperWrapper.classList.add("swiper-wrapper");
    swiperMain.classList.add("swiper");
  }

  for (var i = 0; i < buttonCompany.length; i++) {
    if (window.innerWidth <= 768) {
      for (var j = 0; j < resize768.length; j++) {
        resize768[j].classList.add("hidden");
      }
      for (var j = 0; j < resize1120.length; j++) {
        resize1120[j].classList.add("hidden");
      }
    } else {
      for (var j = 0; j < resize768.length; j++) {
        resize768[j].classList.remove("hidden");
      }
      for (var j = 0; j < resize1120.length; j++) {
        resize1120[j].classList.add("hidden");
      }
    }
  }
}
window.onload = addClassOnResize;
window.onresize = addClassOnResize;





//Блок кнопки показать-скрыть

var buttonView = document.querySelector(".menu__button-view");
var buttonText = document.querySelector(".menu__button-text");
var buttonSvg = document.querySelector(".menu__button-svg");
var rotation = 0;

buttonView.addEventListener("click", function () {
  if (buttonText.textContent === "Показать все") {
    buttonSvg.classList.add('rotated')
    buttonText.textContent = "Скрыть"; 
    console.log(buttonText.textContent)
    
    buttonView.style.marginTop = '46px';
    

    for (var i = 0; i < resize768.length; i++) {
      resize768[i].classList.remove("hidden");
    }
    for (var i = 0; i < resize1120.length; i++) {
      resize1120[i].classList.remove("hidden");
    }
  } else {
    buttonText.textContent = "Показать все";
    buttonSvg.classList.remove('rotated')
    console.log(buttonText.textContent)
    buttonView.style.marginTop = '24px';
    if (window.innerWidth <= 768) {
      for (i = 0; i < resize768.length; i++) {
        resize768[i].classList.add("hidden");
      }
      for (i = 0; i < resize1120.length; i++) {
        resize1120[i].classList.add("hidden");
      }
    } else {
      for (i = 0; i < resize1120.length; i++) {
        resize1120[i].classList.add("hidden");
      }
    }
  }
});

//