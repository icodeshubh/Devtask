import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Navbar from './components/Navbar'
import LandingScreen from './components/LandingScreen'
import LoginScreen from './components/LoginScreen'
import Signup from './components/Signup'
import Profile from './components/Profile'

function App() {
  

  return (
    <>
    {/* <Navbar /> */}
    {/* <LandingScreen />
    <LoginScreen />
    <Signup />
    <Profile /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LandingScreen /> } />
          {/* <Route path="/success" element={ <ProtectedRoutes  element={<Success />}/> } /> */}
          <Route path="/*" element={ <Error /> } />
          <Route path="/login" element={ <LoginScreen /> } />
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/profile" element={ <Profile /> } />
        </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default App
