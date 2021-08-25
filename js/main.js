$(function () {
    $('[data-fancybox]').fancybox({});

    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-text',
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-l.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-r.png" alt="next"></button>'
    });
    $('.heroes__slider-text').slick({
        slidesToShow: 1,
        fade: true,
        arrows: false,
        asNavFor: '.heroes__slider-img',
    });
});