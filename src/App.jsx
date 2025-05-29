import React from 'react'
import './App.css'
import Home from './pages/HomePage/Home'
import Hotelpage from './pages/HotelPage/Hotelpage'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Header from './components/laout/Header/Header'
import Footer from './components/laout/Footer/Footer'
import Searchpage from './pages/SearchPage/Searchpage'
import Ofer from './pages/offers/Ofer.jsx'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
            <Route  path='/' element={<Home />} />
            <Route  path='/Hotels' element={ <Hotelpage/> } />
            <Route  path='/Search' element={<Searchpage />} />
            <Route  path='/offer' element={<Ofer />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
     
      {/* <Home /> */}
   
    </>
  )
}

export default App
