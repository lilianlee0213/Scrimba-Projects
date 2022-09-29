const meter = 3.281;
const liter = 0.264;
const kilogram = 2.204;

const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const meterFeet = document.getElementById('meter-feet');
const literGallon = document.getElementById('liter-gallon');
const kiloPound = document.getElementById('kg-lb');

// // #1 Solution
// convertBtn.addEventListener('click', function () {
// 	let value = numberInput.value;
// 	meterFeet.innerHTML = `${value} meters = ${(value * meter).toFixed(3)} feet | ${value} feet = ${(value / meter).toFixed(3)} meters`;
// 	literGallon.innerHTML = `${value} liters = ${(value * liter).toFixed(3)} gallons | ${value} gallons = ${(value / liter).toFixed(3)} liters`;
// 	kiloPound.innerHTML = `${value} kilos = ${(value * kilogram).toFixed(3)} pounds | ${value} pounds = ${(value / kilogram).toFixed(3)} kilos`;
// });

//#2 Solution
function generateConvert(input, unit1, unit2, convert) {
	let convertString = `${input} ${unit1} = ${(input * convert).toFixed(3)} ${unit2} | ${input} ${unit2} = ${(input / convert).toFixed(3)} ${unit1}`;
	return convertString;
}

convertBtn.addEventListener('click', function () {
	let value = numberInput.value;
	meterFeet.innerHTML = generateConvert(value, 'meters', 'feet', meter);
	literGallon.innerHTML = generateConvert(value, 'liters', 'gallons', liter);
	kiloPound.innerHTML = generateConvert(value, 'kilos', 'pounds', kilogram);
});
