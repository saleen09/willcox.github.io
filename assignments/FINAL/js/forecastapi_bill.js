
setTimeout(function(){}, 3000);
   let forecastRequest3 = new XMLHttpRequest();
   forecastRequest3.open("GET","https://api.openweathermap.org/data/2.5/forecast?id=5640350&APPID=e3928217ff6074698f148e595b686f23&units=imperial", true);
   forecastRequest3.send();
   forecastRequest3.onload = function () {
       let forecastData = JSON.parse(forecastRequest3.responseText);
       console.log(forecastData);

    var fcList = forecastData;
    var forecastTemp = [];
    var forecastCon = [];
    var forecastDesc = [];
    
    for (i = 0; i < fcList.list.length; i++) {
        if (fcList.list[i].dt_txt.includes) {
            forecastCon.push(fcList.list[i].weather[0].icon);
            forecastTemp.push(fcList.list[i].main.temp);
            forecastDesc.push(fcList.list[i].weather[0].description);

        }


    }

    let img01 = forecastCon[0];


    let desc01 = forecastDesc[0];


    let temp01 = forecastTemp[0];




    document.getElementById('fcIcon1Bill').setAttribute("src", "https://openweathermap.org/img/w/" + img01 + ".png");

    document.getElementById('fTemp1Bill').innerHTML = temp01.toFixed(0) + " &deg;F";


    document.getElementById('fcIcon1Bill').setAttribute("alt", desc01);
}
