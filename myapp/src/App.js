import React, { useState } from 'react';
import Login from "./Login"
import Customer from "./Customer"


function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div>
      <div>My Logo</div>
      { !loggedIn && <Login setLoggedIn={setLoggedIn} />}
      { loggedIn && <Customer /> }
    </div>
    
  );
}

export default App;
