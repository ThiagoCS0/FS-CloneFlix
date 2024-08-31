import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './Index.css'
import Inicio from './pages/Inicio.jsx'

const rota = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      { path: '/FS-CloneFlix/', element: <App /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rota} />
  </React.StrictMode>
)
