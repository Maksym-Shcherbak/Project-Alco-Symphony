import '../../js/header/header';
import '../../js/darktheme/darktheme';
import '../../js/scroll-anime/scroll-anime';

function initMap() {
    var uluru = { lat: 50.42496555405263, lng: 30.53408527758109 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru
    });

    var marker = new google.maps.Marker({ position: uluru, map: map });
}
