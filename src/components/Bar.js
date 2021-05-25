import React, { useState, useEffect } from 'react';
import './Bar.css';

const Bars = ({ index, length, color, changeArray }) => {
	const [len, setLength] = useState(length);
	useEffect(() => {
		setLength(length);
	}, [length]);

	const colors = [
		['rgba(61, 90, 241, 0.5)', 'rgba(61, 90, 241, 0.2)'],
		['rgba(255, 48, 79, 1)', 'rgba(255, 48, 79, 0.2)'],
		['rgba(131, 232, 90, 0.5)', 'rgba(131, 232, 90, 0.2)'],
	];

	let textStyle = {
		position: 'relative',
		top: Math.floor(length / 2) - 12,
		width: length,
		left: -Math.floor(length / 2) + 15,
		background: 'transparent',
		border: 'none',
	};

	let modifiersStyle = {
		position: 'relative',
		top: 225,
	};

	const handleChange = (e) => {
		let val = e.target.value;
		if (val === '') {
			setLength(0);
			changeArray(index, 0);
		} else {
			val = parseInt(val);
			if (val > 200) {
				setLength(200);
				changeArray(index, 200);
			} else {
				setLength(val);
				changeArray(index, val);
			}
		}
	};

	const increment = () => {
		setLength(len + 1);
		changeArray(index, len + 1);
	};

	const decrement = () => {
		setLength(len - 1);
		changeArray(index, len - 1);
	};

	return (
		<React.Fragment>
			<div className='bar'>
				<div className='side top'></div>
				<div
					className='side bottom'
					style={{
						transform: `translateY(${200 - length}px) rotateX(-90deg)`,
						backgroundColor: `${colors[color][0]}`,
						boxShadow: `5px 5px 50px 5px ${colors[color][1]}`,
						transition: `0.3s`,
					}}
				></div>
				<div className='side right'>
					<div
						className='color-bar right-color-bar'
						style={{
							height: `${length}px`,
							transform: `translateY(${200 - length}px)`,
							backgroundColor: `${colors[color][0]}`,
							boxShadow: `5px 5px 50px 5px ${colors[color][1]}`,
							transition: `0.3s`,
						}}
					></div>
				</div>
				<div className='side left'>
					<div
						className='color-bar left-color-bar'
						style={{
							height: `${length}px`,
							transform: `translateY(${200 - length}px)`,
							backgroundColor: `${colors[color][0]}`,
							boxShadow: `5px 5px 50px 5px ${colors[color][1]}`,
							transition: `0.3s`,
						}}
					></div>
				</div>
				<div className='side front'>
					<div
						className='color-bar front-color-bar'
						style={{
							height: `${length}px`,
							transform: `translateY(${200 - length}px)`,
							backgroundColor: `${colors[color][0]}`,
							boxShadow: `5px 5px 50px 5px ${colors[color][1]}`,
							transition: `0.3s`,
						}}
					>
						<input
					type='number'
					style={textStyle}
					length={len}
					value={len}
					className='text'
					onChange={handleChange}
				/>
					</div>
				</div>
				<div className='side back'>
					<div
						className='color-bar back-color-bar'
						style={{
							height: `${length}px`,
							transform: `translateY(${200 - length}px)`,
							backgroundColor: `${colors[color][0]}`,
							boxShadow: `5px 5px 50px 5px ${colors[color][1]}`,
							transition: `0.3s`,
						}}
					></div>
				</div>
				
				<div className='quantity-nav'>
					<div
						className='quantity-button quantity-up'
						style={modifiersStyle}
						onClick={increment}
					>
						+
					</div>
					<div
						className='quantity-button quantity-down'
						style={modifiersStyle}
						onClick={decrement}
					>
						-
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Bars;
