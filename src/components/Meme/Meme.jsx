import React,{useState} from 'react'
import memesData from '../../Data/memesData'

const Meme = () => { 
  const [meme, setMeme] = useState({
    topText: "", 
    bottomText: "", 
    randomImage: "http://i.imgflip.com/1bij.jpg", 
  }); 
  const [allMemeImages, setAllMemeImages] = useState([memesData])

  const handleButton = () => {
    const memesArray = allMemeImages[0].data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length) 
    const url = memesArray[randomNumber].url

    setMeme( prevMeme => ({
        ...prevMeme, 
        randomImage: url
    }))

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

       <div className='meme-div'>
           <img src={meme.randomImage} alt="meme" className='meme-url'/>
       </div>


    </div>
  )
}

export default Meme