
const expInfo = document.querySelector(".expInfo");
const t1 = new TimelineMax();

t1.fromTo(expInfo,2, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut})