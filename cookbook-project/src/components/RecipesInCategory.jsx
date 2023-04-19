import { React, useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
	collection,
	query,
	where,
	getDocs,
	addDoc,
	setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";

const RecipesInCategory = ({
	recipes,
	setRecipes,
	recipeName,
	setIngredientsList,
	setRecipeName,
}) => {
	const { category } = useParams();
	const [clickedRecipeInList, setClickedRecipeInList] = useState("");
	const { user } = UserAuth();

	//getting recipe from category in firebase
	const getRecipe = async () => {
		try {
			const q = query(collection(db, "categories", category, "recipes")); // tu jest problem

			const querySnapshot = await getDocs(q);
			const tempRecipes = [];

			querySnapshot.forEach((doc) => {
				const recipe = doc.data();
				tempRecipes.push(recipe);
			});
			console.log(category);
			console.log("tymczasowa tablica przepisow", tempRecipes);
			setRecipes(tempRecipes);
		} catch (error) {
			console.error("Problem with getting data from firebase", error);
		}
	};

	useEffect(() => {
		getRecipe();
	}, [category]);

	// useEffect(() => {
	// 	if (clickedRecipeInList) {
	// 		getClickedRecipeInList();
	// 	}
	// }, [clickedRecipeInList, setIngredientsList, setRecipeName]);
	return (
		<div className="view_recipes">
			<h2>Kategoria: {category} </h2>

			<NavLink to="addRecipe/" className="add_recipe_button">
				Dodaj nowy przepis
			</NavLink>
			<div className="recipes_list_container">
				{/* {recipes && Array.isArray(recipes) && recipes.length > 0 ? ( */}
				<ul className="recipes_list">
					{recipes.map((recipe, index) => {
						return (
							<li key={index} className="recipe_element">
								<NavLink
									className="recipe"
									end
									to={`/recipes/${category}/${recipe.name}/`}>
									{index + 1}. {recipe.name}
								</NavLink>
							</li>
						);
					})}
					<li>Przykładowy</li>
				</ul>
				{/* ) : (
					<div className="no_recipes">Brak przepisów do wyświetlenia</div> */}
				{/* )} */}
			</div>
		</div>
	);
};

export default RecipesInCategory;
