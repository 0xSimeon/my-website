(() => {const ul = document.querySelector('.header-nav__list');

const hamburger = document.querySelector('.header__hamburger-icon');

hamburger.addEventListener('click', () => {
ul.classList.toggle('show');
hamburger.classList.toggle('show');
})})()




const date = new Date().getFullYear();
document.getElementById('year').textContent = date; 

