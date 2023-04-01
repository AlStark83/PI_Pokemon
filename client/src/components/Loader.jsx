import React from "react";
import styles from "./CSS/Loader.module.css";
import { Wobble } from "@uiball/loaders";

const Loader = () => {
	return (
		<div className={styles.loader}>
			<div className={styles.spinner}>
				<Wobble size={160} lineWeight={16} speed={1.4} color="hsl(0.0, 0%, 90%)" />
			</div>
		</div>
	);
};

export default Loader;
