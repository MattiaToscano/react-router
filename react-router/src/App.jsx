import { react } from 'react'


//Importo Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

//Importo Routers
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Importo le pagine
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Product from './pages/Product';




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Homepage} />
          <Route path='/product' Component={Product} />
          <Route path='/about' Component={AboutUs} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
