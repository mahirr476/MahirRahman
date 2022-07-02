const image = document.querySelector('.image');
const nameH = document.querySelector('.nameH');
const aboutPara = document.querySelector('.aboutPara');
const devH = document.querySelector('.devH');
const btn = document.querySelector(".btn");
const aboutArrow = document.querySelector(".aboutArrow");
const logo = document.querySelector("#logo");
const tabs = document.querySelector(".tabs");


const t2 = new TimelineMax(); 


t2.fromTo(nameH,1.5,{opacity: 0},{opacity: 1, ease: Power2.easeInOut})
.fromTo(devH,1.5, {opacity: 0}, {opacity: 1,ease: Power2.easeInOut})
.fromTo(image,2,{opacity: 0},{opacity: 1,ease: Power2.easeInOut})
.fromTo(aboutPara,6,{opacity: 0,y: 200},{opacity: 1, y:0, ease: Power2.easeInOut},{DelayNode:0})
.fromTo(btn,8.5,{opacity: 0,y: 200}, {opacity: 1, y:0, ease: Power2.easeInOut},{DelayNode:0})
.fromTo(aboutArrow,9,{opacity: 0,y: 200}, {opacity: 1, y:0, ease: Power2.easeInOut},{DelayNode:0})
.fromTo(logo,3,{opacity: 0,x: 30},{opacity: 1, x:0},{DelayNode:0})
.fromTo(tabs,3,{opacity: 0,x: 30},{opacity: 1, x:0},{DelayNode:0});



// BUTTON HIDDEN FUNCTION




// const btn = document.getElementById(".btn");
// btn.onclick = function () { targetDiv.style.display = "flex"; };
