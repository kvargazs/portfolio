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