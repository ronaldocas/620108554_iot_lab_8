var url = "http://localhost:3000/data";

window.onload = function () {
    var getOptions = {
        method: "GET"
    };
    fetch(url,getOptions)
    .then(res => res.json())
    .then(tanks => {
        console.log(tanks);
        var body = document.querySelector("body");

        tanks.forEach(tank => {
            var tankCard = document.createElement("tank-card");
            tankCard.setAttribute("location", tank.location);
            tankCard.setAttribute("long", tank.long);
            tankCard.setAttribute("lat", tank.lat);
            tankCard.setAttribute("percentage_full", tank.percentage_full);
            body.appendChild(tankCard);
            
        });
    });
}

function postTank(){
    const tankLocation = document.getElementById("tank-location-input").value;
    const tankLatitude = document.getElementById("tank-latitude-input").value;
    const tankLongitude = document.getElementById("tank-longitude-input").value;
    const tankPercentageFull = document.getElementById("tank-percentage-full-input").value;

    var tankObject = {
        location : tankLocation,
        long : parseFloat(tankLongitude),
        lat : parseFloat(tankLatitude),
        percentage_full : parseInt(tankPercentageFull)
    };

    var postOptions = {
        "method": "POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(tankObject)
    }

    fetch(url, postOptions)
}
var button = document.getElementById("btn");
button.addEventListener("click",postTank);