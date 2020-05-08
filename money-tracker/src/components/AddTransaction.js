import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/Global';
export default function AddTransaction() {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  return (
    <>
      <h3>Add transaction</h3>
      <form>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount...'
          />
        </div>
        <button
          className='btn'
          onClick={(e) => {
            e.preventDefault();
            addTransaction({ id: Math.random(), text, amount: +amount });
          }}
        >
          Add transaction
        </button>
      </form>
    </>
  );
}
