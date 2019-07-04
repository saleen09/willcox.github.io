
let weatherRequest = new XMLHttpRequest();
weatherRequest.open("GET","https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=e3928217ff6074698f148e595b686f23&units=imperial", true);
weatherRequest.send();
weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('cTemp').innerHTML = weatherData.main.temp;
    document.getElementById('hTemp').innerHTML = weatherData.main.temp_max;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('wSpeed').innerHTML = weatherData.wind.speed;
    document.getElementById('cCond').innerHTML = weatherData.weather[0].main;

}
