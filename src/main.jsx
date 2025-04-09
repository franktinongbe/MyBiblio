import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import Connexion from './components/Connexion.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Connexion />
  </StrictMode>,
)
