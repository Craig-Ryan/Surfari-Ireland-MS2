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
function initMap() {
var mapDonegal = new google.maps.Map(document.getElementById("map"), {
  zoom: 5,
  center: {
    lat: 54.498706,
    lng: -8.265106,
  }
});
}

function initMap2() {
var mapSligo = new google.maps.Map(document.getElementById("map-2"), {
  zoom: 5,
  center: {
    lat: 54.295404,
    lng: -8.946930,
  }
});
}