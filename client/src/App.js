import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import PokemonCreate from "./components/PokemonCreate";
import Detail from "./components/Detail";
import Loader from "./components/Loader";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route path="/home" component={Home} />
					<Route path="/create" component={PokemonCreate} />
					<Route path="/pokemons/:id" component={Detail} />
					<Route path="/loader" component={Loader} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
