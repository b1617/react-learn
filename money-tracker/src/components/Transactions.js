import React, { useContext } from 'react';
import { GlobalContext } from '../context/Global';
import Transaction from './Transaction';
export default function Transactions() {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map((transaction) => (
          <Transaction
            transaction={transaction}
            key={transaction.id}
          ></Transaction>
        ))}
      </ul>
    </div>
  );
}
