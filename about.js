const image = document.querySelector('.image');
const nameH = document.querySelector('.nameH');
const aboutPara = document.querySelector('.aboutPara');
const devH = document.querySelector('.devH');

const t2 = new TimelineMax(); 


t2.fromTo(nameH,1.5,{opacity: 0},{opacity: 1, ease: Power2.easeInOut})
.fromTo(devH,0.5, {opacity: 0}, {opacity: 1,ease: Power2.easeInOut})
.fromTo(image,1.5,{opacity: 0},{opacity: 1,ease: Power2.easeInOut})
.fromTo(aboutPara,5,{opacity: 0,y: 200},{opacity: 1, y:0, ease: Power2.easeInOut},{DelayNode:0})



// BUTTON HIDDEN FUNCTION
const targetDiv = document.querySelector(".emailForum");
const btn = document.querySelector(".btn");

const t3 = new TimelineMax(); 

    t3.fromTo(btn,3, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})




// const btn = document.getElementById(".btn");
// btn.onclick = function () { targetDiv.style.display = "flex"; };
