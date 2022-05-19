gsap.registerPlugin(ScrollTrigger);

gsap.to("#section-1 .model", {
  scale: 0.85,
  transformOrigin: "center bottom",
  duration: 0.5,
  delay: 0.5,
});
gsap.to("#section-1 .model", {
  scale: 1,
  transformOrigin: "center bottom",
  duration: 1,
  delay: 1,
});
gsap.to("#section-1 .mask1", {
  scaleY: 0,
  transformOrigin: "top bottom",
  duration: 1,
  delay: 0.5,
});
gsap.to("#section-1 .mask2", {
  scaleY: 0,
  transformOrigin: "top bottom",
  duration: 1,
  delay:1,
});

var Cont = { val: 50 },
  NewVal = 250;

TweenLite.to(Cont, 2, {
  val: NewVal,
  roundProps: "val",
  onUpdate: function () {
    document.getElementById("counter").innerHTML = Cont.val;
  },
  scrollTrigger: {
    trigger: "#section-2",
    start: 'top center',
    toggleActions: 'play none none none',
  },
});

var Cont2 = { val: 0 },
  NewVal = 55;

TweenLite.to(Cont2, 2, {
  val: NewVal,
  roundProps: "val",
  onUpdate: function () {
    document.getElementById("counter2").innerHTML = Cont2.val;
  },
  scrollTrigger: {
    trigger: "#section-2",
    start: 'top center',
    toggleActions: 'play none none none',
  },
});

if (window.matchMedia("(min-width: 992px)").matches) {
  const tl4 = gsap.timeline();
  tl4
    .fromTo("#section-4 .judul", { opacity: 0, scale: 1.3, duration: 1.5 }, { opacity: 1, scale: 1, duration: 3 })
    .fromTo("#section-4 .judul", { y: 100, }, { y: 0, duration: 3 })
    .fromTo("#section-4 .desc", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 })
    .fromTo("#section-4 .solusibtn", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 })
    .fromTo("#section-4 .slider", { opacity: 0 }, { opacity: 1, duration: 1 })

  ScrollTrigger.create({
    animation: tl4,
    trigger: "#section-4",
    start: "top 30%",
    end: "top 30%",
    toggleActions: "play none none none",
    scrub: 3,
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

  //section 3 - flip-card Animation
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
  //end section3 animation
}

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