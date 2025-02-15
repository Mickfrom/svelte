import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './components/Form.jsx'
import './landing.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'
import Services from './components/Services.jsx';
import Products from './pages/Products.jsx';
import SignUp from './components/SignUp.jsx';

function App() {
  return (
      <>
      <Router>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Routes>
      
        </Router>
      </>
  )
}

export default App;