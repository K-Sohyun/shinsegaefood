//플로팅메뉴
const floating = document.querySelector('#floating_tab');

setTimeout(function() {
    floating.classList.add('on');
}, 500);


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

document.querySelectorAll('#all_menu .dep2_ul').forEach(function(subUl){
    if (subUl.querySelector('.dep3_ul')) {
        subUl.classList.add('sub_yes');
    }
});


//모바일메뉴
const dep1Lis = document.querySelectorAll('#all_menu .dep1_li');
let isMobile = window.innerWidth <= 768;

function menuToggle(dep1A, dep2Ul) {
    dep1A.classList.toggle('on');
    dep2Ul.classList.toggle('show');
}

dep1Lis.forEach(function (dep1Li) {
    const dep1A = dep1Li.querySelector('.dep1_a');

    dep1A.addEventListener('click', function (event) {
        const dep2Ul = dep1Li.querySelector('.dep2_ul');

        if (isMobile && dep2Ul) {
            event.preventDefault();
            menuToggle(dep1A, dep2Ul);
        }
    });
});

window.addEventListener('resize', function () {
    isMobile = window.innerWidth <= 768;
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
    slidesPerView: 1.5,
    spaceBetween: 15,
    loop: true,
    loopedSlides: 7,
    navigation: {
        nextEl: "#main_sec2 .btn-next",
        prevEl: "#main_sec2 .btn-prev",
    },
    breakpoints: {
        420: {
          slidesPerView: 2.5,  //브라우저가 420 이상
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3.5,  //브라우저가 768 이상
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,  //브라우저가 1024 이상
          spaceBetween: 25,
        },
    },
    observer : true
});

var mainSwiper2 = new Swiper(".main_swiper2", {
    slidesPerView: 1.5, 
    spaceBetween: 15,
    loop: true,
    loopedSlides: 10,
    navigation: {
        nextEl: "#main_sec4 .btn-next",
        prevEl: "#main_sec4 .btn-prev",
    },
    breakpoints: {
        420: {
          slidesPerView: 2.5,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3.5, 
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5, 
          spaceBetween: 25,
        },
    },
    observer : true
});

var mainSwiper3 = new Swiper(".main_swiper3", {
    slidesPerView: 1.3, 
    spaceBetween: 15,
    loop: true,
    loopedSlides: 10,
    navigation: {
        nextEl: "#main_sec6 .btn-next",
        prevEl: "#main_sec6 .btn-prev",
    },
    breakpoints: {
        768: {
          slidesPerView: 2.5,  
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
    },
    observer : true
});