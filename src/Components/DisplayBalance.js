import React from 'react';

const DisplayBalance = ({ balance }) => {
  let final_balance = 0;
  for (let i of balance) {
    final_balance += i;
  }
  return <div>Balance: {final_balance} coins.</div>;
};

export default DisplayBalance;
