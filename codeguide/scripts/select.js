$(function() {

    // dropdowns, opening and closing
    $(document).on('click', '.select', function() {
        $(this).children('.select-list').toggleClass('active');
    });
    $(document).on('click', '.select-label', function() {
        $(this).toggleClass('active');
    });

});