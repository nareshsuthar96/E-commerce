import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import Card from './components/Card'
import ProductCard from './components/ProductCard'
import './App.css'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Card/>}/>
          <Route path='/shoppingCart' element={<ProductCard/>}/>

        </Routes>
         <Footer/>
      </Router>
    </div>
  )
}

export default App
