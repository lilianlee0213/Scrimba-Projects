let deckId;
const cards = document.getElementById('cards');
const newDeckBtn = document.getElementById('new-deck');
const drawCardBtn = document.getElementById('draw-cards');

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
			console.log(data.cards);
			cards.children[0].innerHTML = `
				<img src=${data.cards[0].image} class="card" />
            `;
			cards.children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `;
		});
});