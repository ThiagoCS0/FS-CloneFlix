import { Outlet } from 'react-router-dom'
import React, { useState } from 'react'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import Acesso from './pages/Acesso'
import ImgFundo from '/fundo.jpg'

export default function App() {
  const usuario = localStorage.getItem('usuario', false)
  return (
    <>
      <div id='imgFundo' >
        <img src={ImgFundo} />
      </div>
      {usuario == "true" ? <Outlet /> :
        (
          <>
            <Cabecalho />
            <div id='dAcesso'>
              <Acesso />
            </div>
            <Rodape />
          </>
        )}
    </>
  )
}