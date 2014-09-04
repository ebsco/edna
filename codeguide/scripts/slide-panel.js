window.onload = init;
function init() {
    var links = document.querySelectorAll('.evt-respond');
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = runIt;
    }
}

function runIt(e) {
    var btnTxt = e.srcElement.innerText;
    switch(btnTxt) {
        case 'Top':
            var side = 't';
            break;
        case 'Right':
            var side = 'r';
            break;
        case 'Bottom':
            var side = 'b';
            break;
        case 'Left':
            var side = 'l';
            break;
    }
    var mainPanel = document.getElementsByClassName('mq-pnl');
    for (var i = 0; i < mainPanel.length; i++) {
        var blam = mainPanel[i].className;
        var newBlam = blam.split(' ');
        for (var j = 0; j < newBlam.length; j++) {
            var tst = newBlam[j];
            var newTst = tst.split('-');
            if(newBlam[2]) {
                $(this).parent('.slide-nav').siblings('.mq-pnl').removeClass(newBlam[2]);
            }
        }
    }
    $(this).parent('.slide-nav').siblings('.mq-pnl').toggleClass('mq-pnl-open-' + side);
}