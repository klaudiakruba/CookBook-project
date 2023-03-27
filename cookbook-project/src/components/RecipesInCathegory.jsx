import React from "react";
import { NavLink, useParams } from "react-router-dom";
const RecipesInCathegory = () => {
	const { cathegory } = useParams();
	return (
		<div className="view_recipes">
			<h2>Kategoria: {cathegory} </h2>
			<NavLink to="addRecipe/" className="add_recipe_button">
				Dodaj nowy przepis
			</NavLink>
			<div className="recipes_list">
				<h3>Lista istniejących przepisów</h3>
				<ul>
					<li className="recipe">Szarlotka</li>
					<li className="recipe">Piernik</li>
				</ul>
			</div>
		</div>
	);
};

export default RecipesInCathegory;
