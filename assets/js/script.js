//Start Navbar scroll JS 

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleNavigation() {
    var navToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    navToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

//End Navbar scroll JS 