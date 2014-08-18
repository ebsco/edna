$(function() {

    // call in scripts
    var scriptArr = [
        'scripts/treelist.js'
    ]
    for(var i = 0; i < scriptArr.length; i++) {
        var imported = document.createElement('script');
        imported.src = scriptArr[i];
        document.head.appendChild(imported);
    }

    // get a url hash
    var loc = window.location.hash;

    var loadPg = function(navTitle, value) {
        // load the correct content
        $.get('pages/' + navTitle + '.html', function(data) {
            var navTxt = $('[title=' + navTitle + ']').text();
            $('.evt-load').html(data);
            $('.Cg-head-h1').append('<span>').text('Edna CODEGUIDE' + ' - ' + navTxt);
            $('[title=' + navTitle + ']').parent().addClass('active').siblings().removeClass('active');
            window.location.hash = navTitle.toLowerCase();
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

    // dropdowns, opening and closing
    $(document).on('click', '.select', function() {
        $(this).children('.select-list').toggleClass('active');
    });
    $(document).on('click', '.select-label', function() {
        $(this).toggleClass('active');
    });

});