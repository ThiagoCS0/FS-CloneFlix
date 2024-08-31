import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../imgs/cloneflix.png'
export default function Header({ defNumero }) {

	return (
		<>
			<div id="cabecalho">
				<img src={logo} alt="Cloneflix" />
			</div>
		</>
	)
}