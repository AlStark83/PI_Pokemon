import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

export default function LandingPage() {
	return (
		<div className={styles.landing}>
			{/* <div className={styles.image}>
				<img
					src="https://res.cloudinary.com/dfivzhcuw/image/upload/v1679021482/Squirtle_pffwsm.png"
					alt="Squirtle"
				/>
			</div> */}
			<div className={styles.col2}>
				<div className={styles.logo}>
					<img
						src="https://res.cloudinary.com/dfivzhcuw/image/upload/v1679687192/pokemon-logo_oygf84.png"
						alt="Pokemon Logo"
					/>
				</div>
				<h1>Go to Catch'em All</h1>
				<Link to="/home">
					<button className={styles.button}>Enter</button>
				</Link>
			</div>
		</div>
	);
}
