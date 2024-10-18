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


//패밀리사이트
const familyBtn = document.querySelector('.fam_btn');
const familyList = document.querySelector('.fam_list');

familyBtn.addEventListener('click', function () {
    familyBtn.classList.toggle('on');
    familyList.classList.toggle('on');
});


//탑버튼
const topBtn = document.querySelector('#top_btn');

window.addEventListener('scroll', function () {
    if (this.scrollY > 600) {
        topBtn.classList.add('on');
    } else {
        topBtn.classList.remove('on');
    }
});

topBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


//메인 애니
const mainEls = document.querySelectorAll('.main_sec');

window.addEventListener('scroll', function () {
    let winT = document.documentElement.scrollTop;
    let winH = window.innerHeight; //브라우저 창 높이
    let winB = winT + winH; //뷰포트 하단

    mainEls.forEach(function (mainEl) {
        let mainElT = mainEl.offsetTop;
        let mainElH = mainEl.offsetHeight;
        let mainElB = mainElT + mainElH; //요소의 하단

        if (mainElB >= winT && mainElT <= winB) {
            mainEl.classList.add('ani');
        } else {
            mainEl.classList.remove('ani');
        }
    });
});


//슬라이드
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
    slidesPerView: 4, 
    spaceBetween: 25,
    loop: true,
    loopedSlides: 10,
    navigation: {
        nextEl: "#main_sec6 .btn-next",
        prevEl: "#main_sec6 .btn-prev",
    },
});