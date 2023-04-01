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
	// console.log(myPokemon.types.length);
	return (
		<div>
			{
				// <h1>Hello</h1>
				myPokemon.name ? (
					<div className={styles.mainContainer}>
						<div className={styles.detailsContainer}>
							<div id={styles.pokemonAndName}className={styles.col}>
								<img
									className={styles.pokemonImg}
									src={myPokemon.img}
									alt={myPokemon.name}
								/>
								<h1 className={styles.pokemonName}>
									<strong>{myPokemon.name}</strong>
								</h1>
								<p id={styles.hp}>{myPokemon.hp} HP</p>
								<hr className={styles.hpLine} />
							</div>
							<div className={styles.col}>
								<div className={styles.pokemonDetails}>
									<div className={styles.topDetails}>
										<div className={styles.detail}>
											<h3>{myPokemon.weight / 10}Kg</h3>
											<p>WEIGHT</p>
										</div>
										<div className={styles.types}>
											<div className={styles.detail}>
												{/* Types: {myPokemon.types.length === 1? myPokemon.types[0].name : myPokemon.types.map((e) => e.name + " / ")} */}
												<p>Types</p>
												<h5>
													{myPokemon.types.length === 1
														? myPokemon.types[0].name
														: `${myPokemon.types[0].name} / ${myPokemon.types[1].name}`}
												</h5>
											</div>
										</div>
										<div className={styles.detail}>
											<h3>{myPokemon.height / 10}m</h3>
											<p>HEIGHT</p>
										</div>
									</div>
									<hr className={styles.lineDetails}/>
									<div className={styles.bottonDetails}>
										<div className={styles.detail}>
											<h3>{myPokemon.attack}</h3>
											<p>ATTACK</p>
										</div>
										<div className={styles.detail}>
										<h3>{myPokemon.defense}</h3>
										<p>DEFENSE</p>
										</div>
										<div className={styles.detail}>
										<h3>{myPokemon.speed}</h3>
										<p>SPEED</p>
										</div>
									</div>
									<Link to="/home">
										<button className={styles.button}>Back to Pokedex</button>
									</Link>
								</div>
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
