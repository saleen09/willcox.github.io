
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var section = document.getElementById('tdata');
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var tdata = request.response;
    var towns = tdata['towns'];
    var townNames = ["Fish Haven", "Soda Springs", "Preston"];
 
    for (var i = 0; i < towns.length; i++) {
        for (var x = 0; x < townNames.length; x++){
            if (towns[i].name == townNames[x]) {
         
                var myEvent = document.createElement('ul'); 

                var events = towns[i].events;
                for (var z = 0; z < events.length; z++){
                    var eventItem = document.createElement('li');
                    eventItem.textContent = events[z];
                    myEvent.appendChild(eventItem);


                } 
                document.getElementById("events").appendChild(myEvent);

            }

        }
    }

} 

/*
myH2.textContent = towns[i].name;
myTown1.textContent = 'Year Founded: ' + towns[i].yearFounded;
myTown2.textContent = 'Motto: ' + towns[i].motto;
myTown3.textContent = 'Current Population:' + towns[i].currentPopulation;
myTown4.textContent = 'Average Rainfall:' + towns[i].averageRainfall;
myTown5.textContent = 'Events:' ;


                myArticle.appendChild(myH2);
                myArticle.appendChild(myTown1);
                myArticle.appendChild(myTown2);
                myArticle.appendChild(myTown3);
                myArticle.appendChild(myTown4);
                myArticle.appendChild(myTown5);
                myArticle.appendChild(myEvent); 
    
                section.appendChild(myArticle);

                */