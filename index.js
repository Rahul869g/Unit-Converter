/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

const elBtn = document.querySelector("#btn-el");
const elUnit = document.querySelector("#unit-el");
let lengthEl = document.getElementById("length-el");
const uLength = document.querySelector("#length");
const uMass = document.querySelector("#mass");
const uVolume = document.querySelector("#volume");

elBtn.addEventListener("click", function () {
  render();
  elUnit.value = "";
});

function render() {
  let baseValue = elUnit.value;
  uLength.innerHTML += `
                  <p>
                  ${baseValue} meters = ${(baseValue * meterToFeet).toFixed(
    3
  )} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters
                  </p>`;

  uVolume.innerHTML += `<p>
                  ${baseValue} liters = ${(baseValue * literToGallon).toFixed(
    3
  )} gallons | ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(
    3
  )} liters  
                  </p>`;
  uMass.innerHTML += `<p>
                  ${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(
    3
  )} pounds | ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(
    3
  )} kilos
                  </p>`;
}
