const Product = ({ product }) => {
	const { name, price, size, image, _id } = product;

	return (
		<div>
			<img src={image} alt="" />
			<div className="text-center">
				<h2 className="text-lg font-bold py-2">{name}</h2>
				<span className="bg-gray-200 py-1 rounded-full text-sm px-4">
					{size}
				</span>
			</div>

			<div className="flex justify-between items-center mt-4">
				<span>৳ {price}</span>
				<button className="px-4 py-1 rounded-full bg-yellow-500 text-white ">
					Add
				</button>
			</div>
		</div>
	);
};

export default Product;
