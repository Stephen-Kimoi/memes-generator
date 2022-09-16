import './App.css'
import Header from './components/Header/Header'
import Meme from './components/Meme/Meme'
import Instructions from './components/Instructions/Instructions'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
         <Route path={"/"} element={<Meme />}/> 
         <Route path={"/instructions"} element={<Instructions/>}/> 
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
