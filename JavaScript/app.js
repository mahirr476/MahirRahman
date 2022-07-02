

// LANDING PAGE ANIMATIONS

const HeaderBox = document.querySelector('.HeaderBox');
const slider = document.querySelector('.slider');
const headline = document.querySelector(".headline");
const subH = document.querySelector(".subH");
const Hone = document.querySelector(".Hone");
const downArrow = document.querySelector(".downArrow");
const arts = document.querySelector(".arts");
const cs = document.querySelector(".cs");
const ubc = document.querySelector(".ubc");
const logo = document.querySelector("#logo");
const tabs = document.querySelector(".tabs");

const t1 = new TimelineMax(); 

t1.fromTo(HeaderBox,2, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(HeaderBox,2, {x: 0, width: "100%"}, { x: "10%" ,width: "80%", ease: Power2.easeInOut})
.fromTo(Hone,2, {height: "0%"}, {height: "30vh", ease: Power2.easeInOut},{DelayNode:0})
.fromTo(downArrow,2, {x:"000", y:"1000", height: "0%"}, {x:0,y:0, height: "60px", ease: Power2.easeInOut},{DelayNode:0})
.fromTo(slider,3, {x: ".-100%"},{x: "0%",ease: Power2.easeInOut},{DelayNode:0})
.fromTo(logo,3,{opacity: 0,x: 30},{opacity: 1, x:0},{DelayNode:0})
.fromTo(tabs,3,{opacity: 0,x: 30},{opacity: 1, x:0},{DelayNode:0})
.fromTo(subH,4,{opacity: 0,},{opacity: 1},{DelayNode:0})
.fromTo(arts,4,{opacity: 0,x: 3000},{opacity: 1, x:0},{DelayNode:0})
.fromTo(cs,5,{opacity: 0,x: 3000},{opacity: 1, x:0},{DelayNode:0})
.fromTo(ubc,6.5,{opacity: 0,x: 3000},{opacity: 1, x:0},{DelayNode:0});

// ABOUT PAGE ANIMATIONS

const image = document.querySelector('.image');
const nameH = document.querySelector('.nameH');
const aboutPara = document.querySelector('.aboutPara');

const t2 = new TimelineMax(); 

t2.fromTo(image,4,{opacity: 0,x: 3000},{opacity: 1, x:0},{DelayNode:0})
.fromTo(nameH,4,{opacity: 0,x: 3000},{opacity: 1, x:0},{DelayNode:0})
.fromTo(aboutPara,4,{opacity: 0,x: 3000},{opacity: 1, x:0},{DelayNode:0})


// SOCIAL PAGE ANIMATIONS



