const menuBorder2 = document.querySelector('#menuBorder2');
const openMenuBorder2 = document.querySelector('#density-button');
const closeMenuBorder2 = document.querySelector('#close-button');

 openMenuBorder2.addEventListener('click', function() {
   menuBorder2.showModal();
 });

 closeMenuBorder2.addEventListener('click', function() {
   menuBorder2.close();
 });


const menuBorder3 = document.querySelector('#menuBorder3');
const openMenuBorder3 = document.querySelector('#converter-button');
const closeMenuBorder3 = document.querySelector('#close-button2');

 openMenuBorder3.addEventListener('click', function() {
   menuBorder3.showModal();
 });

 closeMenuBorder3.addEventListener('click', function() {
   menuBorder3.close();
 });


const densityInput = document.getElementById("density");
const volumeInput = document.getElementById("volume");
const massInput = document.getElementById("mass");
  
densityInput.addEventListener("input", totalDensity)
volumeInput.addEventListener("input", totalVolume)
massInput.addEventListener("input", totalMass)
 

const densityInput1 = document.getElementById("density");
const volumeInput1 = document.getElementById("volume");
const massInput1 = document.getElementById("mass");
  
densityInput1.addEventListener("input", totalDensity)
volumeInput1.addEventListener("input", totalVolume)
massInput1.addEventListener("input", totalMass)


const densityInput2 = document.getElementById("density");
const volumeInput2 = document.getElementById("volume");
const massInput2 = document.getElementById("mass");
  
densityInput2.addEventListener("input", totalDensity)
volumeInput2.addEventListener("input", totalVolume)
massInput2.addEventListener("input", totalMass)


var select = document.querySelectorAll('select');
select.forEach(function (select) {
    select.onchange = function () {
      totalPrice();
    };
});



function convertUnits() {

  const kilograms = (document.getElementById("kilograms")).value;
  const grams = (document.getElementById("grams")).value;
  const tons = (document.getElementById("tons")).value;
  const pounds = (document.getElementById("pounds")).value;

  if (document.activeElement.id === 'kilograms') {
        document.getElementById('grams').value = (kilograms * 1000).toFixed(2);
        document.getElementById('tons').value = (kilograms / 1000).toFixed(2);
        document.getElementById('pounds').value = (kilograms * 2.20462).toFixed(2);
      } else if (document.activeElement.id === 'grams') {
        document.getElementById('kilograms').value = (grams / 1000).toFixed(2);
        document.getElementById('tons').value = (grams / 1e6).toFixed(2);
        document.getElementById('pounds').value = (grams / 453.592).toFixed(2);
      } else if (document.activeElement.id === 'tons') {
        document.getElementById('kilograms').value = (tons * 1000).toFixed(2);
        document.getElementById('grams').value = (tons * 1e6).toFixed(2);
        document.getElementById('pounds').value = (tons * 2204.62).toFixed(2);
      } else if (document.activeElement.id === 'pounds') {
        document.getElementById('kilograms').value = (pounds / 2.20462).toFixed(2);
        document.getElementById('grams').value = (pounds * 453.592).toFixed(2);
        document.getElementById('tons').value = (pounds / 2204.62).toFixed(2);
      }
    }
        