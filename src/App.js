import React from 'react'
import NavBar from './Components/NavBar'
import LoginComponent from './Components/LoginComponent'
import SignUpComponent from './Components/SignUpComponent'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
       
      <Route path="/" element={<LoginComponent />}/> 
      <Route path="signup" element={<SignUpComponent />} />

      </Routes>
     {/* <NavBar/>
     <LoginComponent/>
     <SignUpComponent/> */}
     </BrowserRouter>
  
  )
}

export default App