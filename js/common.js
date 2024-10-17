//전체메뉴
const menuOpen = document.querySelector('#all_open');
const menuClose = document.querySelector('#all_close');
const allMenu = document.querySelector('#all_menu');

menuOpen.addEventListener('click', function () {
    menuClose.classList.add('on');
    allMenu.classList.add('on');
});

menuClose.addEventListener('click', function () {
    menuClose.classList.remove('on');
    allMenu.classList.remove('on');
});

document.querySelectorAll('#all_menu .dep2_ul').forEach(function(dep2Ul){
    if (dep2Ul.querySelector('.dep3_ul')) {
        dep2Ul.classList.add('sub_yes');
    }
});

var mainSwiper1 = new Swiper(".main_swiper1", {
    slidesPerView: 5, 
    spaceBetween: 25,
    loop: true,
    loopedSlides: 7,
    navigation: {
        nextEl: "#main_sec2 .btn-next",
        prevEl: "#main_sec2 .btn-prev",
    },
});

var mainSwiper2 = new Swiper(".main_swiper2", {
    slidesPerView: 5, 
    spaceBetween: 25,
    loop: true,
    loopedSlides: 10,
    navigation: {
        nextEl: "#main_sec4 .btn-next",
        prevEl: "#main_sec4 .btn-prev",
    },
});

var mainSwiper3 = new Swiper(".main_swiper3", {
    slidesPerView: 5, 
    spaceBetween: 25,
    loop: true,
    loopedSlides: 10,
    navigation: {
        nextEl: "#main_sec6 .btn-next",
        prevEl: "#main_sec6 .btn-prev",
    },
});


/*
window.addEventListener('scroll', function () {
    console.log(window.scrollY);
});
*/