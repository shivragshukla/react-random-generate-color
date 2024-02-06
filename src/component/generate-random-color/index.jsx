import { useState } from 'react';
import './styles.css'

export default function GenerateRandomColor() {

	const [color, setColor] = useState("#000");

	function handleGenerateRandomColor() {
		const hex = [...Array(10).keys(), ...['A', 'B', 'C', 'D', 'E', 'F']];
		const hexColorLength = 6;
		let hexColor = '#';

		for (let i = 0 ; i < hexColorLength; i++) {
			hexColor += hex[createRandomNumber(hex.length)];
		}

		setColor(hexColor);
	}

	function createRandomNumber(length) {
		return Math.floor ( Math.random() * length);
	}

	return (
		<div 
			className="container"
			style={{
				backgroundColor: color
			}}

		>
			<h1 className="title">Generate random color</h1>
			<div className="btn-groups">
				<button onClick={() => handleGenerateRandomColor()}>Generate random color</button>
			</div>
			<div className="color">
				<h3>{ color }</h3>
			</div>
		</div>
	);
}