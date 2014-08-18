$(function() {

    // remove active class from treelist
    $(document).on('click', '.list-item .txt-link', function() {
        $('.list-item').removeClass('active');
        $(this).parent().addClass('active');
    });

});