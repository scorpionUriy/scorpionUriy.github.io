const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeElem = document.querySelector('.menu__close'),
  active = document.querySelector('.active'),
  overlay = document.querySelector('.menu__overlay'),
  menuLink = document.querySelector('.menu__list');

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

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});



let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let selectOne = document.querySelector("select");
let cost = document.querySelector(".cost");
let deadlines = document.querySelector(".deadlines");

function calculatePrice() {
  const price = Number(one.value) + Number(two.value) + Number(three.value);

  cost.textContent = price + " руб";

  deadlines.textContent =
    price >= 20000 ? "до 20 дней" : price > 1 ? "до 7 дней" : 0;
}

selectOne.addEventListener("change", calculatePrice);
selectTwo.addEventListener("change", calculatePrice);
selectThree.addEventListener("change", calculatePrice);
