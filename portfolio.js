
const navItems = document.getElementById('nav-items');
const hamburgerMenu = document.getElementById('hamburger-menu');

function toggleNavItems() {
    if (navItems.style.display === 'none' || navItems.style.display === '') {
        navItems.style.display = 'flex';
        hamburgerMenu.innerHTML = '&#10006;';  // Change to X icon
    } else {
        navItems.style.display = 'none';
        hamburgerMenu.innerHTML = '&#9776;';   // Change back to hamburger icon
    }
}


function hideNavItems() {
    navItems.style.display = 'none';
    hamburgerMenu.innerHTML = '&#9776;';
}


hamburgerMenu.addEventListener('click', function(event) {
    toggleNavItems();
    event.stopPropagation(); 
});

// Click outside navItems to hide them
document.addEventListener('click', function(event) {
    if (!navItems.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        hideNavItems();
    }
});

// Hide navItems when a menu link is clicked
document.querySelectorAll('.phone-items a').forEach(function(link) {
    link.addEventListener('click', hideNavItems);
});
