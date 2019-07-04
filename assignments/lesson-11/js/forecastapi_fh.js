
   let forecastRequest = new XMLHttpRequest();
   forecastRequest.open("GET","https://api.openweathermap.org/data/2.5/forecast?zip=83287&APPID=e3928217ff6074698f148e595b686f23&units=imperial", true);
   forecastRequest.send();
   forecastRequest.onload = function () {
       let forecastData = JSON.parse(forecastRequest.responseText);
       console.log(forecastData);

    var fcList = forecastData;
    var forecastTemp = [];
    var forecastCon = [];
    var forecastDesc = [];
    

    for(i = 0; i < fcList.list.length; i++){
        if(fcList.list[i].dt_txt.includes ('18:00:00')) {
            forecastCon.push(fcList.list[i].weather[0].icon);
            forecastTemp.push(fcList.list[i].main.temp);
            forecastDesc.push(fcList.list[i].weather[0].description);

        }
        

    }

    let img01 = forecastCon[0];
    let img02 = forecastCon[1];
    let img03 = forecastCon[2];
    let img04 = forecastCon[3];
    let img05 = forecastCon[4];

    let desc01 = forecastDesc[0];
    let desc02 = forecastDesc[1];
    let desc03 = forecastDesc[2];
    let desc04 = forecastDesc[3];
    let desc05 = forecastDesc[4];

    let temp01 = forecastTemp[0];
    let temp02 = forecastTemp[1];
    let temp03 = forecastTemp[2];
    let temp04 = forecastTemp[3];
    let temp05 = forecastTemp[4];

    

    document.getElementById('fcIcon1').setAttribute("src", "https://openweathermap.org/img/w/" + img01 + ".png");
    document.getElementById('fcIcon2').setAttribute("src", "https://openweathermap.org/img/w/" + img02 + ".png");
    document.getElementById('fcIcon3').setAttribute("src", "https://openweathermap.org/img/w/" + img03 + ".png");
    document.getElementById('fcIcon4').setAttribute("src", "https://openweathermap.org/img/w/" + img04 + ".png");
    document.getElementById('fcIcon5').setAttribute("src", "https://openweathermap.org/img/w/" + img05 + ".png");

    document.getElementById('fTemp1').innerHTML = temp01.toFixed(0)+" &deg;F";
    document.getElementById('fTemp2').innerHTML = temp02.toFixed(0)+" &deg;F";
    document.getElementById('fTemp3').innerHTML = temp03.toFixed(0)+" &deg;F";
    document.getElementById('fTemp4').innerHTML = temp04.toFixed(0)+" &deg;F";
    document.getElementById('fTemp5').innerHTML = temp05.toFixed(0)+" &deg;F";
    
    document.getElementById('fcIcon1').setAttribute("alt", desc01); 
    document.getElementById('fcIcon2').setAttribute("alt", desc02); 
    document.getElementById('fcIcon3').setAttribute("alt", desc03); 
    document.getElementById('fcIcon4').setAttribute("alt", desc04); 
    document.getElementById('fcIcon5').setAttribute("alt", desc05);
   }
