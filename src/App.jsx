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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className='col-lg-3 col-md-4 col-6'>
        <Card
          note={'Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.'}
          title={'Functional Component'}
          date={'Kamis, 14 April 2022'}
          textBtn={'Archieve'}
          // styleBtn={{backgroundColor:'var(--warning)', color:'var(--dark)'}}
          classNameBtn={'btnNote col-12 rounded-4'}
          styleEdit={{color:'var(--info-light)'}}
          styleDiv={{
            color:'var(--light',
            backgroundColor:'var(--primary)'
          }}
        />
      </div>
    </>
  )
}

export default App
