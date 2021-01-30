import React, { Component } from 'react';
import Card from '../components/Card';
import CardList from '../components/cardList';
import SearchBox from '../components/SearchBox';
import DisplayedPose from '../components/displayedPose';
import Footer from '../components/footer';
import 'tachyons';
import {poses} from '../components/poses';

const ref = React.createRef();

class YogaPage extends Component {

	constructor(){
		super();
		this.state ={
			poses: poses,
			searchfield: '',
			selectedPose: ''
		}
	}

	onOnClickChange = (event) => {
		this.setState({ selectedPose: event.target.id});
		ref.current.scrollIntoView({
			behavior: 'auto',
			block: 'start',
		});
	}

	onClickExit = (event) => {
		this.setState({ selectedPose: ''})
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	}

	render() {
		const filteredPoses = this.state.poses.filter(poses => {
			return poses.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return (
			<div className="athelas">
				<h1>Remote Yoga</h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				<CardList poses={filteredPoses} onClickChange={this.onOnClickChange}/>
				<div className="pt5" ref={ref}>
					<DisplayedPose poses={filteredPoses} passPose={this.state.selectedPose} onClickChange={this.onClickExit}/>
				</div>
				<Footer />
			</div>
		);
	}
}

export default YogaPage;


