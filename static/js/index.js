$(document).ready(function() {
    var defaultOptions = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
    };

    // Initialize generic carousels (exclude our specific multi-item ones)
    bulmaCarousel.attach('.carousel:not(.carousel-2-items):not(.carousel-3-items):not(.carousel-4-items)', defaultOptions);

    // Initialize 2-item carousels
    bulmaCarousel.attach('.carousel-2-items', {
        slidesToScroll: 1,
        slidesToShow: 2,
        loop: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        pagination: true,
    });

    // Initialize 3-item carousels
    bulmaCarousel.attach('.carousel-3-items', {
        slidesToScroll: 1,
        slidesToShow: 3,
        loop: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        pagination: true,
    });

    // Initialize 4-item carousels (if needed later)
    bulmaCarousel.attach('.carousel-4-items', {
        slidesToScroll: 1,
        slidesToShow: 4,
        loop: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        pagination: true,
    });
})
