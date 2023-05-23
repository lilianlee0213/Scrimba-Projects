import {useState} from 'react';
import {nanoid} from 'nanoid';
import Die from './Die';
import './index.css';

function App() {
	const generateNewDie = () => {
		return {id: nanoid(), value: Math.ceil(Math.random() * 6), isHeld: false};
	};
	const allNewDice = () => {
		let newArray = [];
		for (let i = 0; i < 10; i++) {
			newArray.push(generateNewDie());
		}
		return newArray;
	};

	const [dice, setDice] = useState(allNewDice());
	const rollDice = () => {
		setDice((oldDice) =>
			oldDice.map((die) => {
				return die.isHeld ? die : generateNewDie();
			})
		);
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
			<h1 className="title">Tenzies</h1>
			<p className="instructions">
				Roll until all dice are the smae. Click each die to freeze it at its
				current value between rolls.
			</p>
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
