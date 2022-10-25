let homeScoreBox = document.getElementById('home-score-box');
let guestScoreBox = document.getElementById('guest-score-box');
let homeScoreEl = document.getElementById('home-score-el');
let guestScoreEl = document.getElementById('guest-score-el');
let scoreBtn1 = document.querySelectorAll('#scoreBtn1');
let resetBtn = document.getElementById('reset-btn');
let homePoint = 0;
let guestPoint = 0;

//Home Score Points
function homePoint1() {
	homePoint = homePoint + 1;
	homeScoreEl.textContent = homePoint;
	styleChange();
}
function homePoint2() {
	homePoint = homePoint + 2;
	homeScoreEl.textContent = homePoint;
	styleChange();
}
function homePoint3() {
	homePoint = homePoint + 3;
	homeScoreEl.textContent = homePoint;
	styleChange();
}

//Guest Score Points
function guestPoint1() {
	guestPoint = guestPoint + 1;
	guestScoreEl.textContent = guestPoint;
	styleChange();
}
function guestPoint2() {
	guestPoint = guestPoint + 2;
	guestScoreEl.textContent = guestPoint;
	styleChange();
}
function guestPoint3() {
	guestPoint = guestPoint + 3;
	guestScoreEl.textContent = guestPoint;
	styleChange();
}

//Style changes
function styleChange() {
	if (homePoint < 10) {
		homeScoreEl.textContent = '0' + homePoint;
	}
	if (guestPoint < 10) {
		guestScoreEl.textContent = '0' + guestPoint;
	}

	if (homePoint > 0) {
		homeScoreEl.style.color = '#e85117';
	}
	if (guestPoint > 0) {
		guestScoreEl.style.color = '#e85117';
	}
	if (homePoint === guestPoint) {
		homeScoreBox.style.border = '5px solid #3CCF4E';
		guestScoreBox.style.border = '5px solid #3CCF4E';
	} else if (homePoint > guestPoint) {
		homeScoreBox.style.border = '5px solid #c21010';
		guestScoreBox.style.border = 'none';
	} else if (homePoint < guestPoint) {
		guestScoreBox.style.border = '5px solid #c21010';
		homeScoreBox.style.border = 'none';
	}
}

//reset
function handleReset() {
	//reset point value
	homePoint = 0;
	guestPoint = 0;

	//reset the textContent of each point
	homeScoreEl.textContent = '00';
	guestScoreEl.textContent = '00';

	//reset styles
	homeScoreBox.style.border = 'none';
	guestScoreBox.style.border = 'none';

	//reset the time
	clearInterval(setTimer); //stop the timer
	startingMinutes = 1.5; //
	time = startingMinutes * 60;
	timerEl.textContent = 'Start'; //to see the text 'Start' first before timer start
	setTimer = setInterval(handleTimer, 1000); //restart the timer
}

//timer
const timerEl = document.getElementById('timer');
let startingMinutes = 1.5;
let time = startingMinutes * 60;
let setTimer = setInterval(handleTimer, 1000);

function handleTimer() {
	let minutes = Math.floor(time / 60);
	let seconds = time % 60;

	//When the time meets 0 => stop the timer
	if (time <= 0) {
		clearInterval(setTimer);
	} else {
		time--;
	}
	//To make the seconds two digits number when second < 10
	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	timerEl.textContent = `0${minutes}:${seconds}`;
}
