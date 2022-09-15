import React,{useState} from 'react'
import memesData from '../../Data/memesData'

const Meme = () => { 

  const [meme, setMeme] = useState({
    topText: "", 
    bottomText: "", 
    randomImage: "http://i.imgflip.com/1bij.jpg", 
  }); 

  const [allMemeImages, setAllMemeImages] = useState([memesData]); 

  // const [formInput, setFormInput] = useState({
  //   topText: "", 
  //   bottomText: ""
  // })

  // console.log(formInput)

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
    const memesArray = allMemeImages[0].data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length) 
    const url = memesArray[randomNumber].url
    const {name, value} = event.target

    setMeme( prevMeme => ({
        ...prevMeme, 
        [name]: value, 
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
           <img src={meme.randomImage} alt="meme" className='meme-url'/>
           <h2 className='meme-text top'>{meme.topText}</h2> 
           <h2 className='meme-text bottom'>{meme.bottomText}</h2>
       </div>


    </div>
  )
}

export default Meme