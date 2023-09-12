// Dark Mode
        $(document).ready(function () {
            
            $("#flexSwitchCheckDefault").change(function () {
                
                if ($(this).prop("checked")) {
                    
                    $("html").addClass("dark");
                } else {
                   
                    $("html").removeClass("dark");
                }
            });


            const textElement = document.querySelector('#text')
            ityped.init(textElement, {  strings: ['Unsere Website .', 'wird bald verfügbar sein.',' Bitte besuchen Sie uns bald wieder!',] });
// card-map

var map = L.map('map').setView([51.505, -0.09], 13);

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('<b>Hello world!</b><br />unsere Haus.').openPopup();

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map).bindPopup('I am a circle.');

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map).bindPopup('I am a polygon.');


var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent('I am a standalone popup.')
    .openOn(map);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent('You clicked the map at ' + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

//Countdown


    function updateCountdown() {
        const targetDate = new Date("2024-12-03");
        const now = new Date();
        const timeDiff = targetDate - now;

        if (timeDiff > 0) {
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            $("#days").text(days);
            $("#hours").text(hours.toString().padStart(2, '0'));
            $("#minutes").text(minutes.toString().padStart(2, '0'));
            $("#seconds").text(seconds.toString().padStart(2, '0'));
        } else {
            
          
           
            $("#alert").html("<strong>Heads up!</strong><p>Du hast leider chaunce verloren</p>");
        }
    }

    updateCountdown();

    const interval = setInterval(updateCountdown, 1); 
});

      
