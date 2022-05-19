// NAVBAR
if (window.matchMedia("(max-width: 992px)").matches) {
  $("#nav li.dropdown>a").attr("data-bs-toggle", "dropdown");
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
  }
});

document.querySelector("#nav .first-button").addEventListener("click", function () {
  document.querySelector("#nav .animated-icon1").classList.toggle("open");
});

// ----------------------------------------------------------------------------------------------------------
// FORM SECTION

// gsap.registerPlugin(ScrollTrigger);

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

//   const tlContact = gsap.timeline();
//   tlContact
//     .fromTo(".contactus .judul h1", { opacity: 0 }, { opacity: 1, duration: 2 })
//     .fromTo(".contactus .judul p", { opacity: 0 }, { opacity: 1, duration: 2 })
//     .fromTo(".contactus .contact-item", { opacity: 0 }, { opacity: 1, duration: 2 });

//   ScrollTrigger.create({
//     animation: tlContact,
//     trigger: ".contactus",
//     start: "top center",
//     end: "top center",
//     scrub: 2,
//     // markers: true
//   });
// }

// -------------------------------------------------------------------------------------------------------------
// BLOG SECTION

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

// ------------------------------------------------------------------------------------------------------------
// CLIENT SECTION

// if (window.matchMedia("(min-width: 992px)").matches) {
//   const tl3 = gsap.timeline();
//   tl3
//     .fromTo("#anim1", { opacity: 0, scale: 1.3, duration: 0.3 }, { opacity: 1, scale: 1, duration: 0.5 })
//     .fromTo("#anim1", { y: 200 }, { y: 0, duration: 0.6, ease: "power2.inOut" })
//     .from(".anim2", { autoAlpha: 0, duration: 0.5, y: -5 })
//     .from(".anim3", { autoAlpha: 0, duration: 0.4, y: 30 })
//     .fromTo(".slider", { autoAlpha: 0 }, { autoAlpha: 1 });

//   ScrollTrigger.create({
//     animation: tl3,
//     trigger: "#joinnow",
//     start: "0% 10%",
//     end: "90% center",
//     toggleActions: "play none none none",
//   });
// }



//flip-card section

if (window.matchMedia("(min-width:992px)").matches){
  const tlflip = gsap.timeline();
  tlflip
    .fromTo(".anim5 .judul", { opacity: 0, scale: 1.3, duration: 0.3 },  { opacity: 1, scale: 1, duration: 0.5 })
    .fromTo(".anim5", {y: 200}, {y: 0, duration: 0.6, })
    .fromTo(".anim6", {autoAlpha:0, x:-50}, {autoAlpha: 1, x: 0, duration: 1, ease: 'power3.inOut'} )
  
  
  ScrollTrigger.create({
    animation: tlflip,
    trigger: "#flip-card",
    start:"0% 10%",
    end: "80% center",
    toggleActions: "play none none none",
    marker: "true",
  });
}

