import { React, useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const AddRecipe = ({ recipes, setRecipes }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const { category } = useParams();
	const [recipeName, setRecipeName] = useState("");
	const [ingredientsList, setIngredientsList] = useState([]);
	const [ingredient, setIngredient] = useState("");
	const [quantity, setQuantity] = useState("");
	const [clickedSave, setClickedSave] = useState(false);

	useEffect(() => {
		if (clickedSave) {
			let newRecipe = {
				category,
				name: recipeName,
				ingredientsList,
			};
			console.log(newRecipe);
			setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);

			navigate(`/recipes/${category}`);
		}
	}, [clickedSave]);

	const onSubmit = (e) => {
		e.preventDefault();
		setClickedSave(true);
	};

	const addIngredient = () => {
		const newIngredient = [
			...ingredientsList,
			{ name: ingredient, quantity: quantity },
		];
		setIngredientsList(newIngredient);
		setIngredient("");
		setQuantity("");
	};

	return (
		<div className="add_recipe">
			<h2>Dodawanie przepisu</h2>
			<form onSubmit={onSubmit}>
				<div className="recipe_name">
					<label>Nazwa przepisu</label>
					<input
						type="text"
						value={recipeName || ""}
						onChange={(e) => setRecipeName(e.target.value)}
						placeholder="Wpisz nazwę przepisu"></input>
					<div className="subtitles">
						<h3> Lista składników</h3>
						<h3>Ilość</h3>
					</div>
				</div>

				<div>
					<ul>
						{ingredientsList.map((ing, index) => (
							<div className="ingredients_list" key={index}>
								<li>
									{index + 1}. {ing.name}
								</li>
								<li>{ing.quantity}</li>
							</div>
						))}
					</ul>
				</div>

				<div className="buttons_container">
					<div className="input_container">
						<input
							type="text"
							value={ingredient}
							onChange={(e) => setIngredient(e.target.value)}
							placeholder="Wpisz nazwę składnika"></input>
						<input
							type="text"
							value={quantity}
							onChange={(e) => setQuantity(e.target.value)}
							placeholder="Wpisz ilość"></input>
					</div>

					<button type="button" onClick={addIngredient}>
						Dodaj składnik i ilość
					</button>
					<button type="submit">Zapisz</button>
				</div>
			</form>
		</div>
	);
};

export default AddRecipe;
