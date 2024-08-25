

navigator.geolocation.getCurrentPosition(function(pos) {
    initMap(pos.coords.latitude, pos.coords.longitude);
},
function() {
    
    const defaultLat = 26.91174924378982; 
    const defaultLng = 29.49679278011803;
    initMap(defaultLat, defaultLng);
});

function initMap(x, y) {
    const myLatLng = { lat: x, lng: y };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: myLatLng,
    });

    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Selected Location",
    });
}

document.getElementById('positionSelect').addEventListener('change', function() {
    const selectedPosition = this.value;
    document.getElementById('selectedPosition').innerText = selectedPosition || 'None';

    // تحديد الإحداثيات بناءً على الموقع المختار
    let lat, lng;
    switch (selectedPosition) {
        case 'Mansoura':
            lat = 31.04292471034576;
            lng = 31.366661807061654;
            break;
        case 'Giza':
            lat = 29.9765;
            lng = 31.1313;
            break;
        case 'Cairo':
            lat = 30.0444;
            lng = 31.2357;
            break;
        case 'luxor':
            lat = 25.6872;
            lng = 32.6396;
            break;
        case 'Behaira':
            lat = 30.8270;
            lng = 30.3390;
            break;
        default:
            lat = 30.0444;
            lng = 31.2357;
    }

    // تحديث الخريطة بناءً على الإحداثيات الجديدة
    initMap(lat, lng);
});



