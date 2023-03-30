import React from "react";
import { useParams } from "react-router-dom";

const RecipesList = ({ recipes }) => {
	const { cathegory } = useParams();

	return (
		<div className="recipes_list_container">
			<h2>Kategoria: {cathegory} - lista przepisów</h2>

			<ul className="recipes_list">
				{recipes.map((recipe, idx) => {
					<li key={idx} className="recipe">
						{recipe.recipeName}
					</li>;
				})}
				<li className="recipe">Szarlotka</li>
				<li className="recipe">Piernik</li>
			</ul>
		</div>
	);
};

export default RecipesList;
