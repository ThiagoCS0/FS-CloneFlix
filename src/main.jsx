import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Inicio from './pages/Inicio.jsx'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './Index.css'

const rota = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      { path: '/FS-CloneFlix/', element: <Inicio /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rota} />
  </React.StrictMode>
)
