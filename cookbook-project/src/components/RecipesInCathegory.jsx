import React from "react";
import { NavLink, useParams } from "react-router-dom";

const RecipesInCathegory = ({ recipes }) => {
	const { cathegory } = useParams();

	return (
		<div className="view_recipes">
			<h2>Kategoria: {cathegory} </h2>
			<NavLink to="addRecipe/" className="add_recipe_button">
				Dodaj nowy przepis
			</NavLink>
			<div className="recipes_list_container">
				<ul className="recipes_list">
					{recipes.map((recipe, index) => {
						return (
							<li key={index} className="recipe">
								{recipe}
							</li>
						);
					})}
					<li className="recipe">Szarlotka</li>
					<li className="recipe">Piernik</li>
				</ul>
			</div>
		</div>
	);
};
export default RecipesInCathegory;
