var rdata;
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.github.com/users/shivika24/repos", true);
xhr.onload = function () {
    var dataString = xhr.responseText;
    data = JSON.parse(dataString);
    rdata = data;
    for (i in data) {
        addRepo(data[i]);
    }
}
xhr.send();

function addRepo(data){
    var cards = document.getElementById('cards');
    var card = document.createElement('div');
    card.setAttribute("class","card mx-auto");
    var image = document.createElement("img");
    image.setAttribute("src","github.svg");
    image.setAttribute("class","card-img-top");
    image.setAttribute("alt","portfolio-project");
    var cardbody = document.createElement("div");
    cardbody.setAttribute("class","card-body");
    var cardtitle = document.createElement("h5");
    cardtitle.setAttribute("class","card-title");
    cardtitle.innerHTML = data.name;
    var cardtext = document.createElement("p");
    cardtext.setAttribute("class","card-text");
    cardtext.innerHTML = data.description;
    cardbody2 = document.createElement("div");
    cardbody2.setAttribute("class","card-body");
    cardlink = document.createElement("a");
    cardlink.setAttribute("href",data.html_url);
    cardlink.setAttribute("target","_blank");
    cardbtn = document.createElement("button");
    cardbtn.setAttribute("class","btn card-link");
    cardbtn.innerHTML = "Get Code";
    cardlink.appendChild(cardbtn);
    cardbody.appendChild(cardtitle);
    cardbody.appendChild(cardtext);
    cardbody2.appendChild(cardlink);
    card.appendChild(image);
    card.appendChild(cardbody).appendChild(cardbody2);
    cards.appendChild(card);
}