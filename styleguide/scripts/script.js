$(function() {

    var loadPg = function(navTitle) {
        // load the correct content
        $.get('pages/' + navTitle + '.html', function(data) {
            $('.evt-load').html(data);
            $('.sg-head-h1').append('<span>').text('Edna Styleguide' + ' - ' + navTitle);
            window.location.hash = navTitle.toLowerCase();
            $('.sg-nav-side-item a[title="' + navTitle + '"]').parent().addClass('active').siblings().removeClass('active');
        });        
    }
    
    // get a url hash
    var loc = window.location.hash;

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

});