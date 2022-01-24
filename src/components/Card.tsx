import React, { useState } from 'react';
export enum CardVariant{
	outlined = 'outlined',
	primary = 'primary'
}

interface CardProps{
	width: string; // if we want to do props not obligatory to add use 'width?:string'
	height: string;
	variant: CardVariant;
	onClick: (num: number) => void;
}
const Card: React.FC<CardProps> = ({
	width, 
	height, 
	children,
	variant,
	onClick
}) => {
	const [numberState, setNumber] = useState(5);
	return (
	<div style={{width, height, 
	border: variant === 'outlined' ? '2px dashed gray' : 'none',
	background: variant === 'primary' ? 'lightgray' : ''}}
	onClick={() => onClick(numberState)}>
		{children}
	</div>);
}
export default Card;
