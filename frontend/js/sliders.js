jQuery(function ($) {
    // arrow icons
    var arrowLeft = '<div class="arrow-slide arrow-left-slide"></div>';
    var arrowRight = '<div class="arrow-slide arrow-right-slide"></div>';

    var partnersSlider = $('.js-slider-partners');
    var partnersOption = {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false,
        nextArrow: '<button type="button" class="slider_btn--next slider_btn"> ' + arrowRight + ' </button>',
        prevArrow: '<button type="button" class="slider_btn--prev slider_btn">' + arrowLeft + '</button>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
            }
        }, {
            breakpoint: 998,
            settings: {
                slidesToShow: 4,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 321,
            settings: {
                slidesToShow: 1,
            }
        }]

        //accessibility: false // prevent page scroll up on autoplay
    };
    var reviewSlider = $('.js-review-slider');
    var reviewOption = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: true,
        nextArrow: '<button type="button" class="slider_btn--next slider_btn"> ' + arrowRight + ' </button>',
        prevArrow: '<button type="button" class="slider_btn--prev slider_btn">' + arrowLeft + '</button>',

        //accessibility: false // prevent page scroll up on autoplay
    };
    var photoSlider = $('.js-photo-slider');
    var photoOption = {
        slidesToShow: 5,
        slidesToScroll: 1,

        // infinite: true,
        arrows: true,
        dots: false,
        nextArrow: '<button type="button" class="slider_btn--next slider_btn"> ' + arrowRight + ' </button>',
        prevArrow: '<button type="button" class="slider_btn--prev slider_btn">' + arrowLeft + '</button>',
        responsive: [  {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },  {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }]
        //accessibility: false // prevent page scroll up on autoplay
    };


    // init slider
    partnersSlider.slick(partnersOption);
    reviewSlider.slick(reviewOption);
    photoSlider.slick(photoOption);


}); // ready