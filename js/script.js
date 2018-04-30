$(document).ready(function () {
        var x = document.getElementById("location-msg");
        var baseurl = "https://fcc-weather-api.glitch.me/";

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
            x.innerHTML = "Latitude: " + position.coords.latitude +
                "&nbsp;Longitude: " + position.coords.longitude;
        }

        getLocation();
    });