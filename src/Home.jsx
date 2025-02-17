import React from 'react';
import './App.css'
import Herosection from './components/Herosection.jsx';
import Cards from './components/Cards.jsx';
import Footer from './components/Footer.jsx';

function Home () {
    return (
        <>
            <Herosection />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;