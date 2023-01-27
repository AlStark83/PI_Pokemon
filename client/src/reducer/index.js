import { all } from "axios";

const initialState = {
	pokemons: [],
	allPokemons: [],
	pokemonsFilter: [],
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_POKEMONS":
			return {
				...state,
				pokemons: action.payload,
				allPokemons: action.payload,
			};

		case "FILTER_BY_TYPE":
			const allPokemons = state.allPokemons;
			const typeFiltered =
				action.payload === "all"
					? allPokemons
					: allPokemons.filter(el => el.types.includes(action.payload))
						
						
	
			// state.pokemonsFilter.filter(poke => poke.types.includes(action.payload)
			return {
				...state,
				pokemons: typeFiltered,
			};

		case "FILTER_BY_CREATED":
			const createdFilter =
				action.payload === "created"
					? state.allPokemons.filter((el) => el.createdInDb === true)
					: state.allPokemons.filter((el) => !el.createdInDb);
			return {
				...state,
				pokemons: action.payload === "all" ? state.allPokemons : createdFilter,
		};


		case "ORDER_BY_NAME":
			let sortedArr =
				action.payload === "asc"
					? state.allPokemons.sort(function (a, b) {
							if (a.name > b.name) {
								return 1;
							}
							if (b.name > a.name) {
								return -1;
							}
							return 0;
					  })
					: state.allPokemons.sort(function (a, b) {
							if (a.name > b.name) {
								return -1;
							}
							if (b.name > a.name) {
								return 1;
							}
							return 0;
					  });
			return {
				...state,
				allPokemons: sortedArr,
			};

			case "ORDER_BY_ATTACK":
				let sortedAttackArr =
					action.payload === "asc"
						? state.allPokemons.sort(function (a, b) {
								if (a.attack > b.attack) {
									return 1;
								}
								if (b.attack > a.attack) {
									return -1;
								}
								return 0;
						  })
						: state.allPokemons.sort(function (a, b) {
								if (a.attack > b.attack) {
									return -1;
								}
								if (b.attack > a.attack) {
									return 1;
								}
								return 0;
						  });
				return {
					...state,
					allPokemons: sortedAttackArr,
				};
		default:
			return state;
	}
}


export default rootReducer;
