const welcome = document.querySelector('.welcome-screen');
const homepage = document.querySelector('.homepage');
const startBtn = document.querySelector('.start-btn');
const countEl = document.getElementById('count-el');
const incrementBtn = document.getElementById('increment-btn');
const saveBTN = document.getElementById('save-btn');
const saveEl = document.getElementById('save-el');

function handleToStart() {
	welcome.classList.add('hidden');
	homepage.classList.remove('hidden');
}

startBtn.addEventListener('click', handleToStart);

let count = 0;

function increment() {
	count += 1;
	countEl.textContent = count;
}

function save() {
	saveEl.textContent += ` ${count} -`;
	countEl.textContent = 0;
	count = 0;
}
