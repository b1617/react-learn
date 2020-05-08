import './App.css';
import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import Account from './components/Account';
import Transactions from './components/Transactions';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/Global';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <Account />
        <Transactions />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
