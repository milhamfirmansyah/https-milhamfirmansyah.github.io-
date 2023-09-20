import React from 'react';
import img1 from '../assets/biwaa1.jpg';
import '../style/hero.css';
import balon from '../assets/balon.png';
import eclips from '../assets/eclips1.png';
import eclips2 from '../assets/eclips2.png';
import threeEclips from '../assets/three-eclips.png';
import audio from '../assets/audio.mp3';
import { Fade } from 'react-reveal';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <img className="hero-image" src={img1} alt="" />
      </div>
      <div className="hero-right">
        <h1 className="birthday-text">HAPPY BIRTHDAY</h1>
        <h1 className="name">Sabila Rizkia Sari</h1>
      </div>
      <img className="balon-1" src={balon} alt="" />
      <img className="balon-2" src={balon} alt="" />
      <img className="balon-3" src={balon} alt="" />
      <img src={eclips} alt="" className="eclips1" />
      <img src={eclips2} alt="" className="eclips2" />
      <img src={eclips2} alt="" className="eclips3" />
      <img src={threeEclips} alt="" className="three-eclips-1" />
      <img src={threeEclips} alt="" className="three-eclips-2" />
      <img src={threeEclips} alt="" className="three-eclips-3" />
      <img src={threeEclips} alt="" className="three-eclips-4" />
      <div className="audio">
        <h4>Play Audio</h4>
        <audio controls={true}>
          <source src={audio} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}

export default Hero;
