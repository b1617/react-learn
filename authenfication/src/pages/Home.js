import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Home() {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      Welcome to the home page <br />
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
