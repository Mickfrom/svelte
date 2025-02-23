import React from 'react';
import '../../App.css'
import Herosection from '../Herosection.jsx';
import Cards from '../Cards.jsx';
import Footer from '../Footer.jsx';
import Navbar from '../Navbar.jsx';

function Home () {
    return (
        <>
            <Navbar />
            <Herosection />
            <Cards />
            <Footer />
            
        </>
    );
}

export default Home;