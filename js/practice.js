$(document).ready(function () {
    var offset = 300;       /*往下滾到哪就出現TOP鈕*/
    var duration = 2000;     /*往上跑的速度，數字越大越慢*/
    $('#news').click(function () {
        $('body').animate({
            scrollTop: 0    /*往上跑到哪的位置*/
        }, duration);
    })
});