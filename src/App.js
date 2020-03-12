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

function App() {
  const [user, setUser] = useState(null);
  const [chain, setChain] = useState({});
  const [balance, setBalance] = useState([]);
  let balance_array = [];
  useEffect(() => {
    axios
      .get('http://localhost:5000/chain')
      .then(res => {
        let chain = res.data.chain;
        setChain(chain);
        for (let i of chain) {
          debugger;
          for (let j of i.transactions) {
            if (j.recipient === user) {
              console.log(j.amount);
              // let new_array = [...balance_array, j.amount]
              debugger;
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
      </>
    );
  }
}

export default App;
