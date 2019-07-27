
setTimeout(function(){}, 1000);
let weatherRequest = new XMLHttpRequest();
weatherRequest.open("GET", "https://github.com/saleen09/willcox.github.io/blob/master/assignments/Z-DEMO/temples.json", true);
weatherRequest.send();
weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(templeData);

    document.getElementById('templeP').innerHTML = temples.statusP;
    document.getElementById('templeS').innerHTML = temples.statusS;
    document.getElementById('templeB').innerHTML = temples.statusB;
    document.getElementById('templeR').innerHTML = temples.statusR;


}

