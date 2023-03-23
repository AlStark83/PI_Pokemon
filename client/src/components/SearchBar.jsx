import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemon } from "../redux/actions/index";
import styles from "./CSS/SearchBar.module.css"


export default function SearchBar() {
	const dispatch = useDispatch();
	const [name, setName] = useState("");

	function handleInputChange(e) {
		e.preventDefault();
		setName(e.target.value);
		console.log(name);
	}
	function handleSubmit(e) {
		e.preventDefault();
		dispatch(getNamePokemon(name));
	}
	return (
		<div>
			<input
				type="text"
				placeholder="Search..."
				onChange={(e) => handleInputChange(e)}
			/>
			<button className={styles.button} type="submit" onClick={(e) => handleSubmit(e)}>
				Search
			</button>
		</div>
	);
}
