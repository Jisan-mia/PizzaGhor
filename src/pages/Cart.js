import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import CartItem from "../components/CartItem";

const Cart = () => {
	const [cartProducts, setCartProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [total, setTotal] = useState(0);
	const [priceFetched, togglePriceFetched] = useState(false);
	const { cart, setCart } = useContext(CartContext);
	let grandTotal = 0;

	useEffect(() => {
		if (!cart.items) {
			setIsLoading(false);
			return;
		}
		if (priceFetched) {
			return;
		}
		fetch("https://ecom-rest-apis.herokuapp.com/api/products/cart-items", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ids: Object.keys(cart.items) }),
		})
			.then((res) => res.json())
			.then((products) => {
				setCartProducts(products);
				togglePriceFetched(true);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [cart, priceFetched]);

	// get cart product quantity
	const getQuantity = (id) => {
		return cart.items[id];
	};

	// increment cart product quantity
	const incrementQty = (productId) => {
		const existingQty = cart.items[productId];
		const _cart = { ...cart };

		_cart.items[productId] = existingQty + 1;
		_cart.totalItems += 1;
		setCart(_cart);
	};
	// decrement cart product quantity
	const decrementQty = (productId) => {
		const existingQty = cart.items[productId];
		if (existingQty === 1) {
			alert("Quantity cannot be <1");
			return;
		}
		const _cart = { ...cart };

		_cart.items[productId] = existingQty - 1;
		_cart.totalItems -= 1;
		setCart(_cart);
	};

	// get per cart product sum price
	const getPriceSum = (productId, price) => {
		const sum = price * getQuantity(productId);
		grandTotal += sum;
		setTotal(grandTotal);
		return sum;
	};

	// delete cart product
	const deleteCartItem = (productId) => {
		const _cart = { ...cart };
		const qty = _cart.items[productId];
		delete _cart.items[productId];

		_cart.totalItems = _cart.totalItems - qty;
		setCart(_cart);
		setCartProducts(
			cartProducts.filter((product) => product._id !== productId)
		);
	};

	// handle order now button
	const handleOrderBtn = () => {
		window.alert("Order placed successfully!");

		setCartProducts([]);
		setCart({});
	};
	return (
		<div className="container mx-auto pt-8 pb-24 lg:w-1/2 w-full">
			<h1 className="font-bold mb-8">Cart Items</h1>

			<ul>
				{cartProducts.length ? (
					cartProducts.map((cartProduct) => (
						<CartItem
							key={cartProduct._id}
							cartProduct={cartProduct}
							getQuantity={getQuantity}
							increment={incrementQty}
							decrement={decrementQty}
							getPriceSum={getPriceSum}
							deleteCartItem={deleteCartItem}
						></CartItem>
					))
				) : isLoading ? (
					"Loading.."
				) : (
					<h1> Your cart is empty</h1>
				)}
			</ul>

			{cartProducts.length ? (
				<div>
					<hr className="my-6" />
					<div className="text-right mt-6 ">
						<h1 className="font-bold my-6">Grand Total: ৳ {total}</h1>
						<button
							onClick={handleOrderBtn}
							className="py-1 px-4 rounded-full bg-yellow-500 font-bold"
						>
							Order Now
						</button>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Cart;
