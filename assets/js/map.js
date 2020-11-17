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
    content: "<h5>Tullan Strand</h5><a href='index.html#bundoran'>Click here for more info</a>"
  },

  {
    latlong: {lat: 54.481584, lng: -8.271604},
    content: "<h5>Bundoran Surf Co</h5><a href='index.html#bundoran'>Click here for more info</a>"
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



