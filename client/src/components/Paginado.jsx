import React from "react";
import styles from "./CSS/Paginado.module.css"

export default function Paginado({ pokemonsPerPage, allPokemons, paginado }) {
	const pageNumbers = [];

	for (let i = 0; i < Math.ceil(allPokemons / pokemonsPerPage); i++) {
		pageNumbers.push(i+1);
	}

	return (
		<nav >
			<div  className="paginado">
				{pageNumbers &&
					pageNumbers.map((number) => (
							<button key={number} className={styles.button} onClick={() => paginado(number)}>{number}</button>
					))}
			</div>
		</nav>
	);
}
