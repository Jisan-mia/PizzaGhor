import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CartContext } from "./CartContext";
import CopyWrite from "./components/CopyWrite";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
	const [cart, setCart] = useState({});
	//fetch cart from localStorage
	useEffect(() => {
		const cart = window.localStorage.getItem("cart");
		if (cart !== null) {
			setCart(JSON.parse(cart));
		}
	}, []);
	useEffect(() => {
		window.localStorage.setItem("cart", JSON.stringify(cart));
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
					{/* footer */}
					<div>
						<Footer></Footer>
						<CopyWrite></CopyWrite>
					</div>
				</CartContext.Provider>
			</Router>
		</>
	);
};

export default App;
