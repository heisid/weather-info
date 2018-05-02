$(document).ready(function () {
    var baseUrl = "https://fcc-weather-api.glitch.me";
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeather);
    } else {
        $("#location-msg").html("Not supported");
    };

    function getWeather(position) {
        var requestUrl = baseUrl + "/api/current?lon=" + position.coords.longitude + "&lat=" + position.coords.latitude;
        $.getJSON(requestUrl, function(json) {
            $("#location-msg").html("Lat: " + json.coord.lat + " | " + "Longt: " + json.coord.lon);
            $("#main-weather-msg").html("<img src=" + json.weather[0].icon + "> " + json.weather[0].main);
            $("#weather-msg").html(JSON.stringify(json));
          });
    };
});