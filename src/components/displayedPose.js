import React, { Component } from 'react';
import Panel from './panel.js';
import './Toolbar.css';

const displayedPose = ({poses, passPose, onClickChange}) => {
	return (
		<div className='pa2'>
			{
			poses.map((user, i) => {
					if(passPose === poses[i].name){
						return(
							<div className="center pl5 bg-white bt bb bw1">
								<Panel className="dib"
									name={'step 1'} 
									location={poses[i].step1}
								/>
								<Panel className="dib" 
									name={'step 2'} 
									location={poses[i].step2}
								/>
								<Panel className="dib"
									key={i} 
									id={poses[i].id} 
									name={poses[i].name} 
									location={poses[i].location}
								/>
								<div className="exitButton w-0 dib v-top tr pv4 bg-white">
									<a className="pv4 ph4 f1 bb br bl bw1 b--near-white" onClick={onClickChange}>X</a>
								</div>
							</div>	
						);
					}
			})
			}
		</div>
	);
}

export default displayedPose;