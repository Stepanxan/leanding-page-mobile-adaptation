const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

// Нажимання по кнопці навігації//
navBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    toggleMobileNav();
})

// Нажимання по вікну за межами навігації щоб її закрити//
window.addEventListener('click', function () {
    console.log('click on window');


    if (body.classList.contains('no-scroll')) {
        toggleMobileNav();
    }
})

//Нажимання всередині відкритої мобільної навігації//
mobileNav.addEventListener('click', function (event) {
    event.stopPropagation();
})


function toggleMobileNav() {
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-buttom-close');
    body.classList.toggle('no-scroll');
}