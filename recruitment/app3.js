gsap.registerPlugin(ScrollTrigger);

if (window.matchMedia("(min-width: 992px)").matches) {
  const tl = gsap.timeline();
  tl.fromTo(".section3-2 .judul", { opacity: 0 }, { opacity: 1 })
    .fromTo(".section3-2 .desc", { opacity: 0 }, { opacity: 1 })
    .fromTo(".section3-2 .board-slider", { opacity: 0 }, { opacity: 1 })
    .fromTo(".section3-2 .button", { opacity: 0 }, { opacity: 1 });

  ScrollTrigger.create({
    animation: tl,
    trigger: ".section3-2",
    start: "top center",
    end: "top center",
    toggleActions: "play none none none",
    scrub: 2,
    // markers: true
  });

  const tl2 = gsap.timeline();
  tl2
    .fromTo(".transisi3-title", { height: 80 }, { height: 0 })
    .fromTo(".transisi3-img", { height: 510 }, { height: 0 })
    .fromTo(".transisi3-desc", { height: 140 }, { height: 0 }, "<")
    .fromTo(
      ".icons img",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1 },
      "<"
    );

  ScrollTrigger.create({
    animation: tl2,
    trigger: "#section3-3",
    start: "top center",
    end: "top center",
    toggleActions: "play none none none",
    scrub: 2,
    // markers: true
  });

  const tl3 = gsap.timeline();
  tl3
    .fromTo("#section3-4 .judul", { opacity: 0, scale: 1.3, duration: 1.5 }, { opacity: 1, scale: 1, duration: 3 })
    .fromTo("#section3-4 .judul", { y: 100, }, { y: 0, duration: 3 })
    .fromTo("#section3-4 .desc", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 })
    .fromTo("#section3-4 .solusibtn", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })
    .fromTo("#section3-4 .slider", { opacity: 0 }, { opacity: 1, duration: 1 })

  ScrollTrigger.create({
    animation: tl3,
    trigger: "#section3-4",
    start: "top 30%",
    end: "top 30%",
    toggleActions: "play none none none",
    scrub: 3,
    // markers: true
  });

  const tl4 = gsap.timeline();
  tl4
    .fromTo(".blog .judul h1", { opacity: 0 }, { opacity: 1, duration: 3 })
    .fromTo(".blog .desc", { opacity: 0 }, { opacity: 1, duration: 3 })
    .fromTo(".blog .slider-blog", { opacity: 0 }, { opacity: 1, duration: 3 })
    .fromTo(".blog .button", { opacity: 0 }, { opacity: 1, duration: 3 });

  ScrollTrigger.create({
    animation: tl4,
    trigger: ".blog",
    start: "top center",
    end: "top center",
    scrub: 2,
    // markers: true
  });

  const tl5 = gsap.timeline();
  tl5.fromTo(".formSection .imageforForm", { y: 500 }, { y: 0 }).fromTo(".formSection .cardforForm", { x: 1000 }, { x: 0 }, "<");

  ScrollTrigger.create({
    animation: tl5,
    trigger: ".formSection",
    start: "top center",
    end: "top center",
    toggleActions: "play none none none",
    scrub: 1,
    // markers: true,
  });
} else{
  const sliderItems = document.querySelectorAll(".slider-items");
const card = document.querySelectorAll(".card");

const buttonSliderNext = document.querySelector("button.slider-next");
const buttonSliderPrevious = document.querySelector("button.slider-previous");
const sliderIndicator = document.querySelectorAll(".indicator-slider button");

let width = document.querySelector(".slider-items.active").offsetWidth;

let i = 0;

buttonSliderNext.addEventListener("click", function () {
  if (i + width >= width * 3) {
    i = 0;
  } else {
    i = i + width + 45;
  }
  let nilai = i / (width + 45);
  indicatorActive(nilai, sliderIndicator);

  sliderItems.forEach((el) => {
    el.style.transform = `translateX(-${i}px)`;
  });
});

buttonSliderPrevious.addEventListener("click", function () {
  if (i === 0) {
    i = (width + 45) * 2;
  } else {
    i = i - (width + 45);
  }
  console.log(i);
  let nilai = i / (width + 45);
  indicatorActive(nilai, sliderIndicator);
  sliderItems.forEach((el) => {
    el.style.transform = `translateX(-${i}px)`;
  });
});

document.addEventListener("click", function (e) {
  let widthEl = Math.floor(rectangle.width / 2);
  if (e.target.classList.contains("indicator-button")) {
    let nilai = e.target.getAttribute("indeks");
    indicatorActive(+nilai, sliderIndicator);

    if (window.matchMedia("(min-width: 576px)").matches) {
      i = +nilai * (width + 45);
      sliderItems.forEach((el) => {
        el.style.transform = `translateX(-${i}px)`;
      });
    } else {
      if (+nilai === 0) {
        sliderCard.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } else if (+nilai === 1) {
        sliderCard.scrollTo({ top: 0, left: widthEl * 2 + 30, behavior: "smooth" });
      } else {
        sliderCard.scrollTo({ top: 0, left: widthEl * 4 + 60, behavior: "smooth" });
      }
    }
  }
});

function indicatorActive(params, element) {
  element.forEach((el) => {
    el.classList.remove("btn-warning");
  });

  element[params].classList.add("btn-warning");
}
const sliderCard = document.querySelector(".section3-2 .slider .board-slider");
const sliderCardItems = document.querySelectorAll(".section3-2 .slider .board-slider .slider-items");
var rectangle = sliderCardItems[0].getBoundingClientRect();
var style = sliderCardItems[0].currentStyle || window.getComputedStyle(sliderCardItems[0]);
let y = 0;
let x = 0;

var isScrolling;

// Listen for scroll events
sliderCard.addEventListener(
  "scroll",
  function (event) {
    x = sliderCard.scrollLeft;
    let widthEl = Math.floor(rectangle.width / 2);
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(function () {
      y = x;
      if (x == y) {
        if (x < widthEl + 30 && x > 30) {
          sliderCard.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          indicatorActive(0, sliderIndicator);
        } else if (x >= widthEl + 30 && x < widthEl * 3 + 90) {
          sliderCard.scrollTo({ top: 0, left: widthEl * 2 + 30, behavior: "smooth" });
          indicatorActive(1, sliderIndicator);
        } else if (x >= widthEl * 3 + 60) {
          sliderCard.scrollTo({ top: 0, left: widthEl * 4 + 60, behavior: "smooth" });
          indicatorActive(2, sliderIndicator);
        }
      }
    }, 200);
  },
  false
);
}

//Slider


//--------------------------------------------------------------------------
// JAVASCRIPT FOR BLOG
function textCutter(element) {
  let cardTeks = [];
  element.forEach((el) => {
    cardTeks.push(el.textContent.substring(0, 200));
  });
  document.querySelectorAll(".card .card-text").forEach((el, i) => {
    el.innerHTML = `${cardTeks[i]}...`;
  });
}
const cardText = document.querySelectorAll(".card .card-text");
textCutter(cardText);
//--------------------------------------------------------------------------

$(".process").click(function() {
  $(window).scrollTop(0);
});

$( ".form-control" ).change(function() {
  if( !this.value ) {
    $(this).css({'background-color': '#f7fafc'}); 
  } else {
    $(this).css({'background-color': 'white'}); 
  }
});