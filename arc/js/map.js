// Initialize and add the map
function initMap() {
    // The location of Uluru
    const ellicottville = { lat:42.275533879195606, lng: -78.67326966329463};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: ellicottville,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: ellicottville,
      map: map,
    });
  }