let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link')

burger.addEventListener('click',
    function () {

        burger.classList.toggle('burger--active')

        menu.classList.toggle('header__nav--active')

        document.body.classList.toggle('stop-scroll')
    })

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {

        burger.classList.renove('burger--avtive');

        menu.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll')
    })
})

const btnMore = document.querySelector('.articles-more');
const articlesItems = document.querySelectorAll('.articales-item');

btnMore.addEventListener('click', () => {
    articlesItems.forEach(el => { el.classList.add('articles-item--visible') });
    btnMore.closest('.articles-center').classList.add('articles-center--hidden');
});