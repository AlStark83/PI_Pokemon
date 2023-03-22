import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import PokemonCreate from "./components/PokemonCreate";
import Detail from "./components/Detail";
import Loader from "./components/Loader";

function App() {
	return (
		<Routes>
					<Route exact path="/" component={LandingPage} />
					<Route path="/home" component={Home} />
					<Route path="/create" component={PokemonCreate} />
					<Route path="/pokemons/:id" component={Detail} />
					<Route path="/loader" component={Loader} />
		</Routes>
	);
}

export default App;
