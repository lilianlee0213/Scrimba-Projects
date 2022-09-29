let cards = []; //array= ordered list of items
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

let player = {
	name: 'Lilian',
	chips: 145,
};

let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ': $' + player.chips;

function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1;
	if (randomNumber > 10) {
		return 10;
	} else if (randomNumber === 1) {
		return 11;
	} else {
		return randomNumber;
	}
}

function startGame() {
	isAlive = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
	renderGame();
}

function renderGame() {
	cardsEl.textContent = 'Cards: ';
	// Create a for loop that renders out all the cards instead of just two
	for (i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + ' ';
	}

	//render out All the cards we have
	sumEl.textContent = 'Sum: ' + sum;
	if (sum <= 20) {
		message = 'Do you want to draw a new card?';
	} else if (sum === 21) {
		hasBlackjack = true;
		message = "You've got Blackjack!";
	} else {
		message = "You're out of the game!";
		isAlive = false;
	}
	messageEl.textContent = message;
}

function newCard() {
	if (isAlive === true && hasBlackjack === false) {
		let card = getRandomCard();
		//Add the new card to the sum variable
		sum += card;
		//Push the card to the cards arry
		cards.push(card);
		renderGame();
	}
}
//CASH OUT!
