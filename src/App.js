import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CartContext } from "./CartContext";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import { getCart, storeCart } from "./helpers";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
	const [cart, setCart] = useState({});
	//fetch cart from localStorage
	useEffect(() => {
		getCart().then((cart) => {
			setCart(JSON.parse(cart));
		});
	}, []);

	useEffect(() => {
		storeCart(JSON.stringify(cart));
	}, [cart]);

	return (
		<>
			<Router>
				<CartContext.Provider value={{ cart, setCart }}>
					<Navigation />

					<Switch>
						<Route path="/" exact component={Home}></Route>
						<Route path="/products" exact component={Products}></Route>
						<Route path="/products/:_id" component={ProductDetail}></Route>
						<Route path="/cart" component={Cart}></Route>
					</Switch>
				</CartContext.Provider>
			</Router>
		</>
	);
};

export default App;
