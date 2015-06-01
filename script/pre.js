function hereDoc(f) {
    	  return f.toString().
    	      replace(/^[^\/]+\/\*!?/, '').
    	      replace(/\*\/[^\/]+$/, '');
    	}
		var afterClockHTML = hereDoc(function(){/*!
		*/
    	});
		var tennysonquote = afterClockHTML;
		function preloadAll(){
		    var preload = new createjs.LoadQueue(true);
		    preload.on("complete", handleComplete, this);
		    preload.loadFile("img/1.jpg");
		    preload.loadFile("img/1.png");
		    preload.loadFile("img/10.jpg");
		    preload.loadFile("img/11.jpg");
		    preload.loadFile("img/12.jpg");
		    preload.loadFile("img/13.jpg");
		    preload.loadFile("img/14.jpg");
		    preload.loadFile("img/2.jpg");
		    preload.loadFile("img/2.png");
		    preload.loadFile("img/3.jpg");
		    preload.loadFile("img/3.png");
		    preload.loadFile("img/4.jpg");
		    preload.loadFile("img/4.png");
		    preload.loadFile("img/5.jpg");
		    preload.loadFile("img/5.png");
		    preload.loadFile("img/6.jpg");
		    preload.loadFile("img/6.png");
		    preload.loadFile("img/7.jpg");
		    preload.loadFile("img/8.jpg");
		    preload.loadFile("img/9.jpg");
		    preload.loadFile("img/c1.png");
		    preload.loadFile("img/c2.png");
		    preload.loadFile("img/c3.png");
		    preload.loadFile("img/c4.png");
		    preload.loadFile("img/cbh.png");
		    preload.loadFile("img/cont");
		    preload.loadFile("img/dd.gif");
		    preload.loadFile("img/gradient.png");
		    preload.loadFile("img/h10.png");
		    preload.loadFile("img/h9.png");
		    preload.loadFile("img/hallo.png");
		    preload.loadFile("img/horse.png");
		    preload.loadFile("img/monster.png");
		    preload.loadFile("img/nodots.png");
		    preload.loadFile("img/noisebg.png");
		    preload.loadFile("img/o1.png");
		    preload.loadFile("img/o2.png");
		    preload.loadFile("img/png1.png");
		    preload.loadFile("img/qm.gif");
		    preload.loadFile("img/sun.png");
		    preload.loadFile("img/sun1.png");
		    preload.loadFile("img/vinyl.png");
		    preload.loadFile("img/png2.png");
		    preload.loadFile("img/png3.png");
		}
		function handleComplete(){
		window.location.href="#slide-1";
		setTimeout(
		function (){

		    //document.getElementById('fsvs-body').innerHTML = "";
		    
		    // document.getElementById('fsvs-body').innerHTML += tennysonquote;
		    $( function() {
		        $( '#st-stack' ).stackslider();
		    });
		
		    if( $.fn.fsvs ) {
		      var slider = $.fn.fsvs({
		        speed : 1000,
		        nthClasses : 5,
		        mouseDragEvents : false
		      });
		    }
		    var DrawEye = function(eyecontainer, pupil, eyeposx, eyeposy, eyer){
		      $("#monstereyes").append("<div id='" + eyecontainer + "'><div id='" + pupil + "'></div></div>")
		      
		      eyecontainer = "#" + eyecontainer;
		      pupil = "#" + pupil;
		      
		      $(eyecontainer).css({left:eyeposx-40, top:eyeposy-40});
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

			/*$('.pagination-link > span > span')[0].innerHTML="<span class='pagination-text' id='pt'>sds</span>"
			$('.pagination-link > span > span > span')[0].innerHTML="sdsd";
			$('.pagination-link > span > span')[1].innerHTML="<span class='pagination-text'>About</span>"
			$('.pagination-link > span > span')[2].innerHTML="<span class='pagination-text'>Gallery</span>"
			$('.pagination-link > span > span')[3].innerHTML="<span class='pagination-text'>Contacts</span>"
			$('.pagination-link > span > span')[4].innerHTML="<span class='pagination-text'>Sponsorships</span>"*/

		    //end of eye
		    setTimeout(function (){
		    	$('.preload').hide();
		    }, 1200);


		},1000);}
