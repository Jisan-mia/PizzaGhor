import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<div className="footer-container ">
			<footer className="footer-grid container mx-auto">
				<div className="">
					<h1 className="font-bold text-3xl  ">Pizza Ghor</h1>
					<ul className=" font-normal">
						PizzaGhor is a pizza e-commerce site where I commonly implemented
						Reactjs, react-router, context API, functional components, hooks etc
					</ul>
				</div>
				<div className="footer-links">
					<h1 className="font-medium text-3xl ">Links</h1>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/products">Products</Link>
						</li>
						<li>
							<Link to="/cart">Cart</Link>
						</li>
					</ul>
				</div>
				<div className="footer-more-links">
					<h1 className="font-medium text-3xl">More Links</h1>
					<ul>
						<li>
							<a href="#">Linkedin</a>
							<a href="#">Github</a>
							<a href="#">Twitter</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
