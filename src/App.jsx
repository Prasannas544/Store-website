import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
    <Routes>
     <Route path="/" exact element={<Home/>}/>
     <Route path="/dashboard" element={<Dashboard/>}/>
     <Route path="/cart" element={<Cart/>}/>

    </Routes>

  
  </BrowserRouter>

  )
}

export default App
