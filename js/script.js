const menuItems = document.querySelectorAll('.menu ul li');

menuItems.forEach(item => {
    item.addEventListener('click', function () {
        // Remove 'clicked' class from all menu items
        menuItems.forEach(menuItem => {
            menuItem.classList.remove('clicked');
        });

        // Add 'clicked' class to the clicked menu item
        item.classList.add('clicked');
    });
});
