import { React, useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const RecipesInCategory = ({ recipes }) => {
	const { category } = useParams();

	return (
		<div className="view_recipes">
			<h2>Kategoria: {category} </h2>

			<NavLink to="addRecipe/" className="add_recipe_button">
				Dodaj nowy przepis
			</NavLink>
			<div className="recipes_list_container">
				{recipes && Array.isArray(recipes) && recipes.length > 0 ? (
					<ul className="recipes_list">
						{recipes.map((recipe, index) => {
							return (
								<li key={index} className="recipe_element">
									<NavLink
										className="recipe"
										end
										to={`/recipes/${category}/${recipe.name}`}>
										{index + 1}. {recipe.name}
									</NavLink>
								</li>
							);
						})}
					</ul>
				) : (
					<div className="no_recipes">Brak przepisów do wyświetlenia</div>
				)}
			</div>
		</div>
	);
};

export default RecipesInCategory;
