// =====================================SECTION 2-1=======================================================

gsap.registerPlugin(ScrollTrigger);

const tabTrigger = gsap.timeline();
const tabTrigger2 = gsap.timeline();

tabTrigger
  .to(".mask-tab-bawah", { height: "0%" })
  .from(".nav-content-play", { y: -600, duration: 0.7 })
  .to(".nav-content-play", { y: -30, duration: 0.9 });

ScrollTrigger.create({
  animation: tabTrigger,
  trigger: "#section2-2",
  start: "8% 80%",
  end: "8% 80%",
  toggleActions: "restart none none none",
  markers: false,
});

tabTrigger2
  .fromTo(".mask-header2", { height: "100%" }, { height: "0%" })
  .to(".mask-description2", { height: "0%" })
  .to(".mask-button4", { height: "0%" })
  .from(
    "#section2-2 .solusibtn",
    {
      scale: 1.1,
      transformOrigin: "top left",
      duration: 0.1,
    },
    "<"
  );

ScrollTrigger.create({
  animation: tabTrigger2,
  trigger: "#section2-2",
  start: "8% center",
  end: "8% center",
  toggleActions: "restart none reverse none",
  markers: false,
});

const trigger3 = gsap.timeline();
trigger3
  .to(".mask-header3",0.3, { height: "0%" })
  .from("#section2-3 .cindy",0.3, { scale: 0 ,lazy: false}, "<")
  .to(".mask-description3",0.3,{ height: "0%" })
  .from("#section2-3 .ketcindy",0.3, { y: 80 }, "<");

ScrollTrigger.create({
  animation: trigger3,
  trigger: "#section2-3",
  start: "top center",
  end: "top center",
  // markers: true,
  toggleActions: "play none none none",
});
const trigger4 = gsap.timeline();
trigger4
  .fromTo(".card-item-1",0.2, { scale: 0 }, { scale: 1 })
  .fromTo(".card-item-2",0.2, { scale: 0 }, { scale: 1 })
  .fromTo(".card-item-3",0.2, { scale: 0 }, { scale: 1 })
  .fromTo(".card-item-4",0.2, { scale: 0 }, { scale: 1 })
  .fromTo(".card-item-5",0.2, { scale: 0 }, { scale: 1 });
ScrollTrigger.create({
  animation: trigger4,
  trigger: "#section2-3",
  start: "30% center",
  end: "30% center",
  toggleActions: "play none none none",
  // markers:true
});

var x = window.matchMedia("(min-width: 768px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
