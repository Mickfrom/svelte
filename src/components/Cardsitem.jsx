import React from 'react'
import Link from 'react-router-dom'

function Cardsitem(props) {
  return (
    <>
      <li className='cards_item'>
        <Link className='cars__item__link' to={props.path}>
            <figure className='cars__item__pic-wrap' data-category={props.label}>
                <img src={props.src} alt='Travel Image'
                    className='cards__item__img'/>
                </figure>
                <div className='cards__irem__info'>
                    <h5 className='cards__item__text'>
                       {props.text} </h5>

                   
                </div>
        </Link>
      </li>
    </>
  );
}

export default Cardsitem
