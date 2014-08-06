$(function() {

    // add active class to clicked
    $(document).on('click', '.evt-active', function() {
        $(this).addClass('active').siblings().removeClass('active');    
    })

});