$(function() {
    var slideNow = 1;
    var slideCount = $('.section-slider__wrap').children().length;
    var slideTime = 5000;
    var navBtn = $('.nav-slider');

    navBtn.click(function() {
        navBtn = $(this).index();
        $('.active').removeClass('active');
        $(this).toggleClass('active');
        if (navBtn + 1 != slideNow) {
            var translateWidth = -$('.section-slider__top').width()	* (navBtn);
            $('.section-slider__wrap').css({
                'transform': 'translate('+translateWidth+'px,0)',
                '-o-transform': 'translate('+translateWidth+'px,0)',
                '-webkit-transform': 'translate('+translateWidth+'px,0)'
            });
            slideNow = navBtn + 1;
        }
    });

    // setInterval(nextSlide, slideTime);

    $('.btn-next').click(nextSlide);
    $('.btn-prev').click(prevSlide);



    function nextSlide() {
        if (slideNow == slideCount || slideNow <=0 || slideNow > slideCount) {
            $('.section-slider__wrap').css({
                'transform': 'translate(0,0)',
                '-o-transform': 'translate(0,0)',
                '-webkit-transform': 'translate(0,0)'
            });
            slideNow = 1;
        } else {
            var translateWidth = -$('.section-slider__top').width()	* (slideNow);
            $('.section-slider__wrap').css({
                'transform': 'translate('+translateWidth+'px,0)',
                '-o-transform': 'translate('+translateWidth+'px,0)',
                '-webkit-transform': 'translate('+translateWidth+'px,0)'
            });
            slideNow++;
        }
    }
    function prevSlide() {
        if (slideNow == 1 || slideNow <=0 || slideNow > slideCount) {
            var translateWidth = -$('.section-slider__top').width() * (slideCount - 1);
            $('.section-slider__wrap').css({
                'transform': 'translate('+translateWidth+'px,0)',
                '-o-transform': 'translate('+translateWidth+'px,0)',
                '-webkit-transform': 'translate('+translateWidth+'px,0)'
            });
            slideNow = slideCount;
        } else {
            var translateWidth = -$('.section-slider__top').width()	* (slideNow - 2);
            $('.section-slider__wrap').css({
                'transform': 'translate('+translateWidth+'px,0)',
                '-o-transform': 'translate('+translateWidth+'px,0)',
                '-webkit-transform': 'translate('+translateWidth+'px,0)'
            });
            slideNow--;
        }
    }
});