import {useState} from 'react';
import {nanoid} from 'nanoid';
import Die from './Die';
import './index.css';

function App() {
	const allNewDice = () => {
		let newArray = [];
		for (let i = 0; i < 10; i++) {
			newArray.push({
				id: nanoid(),
				value: Math.ceil(Math.random() * 6),
				isHeld: false,
			});
		}
		return newArray;
	};
	const [dice, setDice] = useState(allNewDice());
	const rollDice = () => {
		setDice(allNewDice());
	};
	const holdDice = (id) => {
		setDice((oldDice) =>
			oldDice.map((die) => {
				return die.id === id ? {...die, isHeld: !die.isHeld} : die;
			})
		);
	};

	return (
		<main>
			<div className="dice-container">
				{dice.map((die) => (
					<Die
						key={die.id}
						value={die.value}
						isHeld={die.isHeld}
						holdDice={() => holdDice(die.id)}
					/>
				))}
			</div>
			<button className="roll-dice" onClick={rollDice}>
				Roll
			</button>
		</main>
	);
}

export default App;
