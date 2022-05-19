// SECTION 1-1--------------------------------
function scrollWin() {
  window.scrollBy(0, window.innerHeight);
}
gsap.registerPlugin(ScrollTrigger);
$(document).ready(function () {
  gsap.to("#section1-1 .mask1", {
    scaleY: 0,
    transformOrigin: "top bottom",
    duration: 1,
    delay: 0.5,
  });
  gsap.to("#section1-1 .mask2", {
    scaleY: 0,
    transformOrigin: "top bottom",
    duration: 1,
    delay: 0.5,
  });
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
  gsap.to("#section1-1 .mask3", {
    scaleY: 0,
    transformOrigin: "top bottom",
    duration: 1,
    delay: 1.2,
  });
  gsap.from("#section1-1 .solusibtn", {
    scale: 1.15,
    transformOrigin: "top left",
    duration: 0.5,
    delay: 1.2,
  });
  gsap.from("#section1-1 .kart", { opacity: 0, delay: 1.2, duration: 0.5 });
});

gsap.to("#section1-1 .kart5", {
  yPercent: -600,
  ease: "none",
  scrollTrigger: {
    trigger: "#section1-1",
    pin:"#section1-1 .row",
    scrub: true
  }, 
});

gsap.to("#section1-1 .kart1 ,#section1-1 .kart2 ,#section1-1 .kart3 ,#section1-1 .kart4", {
  yPercent: -400,
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

gsap.to("#section1-1 .col1", {
  yPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: "#section1-1",
    pin:"#section1-1 .row",
    scrub:0.01,
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
// SECTION 1-1---------------------------

// HORIZONTAL SCROLL---------------------
let sections = gsap.utils.toArray(".panel");

const scrollhorizontal = gsap.timeline();

scrollhorizontal.to(sections,1, {
  xPercent: -0
},0);
scrollhorizontal.to(sections,1, {
  xPercent: -100
},1);

scrollhorizontal.to(sections,1, {
  xPercent: -100
},2);
scrollhorizontal.to(sections,1, {
  xPercent: -200
},3);
scrollhorizontal.to(sections,1, {
  xPercent: -200
},4);

scrollhorizontal.to(sections,1, {
  xPercent: -300
},5);
scrollhorizontal.to(sections,1, {
  xPercent: -300
},6);

ScrollTrigger.create({
  animation: scrollhorizontal,
  trigger: ".ccontainer",
  pin: true,
  scrub: 1,
  end: () => "+=7300" 
});
// HORIZONTAL SCROLL---------------------

// STOP SCROLL---------------------------
function stopscroll() {
  $('body').addClass('stop-scrolling')
  setTimeout(function() {
    $('body').removeClass('stop-scrolling');
  }, 2000);
}

function stopscroll2() {
  $('body').addClass('stop-scrolling')
  setTimeout(function() {
    $('body').removeClass('stop-scrolling');
  }, 3000);
}
// STOP SCROLL---------------------------

// ANIMASI HORIZONTAL SCROLL-------------
const sec_1_2 = gsap.timeline();

sec_1_2.to("#section1-2 .quaimg",1, {
  scale:0
},0).fromTo("#section1-2 .textanimbox",1, {
  x:"0",
  opacity:1,
},{
  opacity:0,
  x:"7vh",
},0).fromTo("#section1-2 .quacheck",1, {
  scale:0
},{
  scale:1
},1).fromTo("#section1-2 .textanim2",1, {
  opacity:0,
  x:"7vh",
},{
  opacity:1,
  x:"0",
},1);

ScrollTrigger.create({
  animation: sec_1_2,
  trigger: "#section1-2",
  // markers:true,
  start: '700px center',
  end: '700px center',
  onEnter: stopscroll,
  onLeaveBack: stopscroll,
  toggleActions: "restart none none reverse"
});

const sec_1 = gsap.timeline();

sec_1.to("#section1-2 .mask4",0.5, {
  scaleY: 0,
  transformOrigin: "top bottom"
},0).to("#section1-2 .orang",1, {
  scale:1,
},0).fromTo("#section1-2 .textanim",0.5,{
  opacity: 0,
  x:"7vh",
}, {
  opacity:1,
  x:"0",
},0).from("#section1-2 .qualification",0.5, {
  opacity:0,
  x:"-10vh",
  stagger:0.1,
},0).fromTo("#section1-2 .scrollToExplore",1, {
  opacity:0,
},{
  opacity:1,
},0).fromTo("#shadowsection .scrollbar",1,{
  width:"0",
}, { 
  width:"5%"
},0).to("#shadowsection .sfase1,#shadowsection .sfase2,#shadowsection .sfase3,#shadowsection .sfase4",1,{
  opacity:0,
},0).fromTo("#shadowsection .sfase5",1,{
  opacity:0,
} ,{ 
  opacity:1,
},0).to("#shadowsection .bscroll2,#shadowsection .bscroll3,#shadowsection .bscroll4,#shadowsection .bscroll5",0.5, { 
  scale:0,
},0).to("#shadowsection .bubblescroll",1, { 
  opacity:1,
},0).to("#shadowsection .bubblescroll",0.5, { 
  opacity:0,
},1);

ScrollTrigger.create({
  animation: sec_1,
  trigger: ".ccontainer",
  // markers:true,
  start: '100px center',
  end: '100px center',
  toggleActions: "restart none none reverse"
});

const sec_2 = gsap.timeline();

sec_2.to("#section1-3 .mask4",1, {
  scaleY: 0,
  transformOrigin: "top bottom",
},0).fromTo("#section1-3 .orang",1, {
  scale: 0.85,
  transformOrigin: "center bottom",
},{
  scale: 1,
  transformOrigin: "center bottom",
},0).from("#section1-3 .textanim",1, {
  opacity:0,
  x:"3vh",
},0).fromTo("#section1-3 .animkanan",1, {
  opacity:0,
  x:"-10vh",
},{
  opacity:1,
  x:"0",
},0).from("#section1-3 .animkiri",1, {
  opacity:0,
  x:"10vh",
},0).from("#section1-3 .scrollToExplore",1, {
  opacity:0,
},0).fromTo("#shadowsection .sfase5",1,{
  opacity:1,
}, { 
  opacity:0,
},0).fromTo("#shadowsection .sfase4",1,{
  opacity:0,
}, { 
  opacity:1,
},0).fromTo("#shadowsection .scrollbar",1,{
  width:"5%"
}, { 
  width:"25%"
},0).fromTo("#shadowsection .bscroll2",0.5,{
  scale:0,
},{ 
  scale:1,
},0).fromTo("#shadowsection .bscroll1",0.5,{
  scale:1,
}, { 
  scale:0,
},0).to("#shadowsection .bubblescroll",1, { 
  opacity:1,
},1).to("#shadowsection .bubblescroll",0.5, { 
  opacity:0,
},2);

ScrollTrigger.create({
  animation: sec_2,
  trigger: "#section1-2",
  // markers:true,
  start: '1800px center',
  end: '1800px center',
  toggleActions: "restart none none reverse"
});

const sec_2_2 = gsap.timeline();

sec_2_2.fromTo("#section1-3 .animkanan",1, {
  x:"0vh",
  autoAlpha:1,
},{
  autoAlpha:0,
  x:"-13vh",
},0).fromTo("#section1-3 .animkiri",1, {
  x:"0",
  autoAlpha:1,
},{
  autoAlpha:0,
  x:"10vh",
},0).fromTo("#section1-3 .textanim",1, {
  x:"0",
  autoAlpha:1,
},{
  autoAlpha:0,
  x:"3vh",
},0).from("#section1-3 .animkanan_after",1, {
  opacity:0,
  x:"-13vh",
},1).from("#section1-3 .animkiri_after",1, {
  opacity:0,
  x:"10vh",
},1);
ScrollTrigger.create({
  animation: sec_2_2,
  trigger: "#section1-2",
  // markers:true,
  start: '2800px center',
  end: '2800px center',
  toggleActions: "restart none none reverse",
  onEnter: stopscroll,
  onLeaveBack: stopscroll
});

const sec_2to3 = gsap.timeline();

sec_2to3.fromTo("#shadowsection .sfase4",1,{
  opacity:1,
}, { 
  opacity:0,
},0).fromTo("#shadowsection .sfase3",1, {
  opacity:0,
}, { 
  opacity:1,
},0).fromTo("#shadowsection .scrollbar",1,{
  width:"25%"
}, { 
  width:"50%"
},0).fromTo("#shadowsection .bscroll3",0.5,{
  scale:0,
},{ 
  scale:1,
},0).fromTo("#shadowsection .bscroll2",0.5,{
  scale:1,
}, { 
  scale:0,
},0).to("#shadowsection .bubblescroll",1, { 
  opacity:1,
},1).to("#shadowsection .bubblescroll",0.5, { 
  opacity:0,
},2);

ScrollTrigger.create({
  animation: sec_2to3,
  trigger: "#section1-2",
  // markers:true,
  start: '4100px center',
  end: '4100px center',
  toggleActions: "restart none none reverse",
});

const sec_3 = gsap.timeline();

sec_3.to("#section1-4 .changetext5", 1.5, {
  text: {
    value: "Ups,ternyata jadwal interview saat ini sudah terisi penuh",
    ease: Linear.easeNone,
  },
  yoyo: true,
  repeat:1
},0);

ScrollTrigger.create({
  animation: sec_3,
  trigger: "#section1-2",
  // markers:true,
  start: '4500px center',
  end: '4500px center',
  toggleActions: "restart none none reverse",
  onEnter: stopscroll2,
});

const sec_3_2 = gsap.timeline();

sec_3_2.to("#section1-4 .changetext5", 1.5, {
  text: {
    value: "Jangan khawatir, EVA ada untuk membantu",
    ease: Linear.easeNone,
  },
},0).to("#section1-4 .kalender", 1.5, { 
  x: "-100vh" 
},0).to("#section1-4 .instruction", 1, { 
  opacity: 1 
},1).fromTo("#section1-4 .penutupps", 1, { 
  display:"block",
},{
  display:"none",
},1);

ScrollTrigger.create({
  animation: sec_3_2,
  trigger: "#section1-2",
  // markers:true,
  start: '5000px center',
  end: '5000px center',
  toggleActions:"restart none none reverse",
  onEnter: stopscroll,
  onLeaveBack: stopscroll,
});


const sec_4_1 = gsap.timeline();

sec_4_1.to("#section2-1 .notiftutup", .5,{
  scale:0,
  transformOrigin:"top right",
},0).fromTo("#section2-1 .foto-surat1", 1, {
  scale:0,
  transformOrigin:"top left",
},{
  scale:1,
  transformOrigin:"top left",
},1).to("#shadowsection .bubblescroll",1, { 
  opacity:1,
},1).to("#shadowsection .bubblescroll",0.5, { 
  opacity:0,
},2);

ScrollTrigger.create({
  animation: sec_4_1,
  trigger: "#section1-2",
  // markers:true,
  start: "6800px center",
  end: "6800px center",
  toggleActions: "restart none none reverse",
  onEnter: stopscroll,
  onLeaveBack: stopscroll,
});

const sec_4 = gsap.timeline();

sec_4.fromTo("#section2-1 .gambarsurat", 1, {
  x:"100vh",
  rotation:-13,
},{
  x:"0",
  rotation:0,
},0).fromTo("#shadowsection .sfase3",1,{
  opacity:1,
}, { 
  opacity:0,
},0).fromTo("#shadowsection .sfase2",1,{
  opacity:0,
}, { 
  opacity:1,
},0).fromTo("#shadowsection .bscroll4",0.5,{
  scale:0,
},{ 
  scale:1,
},0).fromTo("#shadowsection .bscroll3",0.5,{
  scale:1,
}, { 
  scale:0,
},0).fromTo("#shadowsection .scrollbar",1,{
  width:"50%"
}, { 
  width:"75%"
},0).fromTo("#section2-1 .notif", 0.5, {
  scale:0,
},{
  delay:0.5,
  scale:1,
  transformOrigin:"top right",
},0);

ScrollTrigger.create({
  animation: sec_4,
  trigger: "#section1-2",
  // markers:true,
  toggleActions: "restart none none reverse",
  start: "6000px center",
  end: "6000px center",
});

const sec_4_2 = gsap.timeline();

sec_4_2.fromTo("#section2-1 .foto-surat1", 1, {
  x:0,
  y:0,
  rotation:0,
},{
  x:130,
  y:-100,
  rotation:10,
},0).fromTo("#shadowsection .sfase2",1,{
  opacity:1,
}, { 
  opacity:0,
},0).fromTo("#shadowsection .sfase1",1, {
  opacity:0,
}, { 
  opacity:1,
},0).fromTo("#shadowsection .scrollbar",1,{
  width:"75%"
}, { 
  width:"100%"
},0).fromTo("#shadowsection .bscroll5",0.5,{
  scale:0,
},{ 
  scale:1,
},0).fromTo("#shadowsection .bscroll4",0.5,{
  scale:1,
}, { 
  scale:0,
},0).fromTo("#section2-1 .foto-surat2", 1, {
  scale:0,
  transformOrigin:"top left",
},{
  scale:1,
  transformOrigin:"top left",
},1).to("#shadowsection .bubblescroll",1, { 
  opacity:1,
},1).to("#shadowsection .bubblescroll",0.5, { 
  opacity:0,
},2);

ScrollTrigger.create({
  animation: sec_4_2,
  trigger: "#section1-2",
  // markers:true,
  start: "7300px center",
  end: "7300px center",
  toggleActions: "restart none none reverse",
  onEnter: stopscroll,
  onLeaveBack: stopscroll,
});
// ANIMASI HORIZONTAL SCROLL-------------

// FITUR KALENDER------------------------
var $toggle = 0;
$("#section1-4 .people-schedule").click(function () {
  if ($toggle == 0) {
    if ($(this).hasClass("peoples1")) {
      $(".peoples1").hide();
      $(".onclickcontent1 .hilang1").addClass("muncul");
      $(".onclickcontent1 .hilangpjud").removeClass("hilangpjud");
      $(".onclickcontent1 .hilangp").removeClass("hilangp");
    } else if ($(this).hasClass("peoples2")) {
      $(".peoples2").hide();
      $(".onclickcontent1 .hilang2").addClass("muncul");
      $(".onclickcontent1 .hilangpjud").removeClass("hilangpjud");
      $(".onclickcontent1 .hilangp2").removeClass("hilangp2");
    }
    $toggle = 1;
  } else if ($toggle == 1) {
    if ($(this).hasClass("peoples1")) {
      $(".peoples1").hide();
      $(".onclickcontent2 .hilang1").addClass("muncul");
      $(".onclickcontent2 .hilangpjud").removeClass("hilangpjud");
      $(".onclickcontent2 .hilangp").removeClass("hilangp");
      $(".instruction").hide();
      $(".bawah").show();
    } else if ($(this).hasClass("peoples2")) {
      $(".peoples2").hide();
      $(".onclickcontent2 .hilang2").addClass("muncul");
      $(".onclickcontent2 .hilangpjud").removeClass("hilangpjud");
      $(".onclickcontent2 .hilangp2").removeClass("hilangp2");
      $(".instruction").hide();
      $(".bawah").show();
    } 
    $toggle = 2;
  }
});
$("#section1-4 .x").click(function () {
  $(".instruction").hide();
});
// FITUR KALENDER------------------------

// INFINITE ANIMATION--------------------
let cursortext = gsap.to('.cursortext',{opacity:0,ease:"power2.inOut",repeat: -1});
let jingle = gsap.to('.notif',3,{rotation:-10,repeat: -1,yoyo:true});
// INFINITE ANIMATION--------------------