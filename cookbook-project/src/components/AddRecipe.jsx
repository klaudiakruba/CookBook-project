import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";
import {
	collection,
	query,
	where,
	getDocs,
	addDoc,
	setDoc,
	doc,
} from "firebase/firestore";
const AddRecipe = ({
	recipeName,
	setRecipes,
	setRecipeName,
	ingredientsList,
	setIngredientsList,
}) => {
	const navigate = useNavigate();
	const { category } = useParams();

	const [ingredient, setIngredient] = useState("");
	const [quantity, setQuantity] = useState("");
	const [clickedSave, setClickedSave] = useState(false);

	const handleAddRecipe = async () => {
		const recipeId = recipeName.trim();
		const recipeToAdd = {
			name: recipeName.trim(),
			category,
			ingredientsList,
		};
		try {
			await addDoc(
				collection(db, "categories", category, recipeId),
				recipeToAdd
			);
		} catch (error) {
			console.error("Recipe couldn't be added  - ", error);
		}
	};
	// ponizsza funkcja nie dziala wrzucci o do addrecipe i z return wyrzucic
	const getClickedRecipeInList = async () => {
		const q = query(
			collection(db, "recipes"),
			where("name", "==", clickedRecipeInList)
		);
		console.log(clickedRecipeInList);
		const querySnapshot = await getDocs(q);

		// if (!querySnapshot.empty) {
		const recipe = querySnapshot.docs[0].data();
		console.log(recipe);
		setClickedRecipeInList(recipe.name);
		const ingredientsList = recipe.ingredientsList;
		setIngredientsList(ingredientsList);
		setRecipeName(clickedRecipeInList);
		return recipe;
		// }
	};
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
		} else {
			setRecipeName("");
			setIngredientsList([]);
		}
	}, [clickedSave]);

	const onSubmit = (e) => {
		e.preventDefault();
		setClickedSave(true);
		handleAddRecipe(recipeName, category);
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
