let STORE = {
 lat: 38.889651,
 lng: -77.03525,
}



function initMap() {
    var options = {  
        zoom: 3, 
        mapTypeControlOptions: false,
        center: {lat: STORE.lat, lng: STORE.lng},
        disableDefaultUI: true,
        scaleControl: true,
        zoomControl: true,
        zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL
        }}
    map = new google.maps.Map(document.getElementById('map'), (options)); 
    }

    function autoSearch () {
        let input = document.getElementByID('pac-input');
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        var autocomplete = new google.maps.places.Autocomplete(input, options)
    }

function renderDoc () {
    initMap()
    autoSearch()
}

   $(renderDoc)