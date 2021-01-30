import React, { Component } from 'react';
import './about.css';

class About extends Component {
	render() {
		return (
			<div class="w-75 center">
					<div class="flex flex-wrap content-start">
						<div class="w-25 w-60-ns pr3-ns">
							<h1 class="pv4 f1 athelas lh-title">about</h1>
							<p class="ma0 f3 lh-copy athelas">
						     Typography has one plain duty before it and that is to convey information
						     in writing. No argument or consideration can absolve typography from this
						     duty. A printed work which cannot be read becomes a product without
						     purpose.
						     Typography has one plain duty before it and that is to convey information
						     in writing.  Typography has one plain duty before it and that is to convey information
						     in writing.
						  	</p>
						</div>
						<div class="ma0 w-40 pv4 pl3-ns">
							<img src={require('../images/instructor.jpg')} class="br-100" alt="avatar" />
						</div>
						<div class="w-100 pl3-ns">
							<p class="ma0 f3 lh-copy athelas">
						     Typography has one plain duty before it and that is to convey information
						     in writing. No argument or consideration can absolve typography from this
						     duty. A printed work which cannot be read becomes a product without
						     purpose.
						     Typography has one plain duty before it and that is to convey information
						     in writing. No argument or consideration can absolve typography from this
						     duty. A printed work which cannot be read becomes a product without
						     purpose.
							</p>
							<p class="ma0 f3 lh-copy athelas">
						     Typography has one plain duty before it and that is to convey information
						     in writing. No argument or consideration can absolve typography from this
						     duty. A printed work which cannot be read becomes a product without
						     purpose.
						     Typography has one plain duty before it and that is to convey information
						     in writing. No argument or consideration can absolve typography from this
						     duty. A printed work which cannot be read becomes a product without
						     purpose.
							</p>
						</div>
						
					</div>
				
			</div>
		);
	}
}

export  default About;