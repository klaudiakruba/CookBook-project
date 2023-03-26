import React from "react";

const AddRecipe = () => {
	return (
		<>
			<div className="add_recipe">
				<h2>Dodawanie przepisu</h2>
				<form>
					<input placeholder="Wpisz nazwę przepisu"></input>
					<div className="subtitles">
						<h3> Lista składników</h3>
						<h3>Ilość</h3>
					</div>
					<div className="buttons_container">
						<button>Podaj składnik</button>
						<button>Podaj ilość</button>
					</div>

					<button type="submit">Zapisz</button>
				</form>
			</div>
		</>
	);
};

export default AddRecipe;
