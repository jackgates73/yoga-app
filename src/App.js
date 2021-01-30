import React, {Component} from 'react';
import Toolbar from './components/Toolbar.js';
import CarouselTop from './components/carouselTop.js';
import Contact from './contact/contact.js';
import Home from './home/home.js';
import YogaPage from './yogaPage/yogaPage.js';
import info from './info/info.js';
import About from './about/about.js';
import './App.css';
import {Route} from 'react-router-dom';
import Logo from './components/logo.js';

class App extends Component {
  constructor(){
    super()
    this.state = {
      route: ''
    }
  }

 
  render(){
    return(
      <div className="App athelas">
        <div className="bg-washed-blue dark-gray tc pv3">
          <div className="fl dib">
            <Logo />
          </div>
          <div className="center dib pr6">
            <h1 className="mt2 mb0 baskerville i fw1 f1 pr4">Ashley Gates</h1>
            <h2 className="mt2 mb0 f6 fw4 ttu tracked pr4">Hatha Yoga Classes</h2>
          </div>
        </div>
        <Toolbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/yogapage" component={YogaPage} />
        <Route exact path="/info" component={info} />
        <Route exact path="/about" component={About} />
      </div>
    );
  }
  
  componentDidMount() {
    
  }

}

export default  App;
