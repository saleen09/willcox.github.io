
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var header = document.querySelector('header.tdata');
var section = document.querySelector('section.tdata');
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var tdata = request.response;
        /* populateHeader(tdata); */
        showTowns(tdata);


function showTowns(jsonObj) {
    var towns = jsonObj['towns'];
    var townNames = ["Fish Haven", "Soda Springs", "Preston"];
 
    for (var i = 0; i < towns.length; i++) {
    for (var x = 0; x < townNames.length; x++){
        if (towns[i].name == townNames[x])

     {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myTown1 = document.createElement('p');
        var myTown2 = document.createElement('p');
        var myTown3 = document.createElement('p');
        var myTown4 = document.createElement('p');
        var myEvent = document.createElement('ul');

        myH2.textContent = towns[i].name;
        myTown1.textContent = 'Year Founded: ' + towns[i].yearFounded;
        myTown2.textContent = 'Motto: ' + towns[i].motto;
        myTown3.textContent = 'Current Population:' + towns[i].currentPopulation;
        myTown4.textContent = 'Average Rainfall:' + towns[i].averageRainfall;
        myTown5.textContent = 'Events:' ;

        var events = towns[i].events;
        for (var z = 0; x < townNames.length; z++){
            var eventItem = document.createElement('li');
            myEvent.appendChild(eventItem);
        }

        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myTown1);
        myArticle.appendChild(myTown2);
        myArticle.appendChild(myTown3);
        myArticle.appendChild(myTown4);
        myArticle.appendChild(myEvent);

        section.appendChild(myArticle);
    }
    }

}

}
