import axios from "axios";

export function getPokemons() {
	return async function (dispatch) {
		var json = await axios("http://localhost:3001/pokemons");
		return dispatch({
			type: "GET_POKEMONS",
			payload: json.data,
		});
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