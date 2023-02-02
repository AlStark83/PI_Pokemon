import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions/index";
import { useEffect } from "react";
import Loader from "./Loader";
import styles from "./CSS/Detail.module.css";

export default function Detail(props) {
	console.log(props);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDetail(props.match.params.id)); // eslint-disable-next-line
	}, []);
	const myPokemon = useSelector((state) => state.detail);

	console.log(myPokemon);
	return (
		<div>
			{
				// <h1>Hello</h1>
				myPokemon.name ? (
					<div className={styles.mainContainer}>
						<h1>Pokemon Stats & Details</h1>
						<div className={styles.detailsContainer}>
							<div className={styles.col}>
								<h1 className={styles.pokemonName}>
									<strong>{myPokemon.name}</strong>
								</h1>
								<img
									className={styles.pokemonImg}
									src={myPokemon.img}
									alt={myPokemon.name}
								/>
							</div>
							<div className={styles.col}>
								<div className={styles.pokemonDetails}>
									<p>Healt Point: {myPokemon.hp}</p>
									<p>Attack: {myPokemon.attack}</p>
									<p>Defense: {myPokemon.defense}</p>
									<p>Speed: {myPokemon.speed}</p>
									<p>Height: {myPokemon.height}</p>
									<p>Weight: {myPokemon.weight}</p>
									<p className={styles.types}>Types: {myPokemon.types.map((e) => e.name + " ")}</p>
								</div>
							</div>
						</div>
					</div>
				) : (
					<Loader />
				)
			}
			<Link to="/home">
				<button className={styles.button}>Back to Pokedex</button>
			</Link>
		</div>
	);
}
