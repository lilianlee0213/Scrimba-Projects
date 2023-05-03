let deckId;

function handleClick() {
	fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
		.then((res) => res.json())
		.then((data) => {
			deckId = data.deck_id;
		});
}
const cards = document.getElementById('cards');
document.getElementById('new-deck').addEventListener('click', handleClick);
document.getElementById('draw-cards').addEventListener('click', () => {
	fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data.cards);
			cards.innerHTML = `
            <div class="card">
				<img src=${data.cards[0].image} />
			</div>
            <div class="card">
				<img src=${data.cards[1].image} />
			</div>
            `;
		});
});
