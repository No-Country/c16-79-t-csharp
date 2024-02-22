import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import Perfil from './Pages/Perfil/Perfil.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  <BrowserRouter>
    <React.StrictMode>
      <App />
      {/* <Perfil /> */}
    </React.StrictMode>,
  </BrowserRouter>
)
