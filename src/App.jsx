import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import History from './pages/History'
import BOD from './pages/BOD'
import Investors from './pages/Investors'
import News from './pages/News'
import Events from './pages/Events'
import SharePrice from './pages/SharePrice'
import ContactUs from './pages/ContactUs'
import FAQ from './pages/FAQ'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/aboutus/history' element={<History />} />
          <Route path='/aboutus/bod' element={<BOD />} />
          <Route path='/investors' element={<Investors />} />
          <Route path='/investors/news' element={<News />} />
          <Route path='/investors/events' element={<Events />} />
          <Route path='/investors/shareprice' element={<SharePrice />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/contactus/faq' element={<FAQ />} />

          <Route path='*' element={<Navigate replace={true} to='/' />} /> {/* this is for homepage redirection */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
