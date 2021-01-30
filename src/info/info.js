import React, { Component } from 'react';
import YogaPage from '../yogaPage/yogaPage.js';
import Footer from '../components/footer.js';
import {Route} from 'react-router-dom';

class Info extends Component {
	render() {
		return (
			<div className="bg-dark-gray w-100 athelas">
				<div className="bg-washed-blue dark-gray w-75 center pt4">
					<h1>What is Hatha Yoga?</h1>
					<div class="">
						<p class="f3 lh-copy tl ph4">
						    Hatha yoga is the traditional form of yoga practiced. Hatha Yoga originated in Tantra and asceticism and is at least a thousand years old. Hatha Yoga in its essence means ‘harnessing of force’ and it incorporates a wide array of practices:
						</p>
					</div>
					<div class="ml6 tl ma0">
						<ul class="w-50 center pb4">
							<li>pranayama  (breathing techniques)</li>
							<li>asana (yoga postures)</li>
							<li>shatkriyas and shatkarmas (cleansing techniques)</li>
							<li>mantra (chanting or reciting)</li>
							<li>mudra (hand gestures)</li>
							<li>types of visualisation</li>
						</ul>
					</div>
					<div class="tl ph4">
						<p class="f3 lh-copy">
						    In modern times, a development of hatha yoga focusing particularly on certain components became popular. This modern form is regarded simply as ‘Yoga’. Yoga is a form of exercise that focuses on strength, flexibility and breathing to boost physical and mental wellbeing. The main components of yoga are postures (a series of movements designed to increase strength and flexibility) and breathing.
						</p>
						<p class="f3 lh-copy">
						    This class is well suited for beginners, and will include a gentle introduction to the basic and fundamental yoga postures. These classes do not include anything of high physical intensity, and you should end up leaving class feeling longer, looser, and more relaxed.
						</p>
					</div>
					<div class="mr4">
						<br />
						<div class="dib tl">
							<p class="tc pr5 f3"><b>Physical benefits of Yoga: </b></p>
							<ul class="w-75 center">
								<li>increased flexibility</li>
								<li>increased muscle strength and tone</li>
								<li>weight reduction</li>
								<li>improved cardiovascular health</li>
								<li>Helps with aches and pains – including lower back pain</li>
								<li>Is beneficial to those with high blood pressure or heart disease</li>
							</ul>
						</div>
						<div class="dib v-top tl">
							<p class="tc f3"><b>Mental benefits of Yoga: </b></p>
							<ul class="w-75 center">
								<li>Can help a person manage and relieve stress </li>
								<li>Can help alleviate depression</li>
								<li>Increased body awareness</li>
								<li>Increased concentration</li>
							</ul>
						</div>
					</div>
					<div class="tl ph4">
						<br />
						<p class="f3 lh-copy">
						    As mentioned above, yoga is suited for anyone, even beginners. There are very little requirements to get started. If you would like to have a look at the types of postures that will be taught in this class then please have a look at the ‘remote yoga’ section by clicking the link below. This section includes all the basic and fundamental poses, and clicking on each will give you step-by-step instructions on how they can be performed at home. This will give you a taste of what the classes would be like. If you enjoy these poses and can feel the benefits, then I recommend you join the classes for the full experience. You can visit the ‘connect’ section for details and to book a space.
						</p>
					</div>
					<a class="f3 f5-l link  dib pa3 ph4-l" href="/yogapage">Try Remote Yoga!</a>
					<Footer />
				</div>
			</div>
		);
	}
}

export  default Info;