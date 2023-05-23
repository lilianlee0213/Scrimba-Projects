import {useState} from 'react';
import Die from './Die';
import './index.css';

function App() {
	const allNewDice = () => {
		let newArray = [];
		for (let i = 0; i < 10; i++) {
			newArray.push(Math.ceil(Math.random() * 6));
		}
		return newArray;
	};
	const [dice, setDice] = useState(allNewDice());
	const rollDice = () => {
		setDice(allNewDice());
	};
	return (
		<main>
			<div className="dice-container">
				{dice.map((die, index) => (
					<Die key={index} value={die} />
				))}
			</div>
			<button className="roll-dice" onClick={rollDice}>
				Roll
			</button>
		</main>
	);
}

export default App;
