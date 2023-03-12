const btn = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
btn.addEventListener('click',function(){
    navbar.classList.toggle('open');
});