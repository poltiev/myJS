//scroll top
$(window).scroll(function () {
    var height = $(window).scrollTop();
    /*скролл на 100px*/
    if (height > 100) {
        $('.top-menu').addClass('active');
    } else {
        $('.top-menu').removeClass('active');
    }
});