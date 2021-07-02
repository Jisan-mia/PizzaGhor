import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("https://ecom-rest-apis.herokuapp.com/api/products")
			.then((res) => res.json())
			.then((products) => {
				setProducts(products);
				setIsLoading(false);
			});
	}, []);

	const loading = isLoading ? "loading" : "";

	return (
		<div className="container mx-auto pb-24">
			<h1 className="text-2xl font-bold my-8">Products</h1>
			<div className="grid grid-cols-5 my-8 gap-24">
				{loading}
				{products.length
					? products.map((product) => (
							<Product key={product._id} product={product}></Product>
					  ))
					: ""}
			</div>
		</div>
	);
};

export default Products;
