gsap.from("#box", {
    x: 1000,
    backgroundColor: "red",
    rotate: "45deg",
    duration: 5,
    ease: "elastic.out",
});

gsap.to("h1", {
    y:200,
    opacity:1,
    duration: 2,
    color: "red",
    // opacity:0,
    stagger:-1,
})