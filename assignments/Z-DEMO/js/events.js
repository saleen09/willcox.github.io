var article = document.querySelector('article');
            var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
            var request = new XMLHttpRequest();
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            request.onload = function() {
                var towns = request.response;
                showGreenville(towns);
            }
            function showGreenville(jsonObj) {
                var towns = jsonObj['towns'];
                var myH3 = document.createElement('h3');
                var myPara1 = document.createElement('p');
                var myPara2 = document.createElement('p');
                var myPara3 = document.createElement('p');
                var myPara4 = document.createElement('p');
                var myPara5 = document.createElement('p');
                var myList = document.createElement('ul');
                
                myH3.textContent = towns[1].name;
                myPara1.textContent = 'Motto: ' + towns[1].motto;
                myPara2.textContent = 'Year Founded: ' + towns[1].yearFounded;
                myPara3.textContent = 'Current Population: ' + towns[1].currentPopulation;
                myPara4.textContent = 'Average Rainfall: ' + towns[1].averageRainfall;
                myPara5.textContent = 'Events: ';

                var events = towns[1].events;
                for (var j = 0; j < events.length; j++) {
                  var listItem = document.createElement('li');
                  listItem.textContent = events[j];
                  myList.appendChild(listItem);
                }
                article.appendChild(myH3);
                article.appendChild(myPara1);
                article.appendChild(myPara2);
                article.appendChild(myPara3);
                article.appendChild(myPara4);
                article.appendChild(myPara5);
                article.appendChild(myList);
            }