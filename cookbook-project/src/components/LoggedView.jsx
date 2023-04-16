import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
	collection,
	query,
	where,
	getDocs,
	addDoc,
	setDoc,
	doc,
} from "firebase/firestore";

import { db } from "../firebase";

const LoggedView = ({ user }) => {
	const [addCategory, setAddCategory] = useState("");
	const [categories, setCategories] = useState([]);
	const categoryRef = collection(db, "categories");

	//adding categories to firebase
	const addCategories = async () => {
		//trim removes white signs
		if (addCategory.trim()) {
			const categoryId = addCategory.trim();
			const categoryToAdd = {
				name: addCategory.trim(),
			};
			try {
				await setDoc(doc(categoryRef, categoryId), categoryToAdd);
				setAddCategory("");
				getCategories();
			} catch (error) {
				console.error("Category couldn't be added  - ", error);
			}
		}
	};
	//getting added categories from firebase
	const getCategories = async () => {
		try {
			const querySnapshot = await getDocs(categoryRef);
			const tempCategories = [];
			querySnapshot.forEach((doc) => {
				const category = doc.data().name;
				tempCategories.push(category);
			});
			setCategories(tempCategories);
		} catch (error) {
			console.error("Category couldn't be downloaded  - ", error);
		}
	};
	//hook to getting category depends on addCategory
	useEffect(() => {
		getCategories();
	}, [addCategory]);
	//function to run all component
	const onSubmit = (e) => {
		e.preventDefault();
		addCategories({ category: addCategory });
	};
	//set up styles for clicked category
	const getStyle =
		() =>
		({ isActive }) =>
			isActive ? { fontWeight: 900 } : undefined;

	return (
		<section>
			<div className="logged_view">
				<ul className="recipe_category">
					{categories.map((category, idx) => {
						return (
							<li className="category" key={idx}>
								<NavLink
									className="category"
									style={getStyle()}
									to={`/recipes/${category}`}>
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

//działający kod z K K
// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import {
// 	collection,
// 	query,
// 	where,
// 	getDocs,
// 	addDoc,
// 	setDoc,
// } from "firebase/firestore";

// import { db } from "../firebase";

// const LoggedView = () => {
// 	const [addCategory, setAddCategory] = useState("");
// 	const [categories, setCategories] = useState([]);

// 	const addCategories = async () => {
// 		//trim usuwa białe znaki
// 		if (addCategory.trim()) {
// 			const categoryToAdd = {
// 				category: addCategory.trim(),
// 			};
// 			try {
// 				await addDoc(collection(db, "categories"), categoryToAdd);
// 				setAddCategory("");
// 				getCategories();
// 			} catch (error) {
// 				console.error("Categories could't be added  - ", error);
// 			}
// 		}
// 	};
// 	const getCategories = async () => {
// 		const querySnapshot = await getDocs(collection(db, "categories"));
// 		const tempCategories = [];
// 		querySnapshot.forEach((doc) => {
// 			const category = doc.data().category;
// 			tempCategories.push(category);
// 		});
// 		setCategories(tempCategories);
// 	};

// 	useEffect(() => {
// 		getCategories();
// 	}, [addCategory]);

// 	const onSubmit = (e) => {
// 		e.preventDefault();
// 		addCategories({ category: addCategory });
// 	};

// 	const getStyle =
// 		() =>
// 		({ isActive }) =>
// 			isActive ? { fontWeight: 900 } : undefined;

// 	return (
// 		<section>
// 			<div className="logged_view">
// 				<ul className="recipe_category">
// 					{categories.map((category, idx) => {
// 						return (
// 							<li className="category" key={idx}>
// 								<NavLink
// 									className="category"
// 									style={getStyle()}
// 									to={`/recipes/${category}`}>
// 									{`${idx + 1}. ${category}`}
// 								</NavLink>
// 							</li>
// 						);
// 					})}
// 				</ul>
// 				<form className="add_cath_form" onSubmit={onSubmit}>
// 					<label>
// 						<input
// 							name="category"
// 							type="text"
// 							value={addCategory || ""}
// 							onChange={(e) => setAddCategory(e.target.value)}
// 							placeholder="np.przepisy na ciasta"></input>
// 					</label>
// 					<button type="submit" className="addCath">
// 						Dodaj kategorię
// 					</button>
// 				</form>
// 			</div>
// 		</section>
// 	);
// };

// export default LoggedView;
