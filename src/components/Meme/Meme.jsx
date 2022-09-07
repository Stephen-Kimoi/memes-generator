import React from 'react'
import memesData from '../../Data/memesData'

const Meme = () => {
  let url 

  const handleButton = () => {
    const { memes } = memesData.data
   
    const randomNumber = Math.floor(Math.random() * memes.length) 
     
    url = memes[randomNumber].url
  }

  return (
    <div className='meme-container'>

       <div className='form'>
            <input 
                className='input'
                type='text' 
                placeholder='Top text'
            /> 
            <input 
                className='input'
                type='text'
                placeholder='Bottom text'
            />
           <button className="submit-button" type='submit' onClick={handleButton}>
              Get a new meme image 🖼
           </button>
       </div>

       <div>
           <img src={url}/>
       </div>


    </div>
  )
}

export default Meme