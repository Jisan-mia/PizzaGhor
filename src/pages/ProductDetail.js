import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const ProductDetail = () => {
	const [product, setProduct] = useState({});
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

	return (
		<div className="container mx-auto my-12">
			<button className="mb-12 font-bold " onClick={handleBackBtn}>
				Back
			</button>
			<br />
			{product.name ? (
				<div className="flex items-center">
					<img src={image} className="rounded-full" alt="detail-img" />

					<div className="ml-12">
						<h1 className="text-2xl font-bold">{name}</h1>
						<h1 className=" text-md">{size}</h1>
						<h1 className="font-bold mt-3">৳ {price}</h1>
						<button className="mt-5 py-1 px-6 font-bold bg-yellow-400 rounded-full">
							Add to Cart
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
