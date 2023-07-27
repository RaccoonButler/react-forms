import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SignUpForm from './components/SignUpForm.jsx';
import Authenticate from './components/Authenticate.jsx';
import './App.css'

function App() {
  return (
    <div>
      <SignUpForm />
      <Authenticate />
    </div>
  )
}

export default App
