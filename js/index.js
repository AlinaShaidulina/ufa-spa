const menu = document.querySelector(".j-menu");
const navbar = document.querySelector(".j-navbar");

menu.addEventListener('click', () => {
    navbar.classList.toggle("is-open");
});

new Glide('.j-greetings-carousel', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 10,
    animationDuration: 500,
    autoplay: 6000,
    swipeThreshold: 20,
}).mount()

new Glide('.j-pros-carousel', {
    type: 'carousel',
    startAt: 0,
    perView: 5,
    breakpoints: {
        767: {
            perView: 1,
        },
        991: {
            perView: 3,
        }
    },
    gap: 10,
    animationDuration: 800,
    autoplay: 3000,
    swipeThreshold: 20,
    keyboard: true,
}).mount()

new Glide('.j-photo-carousel', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    breakpoints: {
        767: {
            perView: 1,
        },
        991: {
            perView: 3,
        }
    },
    gap: 10,
    animationDuration: 800,
    autoplay: 5000,
    swipeThreshold: 20,
    keyboard: true,
}).mount()




