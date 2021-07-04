import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const Navigation = () => {
	const cartStyle = {
		background: "#F59E0D",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: "50px",
		padding: "6px 12px",
	};

	const { cart } = useContext(CartContext);

	return (
		<>
			<nav className="navbar ">
				<div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0 ">
					<Link className="flex items-center justify-center" to="/">
						<img
							style={{ height: "45px" }}
							src="/images/logo2.jpg"
							alt="logo"
						/>
						<b>PizzaGhor</b>
					</Link>

					<ul className="flex items-center">
						<li className="hidden md:block">
							<Link to="/">Home</Link>
						</li>
						<li className="ml-6">
							<Link to="/products">Products</Link>
						</li>
						<li className="ml-6">
							<Link to="/cart">
								<div style={cartStyle}>
									<span style={{ fontWeignt: "500" }}>
										{cart.totalItems ? cart.totalItems : 0}
									</span>
									<img
										style={{ height: 27, color: "white" }}
										src="/images/cart2.png"
										className="ml-2"
										alt="cart-icon"
									/>
								</div>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navigation;
