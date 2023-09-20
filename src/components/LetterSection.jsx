import React, { useState } from 'react';
import biwa from '../assets/biwa.jpg';
import '../style/letterCont.css';
import threeEclips from '../assets/three-eclips.png';
import letterDec from '../assets/letter-dec.png';
import Letter from './Letter';
import '../style/overlay.css';
import { Zoom, Fade } from 'react-reveal';

function LetterSection() {
  const [showLetter, setShowLetter] = useState(false);

  const handleShow = () => {
    setShowLetter(true);
  };

  const handleCLose = () => {
    setShowLetter(false);
  };

  return (
    <div>
      <div className="letter-wrapper">
        <div className="letter-container">
          <div className="letter-left">
            <div className="pict-container">
              <img src={biwa} alt="" />
              <div className="pict-border"></div>
            </div>
          </div>
          <div className="letter-right">
            <button onClick={handleShow}>Clickkkk !!!</button>
          </div>
        </div>
        <img src={threeEclips} alt="" className="letEclips1" />
        <img src={threeEclips} alt="" className="letEclips2" />
        <img src={threeEclips} alt="" className="letEclips3" />
        <img src={letterDec} alt="" className="letter-dec" />
      </div>
      {showLetter && <Letter close={handleCLose} />}
      <div className={showLetter ? 'overlay' : 'not-overlay'}></div>
    </div>
  );
}

export default LetterSection;
