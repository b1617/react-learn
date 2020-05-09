import React, { useContext } from 'react';
import { GlobalContext } from '../context/Global';

export default function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount > 0 ? '+' : '-';
  const border = transaction.amount > 0 ? 'plus' : 'minus';

  return (
    <li className={border}>
      {transaction.text}{' '}
      <span style={{ marginRight: '20px' }}>
        {sign}
        {Math.abs(transaction.amount)}€
      </span>
      <button
        className='delete-btn'
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
}
