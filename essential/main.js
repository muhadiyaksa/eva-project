gsap.registerPlugin(ScrollTrigger);
AOS.init({
    duration: 1000,
    offset: 120,
});

$(document).ready(function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

$(document).ready(function () {
    $('.conclusion .owl-carousel').owlCarousel({
        loop:true,
        items:4,
        center: true,
        // margin:45,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2,
                margin:15
            },
            1000:{
                items:3
            },
            1400:{
                items:4
            }
        }
    });
});

$(document).ready(function () {
    $('.game-changer .owl-carousel').owlCarousel({
        loop:true,
        items:1,
        center: true,
        // margin:45,
        nav:true,
    });
    // $(".owl-nav button:nth-child(1) span").html('<img src="assets/section7/arrow.svg" style="width: 45px;transform: rotate(90deg);">');
    // $(".owl-nav button:nth-child(2) span").html('<img src="assets/section7/arrow.svg" style="width: 45px;transform: rotate(-90deg);">');
    $(".owl-nav button:nth-child(1) span").html('<i class="fas fa-angle-left" style="transform: scale(0.8) translate(-1px,-2px);"></i>');
    $(".owl-nav button:nth-child(2) span").html('<i class="fas fa-angle-right" style="transform: scale(0.8) translate(-1px,-2px);"></i>');
    $(".owl-nav").prepend(`<span class="bold d-flex align-items-center me-3" style="color: #c1c1c1;font-size: 18px;"><span class="sec6-num"
    style="color: #2b2b29;">01</span>/04</span>`);
});


let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".Mwrap",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // markers: true,
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500"
    }
});

gsap.to(sections, {
    scrollTrigger: {
        trigger: ".panel-3",
        start: "3400px bottom",
        // markers: true,
        scrub: true
    },
    onComplete: function() {
        $('body').css('overflow-y','hidden')
        setTimeout(function(){
            $('body').css('overflow-y','scroll')
        }, 3500)
    }
});

gsap.to($('.Mwrap'), {
    backgroundPosition: "-3000px 0px",
    ease: "none",
    scrollTrigger: {
        trigger: ".Mwrap",
        start: "630px bottom",
        end: "3500px top",
        // markers: true,
        scrub: 1,
    }
});

let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".panel-1",
        // markers: true,
        start: "50px bottom",
        end: "1700px top",
        toggleActions: 'play reset play reset'
    }
});

tl1
    .fromTo($('.kotak1'), { scale: 0 }, { scale: 1, ease: Back.easeOut.config(1.7) })
    .fromTo($('.gambar1'), { scale: 0 }, { scale: 1, ease: Back.easeOut.config(1.7) })
    .fromTo(".name1", { scale: 0 }, { scale: 1, ease: Back.easeOut.config(1.7) })
    .fromTo($('.box11'), { scale: 0 }, { scale: 1, ease: Back.easeOut.config(1.7) });

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".panel-2",
        // markers: true,
        start: "700px bottom",
        end: "3400px top",
        toggleActions: 'play reset play reset'
    }
});

tl2
    .fromTo($('.kotak2'), { scale: 0 }, { scale: 1, ease: Back.easeOut.config(1.7) })
    .fromTo($('.gambar2'), { scale: 0 }, { scale: 1, ease: Back.easeOut.config(1.7) })
    .fromTo(".name2", { scale: 0 }, { scale: 1, ease: Back.easeOut.config(1.7) })
    .fromTo($('.box22'), { scale: 0 }, { scale: 1, ease: Back.easeOut.config(1.7) });

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".panel-3",
        // markers: true,'
        start: "2500px bottom",
        end: "4100px top",
        toggleActions: 'play reset play reset'
    }
});

tl3
    .fromTo($('.kotak3'), { scale: 0 }, { scale: 1, ease: Back.easeOut.config(1.7) })
    .fromTo($('.gambar3'), { scale: 0 }, { scale: 1, ease: Back.easeOut.config(1.7) })
    .fromTo(".name3", { scale: 0 }, { scale: 1, ease: Back.easeOut.config(1.7) })
    .fromTo($('.box33'), { scale: 0 }, { scale: 1, ease: Back.easeOut.config(1.7) });


// kodingan filbert

// Section 5 PAJAK
// var dashboard = gsap.timeline({ repeat: -1 });
// dashboard.fromTo(".dashboard", 1, { y: 5 }, { y: -5, ease: Power1.easeInOut })
//     .to(".dashboard", 1, { y: 5, ease: Power1.easeInOut });

    $(".Pajak .accordion-button").click(function(){
        $(".Pajak .accordion-button").prop('disabled', true);

        setTimeout(() => {
            $(".Pajak .accordion-button").prop('disabled', false);
        }, 1500);
    })

var tlAnimation = new TimelineMax();
$('.accordion-item').click(function(klik){
    console.log(klik);
    if(klik.detail == 1){
        tlAnimation.to($('.dashboard_icon .dashboard'),0.4,{opacity:0})
        .set($('.dashboard_icon .dashboard'),{attr:{src:"images/dashboard"+($(this).index()+1)+".webp"}})
        .to($('.dashboard_icon .dashboard'),0.4,{opacity :1});
    }
});

var tlIcon1 = new TimelineMax();
$('.accordion-item').click(function(klik1){
    console.log(klik1);
    if(klik1.detail == 1){
        tlIcon1.to($('.dashboard_icon .icon-1'),0.5,{scale:0, opacity:0})
        .set($('.dashboard_icon .icon-1'),{attr:{src:"images/icon1."+($(this).index()+1)+".webp"}})
        .to($('.dashboard_icon .icon-1'),0.5,{scale:1,opacity:1});
    }
});

var tlIcon2 = new TimelineMax();
$('.accordion-item').click(function(klik2){
    console.log(klik2);
    if(klik2.detail == 1){
        tlIcon2.to($('.dashboard_icon .icon-2'),0.7,{scale:0,opacity:0})
        .set($('.dashboard_icon .icon-2'),{attr:{src:"images/icon2."+($(this).index()+1)+".webp"}})
        .to($('.dashboard_icon .icon-2'),0.7,{scale:1,opacity:1});
    }
});
var tlIcon3 = new TimelineMax();
$('.accordion-item').click(function(klik3){
    console.log(klik3);
    if(klik3.detail == 1){
        tlIcon3.to($('.dashboard_icon .icon-3'),0.9,{scale:0,opacity:0})
        .set($('.dashboard_icon .icon-3'),{attr:{src:"images/icon3."+($(this).index()+1)+".webp"}})
        .to($('.dashboard_icon .icon-3'),0.9,{scale:1,opacity:1});
    }
});
// var dashboard = gsap.timeline({ repeat: -1 });
// dashboard.fromTo(".dashboard", 1, { y: 5 }, { y: -5, ease: Power1.easeInOut })
//     .to(".dashboard", 1, { y: 5, ease: Power1.easeInOut });

var icon1 = gsap.timeline({ repeat: -1 });
icon1.fromTo(".icon-1", 1.5, { rotation: 0 }, { rotation: 10, ease: Power1.easeInOut })
    .to(".icon-1", 1.5, { rotation: 0, ease: Power1.easeInOut });

var icon2 = gsap.timeline({ repeat: -1 });
icon2.fromTo(".icon-2", 1, { rotation: 7 }, { rotation: -3, ease: Power1.easeInOut })
    .to(".icon-2", 1, { rotation: 7, ease: Power1.easeInOut });
    
var icon3 = gsap.timeline({ repeat: -1 });
icon3.fromTo(".icon-3", 1, { rotation: -5 }, { rotation: 5, ease: Power1.easeInOut })
    .to(".icon-3", 1, { rotation: -5, ease: Power1.easeInOut });
// var icon = gsap.timeline({});
// icon.fromTo($('.icon-1, .icon-2, .icon-3'), 1.5, { scale: 0}, { scale: 1, ease: Power1.easeInOut });

const tl4 = gsap.timeline();
tl4
  .fromTo($(".Pajak .judul"), 3, { opacity: 0, scale: 1.3}, { opacity: 1, scale: 1})
  .fromTo($(".Pajak .judul"), 3, { y: 100 }, { y: 0})
  .fromTo($(".Pajak .desc"), 2, {opacity:0, y: 100,}, { opacity:1, y: 0})
  .fromTo($(".Pajak .solusibtn"), 1, {opacity:0, y: 100 }, {opacity:1, y: 0})

ScrollTrigger.create({
  animation: tl4,
  trigger: ".Pajak",
  start: "top 50%",
  end: "top 50%",
  toggleActions: "play none none none",
  scrub: 3,
//   markers: true,
});


const tl40 = gsap.timeline();
tl40
.fromTo($(".Pajak .accordion"), 3, {opacity:0, x:-400}, { opacity:1, x: 0},"someLabel")
.fromTo($(".Pajak .dashboard"), 3, {opacity:0, x: 800}, { opacity:1, x:0},"someLabel")
.fromTo($(".dashboard-icon"), {scale:0}, {scale: 1,stagger: 0.8})

ScrollTrigger.create({
    animation: tl40,
    trigger: ".Pajak",
    start: "25% 50%",
    end: "25% 50%",
    toggleActions: "play none none none",
    scrub: 4,
    // markers: true,
  });

// gsap.fromto($('.Pajak .accordion'),{
//     x:-200,
//     duration :1},{x:0}
//     scrollTrigger: {
//         trigger: ".accordion",
//         start: "top bottom",
//         end: "top bottom",
//         toggleActions: "restart none reverse none",
//       },
// });


// gsap.from($('.headerpajak'),{
//     y: 30,
//     stagger: 0.5,
//     delay: 0.7,
//     scrollTrigger: {
//         trigger: ".dashboard-icon",
//         start: "bottom center",
//         toggleActions: "restart none reverse none",
//         markers :true,
//       },
// });


//   gsap.from($('.headerpajak'), {
//     y :-100,
//     stagger: 0.5,
//     scrollTrigger: {
//         trigger: ".dashboard-icon",
//         start: "top center",
//         end: "bottom bottom",
//         toggleActions: "restart none reverse none",
//       },
//   });

// gsap.to("#section1-1 .bgorang , #section1-1 .mask2", {
//     yPercent: -100,
//     ease: "none",
//     scrollTrigger: {
//       trigger: "#section1-1",
//       pin:"#section1-1 .row",
//       scrub: true
//     }, 
//   });

// const tl4 = gsap.timeline();
// tl4.from($('.dashboard-icon .icon-1'), 0.2, {scale : 0})
// tl4.from(".dashboard-icon .icon-2", 0.2, {scale : 0})
// tl4.from(".dashboard-icon .icon-3", 0.2, {scale : 0})

//   ScrollTrigger.create({
//     animation: tl4,
//     trigger: ".dashboard-icon",
//     start: "center center",
//     end: "bottom bottom",
//     toggleActions: "restart none reverse none",
//     scrub: 1
// });



// const tl8 = gsap.timeline();
// tl8.fromTo(".pajak .judul", { y: 100 }, { height: 0})
// tl8.fromTo(".pajak .button", { y: 100 }, { height: 0})
// tl8.fromTo(".pajak .desc", { y: 100 }, { height: 0})

// ScrollTrigger.create({
//     animation: tl8,
//     trigger: ".section-5",
//     start: "center bottom",
//     end: "bottom bottom",
//     toggleActions: "restart none reverse none",
//     scrub: 3,
// });


const imageFormPoint = document.querySelector(".imageforForm");
const imageForm = document.querySelector(".image-form");
const cardFormPoint = document.querySelector(".cardforForm");
const cardForm = document.querySelector(".card-form");
    
const animateOnScroll = (elementAnimate, animateIn, animateOut, marginView) => {
    return new IntersectionObserver(
     (entries, observer) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            elementAnimate.style.transform = `${animateIn}`;
        } else {
            elementAnimate.style.transform = `${animateOut}`;
        }
        });
    },
    {
        root: document,
        rootMarginTop: `${marginView}`,
    }
   );
};


const observer3 = animateOnScroll(imageForm, "translateY(0%)", "translateY(100%)", "-200px");
const observer4 = animateOnScroll(cardForm, "translateX(0%)", "translateX(100%)", "-200px");
    
observer3.observe(imageFormPoint);
observer4.observe(cardFormPoint);

// navbar
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

gsap.to($('.box-content1'), {
    scrollTrigger: {
        trigger: ".panel-1",
        // markers: true,
        start: "bottom bottom",
        end: "1700px top",
        scrub: 1
    },
    x: -50

});

gsap.to($('.box-content2'), {
    scrollTrigger: {
        trigger: ".panel-2",
        // markers: true,
        start: "bottom bottom",
        end: "3500px top",
        scrub: 1
    },
    x: -120
});

gsap.to($('.box-content3'), {
    scrollTrigger: {
        trigger: ".panel-3",
        // markers: true,
        start: "2800px bottom",
        end: "3500px top",
        scrub: 1
    },
    x: -120
});

var $owl = $('.owl-carousel');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index );
});

$(document).on('click', '.owl-item>div', function() {
  var $speed = 400;  // in ms
  $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
});

// section7
const tl7 = gsap.timeline();
tl7
  .fromTo("#section7 .judul", { opacity: 0, scale: 1.3, duration: 1.5 }, { opacity: 1, scale: 1, duration: 3 })
  .fromTo("#section7 .judul", { y: 100, }, { y: 0, duration: 3 })
  .fromTo("#section7 .desc", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 })
  .fromTo("#section7 .solusibtn", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })
  .fromTo("#section7 .slider", { opacity: 0 }, { opacity: 1, duration: 1 })

ScrollTrigger.create({
  animation: tl7,
  trigger: "#section7",
  start: "top 40%",
  end: "top 40%",
  toggleActions: "play none none none",
  scrub: 3,
//   markers: true
});

var $owl1 = $('.game-changer .owl-carousel');

const tl10 = gsap.timeline();
tl10
  .fromTo(".game-changer .judul", { opacity: 0, scale: 1.3, duration: 1.5 }, { opacity: 1, scale: 1, duration: 3 })
  .fromTo(".game-changer .judul", { y: 100, }, { y: 0, duration: 3 })
  .fromTo(".game-changer .desc", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 })
  .fromTo(".game-changer .desc-c", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })

ScrollTrigger.create({
  animation: tl10,
  trigger: ".game-changer",
  start: "top 40%",
  end: "top 40%",
  toggleActions: "play none none none",
  scrub: 3,
//   markers: true
});

const tl100 = gsap.timeline();
tl100
  .fromTo(".blog .title", { opacity: 0, scale: 1.3, duration: 1.5 }, { opacity: 1, scale: 1, duration: 3 })
  .fromTo(".blog .title", { y: 100, }, { y: 0, duration: 3 })
  .fromTo(".blog .desc", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 })
  .fromTo(".blog .slider-blog", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })
  .fromTo(".blog .button", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })

ScrollTrigger.create({
  animation: tl100,
  trigger: ".blog .title",
  start: "top 40%",
  end: "top 40%",
  toggleActions: "play none none none",
  scrub: 3,
//   markers: true
});


var timeswap = new TimelineLite();
$owl1.on('changed.owl.carousel', function(event) {
    var pagein6 = event.page.index
    if(pagein6<0){
        pagein6 = 0;
    }
    // console.log(pagein6);
    $(".sec6-num").text("0"+(pagein6 + 1));
});

$(".go-down").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-4").offset().top},
        'slow');
});

$(".go-up").click(function() {
    $('html,body').animate({
        scrollTop: $("#section1-1").offset().top},
        'slow');
});

// SECTION 1-1

$(document).ready(function () {
  gsap.to("#section1-1 .orang", {
    scale: 0.85,
    transformOrigin: "center bottom",
    duration: 1,
    delay: 0.7,
  });
  gsap.to("#section1-1 .orang", {
    scale: 1,
    transformOrigin: "center bottom",
    duration: 1,
    delay: 1.2,
  });
  gsap.from("#section1-1 .solusibtn", {
    scale: 1.3,
    transformOrigin: "top left",
    duration: 0.5,
    delay: 1.2,
  });
  gsap.from("#section1-1 .kart", { opacity: 0, delay: 1.2, duration: 0.5 });
});

gsap.to("#section1-1 .kart1, .kart2, .kart3, .kart4", {
  yPercent: -400,
  ease: "none",
  scrollTrigger: {
    trigger: "#section1-1",
    pin:"#section1-1 .row",
    scrub: true
  }, 
});

gsap.to(".kart5", {
    yPercent: -800,
    ease: "none",
    scrollTrigger: {
        trigger: "#section1-1",
        pin:"#section1-1 .row",
        scrub: true
    }, 
});

gsap.to("#section1-1 .bgorang , #section1-1 .mask2", {
  yPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: "#section1-1",
    pin:"#section1-1 .row",
    scrub: true
  }, 
});

// gsap.to("#section1-1 .eva , #section1-1 .mask1 , #section1-1 .mask3", {
//   yPercent: -275,
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#section1-1",
//     pin:"#section1-1 .row",
//     scrub: true
//   }, 
// });

gsap.to(".paralax", {
  yPercent: -200,
  ease: "none",
  scrollTrigger: {
    trigger: "#section1-1",
    pin:"#section1-1 .row",
    scrub: true
  }, 
});

gsap.to("#section1-1 .panahlingkaran", {
    yPercent: -1700,
    ease: "none",
    scrollTrigger: {
      trigger: "#section1-1",
      pin:"#section1-1 .row",
      scrub:0.01,
    }, 
  });

// gsap.to("#section1-1 .solusibtn", {
//   yPercent: -800,
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#section1-1",
//     pin:"#section1-1 .row",
//     scrub: true
//   }, 
// });
// SECTION 1-1

$(document).ready(function(){
    // setTimeout(function(){
        ScrollTrigger.refresh();
    // }, 3000)
});