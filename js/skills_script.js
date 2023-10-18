
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}



// const hamburgerMenu = document.querySelector('.hamburger-menu');
// const menuCover = document.querySelector('.menu-cover');
// const menuPopup = document.querySelector('.menu-popup');

// hamburgerMenu.addEventListener('click', () => {
//     menuCover.classList.toggle('active');
//     menuPopup.classList.toggle('active');
//     document.body.classList.toggle('no-scroll');
// });

// // Close the menu when clicking outside the menu popup
// document.addEventListener('click', (event) => {
//     if (!menuPopup.contains(event.target) && !hamburgerMenu.contains(event.target)) {
//         menuCover.classList.remove('active');
//         menuPopup.classList.remove('active');
//         document.body.classList.remove('no-scroll');
//     }
// });
