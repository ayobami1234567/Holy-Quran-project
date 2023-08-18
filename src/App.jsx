import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import QuranPage  from './Components/QuranPage'
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/:transliteration' element={<QuranPage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App