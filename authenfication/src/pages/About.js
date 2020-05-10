import React from 'react';

import Login from '../components/Login';
import Signup from '../components/Signup';
export default function About() {
  return (
    <div style={{ display: 'flex' }}>
      <Login></Login>
      <Signup></Signup>
    </div>
  );
}
