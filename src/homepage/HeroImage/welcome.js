import React from 'react';
import style from './welcome.module.css';
import logo from './logosaar.png';

function HeroImage() {
  return (
    <div className='welcome-container'>
      <section className='hero-section'>
        <img src={logo} className={style.img_fluid} alt="logo1" />
      </section>
    </div>
  );
}

export default HeroImage;
