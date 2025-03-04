import React from 'react';
import CardsItem from './CardsItem.jsx';
import img1 from '../images/img-1.jpg'
import img2 from '../images/img-2.jpg'
import img3 from '../images/img-3.jpg'
import img4 from '../images/img-4.jpg'
import img5 from '../images/img-5.jpg'
import img6 from '../images/img-6.jpg'
import img7 from '../images/img-7.jpg'
import img8 from '../images/img-8.jpg'
import img9 from '../images/img-9.jpg'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Epic Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                    <CardsItem 
                   src={img1}
                   text='Explore the hidden waterfall deep inside the Amazon Jungle'
                   label='Adventure'
                   path='/services'
                 />
                 <CardsItem
                   src={img2}
                   text='Travel through the Islands of Bali in a Private Cruise'
                   label='Luxury'
                   path='/services'
                 />
                 <CardsItem
                   src={img3}
                   text='Travel through the Islands of Bali in a Private Cruise'
                   label='Luxury'
                   path='/services'
                 />
               </ul>
               <ul className='cards__items'>
                 <CardsItem
                   src={img3}
                   text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                   label='Mystery'
                   path='/services'
                 />
                 <CardsItem
                   src={img4}
                   text='Experience Football on Top of the Himilayan Mountains'
                   label='Adventure'
                   path='/products'
                 />
                 <CardsItem
                   src={img8}
                   text='Ride through the Sahara Desert on a guided camel tour'
                   label='Adrenaline'
                   path='/sign-up'
                 />
                                  
            </ul>
            <ul className='cards__items'>
                <CardsItem
                   src={img5}
                   text='Ride through the Sahara Desert on a guided camel tour'
                   label='Adrenaline'
                   path='/sign-up'
                 />
                <CardsItem
                   src={img6}
                   text='Ride through the Sahara Desert on a guided camel tour'
                   label='Adrenaline'
                   path='/sign-up'
                 />
                <CardsItem
                   src={img7}
                   text='Ride through the Sahara Desert on a guided camel tour'
                   label='Adrenaline'
                   path='/sign-up'
                 />
            </ul>

        </div>
      </div>
    </div>
  )
}

export default Cards;