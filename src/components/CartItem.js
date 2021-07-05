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
			<div className="flex justify-between items-center " id="cart-item-cont">
				<img
					src={image}
					alt="cart-pizza"
					className="rounded-full h-16 cart-item-img"
				/>
				<h1 className="font-bold ml-2 w-40 cart-item-name">{name}</h1>

				<div className="flex items-center cart-items-plus-minus">
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

				<span className="font-bold cart-item-price">
					৳ {getPriceSum(_id, price)}
				</span>
				<button
					onClick={() => {
						deleteCartItem(_id);
					}}
					className="py-1 px-4 rounded-full bg-red-600 text-white cart-items-delete"
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export default CartItem;
