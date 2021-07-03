import { Link } from "react-router-dom";
import Products from "../components/Products";

const Home = () => {
	return (
		<>
			<div className="hero py-12">
				<div className="container mx-auto flex items-center justify-between">
					<div className="w-1/2 pl-0 md:pl-8">
						<h6 className="text-lg ">
							<em>Are you hangry?</em>
						</h6>
						<h1 className="text-3xl md:text-6xl font-bold">Don't wait!</h1>
						<Link to="/products">
							<button className="mt-4 px-6 py-2 rounded-full bg-yellow-500 text-white font-bold hover:bg-yellow-600">
								Order now
							</button>
						</Link>
					</div>
					<div className="w-1/2">
						<img
							className="w-4/5 m-auto"
							src="/images/pizza1.png"
							alt="hero-pizza"
						/>
					</div>
				</div>
			</div>

			<div className="pb-24 ">
				<Products></Products>
			</div>
		</>
	);
};

export default Home;
