import React, { useState } from 'react'
import Acesso from './components/Acesso'
import { Outlet } from 'react-router-dom'

export default function App() {
  const usuario=localStorage.getItem('usuario',false)
  return (
  <>
  {usuario=="true"?<Outlet/>:<Acesso/>}
  </>
  )
}