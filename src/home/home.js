import React, { Component, createRef } from 'react';
import CarouselTop from '../components/carouselTop.js';
import Footer from '../components/footer.js';
import './home.css';
import { render } from "react-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Selfie1 from "../images/self1.jpg"

const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
    <div
      style={{
        background: "#efefef",
        borderRadius: 2,
        padding: 10,
        display: "inline-block"
      }}
    >
      {status === "sending" && <div style={{ color: "black" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "black" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (name = node)}
        type="text"
        placeholder="Your name"
      />
      <br />
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
        Submit
      </button>
    </div>
  );
};


class Home extends Component {

	constructor(props){
		super(props);
		this.state={};
		this.googleMapRef = React.createRef();
	}

	get googleMapDiv() {
		return document.getElementById("google-map")
	}

	

	createGoogleMap = () =>
		new window.google.maps.Map(this.googleMapRef.current, {
			zoom: 16,
			center:{
				lat: 55.836561, 
				lng: -4.025168,
			},
			disableDefaultUI: true,
		});

	componentDidMount() {
	    const googleMapScript = document.createElement('script');
	    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${'AIzaSyCr5WWU3MNSJcJ9_XA-O6Sk7dhZHgQACyo'}&libraries=places`;
	    window.document.body.appendChild(googleMapScript);

	    googleMapScript.addEventListener('load', () => {
	      this.googleMap = this.createGoogleMap();
	      this.marker = this.createMarker();
	    });
	}

	createMarker = () =>
    	new window.google.maps.Marker({
	      position: { lat: 56.4776814, lng: -2.8301324},
	      map: this.googleMap,
	})

	render() {
		const url ="https://live.us10.list-manage.com/subscribe/post?u=000e05b3dc5476127e29afc5e&amp;id=bb75d17a9c";
		return (
		<div className="dark-gray bg-dark-gray athelas">
			<CarouselTop />
			<div className="w-75 center bg-washed-blue pt1">
				<h1>Yoga for Everyone</h1>
				<img className="dib pv5 w-50 v-top" style={{width: '400px'}} alt='logo' src={Selfie1}/> 
				<div className="dib tl w-50 v-top pv4 pl3">
					<h2>Hello!</h2>
					<p class="f3 lh-copy">
					    I'm Ashley and I teach Hatha yoga in Dundee and the surrounding area, inspired by the teachings of *insert inspiration here*. The path of yoga seeks to unite body, mind, and spirit through meditation, breath work, philosophy, physical movement, and behavior principles.
						This is a class suited for beginners. It does not involve performing impossible postures. We are simply moving, breathing and releasing.
					</p>
				</div>
				<div className="w-75 center">
					<a name="about"></a>
					<h1 className="pt5 f1 lh-title" >About</h1>
					<div class="flex flex-wrap content-start tl">
						<div class="w-25 w-60 pr3-ns">
							<p class="ml3 ma0 f3 lh-copy">
						    Ashley is a qualified yoga instructor who received her training at *insert training
							She is has received experience through instructing classes at the David Lloyds leisure centre in Monifieth, and is currently taking classes at *location*

						</p>
						</div>
						<div class="ma0 w-40 pl3-ns">
							<img src={require('../images/instructor.jpg')} class="br-100" alt="avatar" />
						</div>
						<div class="w-100 pl3-ns">
							<p class="ma0 f3 lh-copy">
						    Ashley has had a very active childhood participating in gymnastics at an advanced level. The required flexibility along with the love for movement naturally led her to begin the practise of Yoga early on. Over time, through this practice it became clear the long term mental and physical benefits of regularly doing yoga.
							</p><br />
							<p class="ma0 f3 lh-copy">
						    The beauty of Yoga is that it can be done by anyone and performed at any skill level, from beginner to advance. There are virtually no requirements to perform this, besides a little space to stretch out, and a comfortable surface for certain positions. To get started at home, please visit the ‘info’ section for more information. In this section there is also a built in remote yoga section, where you can search through the fundamental poses, and teach yourself -step by step- how to do each. For those who would prefer to learn through classes, please visit the ‘contact’ section, and book a spot for the nearest class.
							</p>
						</div>
						
					</div>
				
				</div>
				<a name="contact"></a>
				<h1 class="pv4">Contact Us</h1>
				<div class="w-75 center">
					<div class="pl4 w-30 dib v-top">
						<h3 class="tl pb3 pt1">Contact details:</h3>
						<p class="tl"><b>Email:</b>ashley*******.com</p>
						<p class="tl"><b>Number:</b> 383843987</p>
					</div>
					<div class="pl5 w-50 dib v-top">
						<h3 class="pb2 tl">Upcoming class dates and times:</h3>
						<div class="">
						  <ul class="list pl0 measure center">
						    <li class="lh-copy pb3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Saturday 27th July @ 2pm-3pm</li>
						    <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Friday 2nd August @ 2pm-3pm</li>
						    <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Friday 9th August @ 2pm-3pm</li>
						    <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Wednesday 14th August @ 2pm-3pm</li>
						    <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Saturday 17th August @ 2pm-3pm</li>
						  </ul>
						</div>
					</div>
					</div>
					</div>
					<div className="w-100 center washed-blue bg-dark-gray">
					<div>
					<div className="w-75 center pt4 pb4 ph4">
					  	<div>
					        <h2>Subscribe to our Mailing list</h2>
					        <p>You will be notified of upcoming classes and the number of spaces available. Emails will only be sent related to classes. Unsubscribing is easy, and can be done by clicking 'Update your preferences' at the bottom of any emails you receive.</p>
					        <MailchimpSubscribe
					          url={url}
					          render={({ subscribe, status, message }) => (
					            <CustomForm
					              status={status}
					              message={message}
					              onValidated={formData => subscribe(formData)}
					            />
					          )}
					        />
					        <p></p>
						</div>
					</div>
				</div>
				</div>
				<div className="w-75 center bg-washed-blue pt4">
					<h2>Studio Location:</h2>
					<div className="w-75 center">
							<p class="ma0 f3 lh-copy">
							    33 ***** Rd, ******, ******, *** ***
							</p>
						
						<div id="google-map" ref={this.googleMapRef} style={{width:'800px', height: '300px', position: ''}} class="center">

						</div>
					</div>
				</div>
				<Footer />
		</div>
		);
	}
}

export default Home;