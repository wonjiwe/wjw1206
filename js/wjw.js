/*至頂效果*/

$(document).ready(function () {
    var offset = 300;       /*往下滾到哪就出現TOP鈕*/
    var duration = 500;     /*往上跑的速度，數字越大越慢*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('.to-top').fadeIn(duration);
        } else {
            $('.to-top').fadeOut(duration);
        }
    });

    $('.to-top').click(function () {
        $('body').animate({
            scrollTop: 0    /*往上跑到哪的位置*/
        }, duration);
    })
});
