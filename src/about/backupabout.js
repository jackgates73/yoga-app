import React, { Component } from 'react';
import './about.css';

class About extends Component {
	render() {
		return (
			<div class="w-75 center">
				<article class="bt bb b--black-10 ph3 ph0-l">
					<div class="flex flex-column flex-row-ns">
						<div class="w-100 w-60-ns pr3-ns">
							<h1 class="pv4 f1 athelas mt0 lh-title">about</h1>
							<p class="tr f3 lh-copy athelas">
						     Typography has one plain duty before it and that is to convey information
						     in writing. No argument or consideration can absolve typography from this
						     duty. A printed work which cannot be read becomes a product without
						     purpose.
						     Typography has one plain duty before it and that is to convey information
						     in writing. No argument or consideration can absolve typography from this
						     duty. A printed work which cannot be read becomes a product without
						     purpose.
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
							<div class="pl3-ns mb4 mb0-ns">
								<img
							      src={require('../images/sil.jpg')}
							      class="circle-img" alt="avatar" />
							</div>
					  	</div>
				</article>
			</div>
		);
	}
}

export  default About;