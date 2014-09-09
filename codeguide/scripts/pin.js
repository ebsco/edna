$(function() {

	var pin = $('.pin');
	var pinPos = pin.position();
	var pinTopPos = Math.ceil(pinPos.top);

	$(window).on('scroll', function() {
		var scrollTop = $(window).scrollTop();
		elemPosFixed = pinTopPos - scrollTop;

		if( elemPosFixed > 0 ) {
			pin.removeClass('fixed')
		} else {
			pin.addClass('fixed');
		}
	});

});