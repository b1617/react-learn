import React, { useContext } from 'react';
import { GlobalContext } from '../context/Global';

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const balance = transactions
    .reduce((acc, prev) => (acc += prev.amount), 0)
    .toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>{balance}€</h1>
    </>
  );
}
