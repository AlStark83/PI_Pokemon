import React from "react";
import { Link } from "react-router-dom";
import styles from "./CSS/Card.module.css";

export default function Card({ id, name, img, types }) {
	return (
		<div className={styles.pokemonCard} key={id}>
			<Link to={`/pokemons/${id}`}>
				<img className={styles.pokemonImage} src={img} alt="not found" />
			</Link>
            <p>{id}</p>
			<h5>{types}</h5>
			<h3>{name}</h3>
		</div>
	);
}
