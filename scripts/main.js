const body = document.querySelector('body');
const hamburger = document.getElementById('hamburger');
const nav_links = document.querySelector('.nav-links');
const back = document.getElementById('back-icon');
const zoom_image = document.querySelector('.zoom-image');
const zoom_figure_image = document.querySelector('.zoom-figure-image');
const close_zoom_figure_image = document.querySelector('.close-zoom-figure-image');

hamburger.addEventListener('click', () => {
    nav_links.style.right = '0px';
});

back.addEventListener('click', () => {
    nav_links.style.right = '-200px';
});

document.addEventListener('click', event => {
    if (!event.target.classList.contains('open-image')) return;
    zoom_figure_image.classList.toggle('disable');
    zoom_image.setAttribute('src', event.target.currentSrc);
});

close_zoom_figure_image.addEventListener('click', () => {
    zoom_figure_image.classList.toggle('disable');
});