$(function() {

	var pin = $('.pin');
	var pinPos = pin.position();
	var pinTopPos = Math.ceil(pinPos.top);

	$(window).on('scroll', function() {
		var pinW = pin.width();

		var scrollTop = $(window).scrollTop();
		elemPosFixed = pinTopPos - scrollTop;

		if( elemPosFixed > 0 ) {
			pin.removeClass('fixed').css('width', 'auto');
		} else {
			pin.addClass('fixed').css('width', pinW);
		}

	});

	$(window).bind('resize', function(e) {
		window.resizeEvt;
		$(window).resize(function() {
			clearTimeout(window.resizeEvt);
			window.resizeEvt = setTimeout(function() {
				var pinW = pin.parent('.col').width();
				console.log('blam = ' + pinW);
				pin.css('width', pinW);
			}, 250);
		});
	});

});