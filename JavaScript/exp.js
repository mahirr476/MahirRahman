
const expInfo = document.querySelector(".expInfo");
const typeH = document.querySelector(".typeH");
const Java = document.querySelector(".Java");
const web = document.querySelector(".web");
const p3 = document.querySelector(".p3");
const web2 = document.querySelector(".web2");
const typeH2 = document.querySelector(".typeH2");

const logo = document.querySelector("#logo");
const tabs = document.querySelector(".tabs");


const t1 = new TimelineMax();

t1.fromTo(typeH,1, {x:"-500",opacity: 0}, {x:0,opacity: 1, ease: Power2.easeInOut})
.fromTo(Java,1, {x:"-500",opacity: 0}, {x:0,opacity: 1, ease: Power2.easeInOut})
.fromTo(web,1, {x:"-500",opacity: 0}, {x:0,opacity: 1, ease: Power2.easeInOut})
.fromTo(p3,1, {x:"-500",opacity: 0}, {x:0,opacity: 1, ease: Power2.easeInOut})
.fromTo(web2,1, {x:"-500",opacity: 0}, {x:0,opacity: 1, ease: Power2.easeInOut})
.fromTo(typeH2,1, {x:"-500",opacity: 0}, {x:0,opacity: 1, ease: Power2.easeInOut})
.fromTo(logo,3,{opacity: 0,x: 30},{opacity: 1, x:0},{DelayNode:0})
.fromTo(tabs,3,{opacity: 0,x: 30},{opacity: 1, x:0},{DelayNode:0});

