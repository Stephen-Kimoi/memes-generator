import React,{useEffect, useState} from 'react'
import startImage from '../assets/meme2.jpg'

const api = "https://api.imgflip.com/get_memes"; 

const Meme = () => { 

  const [meme, setMeme] = useState({
    topText: "", 
    bottomText: "", 
    randomImage: startImage, 
  }); 

  const [allMemes, setAllMemes] = useState([]); 

  const [loader, setLoader] = useState(false)

  useEffect( () => {
    fetch(api) 
    .then( response => response.json()) 
    .then( data => {
      const { memes } = data.data 
      setAllMemes(memes)
    })
  }, []) 

  const handleChange = (event) => {
      const {name, value} = event.target

      setMeme( prevMeme => {
        return {
          ...prevMeme, 
          [name]: value
        }
      })
  }

  const handleButton = (event) => {
    setLoader(true)
    const memesArray = allMemes
    const randomNumber = Math.floor(Math.random() * memesArray.length) 
    const url = memesArray[randomNumber].url
    const {name, value} = event.target

    setMeme( prevMeme => ({
        ...prevMeme, 
        [name]: value, 
        randomImage: url
    }))

    setLoader(false)

  }

  return (
    <div className='meme-container'>

       <div className='form'>
            <input 
                className='input'
                type='text' 
                placeholder='Top text'
                name="topText"
                value={meme.topText}
                onChange={handleChange}
            /> 
            <input 
                className='input'
                type='text'
                placeholder='Bottom text'
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
            />
           <button className="submit-button" type='submit' onClick={handleButton}>
              Get a new meme image 🖼
           </button>
       </div>

       <div className='meme-div'>
          {
            loader ? 
              <div>
                <h1>Loading</h1>
              </div> 
              : 
              <>
                <img src={meme.randomImage} alt="meme" className='meme-url'/>
                <h2 className='meme-text top'>{meme.topText}</h2> 
                <h2 className='meme-text bottom'>{meme.bottomText}</h2>
              </>
          }
       </div>


    </div>
  )
}

export default Meme