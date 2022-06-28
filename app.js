

// LANDING PAGE ANIMATIONS

const HeaderBox = document.querySelector('.HeaderBox');
const slider = document.querySelector('.slider');
const logo = document.querySelector("#logo");
const headline = document.querySelector(".headline");
const tabs = document.querySelector(".tabs");
const subH = document.querySelector(".subH");
const Hone = document.querySelector(".Hone");
const downArrow = document.querySelector(".downArrow");
const arts = document.querySelector(".arts");
const cs = document.querySelector(".cs");
const ubc = document.querySelector(".ubc");

const hiddenNav = document.querySelector(".hiddenNav");
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
const aboutBox = document.querySelector(".aboutBox");
const proPic = document.querySelector(".proPic")
const infoBox = document.querySelector(".infoBox");
const aboutIcons = document.querySelector(".aboutIcons");
const bdInfo = document.querySelector(".bdInfo");
const mapInfo = document.querySelector(".mapInfo");
const noteInfo = document.querySelector(".noteInfo");
const studyInfo = document.querySelector(".studyInfo");

const t2 = new TimelineMax();
const t3 = new TimelineMax();
const t4 = new TimelineMax();


function AboutAnimate() {
   
}



// SOCIAL PAGE ANIMATIONS




