$(function() {

    $(document).on('click', '.evt-respond', function() {
        var btnTxt = $(this).text();
        var btnTxtSplit = btnTxt.split(' ');
        if( btnTxtSplit[0] == 'Top') {
            $('.mq-pnl').toggleClass('mq-pnl-open-t');
        }
        if( btnTxtSplit[0] == 'Right') {
            $('.mq-pnl').toggleClass('mq-pnl-open-r');
        }
        if( btnTxtSplit[0] == 'Bottom') {
            $('.mq-pnl').toggleClass('mq-pnl-open-b');
        }
        if( btnTxtSplit[0] == 'Left') {
            $('.mq-pnl').toggleClass('mq-pnl-open-l');
        }
    });

});