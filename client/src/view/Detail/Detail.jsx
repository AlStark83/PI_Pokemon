import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions/";
import { useEffect } from "react";
import Loader from "../../components/Loader";
import styles from "./Detail.module.css";

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
						<div className={styles.detailsContainer}>
							<div className={styles.col}>
								<img
									className={styles.pokemonImg}
									src={myPokemon.img}
									alt={myPokemon.name}
								/>
								<h1 className={styles.pokemonName}>
									<strong>{myPokemon.name}</strong>
								</h1>
								<p>{myPokemon.hp} HP</p>
							</div>
							<div className={styles.col}>
								<div className={styles.pokemonDetails}>
									<p>Weight: {myPokemon.weight}</p>
									<p className={styles.types}>
										Types: {myPokemon.types.map((e) => e.name + " ")}
									</p>
									<p>Height: {myPokemon.height}</p>
									<p>Attack: {myPokemon.attack}</p>
									<p>Defense: {myPokemon.defense}</p>
									<p>Speed: {myPokemon.speed}</p>
								</div>
						<Link to="/home">
							<button className={styles.button}>Back to Pokedex</button>
						</Link>
							</div>
						</div>
					</div>
				) : (
					<Loader />
				)
			}
		</div>
	);
}
