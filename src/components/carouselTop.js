import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class CarouselTop extends Component {
    render() {
        return (
            <Carousel className="" showThumbs={false} showStatus={false} autoPlay={true}>
                <div>
                    <img src={require("../images/silhouette2.jpg")} />
                </div>
                <div>
                    <img src={require("../images/sil2.jpg")} />
                </div>
                <div>
                    <img src={require("../images/instructor2.jpg")} />
                </div>
            </Carousel>
        );
    }
}


export default CarouselTop;