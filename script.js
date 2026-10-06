window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  const hero = document.querySelector("#hero");
  const sticky = document.querySelector(".hero-sticky");
  const road = document.querySelector(".road");
  const car = document.querySelector("#car");
  const trail = document.querySelector("#trail");
  const progress = document.querySelector("#progress");
  const chars = gsap.utils.toArray(".char");
  const metrics = gsap.utils.toArray(".metric");

  // Premium entrance: subtle, fast and non-abrupt.
  const intro = gsap.timeline({defaults:{ease:"power3.out"}});
  intro
    .from(".nav", {y:-15, opacity:0, duration:.7})
    .from(".kicker", {y:12, opacity:0, duration:.45}, "-=.3")
    .to(chars, {opacity:1, y:0, duration:.7, stagger:.035}, "-=.2")
    .to(".intro", {opacity:1, y:0, duration:.6}, "-=.45");

  const travel = () => Math.max(road.clientWidth - car.getBoundingClientRect().width - 22, 0);

  // The entire visual scene remains fixed/sticky while page scroll becomes animation progress.
  const drive = gsap.timeline({
    scrollTrigger:{
      trigger:hero,
      start:"top top",
      end:"bottom bottom",
      scrub:1,
      invalidateOnRefresh:true
    }
  });

  drive.to(car, {
    x: travel,
    ease:"none",
    onUpdate:function(){
      const x = gsap.getProperty(car, "x") || 0;
      const max = travel() || 1;
      const p = Math.max(0, Math.min(1, x / max));
      trail.style.width = `${Math.min(100, p * 100)}%`;
      progress.style.width = `${p * 100}%`;

      // Gentle rotation/scale gives the car physical weight without using layout properties.
      gsap.set(car, {
        rotation: Math.sin(p * Math.PI * 2) * .9,
        scale: 1 + Math.sin(p * Math.PI) * .035
      });
    }
  });

  // Metrics enter in sequence as the car progresses through the scene.
  metrics.forEach((card, i) => {
    gsap.to(card, {
      opacity:1, y:0, duration:.8, ease:"power3.out",
      scrollTrigger:{
        trigger:hero,
        start:`top+=${240 + i * 125} top`,
        end:`top+=${390 + i * 125} top`,
        scrub:.65
      }
    });
  });

  // Mouse glow — lightweight and entirely transform-based.
  const glow = document.querySelector(".cursor-glow");
  if (window.matchMedia("(pointer:fine)").matches) {
    window.addEventListener("pointermove", e => {
      gsap.to(glow, {x:e.clientX, y:e.clientY, duration:.45, ease:"power2.out", overwrite:true});
    }, {passive:true});
  }

  // Avoid excessive refresh work while resizing.
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 150);
  }, {passive:true});

  ScrollTrigger.refresh();
});
