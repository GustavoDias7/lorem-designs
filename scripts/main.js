const hamburger = document.getElementById('hamburger');
const nav_links = document.querySelector('.nav-links');
const back = document.getElementById('back-icon');

hamburger.addEventListener('click', () => {
    nav_links.style.right = '0px';
});

back.addEventListener('click', () => {
    nav_links.style.right = '-200px';
});