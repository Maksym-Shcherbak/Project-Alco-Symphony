import '../../js/header/header';
import '../../js/darktheme/darktheme';
import '../../js/scroll-anime/scroll-anime';
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: 'AIzaSyDC5qC38Dlsq_sEEHeuPB-4KriRluwLxo8',
  version: 'weekly',
});

loader.load().then(async () => {
  const { Map } = await google.maps.importLibrary('maps');

  const map = new Map(document.getElementById('map'), {
    center: { lat: 50.42496555405263, lng: 30.53408527758109 },
    zoom: 20,
  });
});
