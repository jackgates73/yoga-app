import React from 'react';

const Card = ({ name, location, id, clickChange }) => {
	return (
		<div id={name} className='bg-black dib br3 pa3 ma2 grow bw2 shadow-5 w-20' onClick={clickChange}>
			<img id={name} alt='pose' src={require("../images/poses/" + location)} />
			<div id={name}>
				<h2 className='white' id={name}>{name}</h2>
			</div>
		</div>
	);
}

export default Card;