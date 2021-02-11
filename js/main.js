const header = document.querySelector(".header");
const toggleMenu = document.querySelector(".menu__toggle");
const nav = document.querySelector(".navigation");
const body = document.querySelector("body");
console.log("header - " + header);

window.addEventListener("scroll", function () {
    if (window.scrollY > 43) {
        header.classList.add("sticky");
    }
    if (window.scrollY < 20) {
        header.classList.remove("sticky");
    }
    console.log(window.scrollY);
});

toggleMenu.addEventListener("click", function () {
    toggleMenu.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("lock");
})

$(document).ready(function(){
  $('.about__slider').slick({
  dots: false,
  infinite: true,
  prevArrow: '<button class="slider__btn btn__prev slider__btn_common" ><img src="img/arrow_back.png" alt="prev" /></button>',
  nextArrow: '<button class="slider__btn btn__next slider__btn_common" ><img src="img/arrow_next.png" alt="next" /></button>',
  speed: 500,
  fade: true,
  cssEase: 'linear',
  responsive: [{
      breakpoint: 769,
      settings: {
        arrows: false
      }
  }]
  });
});

$(document).ready(function () {
  $('.slider__recalls').slick({
  dots: true,
  infinite: true,
  arrows: false,
  fade: true,
  speed: 500,
  cssEase: 'linear'
  });   
});

$(document).ready(function () {
  $('.little__slider').slick({
  dots: false,
  infinite: true,
  prevArrow: '<button class="slider__btn__little btn__prev__little slider__btn_common" ><img src="img/arrow_back_little.png" alt="prev" /></button>',
  nextArrow: '<button class="slider__btn__little btn__next__little slider__btn_common" ><img src="img/arrow_next_little.png" alt="next" /></button>',
  speed: 500,
  cssEase: 'linear'
  });
});


