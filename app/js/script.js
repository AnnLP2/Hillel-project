$(".js-slider").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10,
    dotsClass: "my-dots",
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                dots: true,
            },
        },
    ],
});
