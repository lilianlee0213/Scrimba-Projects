import {useEffect, useState} from 'react';
import {nanoid} from 'nanoid';
import Die from './Die';
import './index.css';
import Confetti from 'react-confetti';

function App() {
	const generateNewDie = () => {
		return {id: nanoid(), value: Math.ceil(Math.random() * 6), isHeld: false};
	};
	const allNewDice = () => {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			newDice.push(generateNewDie());
		}
		return newDice;
	};

	const [dice, setDice] = useState(allNewDice());
	const [tenzies, setTenzies] = useState(false);

	useEffect(() => {
		const allHeld = dice.every((die) => die.isHeld);
		const firstValue = dice[0].value;
		const allSameValue = dice.every((die) => die.value === firstValue);
		if (allHeld && allSameValue) {
			setTenzies(true);
			console.log('you won');
		}
	}, [dice]);

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
			{tenzies && <Confetti />}
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
				{tenzies ? 'New Game!' : 'Roll'}
			</button>
		</main>
	);
}

export default App;
