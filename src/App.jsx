import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './component/Navbar'
import Card from './element/Card'
import ModalForm from './component/ModalForm'
import HorizontalScroll from './component/HorizontalScroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{backgroundColor:'var(--dark)'}} className='min-vh-100'>
      <Navbar/>
      <HorizontalScroll/>
          <ModalForm
            number={50}
          />
    </div>
  )
}

export default App
