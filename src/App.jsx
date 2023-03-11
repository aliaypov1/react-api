
import React, { Component } from 'react';
import Api from './component/Api';
import './style.css'
import './media.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './component/About';
import Header from './component/Header';
import Cards from './component/Cards';
import Modal from './component/Modal';
import Footer from './component/Footer'


const App = () => {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/About' element={<About />} />
        <Route path='/Api' element={<Api />} />
      </Routes>
      
    </BrowserRouter>



  );
};

export default App;