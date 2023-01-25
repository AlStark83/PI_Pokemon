import React from "react"; // eslint-disable-next-line
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";

export default function Home() {
	const dispatch = useDispatch();
	const allPokemons = useSelector((state) => state.pokemons);
	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
	const indexOfLastPokemon = currentPage * pokemonsPerPage; //12
	const indexOfFirtsPokemon = indexOfLastPokemon - pokemonsPerPage; //0
	const currentPokemons = allPokemons.slice(
		indexOfFirtsPokemon,
		indexOfLastPokemon
	);

	const paginado = (number) => {
		setCurrentPage(number);
	};

	useEffect(() => {
		dispatch(getPokemons()); // eslint-disable-next-line
	}, [dispatch]);

	function handleClick(e) {
		e.preventDefault();
		dispatch(getPokemons());
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
				<select name="ordenAlfabetico" id="OrdenAlfa">
					<option value="asc">Ascendente</option>
					<option value="desc">Descendente</option>
				</select>
				<select name="ordenPorAtaque" id="OrdenAttack">
					<option value="asc">Ascendente</option>
					<option value="desc">Descendente</option>
				</select>
				<select name="FiltroPorTipo" id="TypeFilter">
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
				<select name="FiltroPorCreado" id="CreatedByFilter">
					<option value="all">Todos</option>
					<option value="created">Creados</option>
					<option value="api">Existentes</option>
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
									name={el.name}
									img={el.img}
									types={el.types.map((el) => el.name)}
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
}
