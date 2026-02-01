// gsap.to("#box1", {
//     x: 2000,
//     rotate: "45deg",
//     duration: 2.5,
//     delay:1,    
// });
// gsap.to("#box2", {
//     x: 2000,
//     rotate: "45deg",
//     duration: 2.5,
//     delay:3.5,    
// });
// gsap.to("#box3", {
//     x: 2000,
//     rotate: "45deg",
//     duration: 2.5,
//     delay:6,    
// });

var tl = gsap.timeline();
gsap.to("#logo h1", {
    y: 30,
    opacity: 1,
    duration: 1.5,
    delay: 0.5,
});
gsap.to("#links h1", {
    y: 30,
    opacity: 1,
    delay: 0.5,
    stagger:1
});
