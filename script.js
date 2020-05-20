const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav__list'); 
const links = document.querySelectorAll('.nav__item');
const body = document.querySelector('body');



hamburger.addEventListener('click', () => {
    body.classList.toggle('scroll');
    navList.classList.toggle('open'); 
    links.forEach(link => {
        link.classList.toggle('fade'); 
    }) 

});  





// const date = new Date().getFullYear();
// document.getElementById('year').textContent = date; 

