import axios from "axios";

export function getPokemons() {
	return async function (dispatch) {
		var json = await axios.get("/pokemons");
		return dispatch({
			type: "GET_POKEMONS",
			payload: json.data,
		});
	};
}

export function getNamePokemon(name) {
	return async function (dispatch) {
		try {
			var json = await axios.get("/pokemons?name=" + name);
			return dispatch({
				type: "GET_NAME_POKEMON",
				payload: json.data,
			});
		} catch (error) {
			console.log(error + "error en action getNamePokemons");
		}
	};
}

export function getTypes() {
	return async function (dispatch) {
		var info = await axios.get("/types", {});
		return dispatch({ type: "GET_TYPES", payload: info.data });
	};
}

export function postPokemon(payload) {
	return async function (dispatch) {
		const response = await axios.post(
			"/pokemons",
			payload
		);
		console.log(response);
		return response;
	};
}
export function filterPokemonsByType(payload) {
	console.log(payload);
	return {
		type: "FILTER_BY_TYPE",
		payload,
	};
}

export function filterPokemonsByCreated(payload) {
	console.log(payload);

	return {
		type: "FILTER_BY_CREATED",
		payload,
	};
}

export function orderByName(payload) {
	return {
		type: "ORDER_BY_NAME",
		payload,
	};
}

export function orderByAttack(payload) {
	return {
		type: "ORDER_BY_ATTACK",
		payload,
	};
}

export function getDetail(id) {
	return async function (dispatch) {
		try {
			var json = await axios.get(`/pokemons/${id}`);
			
			return dispatch({
				type: "GET_DETAILS",
				payload: json.data
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function cleanPokemon () {
	return {type: "CLEAN_POKEMON"}
}
