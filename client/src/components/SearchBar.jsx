import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemon } from "../redux/actions/index";
import styles from "./CSS/SearchBar.module.css"

const element = <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" style={{color: "#fafafa",}} />



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
		<div className={styles.container}>
			<input
				type="text"
				placeholder="Search..."
				onChange={(e) => handleInputChange(e)}
			/>
			<button className={styles.searchButton} type="submit" onClick={(e) => handleSubmit(e)}>
			{element}
			</button>
		</div>
	);
}
