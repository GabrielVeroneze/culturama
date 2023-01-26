const swiper = new Swiper('.swiper', {

    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})