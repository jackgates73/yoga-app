import React, { Component } from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2'>
			<input 
			className='pa3 ba b--near-white bg-black white'
				type='search' 
				placeholder='search poses' 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;