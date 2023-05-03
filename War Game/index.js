let deckId;
const cards = document.getElementById('cards');
const newDeckBtn = document.getElementById('new-deck');
const drawCardBtn = document.getElementById('draw-cards');
const header = document.getElementById('header');
const cardValues = {
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9,
	10: 10,
	Jack: 11,
	Queen: 12,
	King: 13,
	Ace: 14,
};
function handleClick() {
	fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
		.then((res) => res.json())
		.then((data) => {
			deckId = data.deck_id;
		});
}
newDeckBtn.addEventListener('click', handleClick);
drawCardBtn.addEventListener('click', () => {
	fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
		.then((res) => res.json())
		.then((data) => {
			cards.children[0].innerHTML = `
				<img src=${data.cards[0].image} class="card" />
            `;
			cards.children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `;
			const winnerText = determineWinner(data.cards[0], data.cards[1]);
			header.innerText = winnerText;
		});
});

const determineWinner = (card1, card2) => {
	const valueOptions = [
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'Jack',
		'Queen',
		'King',
		'Ace',
	];
	const card1ValueIndex = valueOptions.indexOf(card1.value);
	const card2ValueIndex = valueOptions.indexOf(card2.value);
	if (card1ValueIndex > card2ValueIndex) {
		return 'Card 1 wins!';
	} else if (card2ValueIndex > card1ValueIndex) {
		return 'Card 2 wins!';
	} else {
		return 'War!';
	}
};
