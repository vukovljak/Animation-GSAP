gsap.to('.overlay',{y:'-100vh', delay:0.5});
gsap.fromTo('.content', 
{x:'20rem', opacity:0},
{x:0, opacity:1, delay:1});
gsap.fromTo('.main-picture', 
{scale:0, opacity:0},
{scale:1, opacity:1, delay:1.5});
gsap.fromTo('.navbar', 
{opacity:0},
{opacity:1, delay:1.1});

let tl = gsap.timeline( {
    scrollTrigger: {
        trigger:'#about',
        start:'center bottom'
    }
})
tl.from('.picture-about', {scale:0, opacity:0, duration:1.5})
.from('.content-about', {x:'-200rem',duration:1.5 } ,'-=1.5')

let tl1= gsap.timeline( {
    scrollTrigger: {
        trigger:'#services',
        start:'bottom bottom'
    }
})
tl1.from('.ppc img', {rotateY:180, duration:1.5})
    .from('.socials img',{rotateY:180, duration:1}, '-=1' )
    .from('.development img',{rotateY:180, duration:2}, '-=1' )

document.querySelector("#menu-btn").addEventListener("click", () => document.querySelector(".items").classList.toggle("show"));