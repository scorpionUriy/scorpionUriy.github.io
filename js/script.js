const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      active = document.querySelector('.active'),
      overlay = document.querySelector('.menu__overlay'),
      menuLink = document.querySelector('.menu__list')

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLink.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.work__ratings-counter'),
    lines = document.querySelectorAll('.work__ratings-line span');

counters.forEach( (item, i) =>{
    lines[i].style.width = item.innerHTML;
});