const BASE_URL = 'https://www.thecolorapi.com/scheme?hex=';

const seedColor = document.getElementById('seed-color').value.slice(1, 7);
const mode = document.getElementById('mode');
const colorPalette = document.getElementById('color-palette');
mode.addEventListener('change', () => console.log(mode.value));

fetch(`${BASE_URL}${seedColor}&mode=monochrome`)
	.then((res) => res.json())
	.then((data) => {
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
	});

// // "monochrome, monochrome-dark, monochrome-light, analogic, complement, analogic-complement, triad, quad",
