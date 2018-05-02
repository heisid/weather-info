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
            $("#location-msg").html("Lat: " + json.coord.lat + " | " + "Longt: " + json.coord.lon + " | " + json.name);
            var mainWeather = json.weather[0].main + ", " + json.main.temp + "&deg;C<br><img src=" + json.weather[0].icon + "> ";
            $("#main-weather-msg").html(mainWeather);
            $("#td-temp").html(json.main.temp + " &deg;C");
            $("#td-pressure").html(json.main.pressure + " mbar");
            $("#td-humidity").html(json.main.humidity + " &percnt;");
            $("#td-speed").html(json.wind.speed + " kmph");
            $("#td-direction").html(json.wind.deg + " &deg;");
          });
    };
});