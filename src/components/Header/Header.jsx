import React from 'react'
import troll_face from '../assets/troll-face.png'; 

const Header = () => {
  return (
    <header>
            <img src={troll_face} alt="troll face" className='header-img'/>
            <h1 className='header-title'>Meme Generator</h1>
            <p className='header-description'>React Project 3</p>
    </header>
  )
}

export default Header