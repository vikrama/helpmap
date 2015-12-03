/**
 * Created by vikram.aravamudhan on 12/2/2015.
 */


window.CH = window.CH || {};
CH.map = null;
CH.initMap = function() {
    CH.map = new google.maps.Map(document.getElementById('Map'), {
        center: {lat: 13.052303, lng: 80.197542},
        zoom: 12
    });
};