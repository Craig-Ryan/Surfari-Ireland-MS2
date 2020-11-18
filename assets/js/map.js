// Map code from 
function initMap() {
var map = new google.maps.Map(document.getElementById("map"), {
  zoom: 6,
  center: {
    lat: 53.221535,
    lng: -7.698995,
  }
});

var markers = [

  {
    latlong: {lat: 54.498706, lng: -8.265278},
    content: "<h5>Tullan Strand</h5><a href='index.html#bundoran'>Click here for more info</a>",
    icon: "assets/images/beach-icon.png",
  },

  {
    latlong: {lat: 54.481584, lng: -8.271604},
    content: "<h5>Bundoran Surf Co</h5><a href='index.html#bundoran'>Click here for more info</a>",
    icon: "assets/images/surf-icon.png",
  },

  {
    latlong: {lat: 54.480299 , lng: -8.275250},
    content: "<h5>The Chasin' Bull</h5><a href='index.html#bundoran'>Click here for more info</a>",
    icon: "assets/images/restaurant-icon.png",
  },

  {
    latlong: {lat: 54.447026, lng: -8.283573 },
    content: "<h5>Surf N Turf Tours</h5><a href='index.html#bundoran'>Click here for more info</a>",
    icon:  "assets/images/lodging-icon.png",
  },
  {
    latlong: {lat: 52.933920 , lng: -9.347830},
    content: "<h5>Lahinch Beach</h5><a href='index.html#lahinch'>Click here for more info</a>",
    icon: "assets/images/beach-icon.png",
  },
  {
    latlong: {lat: 52.932967 , lng: -9.347281},
    content: "<h5>O'Looney's Bar & Grill</h5><a href='index.html#lahinch'>Click here for more info</a>",
    icon: "assets/images/restaurant-icon.png",
  },
  {
    latlong: {lat: 52.933340 , lng: -9.347351},
    content: "<h5>Ben's Surf Clinic</h5><a href='index.html#lahinch'>Click here for more info</a>",
    icon: "assets/images/surf-icon.png",
  },
  {
    latlong: {lat: 52.931126, lng: -9.345978},
    content: "<h5>Lahinch Surf Hostel</h5><a href='index.html#lahinch'>Click here for more info</a>",
    icon: "assets/images/lodging-icon.png",
  },
  {
    latlong: {lat: 54.270165 , lng: -8.610356},
    content: "<h5>Strandhill Beach</h5><a href='index.html#strandhill'>Click here for more info</a>",
    icon: "assets/images/beach-icon.png",
  },
  {
    latlong: {lat: 54.267432 , lng: -8.596023},
    content: "<h5>The Venue Bar & Grill</h5><a href='index.html#strandhill'>Click here for more info</a>",
    icon: "assets/images/restaurant-icon.png",
  },
  {
    latlong: {lat: 54.269588 , lng: -8.609928},
    content: "<h5>Cois Farraige Lodge</h5><a href='index.html#strandhill'>Click here for more info</a>",
    icon: "assets/images/lodging-icon.png",
  },
  {
    latlong: {lat: 54.270718 , lng: -8.608768},
    content: "<h5>Strandhill Surf School</h5><a href='index.html#strandhill'>Click here for more info</a>",
    icon: "assets/imagessurf-icon.png",
  },

];

for (var i = 0; i <markers.length; i++) {
  addMarker(markers[i]);
}

function addMarker(props) {
  var marker = new google.maps.Marker( {
    position: props.latlong,
    map: map,
  });

      if (props.icon) {
      // set icon image
      marker.setIcon(props.icon);
    }

  if (props.content) {
    var infoWindow = new google.maps.InfoWindow( {
      content: props.content,
    });

     marker.addListener("click", function () {
        infoWindow.open(map, marker);
        infowindow.close();
      });
  }
}
}



