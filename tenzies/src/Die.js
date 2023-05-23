export default function Die(props) {
	const styles = {
		backgroundColor: props.isHeld ? '#59e391' : 'white',
	};
	return (
		<div className="die-face" onClick={props.holdDice} style={styles}>
			<h2 className="die-num">{props.value}</h2>
		</div>
	);
}
