import React from 'react';
import Transaction from './Transaction';

const Chain = ({ transactions }) => {
  return (
    <div>
      {transactions.map(transaction => {
        return <Transaction transaction={transaction} />;
      })}
    </div>
  );
};

export default Chain;
