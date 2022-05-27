import React from 'react'
import FudoNavbar from './FudoNavbar'
import { BrowserRouter } from 'react-router-dom';

function Header() {
  return (
    <div>
      <BrowserRouter>
      <FudoNavbar />
      </BrowserRouter>
        
    </div>
  )
}

export default Header