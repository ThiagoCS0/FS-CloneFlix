import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImgLingua from "/traducao.png"

export default function Footer() {

 return (
  <div id="rodape">
   <div>
    <div>Dúvidas? Ligue <Link id="lTel" to="tel:08000000000">0800 000 0000</Link></div>
    <ul>
     <li><Link to="#">Perguntas frequentes</Link></li>
     <li><Link to="#">Central de Ajuda</Link></li>
     <li><Link to="#">Termos de Uso</Link></li>
     <li><Link to="#">Privacidade</Link></li>
     <li><Link to="#">Preferências de cookies</Link></li>
     <li><Link to="#">Informações comrporativas</Link></li>
    </ul>
    <div id="lingua">
     <img src={ImgLingua} alt="Linguagem" />
     <div>
      <select name="linguagem" id="linguagem" >
       <option lang="pt" label="Português" value="pt-BR">Português</option>
       <option lang="en" label="English" value="en-BR">English</option>
      </select>
     </div>
    </div>
   </div>
  </div>
 )
}