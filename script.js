// Declaring Variables 
const celestialName = 'Black Hole';
let celestialType = 'Saggittarius';
var discoveryYear = 1610;
const selectbutton = document.querySelector("#reveal-fact");
const spaceFact = document.querySelector("#space-fact");
const descriptionElement = document.querySelector('p');

function populateHeader() {
    document.querySelector('#celestial-name').textContent = celestialName;
}

// Call function 
populateHeader();

selectbutton.addEventListener("click", () => {
    spaceFact.textContent = 'Did you know?\
     Black holes are regions of spacetime where gravity is so strong that nothing,\
      not even light, can escape from them.';
});

function CelestialDescription() {
    const description = 'Black holes are regions of spacetime where gravitational pull is so strong that nothing, not even light, can escape from it. \
    They are formed when massive stars collapse at the end of their life cycle.';
    descriptionElement.textContent = description;
}

// Call the function
CelestialDescription();

// Arror Function
let distance = (lightYears) => lightYears * 5.878625e12;
console.log(`Distance from Earth to Black hole in miles is:${distance(0.000156)} miles`);

// Array of Black Hole Names
const blackhole = ["XTE", "GS", "SN"];

// Loop to print the names of the black holes
for (let i = 0; i < blackhole.length; i++) {
    console.log(blackhole[i]);
}

