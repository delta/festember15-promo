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

});
