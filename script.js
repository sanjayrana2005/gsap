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
tl.to("#box1",{
    x:2000,
    rotate:"45deg",
    duration:2.5,
    delay:1,
})
tl.to("#box2",{
    x:2000,
    rotate:"45deg",
    duration:3,
})
tl.to("#box3",{
    x:2000,
    rotate:"45deg",
    duration:2.5,
})