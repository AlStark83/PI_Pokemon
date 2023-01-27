import React from "react"; // eslint-disable-next-line
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getPokemons,
	filterPokemonsByType,
	filterPokemonsByCreated,
	orderByName,
	orderByAttack
} from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";

export default function Home() {
	const dispatch = useDispatch();
	const allPokemons = useSelector((state) => state.pokemons);
	const types = useSelector((state) => state.types);
	const [orden, setOrden] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
	const indexOfLastPokemon = currentPage * pokemonsPerPage; //12
	const indexOfFirtsPokemon = indexOfLastPokemon - pokemonsPerPage; //0
	const currentPokemons = allPokemons.slice(
		indexOfFirtsPokemon,
		indexOfLastPokemon
	);
	useEffect(() => {
		dispatch(getPokemons()); // eslint-disable-next-line
	}, [dispatch]);

	const paginado = (number) => {
		setCurrentPage(number);
	};

	function handleClick(e) {
		e.preventDefault();
		dispatch(getPokemons());
	}

	function handleSortByName(e) {
		e.preventDefault();
		dispatch(orderByName(e.target.value));
		setCurrentPage(1);
		setOrden(`Ordenado ${e.target.value}`);
	}
	function handleSortByAttack(e) {
		e.preventDefault();
		dispatch(orderByAttack(e.target.value));
		setCurrentPage(1);
		setOrden(`Ordenado ${e.target.value}`);
	}

	function handlerFilterType(e) {
		dispatch(filterPokemonsByType(e.target.value));
	}
	function handlerFilterCreated(e) {
		dispatch(filterPokemonsByCreated(e.target.value));
	}
	return (
		<div>
			<Link to="/pokemon">Crear Pokemon</Link>
			<h1>Pokemons</h1>
			<button
				onClick={(e) => {
					handleClick(e);
				}}>
				Volver a cargar todos los pokemons
			</button>
			<div>
				<select onChange={(e) => handleSortByName(e)}>
					<option value="asc">Ascendente</option>
					<option value="desc">Descendente</option>
				</select>
				<select onChange={(e) => handleSortByAttack(e)}>
					<option value="asc">Ascendente</option>
					<option value="desc">Descendente</option>
				</select>
				<select onChange={(e) => handlerFilterType(e)}>
					<option value="all">All</option>
					<option value="normal">Normal</option>
					<option value="flying">Flying</option>
					<option value="fighting">Fighting</option>
					<option value="poison">Poison</option>
					<option value="ground">Ground</option>
					<option value="rock">Rock</option>
					<option value="bug">Bug</option>
					<option value="ghost">Ghost</option>
					<option value="steel">Steel</option>
					<option value="fire">Fire</option>
					<option value="water">Water</option>
					<option value="grass">Grass</option>
					<option value="electric">Electric</option>
					<option value="psychic">Psychic</option>
					<option value="ice">Ice</option>
					<option value="dragon">Dragon</option>
					<option value="dark">Dark</option>
					<option value="fairy">Fairy</option>
					<option value="unknown">Unknown</option>
					<option value="shadow">Shadow</option>
				</select>
				<select onChange={(e) => handlerFilterCreated(e)}>
					<option value="all">All</option>
					<option value="created">Created</option>
					<option value="api">Existents</option>
				</select>
				<Paginado
					pokemonsPerPage={pokemonsPerPage}
					allPokemons={allPokemons.length}
					paginado={paginado}
				/>
				{currentPokemons &&
					currentPokemons.map((el) => {
						return (
							<div>
								<Card
									id={el.id}
									name={el.name}
									img={el.img}
									types={el.types}
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
}
