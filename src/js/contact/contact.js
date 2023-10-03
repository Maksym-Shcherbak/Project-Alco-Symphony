import '../../js/header/header';
import '../../js/darktheme/darktheme';
import '../../js/scroll-anime/scroll-anime';

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 50.42496555405263, lng: 30.53408527758109 },
    zoom: 20,
  });
}

initMap();

