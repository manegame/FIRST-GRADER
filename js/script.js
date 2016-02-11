var ver, hor;

var addedClass;

var mouseDown = 0;

eraser = false;

document.onmousedown = function() { 
  ++mouseDown;
}
document.onmouseup = function() {
  --mouseDown;
}


var drop = document.getElementsByClassName('dropDiv');

var gradientClass = 'gradient1';

var activeGradient = '1';

function make() {

	var bod = document.getElementsByTagName('body')[0];

	for (var i = 1 ; i <= hor; i ++ ) {
		for (var j = 1;  j <= ver ; j ++ ) {
			var div = document.createElement('div');
			div.setAttribute('class', 'dropDiv '+ addedClass +'');

			var bodHeight = window.innerHeight;
			var bodWidth = window.innerWidth;

			console.log(bodHeight / ver);
			console.log(bodHeight / hor);
			div.style.height = bodHeight / ver+ 'px';
			div.style.width = bodWidth / hor+ 'px';

			bod.appendChild(div);
		}
	}

	$("html, body").animate({ scrollTop: $(document).height() }, 1000);

//add event listeners here

	for ( var i = 0 ; i < drop.length ; i++ ) {
			        	drop[i].addEventListener('click', function(){
		        			if(this.classList.contains('dropDiv')) {
		        			this.classList.add(gradientClass , activeGradient);
		    					if(eraser){
		    						this.classList.remove('gradient1', 'gradient2', 'gradient3', 'gradient4', 'gradient5', 'gradient6', 'gradient7', 'gradient8', 'gradient9', '1', '2', '3', '4', '5', '6', '7', '8', '9' );
		    					}
				    }
			});
	        		drop[i].addEventListener('mouseover', function(){
		        		if( mouseDown == 1 ) {
		        			if(this.classList.contains('dropDiv')) {
		        			this.classList.add(gradientClass , activeGradient);
		        				if(eraser){
		    						this.classList.remove('gradient1', 'gradient2', 'gradient3', 'gradient4', 'gradient5', 'gradient6', 'gradient7', 'gradient8', 'gradient9', '1', '2', '3', '4', '5', '6', '7', '8', '9' );
		    					}
		        			}
						} else {
				    }
			});
		}
}

function erase(){
	eraser = !eraser;
}

function gr1(){
	eraser = false;	
	gradientClass='gradient1';
	activeGradient = '1';
}

function gr2(){
	eraser = false;
	gradientClass='gradient2';
	activeGradient = '2';
}

function gr3(){
	eraser = false;
	gradientClass='gradient3';
	activeGradient = '3';
}

function gr4(){
	eraser = false;
	gradientClass='gradient4';
	activeGradient = '4';
}

function gr5(){
	eraser = false;
	gradientClass='gradient5';
	activeGradient = '5';
}

function gr6(){
	eraser = false;
	gradientClass='gradient6';
	activeGradient = '6';
}

function gr7(){
	eraser = false;
	gradientClass='gradient7';
	activeGradient = '7';
}

function gr8(){
	eraser = false;
	gradientClass='gradient8';
	activeGradient = '8';
}

function gr9(){
	eraser = false;
	gradientClass='gradient9';
	activeGradient = '9';
}


function redBg() {
	$('body').addClass('redBg');
	$('body').removeClass('greenBg blueBg blackBg');
	$('.buttonbar, .triggerbuttons, .welcome').css("color", "black");
}

function greenBg() {
	$('body').addClass('greenBg');
	$('body').removeClass('redBg blueBg blackBg');
	$('.buttonbar, .triggerbuttons, .welcome').css("color", "black");
}

function blueBg() {
	$('body').addClass('blueBg');
	$('body').removeClass('redBg greenBg blackBg');
	$('.buttonbar, .triggerbuttons, .welcome').css("color", "white");
	$('#credits a').css("color", 'red');

}
function blackBg() {
	$('body').addClass('blackBg');
	$('body').removeClass('redBg greenBg blueBg');	
	$('.buttonbar, .triggerbuttons, .welcome').css("color", "white");
}

function whiteBg() {
	$('body').removeClass('redBg greenBg blueBg blackBg');	
	$('.buttonbar, .triggerbuttons, .welcome').css("color", "black");
}

function syncAll() {
		// $('.1').toggleClass('gradient1');
		// $('.2').toggleClass('gradient2');
		// $('.3').toggleClass('gradient3');
		// $('.4').toggleClass('gradient4');
		// $('.5').toggleClass('gradient5');
		// $('.6').toggleClass('gradient6');
		// $('.7').toggleClass('gradient7');
		// $('.8').toggleClass('gradient8');
		// $('.9').toggleClass('gradient9');

		$('.1').fadeToggle('gradient1');
		$('.2').fadeToggle('gradient2');
		$('.3').fadeToggle('gradient3');
		$('.4').fadeToggle('gradient4');
		$('.5').fadeToggle('gradient5');
		$('.6').fadeToggle('gradient6');
		$('.7').fadeToggle('gradient7');
		$('.8').fadeToggle('gradient8');
		$('.9').fadeToggle('gradient9');
}


function three() {

	eraser = false;

	addedClass = "three";



	hor = 3;
	ver = 3;

	make();

}

function nine() {

	eraser = false;

	addedClass = "nine";

	hor = 9;
	ver = 9;

	make();
	
}

function twentySeven() {

	eraser = false;

	addedClass = "twenty-seven";

	hor = 27;
	ver = 27;

	make();
	
}

function fiftyFour() {

	eraser = false;

	addedClass = "fifty-four";

	hor = 54;
	ver = 54;

	make();
	
}

function eightyOne() {

	eraser = false;
	addedClass = "eighty-one";

	hor = 81;
	ver = 81;

	make();
}

$(document).ready(function(){

setTimeout(function(){
	$(".welcome").fadeOut(800);
}, 3000);

var timer = 0;

setInterval(function(){
	timer = timer + 1;
	console.log(timer);
	if(timer == 120){
		document.location.href = "drag.html" ;
	}

}, 1000);

	$(document).on('mousemove', function(){

		timer = 0;

		console.log(timer);

	});


	$('.enjoy').on("click",function() {

		var timing = document.body.scrollHeight;
		console.log(timing);

	    $('html, body').animate({ scrollTop: 0 }, timing, 'linear', function () {
	    });
	});


	$('.info').on('click', function(){
		$('#credits').fadeToggle();
		$('.welcome').fadeToggle();

	});

	$('.triggerbuttons').on('click', function(){

		$('.welcome').fadeOut('slow');
		$('.buttonbar').fadeToggle('fast');
		$('.triggerbuttons').toggleClass('active');
		
		if( $('.buttonbar').not(":hover") ){

		console.log('nu weg');
		window.setTimeout(function(){
				console.log('weg');
						if( $('.buttonbar').is(':visible') ){
							window.setTimeout(function(){
						$('.buttonbar, .welcome').fadeOut('fast');
					}, 5000);
				}
					
				$('.triggerbuttons').removeClass('active');
			}, 13000);
		}
	});

});

