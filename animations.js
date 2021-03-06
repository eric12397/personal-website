// landing page animations

gsap.from(".logo", {duration: 1, opacity: 0, y: 50})
gsap.from(".nav-link", {duration: 1, opacity: 0, y: 50, stagger:0.2});

gsap.from(".landing-page-text h1", {duration: 1, opacity: 0, y: 45, delay: 0.2});
gsap.from(".landing-page-text h2", {duration: 1, opacity: 0, y: 45, delay: 0.3});
gsap.from(".landing-page-text p", {duration: 1, opacity: 0, y: 45, delay: 0.4});
gsap.from(".landing-page-text .btn", {duration: 1, opacity: 0, y: 45, delay: 0.5});

gsap.from("#ring-1", {duration: 1, opacity: 0, y: 45, delay: 0.5});
gsap.from("#ring-2", {duration: 1, opacity: 0, y: 65, delay: 0.6});
gsap.from("#ring-3", {duration: 1, opacity: 0, y: 65, delay: 0.7});
gsap.from("#ring-4", {duration: 1, opacity: 0, y: 65, delay: 0.8});
gsap.from("#ring-5", {duration: 1, opacity: 0, y: 75, delay: 0.9});

gsap.from("#molecule-1", {duration: 1, opacity: 0, y: 65, delay: 0.5});
gsap.from("#molecule-2", {duration: 1, opacity: 0, y: 65, delay: 0.7});
gsap.from("#molecule-3", {duration: 1, opacity: 0, y: 65, delay: 0.9});
gsap.from("#molecule-4", {duration: 1, opacity: 0, y: 65, delay: 1  });
gsap.from("#molecule-5", {duration: 1, opacity: 0, y: 65, delay: 1.1});

// scroll triggers
gsap.registerPlugin(ScrollTrigger);

let images = gsap.utils.toArray('.p-img img');
images.forEach(item => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top 75%",
    }
  });

  tl.from(item, { y: 100, opacity: 0, duration: 1 })
})


let descriptions = gsap.utils.toArray('.p-description');
descriptions.forEach(item => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
    }
  });

  tl.from(item, { y: 100, opacity: 0, duration: 1 })
})


