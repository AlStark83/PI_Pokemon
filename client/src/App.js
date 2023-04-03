import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./view/Landing/LandingPage";
import Home from "./view/Home/Home";
import PokemonCreate from "./view/Form/Form";
import Detail from "./view/Detail/Detail";
import Loader from "./components/Loader";
import axios from "axios";
axios.defaults.baseURL = "https://pipokemon-production-c672.up.railway.app/"

function App() {
	return (
		<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route path="/home" component={Home} />
					<Route path="/create" component={PokemonCreate} />
					<Route path="/pokemons/:id" component={Detail} />
					<Route path="/loader" component={Loader} />
		</Switch>
	);
}

export default App;
