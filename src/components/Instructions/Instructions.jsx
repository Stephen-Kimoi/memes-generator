import React from 'react'
import { useNavigate } from 'react-router-dom'

const Instructions = () => {
  let navigate = useNavigate()
  return (
    <div className='instructions-container'> 
        <ol>
            <li>Click the get image button</li> 
            <li>Write the top text</li> 
            <li>Write the bottom text</li>
            <li>You can now laugh at your created meme</li>
            <button 
               href="/" 
               onClick={ () => {
                  navigate("/")
               }}
            >Home</button>
        </ol>
    </div>
  )
}

export default Instructions