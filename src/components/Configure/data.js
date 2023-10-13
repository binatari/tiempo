export const settings = {
    // dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 16,
    slidesToScroll: 16,
    speed: 700,
    // centerPadding: '50px',
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                arrows: true,
                slidesToShow: 16,
                slidesToScroll: 16,
                infinite: false,
                speed: 700,
            },
        },
        {
            breakpoint: 1280,
            settings: {
                arrows: true,
                slidesToShow: 15,
                slidesToScroll: 15,
                infinite: false,
                speed: 700,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                arrows: true,
                slidesToShow: 10,
                slidesToScroll: 10,
                infinite: false,
                speed: 700,
            },
        },
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                slidesToShow: 14,
                slidesToScroll: 14,
                infinite: false,
                speed: 700,
            },
        },
        {
            breakpoint: 640,
            settings: {
                arrows: true,
                slidesToShow: 8,
                slidesToScroll: 8,
                speed: 700,
            },
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 6,
                slidesToScroll: 6,
                speed: 700,
            },
        },
    ],
};