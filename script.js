gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1,            // Smoothness (higher is slower)
  effects: true,          // Enable data-speed & data-lag
});

// header 
gsap.from("header", {
    opacity: 0,
    y: 20,
    duration: 0.3,
    delay: 1
})

// hero section 
gsap.from("h1", {
    y: -650,
    duration: 0.5,
})

gsap.from(".scoops", {
    opacity: 0,
    y: 250,
    scale: 0.5,
    duration: 0.4,
    delay: 0.5
})

gsap.from(".floating-img", {
    opacity: 0,
    scale: 0,
    delay: 1.5,
    ease: "bounce.out"
})

// pinned section
gsap.utils.toArray('.pinned-wrapper').forEach((panel) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    end: "+=100%",
    pin: true,
    pinSpacing: false
  });
});

// product section
gsap.utils.toArray('.product-wrapper').forEach(wrapper => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      start: "10% 100%",
      end: "90% bottom",
      scrub: true,
      // markers: true
    }
  });

  tl.from(wrapper.querySelector('.product-img'), {
    rotate: -40,
    opacity: 0.5,
    duration: 2
  }, "<+0.2")
  .from(wrapper.querySelector('.content'), {
    y: 600,
    duration: 1.5
  }, "<+0.5") // starts slightly after
  .from(wrapper.querySelector('.product-slices'), {
    scale: 0,
    duration: 1.2
  }, "<+1"); // starts together
});


// text animation
let split = new SplitText(".text-wrapper .text", { type: "words" });

gsap.from(split.words, {
  scrollTrigger: {
    trigger: ".text-wrapper",
    start: "top 80%",
    end: "120% bottom",
    scrub: true,
    // markers: true
  },
  opacity: 0,
  y: 40,
  stagger: 0.08,
  ease: "power2.out"
});

// footer animation
gsap.from("footer", {
    scrollTrigger:{
        trigger: 'footer',
        start: "10% 100%",
        end: "80% 100%",
        scrub: 1,
        // markers: true,
    },
    y: 120,
    duration: 2,
    ease: "power1.out",
});

