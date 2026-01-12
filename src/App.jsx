import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line
import './App.css'
import {NavBar} from './components/Nav/NavBar.jsx'
import { Home } from './components/Home/Home.jsx'

function App() {
  return (
    <>
      <div className='App'> 
        <NavBar/>
        <Home/>
      </div>
    </>
  )
}

export default App