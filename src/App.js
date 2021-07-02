import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
	return (
		<>
			<Router>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>

				<Switch>
					<Route path="/" exact component={Home}></Route>
					<Route path="/about" component={About}></Route>
				</Switch>
			</Router>
		</>
	);
};

export default App;
