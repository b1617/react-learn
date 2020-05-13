import React from 'react';
import coolness from './../assets/coolness.svg';

export default function Content() {
  return (
    <div className='content'>
      <div className='content-left'>
        <h1 className='slogan'>Lorem ipsum dolor sit </h1>
        <p>
          Dorctetur adipisicing elit. Doloremque repellat, animi cum nesciunt
          accusamus quisquam eligendi dignissimos odio beatae, corporis
          delectus, excepturi aliquid
        </p>
        <button className='content-btn primary'>Learn More</button>
        <button className='content-btn secondary'>Sign Up</button>
      </div>
      <img src={coolness} alt='flower' className='coolness' />
    </div>
  );
}
