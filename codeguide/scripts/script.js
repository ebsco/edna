$(function() {

    // treelist stuff
    $(document).on('click', '.list-item a', function() {
        $('.list-item').removeClass('active');
        $(this).parent('.list-item').addClass('active');
    });

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
    $(document).on('click', '.evt-active', function() {

        // get the title of the href clicked
        var navTitle = $(this).children('a').attr('title');

        loadPg(navTitle);

        // add the active class
        $(this).addClass('active').siblings().removeClass('active');
        
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