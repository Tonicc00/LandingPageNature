import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from './Navbar'
import {Home} from './Home'
import {Projects} from './Projects'


export default function App() {
  return (

    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='/projects' element={<Projects />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}
