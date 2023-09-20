import React from 'react';
import Carousel from './Carousel';
import icon1 from '../assets/carousel-dec-1.png';
import icon2 from '../assets/carousel-dec-2.png';
import icon3 from '../assets/carousel-dec-3.png';
import icon4 from '../assets/carousel-dec-4.png';
import icon5 from '../assets/carousel-dec-5.png';
import '../style/howpretty.css';
import { Fade, Zoom } from 'react-reveal';

function HowPretty() {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <div style={{ position: 'absolute', zIndex: '10', left: '340px', top: '120px' }}>
          <Carousel />
        </div>
        <h1>How Pretty Sabila &gt;&gt;&gt;&gt;&gt;</h1>
        <img src={icon1} alt="" className="icon1" />
        <img src={icon2} alt="" className="icon2" />
        <img src={icon3} alt="" className="icon3" />
        <img src={icon4} alt="" className="icon4" />
        <img src={icon5} alt="" className="icon5" />
        <img src={icon5} alt="" className="icon6" />
      </div>
    </div>
  );
}

export default HowPretty;
