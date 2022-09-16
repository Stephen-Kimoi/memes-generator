import React from 'react'
import troll_face from '../assets/troll-face.png'; 
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate(); 
  return (
    <header>
            <img src={troll_face} alt="troll face" className='header-img'/>
            <h1 className='header-title'>Meme Generator</h1>
            <p 
              className='header-description' 
              href="/instructions" 
              onClick={ () => {
                navigate("/instructions")
              }}
            > Click for<br/>Insructions</p>
    </header>
  )
}

export default Header