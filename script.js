gsap.from("#page2 h1",{
    xPercent:-160,
    duration:2,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 0%",
        scrub:2,
        pin:true
    }
})
gsap.from("#page2 h2",{
    xPercent:580,
    scrollTrigger:{
        trigger:"#page2",
        start:"top 0%",
        scrub:true
    }
})