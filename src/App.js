// dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// helpers
import './App.css';

// components
import WelcomeNoUser from './Components/WelcomeNoUser';
import WelcomeUser from './Components/WelcomeUser';
import SetUserId from './Components/SetUserId';
import DisplayBalance from './Components/DisplayBalance';
import Chain from './Components/Chain';

function App() {
  const [user, setUser] = useState(null);
  const [chain, setChain] = useState({});
  const [balance, setBalance] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/chain')
      .then(res => {
        let chain = res.data.chain;
        setChain(chain);
        for (let i of chain) {
          for (let j of i.transactions) {
            if (j.recipient === user) {
              setTransactions(transactions => [...transactions, j])
              console.log(j.amount);
              setBalance(balance => [...balance, j.amount]);
            }
          }
        }
      })
      .catch(error => {
        debugger;
      });
  }, [user]);
  if (!user) {
    return (
      <>
        <WelcomeNoUser />
        <SetUserId setUser={setUser} />
      </>
    );
  } else {
    return (
      <>
        <WelcomeUser user={user} />
        <DisplayBalance balance={balance} />
        <Chain transactions={transactions} />
      </>
    );
  }
}

export default App;
