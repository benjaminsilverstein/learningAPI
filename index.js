let STORE = {
    lat: '',
    lng: '',
    map: '',
    hookahEstabs: '',
    bars:'',
    barsInfo:'',
    autocomplete:'',
    marker:''
}

let apiKey = 'AIzaSyDslPaSzuA4uilxgpLWhF9dF8tFhD9cnpM'

function initMap() {
    let options = {
        zoom: 6,
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
        },
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "gamma": 0.01
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "saturation": -31
                    },
                    {
                        "lightness": -33
                    },
                    {
                        "weight": 2
                    },
                    {
                        "gamma": 0.8
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#050505"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#fef3f3"
                    },
                    {
                        "weight": "3.01"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#0a0a0a"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#fffbfb"
                    },
                    {
                        "weight": "3.01"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 30
                    },
                    {
                        "saturation": 30
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "saturation": 20
                    }
                ]
            },
            {
                "featureType": "poi.attraction",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 20
                    },
                    {
                        "saturation": -20
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 10
                    },
                    {
                        "saturation": -30
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "saturation": 25
                    },
                    {
                        "lightness": 25
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#a1a1a1"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#292929"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#202020"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#0006ff"
                    },
                    {
                        "saturation": "-100"
                    },
                    {
                        "lightness": "13"
                    },
                    {
                        "gamma": "0.00"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#686868"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "color": "#8d8d8d"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#353535"
                    },
                    {
                        "lightness": "6"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "weight": "3.45"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#d0d0d0"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "lightness": "2"
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#999898"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#383838"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#faf8f8"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        // "lightness": -20
                        color:  "#f55158"
                    }
                ]
            }
        ]
        
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
     STORE.autocomplete = new google.maps.places.Autocomplete(input, (options))}


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
        })
        console.log(STORE.bars);
        if (STORE.bars.length < 1) {
            $('.notOpen-js').html(`<span class="background">Sorry! Doesn't appear any hookah bars are open in your area right now.</span>`);
            $('.results-container').empty()  
    } else {
        $('.notOpen-js').empty()
        createMarkers()
        getDetails()

    }

    })
}

function createMarkers() {
    for (let i=0; i < STORE.bars.length; i++)
    {
   STORE.marker = new google.maps.Marker({
        position: STORE.bars[i].geometry.location,
        map: STORE.map,
        content: `<h3>${STORE.bars[i].name}</h3><p>${STORE.bars[i].vicinity}</p>
        <p>${STORE.bars[i].rating}</p>`
    })
    STORE.marker.addListener('click', function(){
        var infoWindow = new google.maps.InfoWindow({
            content: STORE.marker.content})
        infoWindow.open(map, STORE.marker);
      });}
}

function getDetails () {
    for (let i = 0; i < STORE.bars.length; i++) {
    let request = {
        placeId: STORE.bars[i].place_id,
        fields: ['url', 'formatted_address', 'formatted_phone_number', 'rating', 'opening_hours', 'website','name']
      };
      let service = new google.maps.places.PlacesService($('.results-container').get(0));;
service.getDetails(request, function(place) 
{renderResults(place)
})}    
}

function renderResults (place) {
    console.log(place)
    $('.results-container').append
    (`<div class="result-item"><h2>${place.name}</h2>
    <p><span class="key">Address:</span> ${place.formatted_address}</p>
    <p><span class="key">Phone: </span>${place.formatted_phone_number}</p>
    <p><span class="key">Hours:</span> ${place.weekday_text}</p>
    <p><span class="key">Rating:</span>${place.rating}.</p>
    <div><a class="website-button" href="${place.website}" target="_blank">Visit website</a></div>
</div></div>`)
    }

    // function setMapOnAll(map) {
    //     for (var i = 0; i < STORE.markers.length; i++) {
    //       STORE.markers[i].setMap(map);
    //     }
    //   }

    // function clearMarkers() {
    //     setMapOnAll(null);
    //   }

    // function deleteMarkers() {
    //     clearMarkers();
    //     STORE.markers = [];}

 function shiftMap() {
        var place = STORE.autocomplete.getPlace();
        if (place === undefined) {
            $('.lil-error').slideDown(100)
            $('.results-container').empty()
        }
        else if (place.geometry) {
            $('.lil-error').hide()
            STORE.map.panTo(place.geometry.location);
            STORE.map.setZoom(9);
            getLatLong(place);
            getResults()
             $('html, body').animate({
            scrollTop: $("#map").offset().top
             }, 2000);
        } else {
           document.getElementById('pac-input').placeholder = 'Enter city';
        }}
    



function watchForm() {
$('form').submit(event => {
    event.preventDefault();
     STORE.lat = ''
    STORE.lng = ''
 var place = STORE.autocomplete.getPlace();

 shiftMap()      
})}


function renderDoc() {
    initMap()
    createSearch()
    watchForm()
}



$(renderDoc)