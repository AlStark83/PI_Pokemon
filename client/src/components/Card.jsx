import React from "react";
import { Link } from "react-router-dom";
import styles from "./CSS/Card.module.css";

export default function Card({id, name, img, types, hp }) {
	console.log(hp, id)
	return (
		<div className={styles.pokemonCard} key={id}>
			<Link to={`/pokemons/${id}`}>
				<img className={styles.pokemonImage} src={img} alt="not found" />
			</Link>
			<h2>{hp}</h2>
			{/* <h5>{types.map((e) => e.name + " ")}</h5> */}
			<h3 className={styles.name}>{name}</h3>
		</div>
	);
}
