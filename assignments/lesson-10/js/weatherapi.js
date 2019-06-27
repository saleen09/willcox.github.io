
let weatherRequest = new XMLHttpRequest();
weatherRequest.open("GET","https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=e3928217ff6074698f148e595b686f23&units=imperial", true);
weatherRequest.send();
weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementbyId('current-temp').innerHTML = weatherData.main.temp;
}
