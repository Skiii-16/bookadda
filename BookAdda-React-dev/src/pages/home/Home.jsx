import { React, useEffect, useState } from "react";
import axios from "axios";
import BackgroundIamge from "../../assets/background-image.png";
import { Link, useNavigate } from "react-router-dom";
import { useProduct } from "../filters/Product-context";
function Home() {
	const [category, setCategory] = useState([]);
	const { dispatch } = useProduct();
	let navigate = useNavigate();

	function categoryHandler(categoryValue) {
		dispatch({ type: "CATEGORY", payload: categoryValue });
		navigate("/product");
	}

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get("/api/categories");
				setCategory(response.data.categories);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);
	return (
		<div>
			<section className="home" id="home">
				<div className="row">
					<div className="content_for-bookhub">
						<h3 className="style-head">
							<span>Books are a uniquely portable </span>
							<span className="style_text-yellow">
								<span className="style-yellow">magic</span>
							</span>
						</h3>
						<p>
							<span className="style-description">
							“Keep reading. It’s one of the most marvelous adventures that anyone can have.”
								<br />
								“Read. Read. Read. Just don’t read one type of book. Read different books by various authors so that you develop different style.”
								<br />
								
							</span>
						</p>
						<Link to="/product" className="btn-bookooze">
							Bookstore
						</Link>
					</div>

					<div className="books-slider">
						<div>
							<img src={BackgroundIamge} className="style-image" alt="" />
						</div>
					</div>
				</div>
			</section>

			<h1 className="heading">
				<span>Features</span>
			</h1>
			<section className="icons-container">
				<div className="icons">
					<i className="fas fa-shipping-fast icons_for-bookhub"></i>
					<div className="content">
						<h3 className="port-shipping">Free shipping</h3>
						<p className="facility_for-port">order over $100</p>
					</div>
				</div>

				<div className="icons">
					<i className="fas fa-lock icons_for-bookhub"></i>
					<div className="content">
						<h3 className="port-shipping">Secure payment</h3>
						<p className="facility_for-port">100 secure payment</p>
					</div>
				</div>

				<div className="icons">
					<i className="fas fa-redo-alt icons_for-bookhub"></i>
					<div className="content">
						<h3 className="port-shipping">Easy returns</h3>
						<p className="facility_for-port">10 days returns</p>
					</div>
				</div>

				<div className="icons">
					<i className="fas fa-headset icons_for-bookhub"></i>
					<div className="content">
						<h3 className="port-shipping">24/7 support</h3>
						<p className="facility_for-port">call us anytime</p>
					</div>
				</div>
			</section>

			<h1 className="heading category-head">
				<span>Categories</span>
			</h1>
			<section className="cards_for-book cards_for-wish cards_for-book-category">
				{category.map((item) => (
					<div
						className="category-card-bookub"
						key={item._id}
						onClick={() => categoryHandler(item.categoryValue)}
					>
						<div className="card-vertical flex-items">
							<div className="image-container badge-container">
								<img
									className="img-responsive card-img"
									src={item.categoryImage}
									alt="category"
								/>
							</div>
							<div className="text-container">
								<h4 className="heading-primary">{item.categoryName}</h4>
							</div>
						</div>
					</div>
				))}
			</section>

			<section className="deal">
				<div className="deal-content">
					<h3 className="deal-heading">Deal of the day</h3>
					<h1 className="off-deal">upto 70% off</h1>
					<p className="deal-desc">
					Buy wide range of Books with great deals & discounts at low prices in India at Bookadda.in. Buy children, Exam, business, literature, science, and text books .
					</p>
					<Link to="/product" className="btn">
						Shop now
					</Link>
				</div>
				<div className="image">
					<img
						className="deal-image"
						src={require("../../assets/book13.jpg")}
						alt=""
					/>
				</div>
			</section>
		</div>
	);
}

export { Home };
