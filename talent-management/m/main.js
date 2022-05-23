/*navbar*/
if (window.matchMedia("(max-width: 992px)").matches) {
  $('#nav li.dropdown>a').attr('data-bs-toggle','dropdown');
}

$(document).ready(function () {
  var $win = $(window);

  $win.scroll(function () {
    if ($win.scrollTop() > 150) {
      $("#nav .container-lg").addClass("scrolltop");
    } else {
      $("#nav .container-lg").removeClass("scrolltop");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  el_autohide = document.querySelector("#nav .navbar");

  // add padding-top to bady (if necessary)
  navbar_height = document.querySelector("#nav .navbar").offsetHeight;

  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener("scroll", function () {
      let scroll_top = window.scrollY;
      if (scroll_top < last_scroll_top) {
        el_autohide.classList.remove("scrolled-down");
        el_autohide.classList.add("scrolled-up");
      } else {
        el_autohide.classList.remove("scrolled-up");
        el_autohide.classList.add("scrolled-down");
      }
      last_scroll_top = scroll_top;
    });
    // window.addEventListener
  }
  // if
});
// DOMContentLoaded  end

document.querySelector('#nav .first-button').addEventListener('click', function () {

  document.querySelector('#nav .animated-icon1').classList.toggle('open');
  });

/*responsive*/
if(window.innerWidth > 767){
  $(".img-people").removeClass("col-10");
  $(".img-people").addClass("col-11");
}

if(window.innerWidth > 991){
  $(".gap-img").removeClass("col-11");
}

/*random content setiap refresh*/       
$(".random"+(new Date().getTime() % 3)).css("display", "block");



/*form*/
if (window.innerWidth > 991) {
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
}
//Slider
const sliderItems = document.querySelectorAll(".slider-items");
const card = document.querySelectorAll(".card");

const buttonSliderNext = document.querySelector("button.slider-next");
const buttonSliderPrevious = document.querySelector("button.slider-previous");
const sliderIndicator = document.querySelectorAll(".indicator-slider button");

const blogSliderNext = document.querySelector(".blog button.slider-next");
const blogSliderPrevious = document.querySelector(".blog button.slider-previous");
const blogIndicator = document.querySelectorAll(".indicator-slider-blog button");

let width = document.querySelector(".slider-items.active").offsetWidth;
let widthBlog = document.querySelector(".card.active").offsetWidth;

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

blogSliderNext.addEventListener("click", function () {
  if (i + widthBlog >= widthBlog * 3) {
    i = 0;
  } else {
    i = i + widthBlog + 45;
  }
  let nilai = i / (widthBlog + 45);
  indicatorActive(nilai, blogIndicator);

  card.forEach((el) => {
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

blogSliderPrevious.addEventListener("click", function () {
  if (i === 0) {
    i = (widthBlog + 45) * 2;
  } else {
    i = i - (widthBlog + 45);
  }
  let nilai = i / (widthBlog + 45);
  indicatorActive(nilai, blogIndicator);
  card.forEach((el) => {
    el.style.transform = `translateX(-${i}px)`;
  });
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("indicator-button")) {
    let nilai = e.target.getAttribute("indeks");
    i = +nilai * (width + 45);
    indicatorActive(+nilai, sliderIndicator);
    sliderItems.forEach((el) => {
      el.style.transform = `translateX(-${i}px)`;
    });
  }

  if (e.target.classList.contains("indicator-button-blog")) {
    let nilai = e.target.getAttribute("indeks");
    i = +nilai * (widthBlog + 45);
    indicatorActive(+nilai, blogIndicator);
    card.forEach((el) => {
      el.style.transform = `translateX(-${i}px)`;
    });
  }
});

function indicatorActive(params, element) {
  element.forEach((el) => {
    el.classList.remove("btn-warning");
  });

  element[params].classList.add("btn-warning");
}

// JAVASCRIPT FOR BLOG
function textCutter(element) {
  let cardTeks = [];
  element.forEach((el) => {
    cardTeks.push(el.textContent.substring(0, 200));
  });
  document.querySelectorAll(".card-text-extra").forEach((el, i) => {
    el.innerHTML = `${cardTeks[i]}...`;
  });
}
const cardText = document.querySelectorAll(".card-text-extra");
textCutter(cardText);
//--------------------------------------------------------------------------