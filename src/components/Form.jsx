import { useState } from 'react'
import logo from '../images/img01.jpg'



function MyForm() {
    return (
      <>
        <div style={{ backgroundImage: `url(${logo})`, height: '1000px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'}}>

          <button>BUTTON</button>
          <button>BUTTON</button>
        </div>
        
        {/* <img src={logo} alt="portlandlogo"/>
         */}
      </>
    )
  }

export default MyForm;