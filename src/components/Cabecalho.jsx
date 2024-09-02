import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '/cloneflix.png'
export default function Cabecalho() {

	return (
		<>
			<div id="cabecalho">
				<img src={logo} alt="Cloneflix" />
			</div>
		</>
	)
}