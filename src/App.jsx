import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Page from './pages/index'

function App() {
  return (
    <div style={{backgroundColor:'var(--dark)'}} className='min-vh-100'>
      <Page/>
    </div>
  )
}

export default App
