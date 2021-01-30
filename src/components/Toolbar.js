import React from 'react';
import './Toolbar.css';

const Toolbar = () => (
		<nav className="navbar pr6 bg-washed-blue dark-gray">
		{/*<header class="bg-white black-80 tc pv4 avenir">
			
			<h1 class="mt2 mb0 baskerville i fw1 f1">Ashley Gates Yoga</h1>
	  		<h2 class="mt2 mb0 f6 fw4 ttu tracked">Insert subtitle here</h2>
			<div class="bt bb tc w-75 center mt5 pv2">
			    <a class="f6 f5-l link bg-animate black-80 hover-bg-near-white dib pa3 ph4-l" href="/">Home</a>
			    <a class="f6 f5-l link bg-animate black-80 hover-bg-near-white dib pa3 ph4-l" href="/#about">About</a>
			    <a class="f6 f5-l link bg-animate black-80 hover-bg-near-white dib pa3 ph4-l" href="/#contact">Contact</a>
			    <div class="f6 f5-l link bg-animate black-80 hover-bg-near-white dib pa3 ph4-l dropdown">
			    	<div class="dropdown">More 
	      				<i class="fa fa-caret-down"></i>
	    			</div>
	    			<div class="dropdown-content">
				    	<a href="/info">what is yoga?</a>
				    	<a href="/YogaPage">Remote yoga</a>
				    </div>
			    </div>
			</div>*/}
			<div id="navbar" className="pr4">
			  <a className="f6 f5-l link bg-animate black-80 hover-bg-near-white dib pa3 ph4-l" href="/">Home</a>
			    <a className="f6 f5-l link bg-animate black-80 hover-bg-near-white dib pa3 ph4-l" href="/#about">About</a>
			    <a className="f6 f5-l link bg-animate black-80 hover-bg-near-white dib pa3 ph4-l" href="/#contact">Connect</a>
			    <div className="f6 f5-l link bg-animate black-80 hover-bg-near-white dib pa3 ph4-l dropdown">
			    	<div className="dropdown">More 
	      				<i className="fa fa-caret-down"></i>
	    			</div>
	    			<div className="dropdown-content dropRed">
				    	<a className="" href="/info">what is yoga?</a>
				    	<a className="" href="/YogaPage">Remote yoga</a>
				    </div>
			    </div>
			</div>
 		</nav>
	)

export default Toolbar;