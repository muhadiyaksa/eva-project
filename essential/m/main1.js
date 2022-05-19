gsap.registerPlugin(ScrollTrigger);
AOS.init({
  duration: 1000,
  offset: 120,
});
// section 2
$(document).ready(function () {
  $('.conclusion .owl-carousel').owlCarousel({
    loop: true,
    items: 3,
    center: true,
    margin: 45,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3,
      }
    }
  });

  $('.game-changer .owl-carousel').owlCarousel({
    loop: false,
    items: 1,
    center: true,
    // margin:45,
    nav: true,
    responsive: {
      0: {
        items: 1,
        margin:20
      },
      400: {
        margin:20
      }
    }
  });
});

// navbar

if (window.matchMedia("(max-width: 992px)").matches) {
  $('#nav li.dropdown>a').attr('data-bs-toggle', 'dropdown');
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
// END NAVBAR



// const tl7 = gsap.timeline();
// tl7
//   .fromTo("#section7 .judul", { opacity: 0, scale: 1.3, duration: 1.5 }, { opacity: 1, scale: 1, duration: 3 })
//   .fromTo("#section7 .judul", { y: 100, }, { y: 0, duration: 3 })
//   .fromTo("#section7 .desc", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 })
//   .fromTo("#section7 .solusibtn", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })
//   .fromTo("#section7 .slider", { opacity: 0 }, { opacity: 1, duration: 1 })

// ScrollTrigger.create({
//   animation: tl7,
//   trigger: "#section7",
//   start: "top 40%",
//   end: "top 40%",
//   toggleActions: "play none none none",
//   scrub: 3,
//   //   markers: true
// });

// if (window.matchMedia("(min-width: 992px)").matches) {
//   const tl5 = gsap.timeline();
//   tl5.fromTo(".formSection .imageforForm", { y: 500 }, { y: 0 }).fromTo(".formSection .cardforForm", { x: 1000 }, { x: 0 }, "<");

//   ScrollTrigger.create({
//     animation: tl5,
//     trigger: ".formSection",
//     start: "top center",
//     end: "top center",
//     toggleActions: "play none none none",
//     scrub: 1,
//     // markers: true,
//   });

//   const tl = gsap.timeline();
//   tl.fromTo(".choose .header-choose ", { x: 500 }, { x: 0, duration: 2 })
//     .fromTo(".choose .slider", { opacity: 0 }, { opacity: 1, duration: 2 })
//     .fromTo(".choose .board-slider", { opacity: 0 }, { opacity: 1, duration: 2 })
//     .fromTo(".choose .button", { opacity: 0 }, { opacity: 1, duration: 2 });

//   ScrollTrigger.create({
//     animation: tl,
//     trigger: ".choose",
//     start: "top center",
//     end: "top center",
//     scrub: 2,
//     // markers: true
//   });

//   const tlBlog = gsap.timeline();
//   tlBlog
//     .fromTo(".blog .judul h1", { opacity: 0 }, { opacity: 1, duration: 3 })
//     .fromTo(".blog .judul p", { opacity: 0 }, { opacity: 1, duration: 3 })
//     .fromTo(".blog .slider-blog", { opacity: 0 }, { opacity: 1, duration: 3 })
//     .fromTo(".blog .button", { opacity: 0 }, { opacity: 1, duration: 3 });

//   ScrollTrigger.create({
//     animation: tlBlog,
//     trigger: ".blog",
//     start: "top center",
//     end: "top center",
//     scrub: 2,
//     // markers: true
//   });
// }


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


//FOOTER

//END FOOTER

// var $owl1 = $('.game-changer .owl-carousel');

// const tl10 = gsap.timeline();
// tl10
//   .fromTo(".game-changer .judul", { opacity: 0, scale: 1.3, duration: 1.5 }, { opacity: 1, scale: 1, duration: 3 })
//   .fromTo(".game-changer .judul", { y: 100, }, { y: 0, duration: 3 })
//   .fromTo(".game-changer .desc", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 })
//   .fromTo(".game-changer .desc-c", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })

// ScrollTrigger.create({
//   animation: tl10,
//   trigger: ".game-changer",
//   start: "top 40%",
//   end: "top 40%",
//   toggleActions: "play none none none",
//   scrub: 3,
// });