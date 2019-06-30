
   let forecastRequest = new XMLHttpRequest();
   forecastRequest.open("GET","https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=e3928217ff6074698f148e595b686f23&units=imperial", true);
   forecastRequest.send();
   forecastRequest.onload = function () {
       let forecastData = JSON.parse(forecastRequest.responseText);
       console.log(forecastData);

    var fcList = forecastData;
    var forecastCon = [];
    

    for(i = 0; i < fcList.length; i++){
        if(fcList[i].dt_txt.includes ('18:00:00')) {
            forecastCon.push(fcList[i].weather[0].icon);
            forecastTemp.push(fcList[i].main.temp);

        }
        
        let img01 = forecastCon[0];
        let img02 = forecastCon[1];
        let img03 = forecastCon[2];
        let img04 = forecastCon[3];
        let img05 = forecastCon[4];

        let temp01 = forecastTemp[0];
        let temp02 = forecastTemp[1];
        let temp03 = forecastTemp[2];
        let temp04 = forecastTemp[3];
        let temp05 = forecastTemp[4];

        document.getElementById('fcImg0').setAttribute("src", "http://openweathermap.org/img/w/" + img01 + ".png");
        document.getElementById('fcImg1').setAttribute("src", "http://openweathermap.org/img/w/" + img02 + ".png");
        document.getElementById('fcImg2').setAttribute("src", "http://openweathermap.org/img/w/" + img03 + ".png");
        document.getElementById('fcImg3').setAttribute("src", "http://openweathermap.org/img/w/" + img04 + ".png");
        document.getElementById('fcImg4').setAttribute("src", "http://openweathermap.org/img/w/" + img05 + ".png");

        document.getElementById('fTemp1').innerHTML = temp01.toFixed(0)+" &deg;F";
        document.getElementById('fTemp2').innerHTML = temp02.toFixed(0)+" &deg;F";
        document.getElementById('fTemp3').innerHTML = temp03.toFixed(0)+" &deg;F";
        document.getElementById('fTemp4').innerHTML = temp04.toFixed(0)+" &deg;F";
        document.getElementById('fTemp5').innerHTML = temp05.toFixed(0)+" &deg;F";
        
    }
   }
