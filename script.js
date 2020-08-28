const hamburger =  document.getElementById('nav-hamburger');
const navUL= document.getElementById('nav-desktop');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
}