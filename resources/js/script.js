var menuToggle = document.getElementById('menu-toggle');
var menuMobile = document.getElementById('menu-mobile');

// Listen for menu toggle click
menuToggle.addEventListener('click', function () {
    menuMobile.classList.toggle('menu-mobile_active');
});