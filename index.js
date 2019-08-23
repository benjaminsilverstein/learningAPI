let STORE = {
    lat: '',
    lng: '',
    map: '',
    hookahEstabs: '',
    bars:''
}

let apiKey = 'AIzaSyDslPaSzuA4uilxgpLWhF9dF8tFhD9cnpM'

function initMap() {
    let options = {
        zoom: 9,
        mapTypeControlOptions: false,
        center: {
            lat: 38.889651,
            lng: -77.03525,
        },
        disableDefaultUI: true,
        scaleControl: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        }
    }
    STORE.map = new google.maps.Map(document.getElementById('map'), (options));
}

function createSearch() {
    let options = {
        types: ['(cities)'],
        componentRestrictions: {
            country: "us"
        }
    };
    let input = document.getElementById('pac-input');
    let autocomplete = new google.maps.places.Autocomplete(input, (options))

    autocomplete.addListener('place_changed', onPlaceChanged);

    function onPlaceChanged() {
        var place = autocomplete.getPlace();
        if (place.geometry) {
            STORE.map.panTo(place.geometry.location);
            STORE.map.setZoom(15);
            getLatLong(place);
        } else {
           document.getElementById('pac-input').placeholder = 'Enter a city';
        }
    }
}

function getLatLong(place) {
    STORE.lat = place.geometry.location.lat();
    STORE.lng = place.geometry.location.lng();
    console.log(STORE)
}

function getResults () {
    var originalURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${apiKey}&location=${STORE.lat},${STORE.lng}&radius=48280&keyword=hookah&opennow=true`;
    var queryURL = "https://cors-anywhere.herokuapp.com/" + originalURL
    fetch(queryURL)
        .then(response => response.json())
        .then(res => { 
            STORE.bars = res.results.filter((result) => {
            return result.types.indexOf('store') == -1;
        })})
        console.log(STORE.bars)
}


function watchForm() {
$('form').submit(event => {
 event.preventDefault();
getResults()
})}


function renderDoc() {
    initMap()
    createSearch()
    watchForm()
}



$(renderDoc)