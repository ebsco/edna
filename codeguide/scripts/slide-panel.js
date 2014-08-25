$(function() {

    $(document).on('click', '.evt-respond', function() {
        var btnTxt = $(this).text();
        var btnTxtSplit = btnTxt.split(' ');
        if( btnTxtSplit[0] == 'Right') {
            $('.panel-row').toggleClass('open-right');
        } else {
            $('.panel-row').toggleClass('open-left');
        }
    });

});