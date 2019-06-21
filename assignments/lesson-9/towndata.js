
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var header = document.querySelector('header');
var section = document.querySelector('section');
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var tdata = request.response;
    populateHeader(tdata);
    showTowns(tdata);
}

    /*function populateHeader(jsonObj) {
        var myH1 = document.createElement('h1');
        myH1.textContent = jsonObj['squadName'];
        header.appendChild(myH1); -->

                    < !––  var myPara = document.createElement('p');
        myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
        header.appendChild(myPara);
    } */

        function showTowns(jsonObj) {
            var towns = jsonObj['towns'];

            for (var i = 0; i < towns.length; i++) {
                /* var myArticle = document.createElement('article');
                < !––var myH2 = document.createElement('h2');*/
                var myTown1 = document.createElement('p');
                var myTown2 = document.createElement('p');
                var myTown3 = document.createElement('p');
                var myTown4 = document.createElement('p');
                /*var myList = document.createElement('ul');*/

                myH2.textContent = towns[i].name;
                myTown1.textContent = 'Year Founded: ' + towns[i].yearFounded;
                myTown2.textContent = 'Motto: ' + towns[i].motto;
                myTown3.textContent = 'Current Population:' + towns[i].currentPopulation;
                myTown4.textContent = 'Average Rainfall:' towns[i].averageRainfall;

                /*var superPowers = heroes[i].powers;
                for (var j = 0; j < superPowers.length; j++) {
                    var listItem = document.createElement('li');
                    listItem.textContent = superPowers[j];
                    myList.appendChild(listItem);
                }

                myArticle.appendChild(myH2);
                myArticle.appendChild(myPara1);
                myArticle.appendChild(myPara2);
                myArticle.appendChild(myPara3);
                myArticle.appendChild(myList);

                section.appendChild(myArticle);
            }*/
                }

            }