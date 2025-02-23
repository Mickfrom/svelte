import React from 'react';
import { useState } from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button.jsx';
import video2 from '../videos/video-2.mp4';
import video1 from '../videos/video-1.mp4';

function Herosection() {
  let [isModalOpen] = useState(false);

  const setIsModalOpen = (value) => {
    isModalOpen = value;
  };

  // Define function that will open the modal
  const handleOpen = () => {
    setIsModalOpen(true);
  };

  // Define function that will close the modal
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className='hero-container'>
      <video src={video1} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are waiting for?</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>
            Get Started
            </Button>
        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large' OnClick={handleOpen}>
            WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
      </div>


    </div>
    
    <div className={`modal ${isModalOpen ? 'open' : ''}`} id={`myModal`}>
    <div className='modal-content'>
      <span id={'close'} onClick={handleClose}>
        <i className='fas fa-times'></i>
      </span>
      <div className='modal-info'>
        <video src={video2} muted/>
      </div>
    </div>
  </div>
  </>
  )
}

export default Herosection;
