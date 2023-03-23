import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

export default function LandingPage() {
	return (
		<div className={styles.landing}>
			<img
				src="https://fontmeme.com/permalink/230128/d791fc1496ece52131cfa65e9dc9bf5c.png"
				alt="anadir-bordes"
				border="0"
			/>

			<h1>Go to Catch'em All</h1>
			<Link to="/home">
				<button className={styles.button}>Enter</button>
			</Link>
		</div>
	);
}
