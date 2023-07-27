import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm.jsx';
import Authenticate from './components/Authenticate.jsx';
import './App.css'

function App() {
  const [token, setToken] = useState(null);

  return (
    <div>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </div>
  )
}

export default App;
