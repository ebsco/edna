$(function() {
	function replaceActive() {
		$(document).on('click', '.dd .dd-list-item', function() {
			var txt = $(this).text();
			$(this).parent('.dd-list').siblings('.dd-active').children('.txt').text(txt);
		});
	}
	// open up the dropdown menu
	$(document).on('click', '.dd-active', function() {
		$(this).toggleClass('open');
		replaceActive();
	});
});