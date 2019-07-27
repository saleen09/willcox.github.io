
   setTimeout(function(){}, 2000);
   let forecastRequest2 = new XMLHttpRequest();
   forecastRequest2.open("GET","https://api.openweathermap.org/data/2.5/forecast?id=5811696&APPID=e3928217ff6074698f148e595b686f23&units=imperial", true);
   forecastRequest2.send();
   forecastRequest2.onload = function () {
       let forecastData = JSON.parse(forecastRequest2.responseText);
       console.log(forecastData);

    var fcList = forecastData;
    var forecastTemp = [];
    var forecastCon = [];
    var forecastDesc = [];
    

    for(i = 0; i < fcList.list.length; i++){
        if(fcList.list[i].dt_txt.includes) {
            forecastCon.push(fcList.list[i].weather[0].icon);
            forecastTemp.push(fcList.list[i].main.temp);
            forecastDesc.push(fcList.list[i].weather[0].description);

        }
        

    }

    let img01 = forecastCon[0];


    let desc01 = forecastDesc[0];
 

    let temp01 = forecastTemp[0];


    

    document.getElementById('fcIcon1Spok').setAttribute("src", "https://openweathermap.org/img/w/" + img01 + ".png");

    document.getElementById('fTemp1Spok').innerHTML = temp01.toFixed(0)+" &deg;F";

    
    document.getElementById('fcIcon1Spok').setAttribute("alt", desc01); 

   }