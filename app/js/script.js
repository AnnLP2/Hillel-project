/* ------------------------------------slider---------------------- */

(function () {
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
                    slidesToScroll: 2,
                    dots: true,
                },
            },
        ],
    });
})();

(function () {
    $(".js-slider-team").slick({
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    });
})();

/* ------------------------------------burger menu---------------------- */

(function () {
    var burger = document.querySelector(".menu__burger");
    if (!burger) return;
    var menu = document.querySelector(".menu__list");
    var overlay = document.querySelector(".menu__overlay");
    var body = document.querySelector("body");

    burger.addEventListener("click", function () {
        menu.classList.toggle("show");
        burger.classList.toggle("show");
        overlay.classList.toggle("show");
        body.classList.toggle("stop-scroll");
    });

    overlay.addEventListener("click", function () {
        menu.classList.remove("show");
        burger.classList.remove("show");
        overlay.classList.remove("show");
        body.classList.remove("stop-scroll");
    });
})();

(function () {
    var tabsBtns = document.querySelectorAll(".tabs__btn");
    var tabsContents = document.querySelectorAll(".tabs__content");

    tabsBtns.forEach(function (button, index) {
        button.addEventListener("click", function () {
            tabsBtns.forEach(function (buttonColor) {
                buttonColor.classList.remove("show");
            });
            tabsContents.forEach(function (text) {
                text.classList.remove("show");
            });
            button.classList.add("show");
            tabsContents[index].classList.add("show");
        });
    });
})();

/* ---------------------------------smooth scroll---------------------- */

$('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
        {
            scrollTop: $($(this).attr("href")).offset().top,
        },
        500,
        "linear"
    );
});
