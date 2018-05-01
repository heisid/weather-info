$(document).ready(function () {
    var x = document.getElementById("location-msg");
    var baseUrl = "https://fcc-weather-api.glitch.me";
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeather);
    } else {
        x.innerHTML = "Not supported";
    };

    function getWeather(position) {
        var lat = position.coords.latitude;
        var lgt = position.coords.longitude;
        var requestUrl = baseUrl + "/api/current?lon=" + lgt + "&lat=" + lat;
        x.innerHTML = "Lat: " + lat + " | " + "Longt: " + lgt;
        $.getJSON(requestUrl, function(json) {
            $("#weather-msg").html(JSON.stringify(json));
          });
    };
});