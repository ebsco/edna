$(function() {

    $(document).on('click', '.evt-toggler', function() {
        $(this).next().toggleClass('cg-toggled');
    });

});