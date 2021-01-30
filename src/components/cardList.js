import React from 'react';
import Card from './Card.js';

const CardList = ({poses, onClickChange}) => {
	return (
		<div>
			{

			poses.map((user, i) => {
				return (
					<Card 
					key={i} 
					id={poses[i].id} 
					name={poses[i].name} 
					location={poses[i].location}
					clickChange={onClickChange}
					/>
				);
			})
			}
 		</div>
	);
}

export default  CardList;