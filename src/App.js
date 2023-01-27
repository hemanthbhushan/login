import React from 'react'
import NavBar from './Components/NavBar'
import LoginComponent from './Components/LoginComponent'
import SignUpComponent from './Components/SignUpComponent'

const App = () => {
  return (
    <div>
     <NavBar/>
     <LoginComponent/>
     <SignUpComponent/>
    </div>
  )
}

export default App