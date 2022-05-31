let unitInput = prompt('Enter a number you wish to see converted')
let getUnit = document.getElementById('unit')
getUnit.textContent = unitInput
let getLength = document.getElementById('length')
let getVolume = document.getElementById('volume')
let getMass = document.getElementById('mass')

function lengthConverter() {
  // Meters to Feet formula: Meter * 3.2808 = Feet
 let resultFeet = unitInput * 3.2808
 let resultLength = unitInput / 3.2808
 getLength.textContent = `${unitInput} meter=${resultFeet.toFixed(3)} feet | ${unitInput} feet=${resultLength.toFixed(3)} meter`
 
}
function volumeConverter() {
  // Liter to  Gallon: Liter * 0.2641720524 = Gallon
 let resultVolume = unitInput * 0.2641720524
 let resultGallon = unitInput / 0.2641720524
 getVolume.textContent = `${unitInput} liter=${resultVolume.toFixed(3)} gallons | ${unitInput} gallons=${resultGallon.toFixed(3)} liter`

}

function massConverter() {
  // Killo to Pound: Killo / 0.45359237 = Pound
 let resultKillo = unitInput / 0.45359237
 let resultPound = unitInput * 0.45359237
 getMass.textContent = `${unitInput} killo=${resultKillo.toFixed(3)} pound | ${unitInput} pound=${resultPound.toFixed(3)} killo`

}

lengthConverter()
volumeConverter()
massConverter()
