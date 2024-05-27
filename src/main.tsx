import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import ReactDOM from 'react-dom/client'
import React from 'react'

import { MyNavbar } from './Navbar'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyNavbar pageName='Entrega'/>
    <App/>
  </React.StrictMode>
)
