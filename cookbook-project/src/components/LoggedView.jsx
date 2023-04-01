import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
const LoggedView = () => {
	const [addCategory, setAddCategory] = useState("");
	const [categories, setCategories] = useState([]);

	const getCategories = async () => {
		const querySnapshot = await getDocs(collection(db, "categories"));
		const tempCategories = [];
		querySnapshot.forEach((doc) => {
			tempCategories.push(doc.data());
		});
		setCategories(tempCategories);
	};

	useEffect(() => {
		getCategories();
	}, []);

	const onSubmit = (e) => {
		e.preventDefault();
		setAddCategory("");
		setCategories([...categories, addCategory]);
	};

	const getStyle =
		() =>
		({ isActive }) =>
			isActive ? { fontWeight: 900 } : undefined;

	return (
		<section>
			<div>
				{categories.map(({ category }) => (
					<div>
						<h2>{category}</h2>
					</div>
				))}
			</div>
			<div className="logged_view">
				<ul className="recipe_category">
					{categories.map((category, idx) => {
						return (
							<li className="category" key={idx}>
								<NavLink style={getStyle()} to={`/recipes/${category}`}>
									{`${idx + 1}. ${category}`}
								</NavLink>
							</li>
						);
					})}
				</ul>
				<form className="add_cath_form" onSubmit={onSubmit}>
					<label>
						<input
							name="category"
							type="text"
							value={addCategory || ""}
							onChange={(e) => setAddCategory(e.target.value)}
							placeholder="np.przepisy na ciasta"></input>
					</label>
					<button type="submit" className="addCath">
						Dodaj kategorię
					</button>
				</form>
			</div>
		</section>
	);
};

export default LoggedView;
