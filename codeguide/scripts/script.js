$(function() {

	// call in scripts
	var scriptArr = [
		'select',
		'slide-panel',
		'toggle',
		'treelist'
	]
	for(var i = 0; i < scriptArr.length; i++) {
		var imported = document.createElement('script');
		imported.src = 'scripts/' + scriptArr[i] + '.js';
		document.head.appendChild(imported);
	}

	// get a url hash
	var loc = window.location.hash;

	var loadPg = function(navTitle, value) {
	    $.get('pages/' + navTitle + '.html', function(data) {
			var navTxt = $('[title=' + navTitle + ']').text();
			$('.cg-head-h1 a').text('Edna CodeGuide' + ' - ' + navTxt);
			$('[title=' + navTitle + ']').parent().addClass('active').siblings().removeClass('active');
			window.location.hash = navTitle.toLowerCase();
			var template = Handlebars.compile(data);
			$(".evt-load").html(template(data));
			prettyPrint();
		});
	}

	// do stuff on nav click
	$(document).on('click', '.evt-active', function(data) {

		// get the title of the href clicked
		var navTitle = $(this).children('a').attr('title');

		loadPg(navTitle);

		var classes = data.currentTarget.className;

		classArr = classes.split(' ');
		for(var i = 0; i < classArr.length; i++) {
			if( classArr[i] === 'cg-nav-side-item' ) {
				$('.cg-nav-side-item').removeClass('active');
				$(this).addClass('active');
			}
		}
	})
	
	// if reloading page look for hash
	if(loc) {
		var loc = loc.split('#');
		loadPg(loc[1]);
	}

});