import { useState, useEffect } from 'react';
import './styles.css'

export default function GenerateRandomColor() {

	const [color, setColor] = useState("#000");
	const [colorType, setColorType] = useState("hex");

	useEffect(() => {
		color.includes('#') ? setColorType('hex') : setColorType('rgb');
	}, [color])


	function handleRandomRGBColor() {
		const r = createRandomNumber(256);
		const g = createRandomNumber(256);
		const b = createRandomNumber(256);

		setColor(`rgb(${r},${g},${b})`);
	}

	function handleRandomHexColor() {
		const hex = [...Array(10).keys(), ...['A', 'B', 'C', 'D', 'E', 'F']];
		const hexColorLength = 6;
		let hexColor = '#';

		for (let i = 0 ; i < hexColorLength; i++) {
			hexColor += hex[createRandomNumber(hex.length)];
		}

		setColor(hexColor);
	}

	function handleGenerateRandomColor() {
		colorType === 'hex' ? handleRandomHexColor() : handleRandomRGBColor();
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
				<button onClick={() => handleRandomRGBColor()}>Generate RGB color</button>
				<button onClick={() => handleRandomHexColor()}>Generate HEX color</button>
				<button onClick={() => handleGenerateRandomColor()}>Generate random color</button>
			</div>
			<div className="color">
				<h2>{ colorType === 'hex' ? 'Hex Color' : 'RGB Color' } </h2>
				<p>{ color }</p>
			</div>
		</div>
	);
}