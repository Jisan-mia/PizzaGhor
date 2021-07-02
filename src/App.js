import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
const App = () => {
	return (
		<>
			<Router>
				<Navigation />

				<Switch>
					<Route path="/" exact component={Home}></Route>
					<Route path="/products" exact component={Products}></Route>
					<Route path="/products/:_id" component={ProductDetail}></Route>
					<Route path="/cart" component={Cart}></Route>
				</Switch>
			</Router>
		</>
	);
};

export default App;
