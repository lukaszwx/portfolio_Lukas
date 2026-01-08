gsap.registerPlugin(ScrollTrigger);

// Loader
window.addEventListener("load", () => {
    gsap.to(".loader", {
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        onComplete: () => document.querySelector(".loader").remove()
    });
});

// Header
gsap.from(".header", {
    opacity: 0,
    y: -20,
    duration: 0.8
});


gsap.from(".hero-content", {
    opacity: 0,
    y: 40,
    duration: 1
});


gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 85%"
        },
        opacity: 0,
        y: 40,
        duration: 0.8
    });
});
