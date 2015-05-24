//media="only screen and (min-width: 1000px), only screen and (min-device-width: 1000px)"

var ui=0;
function contup() {
    $('.mcont').animate({
        scrollTop: $(".mcont").scrollTop()+310
    }, 500);
}


function contdown() {
    $('.mcont').animate({
        scrollTop: $(".mcont").scrollTop()-310
    }, 500);
}
jQuery(document).ready( function($) {



window.location.href="#slide-1";
var x = 0, y = 0,
    vx = 0, vy = 0,
  ax = 0, ay = 0;
//start of eye
(function ani1() {
$('.lidT').delay(1000).animate({
        top: '-40'
    }, 500).delay(200).animate({
        top: '-80'
    },$.extend(true, {}, {
            complete: function() {
               ani1();
            }
         })
      )
    })();


(function ani2() {

    $('.lidB').delay(1000).animate({
        bottom: '-40'
    }, 500).delay(200).animate({
        bottom: '-80'
    },$.extend(true, {}, {
            complete: function() {
               ani2();
            }
         })
      );
    })();

var DrawEye = function(eyecontainer, pupil, eyeposx, eyeposy, eyer){
  $("#monstereyes").append("<div id='" + eyecontainer + "'><div id='" + pupil + "'></div></div>")
  
  eyecontainer = "#" + eyecontainer;
  pupil = "#" + pupil;
  
  $(eyecontainer).css({left:eyeposx, top:eyeposy});
  $(pupil).css({width:eyer*0.4,height:eyer*0.4});
  $(eyecontainer).css({width:eyer,height:eyer});
  $(pupil).css({position: 'relative', background: '#000000', 'border-radius':'50%'});
  $(eyecontainer).css({position:'absolute', background:'#FFFFFF', overflow:'hidden', 'border-radius': '50%'});
  
  // Initialise core variables
  var r = $(pupil).width()/2;
  var center = {
    x: $(eyecontainer).width()/2 - r, 
    y: $(eyecontainer).height()/2 - r
  };
  var distanceThreshold = $(eyecontainer).width()/2 - r;
  var mouseX = center.x, mouseY = center.y;
  
  // Listen for mouse movement
  $(window).mousemove(function(e){ 
    var d = {
      x: e.pageX - r - eyeposx - center.x,
      y: e.pageY - r - eyeposy - center.y
    };
    var distance = Math.sqrt(d.x*d.x + d.y*d.y);
    if (distance < distanceThreshold) {
      mouseX = e.pageX - eyeposx - r;
      mouseY = e.pageY - eyeposy - r;
    } else {
      mouseX = d.x / distance * distanceThreshold + center.x;
      mouseY = d.y / distance * distanceThreshold + center.y;
    }
  });
  
  //accelerometer
 if (window.DeviceMotionEvent != undefined) {
  window.ondevicemotion = function(e) {
    ax = event.accelerationIncludingGravity.x * 5;
    ay = event.accelerationIncludingGravity.y * 5;
  
 var landscapeOrientation = window.innerWidth/window.innerHeight > 1;
    if ( landscapeOrientation) {
      vx = vx + ay;
      vy = vy + ax;
    } else {
      vy = vy - ay;
      vx = vx + ax;
    }
    vx = vx * 0.98;
    vy = vy * 0.98;
    y = parseInt(y + vy / 50);
    x = parseInt(x + vx / 50);
    
    
    
   var pupil = $(pupil);
  var xp = center.x, yp = center.y;
  var loop = setInterval(function(){
    // change 1 to alter damping/momentum - higher is slower
    xp += (x - xp) / 1;
    yp += (y - yp) / 1;
    pupil.css({left:xp, top:yp});    
  }, 1);

    
  
} 

  }


   



  // Update pupil location
  var pupil = $(pupil);
  var xp = center.x, yp = center.y;
  var loop = setInterval(function(){
    // change 1 to alter damping/momentum - higher is slower
    xp += (mouseX - xp) / 1;
    yp += (mouseY - yp) / 1;
    pupil.css({left:xp, top:yp});    
  }, 1);
};

var eye = new DrawEye("eye1", "pupil1", 97, 17, 17);
var eye = new DrawEye("eye2", "pupil2", 129, 12, 23);
var eye = new DrawEye("eye3", "pupil3", 181, 14, 19);
var eye = new DrawEye("eye4", "pupil4", 212, 15, 17);
var eye = new DrawEye("eye5", "pupil5", 266, 6, 16);
var eye = new DrawEye("eye6", "pupil6", 295, 16, 25);
var eye = new DrawEye("eye7", "pupil7", 332, 15, 17);
var eye = new DrawEye("eye8", "pupil8", 357, 5, 16);
var eye = new DrawEye("eye9", "pupil9", 95, 40, 15);
var eye = new DrawEye("eye10", "pupil10", 120, 44, 23);
var eye = new DrawEye("eye11", "pupil11", 164, 36, 23);
var eye = new DrawEye("eye12", "pupil12", 231, 34, 15);
var eye = new DrawEye("eye13", "pupil13", 256, 27, 14);
var eye = new DrawEye("eye14", "pupil14", 339, 39, 18);
var eye = new DrawEye("eye15", "pupil15", 362, 28, 16);
var eye = new DrawEye("eye16", "pupil16", 383, 39, 16);
var eye = new DrawEye("eye17", "pupil17", 94, 67, 22);
var eye = new DrawEye("eye18", "pupil18", 129, 70, 23);
var eye = new DrawEye("eye19", "pupil19", 179, 72, 18);
var eye = new DrawEye("eye20", "pupil20", 210, 55, 21);
var eye = new DrawEye("eye21", "pupil21", 243, 63, 19);
var eye = new DrawEye("eye22", "pupil22", 275, 42, 23);
var eye = new DrawEye("eye23", "pupil23", 315, 54, 26);
var eye = new DrawEye("eye24", "pupil24", 361, 57, 17);
var eye = new DrawEye("eye25", "pupil25", 378, 80, 17);
var eye = new DrawEye("eye26", "pupil26", 100, 100, 18);
var eye = new DrawEye("eye27", "pupil27", 166, 95, 24);
var eye = new DrawEye("eye28", "pupil28", 213, 88, 18);
var eye = new DrawEye("eye29", "pupil29", 279, 72, 28);
var eye = new DrawEye("eye30", "pupil30", 348, 88, 24);
var eye = new DrawEye("eye31", "pupil31", 130, 114, 28);
var eye = new DrawEye("eye32", "pupil32", 185, 113, 44);
var eye = new DrawEye("eye33", "pupil33", 243, 97, 31);
var eye = new DrawEye("eye34", "pupil34", 299, 103, 30);
var eye = new DrawEye("eye35", "pupil35", 341, 116, 24);
var eye = new DrawEye("eye36", "pupil36", 123, 151, 23);
var eye = new DrawEye("eye37", "pupil37", 265, 133, 32);
var eye = new DrawEye("eye38", "pupil38", 320, 143, 28);
var eye = new DrawEye("eye39", "pupil39", 109, 201, 32);
var eye = new DrawEye("eye40", "pupil40", 163, 166, 39);
var eye = new DrawEye("eye41", "pupil41", 231, 170, 50);
var eye = new DrawEye("eye42", "pupil42", 297, 188, 32);
var eye = new DrawEye("eye43", "pupil43", 345, 178, 32);
var eye = new DrawEye("eye44", "pupil44", 117, 247, 42);
var eye = new DrawEye("eye45", "pupil45", 169, 211, 65);
var eye = new DrawEye("eye46", "pupil46", 250, 230, 79);
var eye = new DrawEye("eye47", "pupil47", 343, 239, 40);
var eye = new DrawEye("eye48", "pupil48", 95, 298, 39);
var eye = new DrawEye("eye49", "pupil49", 167, 289, 21);
var eye = new DrawEye("eye50", "pupil50", 211, 277, 33);
var eye = new DrawEye("eye51", "pupil51", 338, 304, 30);




//end of eye


	if( $.fn.fsvs ) {
		var slider = $.fn.fsvs({
			speed : 1000,
			nthClasses : 5,
			mouseDragEvents : false
		});
	}

	if( $.fn.flare ) {
		var flares = $('.flare').flare();
		for( var flare in flares ) {
			//flares[flare].reset();
		}
	}

	var sectionHeight = $('#fsvs-body > .slide:eq(0)').height();
	$('#fsvs-body > .slide').each( function(){
		var section = $(this),
			item = $('.item', section ),
			demo = $('.demo', section ),
			itemHeight = item.outerHeight(),
			demoHeight = demo.outerHeight();
		item.css({
			marginTop : ( ( sectionHeight - itemHeight ) / 2 ) + 'px'
		});
		demo.css({
			marginTop : ( ( sectionHeight - demoHeight ) / 2 ) + 'px'
		});

	});


});