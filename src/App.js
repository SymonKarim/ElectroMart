import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routers from './Routers'
import NavBar from './shared/Header/NavBar/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AuthProvider from './Context/AuthProvider'
const App = () => {
  return (
     <AuthProvider>
     <BrowserRouter>
      <NavBar />
      <Routers />
      </BrowserRouter>
     </AuthProvider>
  )
}

export default App
