document.getElementById('hamburger-menu').addEventListener('click', function() {
    var navItems = document.getElementById('nav-items');
    if (navItems.style.display === 'none' || navItems.style.display === '') {
        navItems.style.display = 'flex'; 
       
    } else {
        navItems.style.display = 'none';  
    }
});

var menuLinks = document.querySelectorAll('.phone-items a');
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById('nav-items').style.display = 'none'; 
    });
})

