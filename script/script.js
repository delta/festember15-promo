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


/*

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

*/

});
