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
        var panelClasses = mainPanel[i].className;
        var panelClassesArr = panelClasses.split(' ');
        for (var j = 0; j < panelClassesArr.length; j++) {
            var tst = panelClassesArr[j];
            var newTst = tst.split('-');
            if(panelClassesArr[2]) {
                $('.mq-pnl').removeClass(panelClassesArr[2]);
            } else {
                $('.mq-pnl').addClass('mq-pnl-open-' + side);
            }
        }
    }
}