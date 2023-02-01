import React from "react";
import { Link } from "react-router-dom";
export default function LandingPage() {
	return (
		<div>
			<a href="https://fontmeme.com/es/anadir-bordes/"><img src="https://fontmeme.com/permalink/230128/d791fc1496ece52131cfa65e9dc9bf5c.png" alt="anadir-bordes" border="0"/></a>
			<h1>Go to Catch'em All</h1>
			<Link to="/home">
				<button>Ingresar</button>
			</Link>
		</div>
	);
}
