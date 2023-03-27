import { React, useState } from "react";

const AddRecipe = () => {
	const [ingredient, setIngredient] = useState([]);
	// const addingIngredients = ()=>{

	// }

	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<div className="add_recipe">
				<h2>Dodawanie przepisu</h2>
				<form onSubmit={onSubmit}>
					<input placeholder="Wpisz nazwę przepisu"></input>
					<div className="subtitles">
						<h3> Lista składników</h3>
						<h3>Ilość</h3>
					</div>
					<div className="buttons_container">
						<input
							value={ingredient}
							onChange={(e) => setIngredient(e.target.value)}
							placeholder="Wpisz nazwę składnika i ilość"></input>
						<button onClick={onClick}>Dodaj</button>
					</div>

					<button type="submit">Zapisz</button>
				</form>
			</div>
		</>
	);
};

export default AddRecipe;
