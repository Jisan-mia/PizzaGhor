import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	// const { name } = useContext(CartContext);

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		try {
			const products = await axios.get(
				"https://ecom-rest-apis.herokuapp.com/api/products"
			);
			setProducts(products.data);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const loading = isLoading && "loading";

	return (
		<div className="container mx-auto pb-20">
			<h1 className="text-2xl font-bold my-8  text-center flex flex-col items-center juitify-center">
				Products
				<hr className="w-52 border-b-4 border-indigo-400 mt-2 rounded-full rounded" />
			</h1>
			<div className="produucts-grid my-8 mx-4">
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
