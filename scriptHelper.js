// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    
   let div = document.getElementById("missionTarget")
   
   div.innerHTML =`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons:${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
   
}

function validateInput(testInput) {
    if (testInput === "" || testInput === null || testInput === 0) {
        return "Empty";
    } else if (!isNaN(Number(testInput))){ 
        return "Is a number";
    } return "Not a number";
        }

    
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let fuel = document.getElementById("fuelStatus");
    let cargo = document.getElementById("cargoStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");  

    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel)=== 'Empty') {
        window.alert('All fields are required!')
            }
    else if (validateInput(pilot) === 'Not a number' || validateInput(copilot) === 'Not a number' || validateInput(fuelLevel) === 'Not a number' || validateInput(cargoLevel) === "Not a number") {
        window.alert('Make sure to enter valid information for each field!')
             }   

        else {
            list.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            let launchStatus = document.getElementById("launchStatus");
            if (fuelLevel < 10000 && cargoLevel <= 10000) {
                fuel.innerHTML = "Fuel level too low for launch";
                cargo.innerHTML = "Cargo mass low enough for launch"
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "#C7254E";
            } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
                fuel.innerHTML = "Fuel level high enough for launch"
                cargo.innerHTML = "Cargo mass too heavy for launch";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "#C7254E";
            } else if (fuelLevel < 10000 && cargoLevel > 10000) {
                fuel.innerHTML = "Fuel level too low for launch";
                cargo.innerHTML = "Cargo mass too heavy for launch";
                launchStatus.innerHTML = "Shuttle Not Ready for Launch";
                launchStatus.style.color = "#C7254E";
            } else {
                fuel.innerHTML = "Fuel level high enough for launch"
                cargo.innerHTML = "Cargo mass low enough for launch"
                launchStatus.innerHTML = "Shuttle is Ready for Launch";
                launchStatus.style.color = "#419F6A";
            }
        }
     }  



async function myFetch() { 
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
           
                return response.json();
            
        });

    return planetsReturned;
}

function pickPlanet(planets) {
        let index = Math.floor(Math.random()*planets.length);
        return planets[index];
    
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
