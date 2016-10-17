

window.requestAnimationFrame = window.requestAnimationFrame
															 || window.mozRequestAnimationFrame
															 || window.webkitRequestAnimationFrame
															 || window.msRequestAnimationFrame
															 || function(f){setTimeout(f, 1000/60)}

function doParallax(){
  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

			var windowYOffset = window.pageYOffset, elementYOffset = el.offsetTop, elBackgrounPos = "50% " + ((windowYOffset - elementYOffset) * speed) + "px";
      el.style.backgroundPosition = elBackgrounPos;

    });
  };
}

window.addEventListener('scroll', function(){ // on page scroll
	requestAnimationFrame(doParallax) // call doParallax() on next available screen repaint
}, false)

window.addEventListener('resize', function(){ // on window resize
	requestAnimationFrame(doParallax) // call doParallax() on next available screen repaint
}, false)
