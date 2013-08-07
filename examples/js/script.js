$(function() {
	// start by loading the readme.html file
	$.get('readme.html', function(data) {
		$('.result').html(data);
	});

	// on nav-item click
	$('.nav-item').on('click', function() {
		// get the kind
		var kind = $(this).data('kind');
			splitKind = kind.split('-');
			lowerKind = kind.toLowerCase();
		// get the page stuff
		$.get(kind + '.html', function(data) {
			$('.result').html(data);
			document.title = 'DNA - ' + splitKind[1];
		});
	});
});