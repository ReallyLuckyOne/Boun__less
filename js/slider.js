$(document).ready(function () {

    $('.team__slider').slick({

        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        waitForAnimate: true,
        draggable: false

    });

    $('.testimonial__slider').slick({

        arrows: false,
        dots: true,
        draggable: false,
        infinite: false,
        slidestoshow: 1,
        slidesToScroll: 1,
        waitForAnimate: true,

        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnDotsHover: true,
        pauseOnFocus: true,


    });


    $('.blog__slider').slick({

        arrows: false,
        dots: true,
        draggable: false,
        infinite: false,
        slidestoshow: 1,
        slidesToScroll: 1,
        waitForAnimate: true,

        vertical: true


    });
});