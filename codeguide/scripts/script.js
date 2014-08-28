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
			var data = { 
			    example: [ {
			    	count: {
			    		one: "One",
			    		two: "Two",
			    		three: "Three",
			    		four: "Four",
			    		five: "Five"
			    	},
			    	button: {
			    		main: "Button",
			    		click: "Click Me",
			    		group: "Button Group",
			    		select: "Select",
			    		search: "Search"
			    	},
			    	list: "Item",
			    	heading: "Heading",
			    	lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem lectus, pellentesque in metus molestie, adipiscing tincidunt erat. Curabitur a nibh nunc. Vestibulum dignissim vulputate tortor at mattis. Vivamus ut odio nunc. Duis a aliquet ante. Suspendisse porta eu sem eu adipiscing. Ut tempus eleifend turpis vel viverra. Duis nulla lacus, ultricies sed blandit cursus, sollicitudin id felis.",
			    	placeholder: "placeholder text",
			    	tag: "Level",
			    	comment: {
			    		html: "more markup here"
			    	}
			    } ]
			}; 

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