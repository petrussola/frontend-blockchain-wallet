import React, { useEffect, useState } from 'react';
import './App.css';

// components
import WelcomeNoUser from './Components/WelcomeNoUser';
import WelcomeUser from './Components/WelcomeUser';
import SetUserId from './Components/SetUserId';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // alert('yay')
  }, [user]);
  if (!user) {
    return (
      <>
        <WelcomeNoUser />
        <SetUserId setUser={setUser} />
      </>
    );
  } else {
    return <WelcomeUser user={user} />;
  }
}

export default App;
