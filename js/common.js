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


/*
window.addEventListener('scroll', function () {
    console.log(window.scrollY);
});
*/