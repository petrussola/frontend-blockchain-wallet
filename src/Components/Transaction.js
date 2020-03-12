import React from 'react';

const Transaction = ({ transaction }) => {
  return (
    <div>
      {transaction.amount} coins from {transaction.sender}
    </div>
  );
};

export default Transaction;
