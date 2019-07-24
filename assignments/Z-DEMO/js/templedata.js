
var requestURL = 'https://github.com/saleen09/willcox.github.io/blob/master/assignments/Z-DEMO/temples.json';

var section = document.getElementById('tdata');
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var tdata = request.response;
    var towns = tdata['towns'];
    var townNames = ["Pocatello, ID", "Spokane, ID", "Billings, MT", "Rexburg, ID"];
 
    for (var i = 0; i < towns.length; i++) {
        for (var x = 0; x < townNames.length; x++){
            if (towns[i].name == townNames[x]) {
                var myArticle = document.createElement('article');
                var myH2 = document.createElement('h2');
                var myTown1 = document.createElement('p');
                var myTown2 = document.createElement('p');
                var myTown3 = document.createElement('p');
                var myTown4 = document.createElement('p');
                var myTown5 = document.createElement('p');
                var myTown6 = document.createElement('p');
                /*var myEvent = document.createElement('ul'); */

                myH2.textContent = towns[i].name;
                myTown1.textContent = 'Address: ' + towns[i].address;
                myTown2.textContent = 'Telephone: ' + towns[i].telephone;
                myTown3.textContent = 'Site:' + towns[i].site;
                myTown4.textContent = 'Exterior Finish:' + towns[i].exteriorFinish;
                myTown5.textContent = 'Ordinance Room:' + towns[i].ordinanceRoom;
                myTown6.textContent = 'Floor Area:' + towns[i].floorArea;
                /*myTown5.textContent = 'Events:' ;

                var events = towns[i].events;
                for (var z = 0; z < events.length; z++){
                    var eventItem = document.createElement('li');
                    eventItem.textContent = events[z];
                    myEvent.appendChild(eventItem);


                } */
                myArticle.appendChild(myH2);
                myArticle.appendChild(myTown1);
                myArticle.appendChild(myTown2);
                myArticle.appendChild(myTown3);
                myArticle.appendChild(myTown4);
                myArticle.appendChild(myTown5);
                myArticle.appendChild(myTown6);
               /* myArticle.appendChild(myEvent); */
    
                section.appendChild(myArticle);
               

            }

        }
    }

} 