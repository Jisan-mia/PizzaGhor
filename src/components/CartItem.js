import React from "react";

const CartItem = ({
	cartProduct,
	getQuantity,
	increment,
	decrement,
	getPriceSum,
	deleteCartItem,
}) => {
	const { name, image, price, _id } = cartProduct;
	return (
		<li className="mb-6">
			<div className="flex justify-between items-center">
				<div className="flex items-center ">
					<img src={image} alt="cart-pizza" className="rounded-full h-16" />
					<h1 className="font-bold ml-2 w-40">{name}</h1>
				</div>

				<div className="flex items-center">
					<button
						onClick={() => {
							decrement(_id);
						}}
						className="py-1 px-4 bg-yellow-500 rounded-full font-bold"
					>
						-
					</button>
					<span className="font-bold px-2">{getQuantity(cartProduct._id)}</span>
					<button
						onClick={() => {
							increment(_id);
						}}
						className="py-1 px-4 bg-yellow-500 rounded-full font-bold"
					>
						+
					</button>
				</div>

				<span className="font-bold">৳ {getPriceSum(_id, price)}</span>
				<button
					onClick={() => {
						deleteCartItem(_id);
					}}
					className="py-1 px-4 rounded-full bg-red-600 text-white"
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export default CartItem;
