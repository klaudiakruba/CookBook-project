import React from "react";
import { NavLink, useParams } from "react-router-dom";
const RecipesList = () => {
	const { cathegory } = useParams();
	return (
		<div className="recipes_list_container">
			<h2>Kategoria: {cathegory} - lista przepisów</h2>

			<ul className="recipes_list">
				<li className="recipe">Szarlotka</li>
				<li className="recipe">Piernik</li>
			</ul>
		</div>
	);
};

export default RecipesList;
