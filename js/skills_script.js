const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuCover = document.querySelector('.menu-cover');
const menuPopup = document.querySelector('.menu-popup');
const closeButton = document.querySelector('.close-button');

hamburgerMenu.addEventListener('click', () => {
    menuCover.classList.toggle('active');
    menuPopup.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

closeButton.addEventListener('click', () => {
    menuCover.classList.remove('active');
    menuPopup.classList.remove('active');
    document.body.classList.remove('no-scroll');
});
