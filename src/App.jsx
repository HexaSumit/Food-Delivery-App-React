import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Card from './Components/Card'
import { ToastContainer, toast } from "react-toastify";

function App() {


  return (
    <>
    <div>
      <Home />
      <ToastContainer />
    </div>
    </>
  )
}

export default App
