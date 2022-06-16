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
const AboutBox = document.querySelector(".AboutBox");
const proPic =document.querySelector(".proPic")
const AboutInfo =document.querySelector(".AboutInfo");


const t2 = new TimelineMax();
const t3 = new TimelineMax();
const t4 = new TimelineMax(); 


function AboutAnimate() {
    t2.fromTo(AboutBox,2, {height: "0%",x: "0%", width: "100%"}, {height: "20vh", x:"13%", width: "80%", ease: Power2.easeInOut})
    t3.fromTo(AboutInfo, 2, {x: 900}, {x: 0, ease: Power2.easeInOut})
    t4.fromTo(proPic, 2, {x: -900}, {x: 0, ease: Power2.easeInOut});
}

// EXPERIENCE PAGE ANIMATIONS
const EducBox = document.querySelector(".AboutBox");
const EducPic =document.querySelector(".proPic")
const EducInfo =document.querySelector(".AboutInfo");



const e2 = new TimelineMax();
const e3 = new TimelineMax();
const e4 = new TimelineMax(); 

function ExAnimate() {
    e2.fromTo(EducBox,2, {height: "0%",x: "0%", width: "50%"}, {height: "85vh", x:"15%", width: "80%", ease: Power2.easeInOut})
    e3.fromTo(EducInfo, 2, {x: 900}, {x: 0, ease: Power2.easeInOut})
    e4.fromTo(EducPic, 2, {x: -900}, {x: 0, ease: Power2.easeInOut});
}

