import React from 'react';
import flower from '../assets/flower.png';

export default function Header() {
  return (
    <nav className='header'>
      <h1 className='logo'>
        <img src={flower} alt='flower' className='flower' />
        Flower
      </h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>
    </nav>
  );
}
