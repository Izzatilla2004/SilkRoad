const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        enabled: true,
        delay: 1500,
    },
    speed: 1500,
    pagination: {
        el: '.swiper-pagination',
    },
});

// swiper-clients
const swiperClients = new Swiper('.swiper-clients', {
    loop: true,

    pagination: {
        el: '.pagination',
    },
    autoplay: {
        enabled: true,
        delay: 1500,
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 35,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    },
    speed: 1500,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// swiper-news
const swiperNews = new Swiper('.swiper-news', {
    loop: true,

    autoplay: {
        enabled: true,
        delay: 1500,
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        }
    },
    speed: 1500,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    pagination: {
        el: '.pagination2',
    },
});

// navbar__burger

$(".navbar__burger").on("click", function () {
    $(".navbar__burger_line").toggleClass('_active');
})

$(".navbar__burger").on("click", function () {
    $('.media_nav').toggleClass('show');
});

// dropdown
$(".about-comp").on("click", function () {
    if ($(".link__dropdown-media").css("display") == "none") {
        $(".link__dropdown-media").slideDown(600);
        $(".angle").css("transform", "rotate(-180deg)");
    }
    else {
        $(".link__dropdown-media").slideUp(600);
        $(".angle").css("transform", "rotate(0deg)");
    }
});

// dropdown2
$(".uslugi-link").on("click", function () {
    if ($(".link__dropdown-media2").css("display") == "none") {
        $(".link__dropdown-media2").slideDown(600);
        $(".angle2").css("transform", "rotate(-180deg)");
    }
    else {
        $(".link__dropdown-media2").slideUp(600);
        $(".angle2").css("transform", "rotate(0deg)");
    }
});