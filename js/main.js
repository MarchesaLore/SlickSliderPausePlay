
$(window).bind("load", function () {

    $('.image_slider').slick({ dots: true, fade: true, autoplay: true, speed: 2000 });
    
        $(".slick-pause").click(function () {
            $(".image_slider").slick('slickPause');
        });
        $(".slick-play").click(function () {
            $(".image_slider").slick('slickPlay');
        });
});