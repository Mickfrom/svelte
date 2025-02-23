import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';
import MyForm from './components/Form.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.jsx'
import Services from './components/pages/Services.jsx';
import Products from './components/pages/Products.jsx';
import SignUp from './components/pages/SignUp.jsx';

function App() {
  return (
      <>
      <Router>
      
      <Routes>
        <Route path="/" element={<Home/>} />
       
        <Route path='/services' element={<Services/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
      
        </Router>
      </>
  )
}

export default App;