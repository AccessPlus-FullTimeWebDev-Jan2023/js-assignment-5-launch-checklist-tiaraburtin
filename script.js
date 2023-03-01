// Write your JavaScript code here!

window.addEventListener("load", function() {


let listedPlanets;
let listedPlanetsResponse = myFetch();
listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);
}).then(function () {
    console.log(listedPlanets);
    let chosenPlanet = pickPlanet(listedPlanets);
    addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image);  
});
    
let list = document.getElementById("faultyItems");
list.style.visibility = "hidden";
let theForm = document.querySelector("form");

theForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let pilotInput = document.querySelector("input[name=pilotName]");
    let pilot = pilotInput.value;

    let copilotInput = document.querySelector("input[name=copilotName]");
    let copilot = copilotInput.value;

    let fuelInput = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = Number(fuelInput.value);

    let cargoInput = document.querySelector("input[name=cargoMass]");
    let cargoLevel = Number(cargoInput.value);

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
});
});