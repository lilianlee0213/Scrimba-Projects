const BASE_URL = 'https://www.thecolorapi.com/scheme?hex=';

const colorInput = document.getElementById('seed-color');
const mode = document.getElementById('mode');
const colorPalette = document.getElementById('color-palette');
const form = document.getElementById('form');

const renderColors = (data) => {
	let html = '';
	for (let color of data.colors) {
		html += `
            <div class="color">
                <div class="color-image" style="background: url(${color.image.bare});"></div>
                <div class="hexcode">${color.hex.value}</div>
            </div>
        `;
	}
	colorPalette.innerHTML = html;
};
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const seedColor = colorInput.value.slice(1, 7);
	fetch(`${BASE_URL}${seedColor}&mode=${mode.value}`)
		.then((res) => res.json())
		.then((scheme) => {
			renderColors(scheme);
		});
});

fetch(`${BASE_URL}000000&mode=monochrome`)
	.then((res) => res.json())
	.then((data) => {
		renderColors(data);
	});
