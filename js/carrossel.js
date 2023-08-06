const swiper = new Swiper('.swiper', {
    spaceBetween: 40,
    slidesPerView: 4,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});


const swiper2 = new Swiper('.swiper2', {
    spaceBetween: 100,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3300,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination2',
        type: 'bullets',
    },
});