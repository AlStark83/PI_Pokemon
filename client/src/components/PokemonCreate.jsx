import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postPokemon, getTypes } from "../actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CSS/PokemonCreate.module.css";

const validate = (input) => {
	const errors = {};
	let validateLetters = /^[a-zA-Z]+$/;
	let validateDigits = /^[0-9]+$/;
	let validateUrl = /^(ftp|http|https):\/\/[^ "]+$/;

	if (!input.name || input.name === "  " || !validateLetters.test(input.name))
		errors.name = "Name is required to be letters and without spaces";

	if (!input.img || !validateUrl.test(input.img))
		errors.img = "Image is required and URL type";

	if (
		!input.hp ||
		input.hp < 0 ||
		input.hp > 255 ||
		!validateDigits.test(input.hp)
	)
		errors.hp = "Health Points is required and valid between 1 - 255";

	if (
		!input.attack ||
		input.attack < 0 ||
		input.attack > 190 ||
		!validateDigits.test(input.attack)
	)
		errors.attack = "Attack is required and valid between 1 - 190";

	if (
		!input.defense ||
		input.defense < 0 ||
		input.defense > 250 ||
		!validateDigits.test(input.defense)
	)
		errors.defense = "Defense is required and valid between 1 - 250";

	if (
		!input.speed ||
		input.speed < 0 ||
		input.speed > 250 ||
		!validateDigits.test(input.speed)
	)
		errors.speed = "Speed is required and valid between 1 - 250";

	if (
		!input.height ||
		input.height < 0 ||
		input.height > 35 ||
		!validateDigits.test(input.height)
	)
		errors.height = "Height is required and valid between 1 - 35 m";

	if (
		!input.weight ||
		input.weight < 0 ||
		input.weight > 1000 ||
		!validateDigits.test(input.weight)
	)
		errors.weight = "Weight is required and valid between  1 - 1000 kg";

	return errors;
};
// };
export default function PokemonCreate() {
	const dispatch = useDispatch();
	const history = useHistory();
	const pokemons = useSelector((state) => state.allpokemons);
	const allTypes = useSelector((state) => state.types);
	const [errors, setErrors] = useState({
		name: "",
		hp: "",
		attack: "",
		defense: "",
		speed: "",
		height: "",
		weight: "",
		img: "",
		types: [],
	});

	const [input, setInput] = useState({
		name: "",
		hp: "",
		attack: "",
		defense: "",
		speed: "",
		height: "",
		weight: "",
		img: "",
		types: [],
	});

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
		setErrors(
			validate({ ...input, [e.target.name]: e.target.value }, pokemons)
		);
		console.log(input);
	};

	// function handleCheck(e) {
	// 	if (e.target.checked) {
	// 		setInput({
	// 			...input,
	// 			status: e.target.value,
	// 		});
	// 	}
	// }
	const handleSelect = (e) => {
		if (!input.types.includes(e.target.value)) {
			setInput({
				...input,
				types: [...input.types, e.target.value],
			});
			setErrors(
				validate({ ...input, types: [...input.types, e.target.value] })
			);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(input);
		dispatch(postPokemon(input));
		alert("Pokemon Created Succesfully!!!");
		setInput({
			name: "",
			hp: "",
			attack: "",
			defense: "",
			speed: "",
			height: "",
			weight: "",
			img: "",
			types: [],
		});
		history.push("/home");
	};

	function handleDelete(el) {
		setInput({
			...input,
			types: input.types.filter((type) => type !== el),
		});
	}

	useEffect(() => {
		dispatch(getTypes()); // eslint-disable-next-line
	}, []);
	return (
		<div className="principalContainer">
			<div className="title">
				<img
					src="https://fontmeme.com/permalink/230202/d8c12ed95f7b3c9c9b83256f5c843e28.png"
					alt=""
				/>
			</div>

			<div className="formContainer">
				<div>
					<form onSubmit={(e) => handleSubmit(e)}>
						<div className={styles.inputAndLabel}>
							<label htmlFor="name">Name: </label>
							<input
								type="text"
								value={input.name}
								name="name"
								required
								onChange={(e) => handleChange(e)}
							/>
							{errors.name && <p className="error">{errors.name}</p>}
						</div>

						<div className={styles.inputAndLabel}>
							<label htmlFor="hp">Health Points:</label>
							<input
								type="number"
								min="1"
								max="255"
								placeholder="1 - 255"
								value={input.hp}
								name="hp"
								required
								onChange={(e) => handleChange(e)}
							/>
							{errors.hp && <p className="error">{errors.hp}</p>}
						</div>
						<div className={styles.inputAndLabel}>
							<label htmlFor="attack">Attack: </label>
							<input
								type="number"
								min="1"
								max="190"
								placeholder="1 - 190"
								value={input.attack}
								name="attack"
								required
								onChange={(e) => handleChange(e)}
							/>
							{errors.attack && <p className="error">{errors.attack}</p>}
						</div>
						<div className={styles.inputAndLabel}>
							<label htmlFor="defense">Defense: </label>
							<input
								type="number"
								min="1"
								max="250"
								placeholder="1 - 250"
								value={input.defense}
								name="defense"
								required
								onChange={(e) => handleChange(e)}
							/>
							{errors.defense && <p className="error">{errors.defense}</p>}
						</div>
						<div className={styles.inputAndLabel}>
							<label htmlFor="speed">Speed: </label>
							<input
								type="number"
								min="1"
								max="200"
								placeholder="1 - 200"
								value={input.speed}
								name="speed"
								required
								onChange={(e) => handleChange(e)}
							/>
							{errors.speed && <p className="error">{errors.speed}</p>}
						</div>
						<div className={styles.inputAndLabel}>
							<label htmlFor="height">Height: </label>
							<input
								type="number"
								value={input.height}
								name="height"
								min="1"
								max="35"
								placeholder="1 - 35"
								required
								onChange={(e) => handleChange(e)}
							/>
							{errors.height && <p className="error">{errors.height}</p>}
						</div>
						<div className={styles.inputAndLabel}>
							<label htmlFor="weight">Weight: </label>
							<input
								type="number"
								min="1"
								max="1000"
								placeholder="1 - 1000"
								value={input.weight}
								name="weight"
								required
								onChange={(e) => handleChange(e)}
							/>
							{errors.weight && <p className="error">{errors.weight}</p>}
						</div>
						<div className={styles.inputAndLabel}>
							<label htmlFor="img">Image: </label>
							<input
								type="text"
								value={input.img}
								name="img"
								required
								onChange={(e) => handleChange(e)}
							/>
						</div>
						{/* <label>Types:</label>
				<input type="text" value={input.types} name="types" onChange={handleChange()} /> */}
						<div  className={styles.inputAndLabel} key="types">
							<label htmlFor="types">Choose 1 or 2 types</label>
							<select
								name="types"
								onChange={(e) => {
									handleSelect(e);
								}}>
								{allTypes?.map((typ) => (
									<option value={typ}>{typ}</option>
								))}
							</select>
							<div name="listaParaDisplayNone">
								<li>{input.types.map((el) => el + ", ")}</li>
							</div>
							{errors.types && <p className="error">{errors.types}</p>}
						</div>
						<div>
							<button
								className={styles.containerButton}
								type="submit"
								disabled={
									!input.name ||
									!input.types.length > 0 ||
									errors.name ||
									errors.life ||
									errors.attack ||
									errors.defense ||
									errors.speed ||
									errors.height ||
									errors.weight ||
									errors.img ||
									errors.types
								}>
								SUBMIT
							</button>
						</div>
					</form>
				</div>
				{input.types.map((el) => (
					<div className="divTypes">
						<p>{el}</p>
						<button className="botonx" onClick={() => handleDelete(el)}>
							x
						</button>
					</div>
				))}
				<div>
					<img
						src="http://pa1.narvii.com/7551/8b482f70f7857bdae3eb6d6f36ba5f44e6e377ccr1-500-270_00.gif"
						alt="pokemon incubated"
					/>
				</div>
			</div>
			<div>
				<Link to={"/home"}>
					<button className={styles.button}>Back to Home</button>
				</Link>
			</div>
		</div>
	);
}
