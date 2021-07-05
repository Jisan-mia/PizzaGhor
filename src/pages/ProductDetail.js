import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { CartContext } from "../CartContext";

const ProductDetail = () => {
	const [product, setProduct] = useState({});
	const [isAdding, setIsAdding] = useState(false);
	const { _id } = useParams();
	const history = useHistory();

	useEffect(() => {
		fetch(`https://ecom-rest-apis.herokuapp.com/api/products/${_id}`)
			.then((res) => res.json())
			.then((data) => {
				setProduct(data);
			});
	}, [_id]);
	const { name, size, image, price } = product;

	const handleBackBtn = () => {
		history.goBack();
	};
	// get cartContext
	const { cart, setCart } = useContext(CartContext);

	// handle add to cart
	const addToCart = (product) => {
		const _cart = { ...cart };

		if (!_cart.items) {
			_cart.items = {};
		}
		if (_cart.items[product._id]) {
			_cart.items[product._id] += 1;
		} else {
			_cart.items[product._id] = 1;
		}
		if (!_cart.totalItems) {
			_cart.totalItems = 0;
		}
		_cart.totalItems += 1;

		setCart(_cart);

		setIsAdding(true);
		setTimeout(() => {
			setIsAdding(false);
		}, 500);
	};

	return (
		<div className="container mx-auto my-12 pt-8 pb-8  lg:w-1/2 w-full">
			<button className="mb-12 md:px-0 px-8 font-bold " onClick={handleBackBtn}>
				Back
			</button>
			<br />
			{product.name ? (
				<div className="flex items-center justify-center flex-wrap ">
					<img src={image} className="rounded-full " alt="detail-img" />

					<div className="md:ml-12 mt-2 md:text-left text-center">
						<h1 className="text-2xl font-bold">{name}</h1>
						<h1 className=" text-md">{size}</h1>
						<h1 className="font-bold mt-3">৳ {price}</h1>
						<button
							onClick={() => {
								addToCart(product);
							}}
							className={`${
								isAdding ? "bg-purple-500" : "bg-yellow-500 "
							} px-4 py-1 rounded-full text-white`}
							disabled={isAdding}
						>
							Add{isAdding ? "ed" : ""} to Cart
						</button>
					</div>
				</div>
			) : (
				"loading"
			)}
		</div>
	);
};

export default ProductDetail;
