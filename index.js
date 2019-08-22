let STORE = {
 lat: 38.889651,
 lng: -77.03525
}


function initMap() {
    var options = {  
        zoom: 20, 
        center: {lat: STORE.lat, lng: STORE.lng }}
    let map = new google.maps.Map(document.getElementById('map'), (options)); 
    }

   $(initMap)