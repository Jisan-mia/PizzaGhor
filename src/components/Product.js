import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const Product = ({ product }) => {
	const [isAdding, setIsAdding] = useState(false);
	const { name, price, size, image, _id } = product;
	const { cart, setCart } = useContext(CartContext);

	// add to cart function
	const addToCart = (event, product) => {
		event.preventDefault();
		// localStorage cart structure example
		// const cart = {
		// 	items: {
		// 		'60c67bc0f5ee510015f3dda7': 2,
		// 		'60c67bdff5ee510015f3dda8': 3
		// 	},
		// 	totalItems: 5
		// }

		let _cart = { ...cart }; // {items: {}}
		if (!_cart.items) {
			_cart.items = {};
		}
		if (_cart.items[product._id]) {
			// _cart.items[product._id] = _cart.items[product._id] + 1;
			_cart.items[product._id] += 1;
		} else {
			_cart.items[product._id] = 1;
		}

		if (!_cart.totalItems) {
			_cart.totalItems = 0;
		}
		_cart.totalItems += 1;

		setCart(_cart);

		// show added for 300ms in add text
		setIsAdding(true);
		setTimeout(() => {
			setIsAdding(false);
		}, 500);
	};

	return (
		<Link to={`products/${_id}`}>
			<div>
				<img className="rounded-full" src={image} alt="" />
				<div className="text-center">
					<h2 className="text-lg font-bold py-2">{name}</h2>
					<span className="bg-gray-200 py-1 rounded-full text-sm px-4">
						{size}
					</span>
				</div>

				<div className="flex justify-between items-center mt-4">
					<span>৳ {price}</span>
					<button
						onClick={(e) => {
							addToCart(e, product);
						}}
						className={`${
							isAdding ? "bg-purple-500" : "bg-yellow-500 "
						} px-4 py-1 rounded-full text-white`}
						disabled={isAdding}
					>
						Add{isAdding ? "ed" : ""}
					</button>
				</div>
			</div>
		</Link>
	);
};

export default Product;
