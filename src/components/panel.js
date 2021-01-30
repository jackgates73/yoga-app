import React from 'react';

const Panel = ({ name, location, id, clickChange }) => {
	return (
		<div id={name} className='bg-black dib w-20' onClick={clickChange}>
			<img id={name} alt='pose' src={require("../images/poses/" + location)} />
			<div id={name}>
				<h2 className='white' id={name}>{name}</h2>
			</div>
		</div>
	);
}

export default Panel;