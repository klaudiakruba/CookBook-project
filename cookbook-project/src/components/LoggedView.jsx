import React, { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import RecipesInCathegory from "./RecipesInCathegory";

const LoggedView = ({ isLogged, setIsLogged, login }) => {
	const [addCathegory, setAddCathegory] = useState("");
	const [cathegories, setCathegories] = useState([]);

	//nie wyswietla sie navigacja oraz nie zmienia login na podany przez uzytkownika
	const handleLogStatus = () => {
		if (isLogged) {
			return setIsLogged(true);
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setAddCathegory();
		setCathegories([...cathegories, addCathegory]);
	};

	const getStyle =
		() =>
		({ isActive }) =>
			isActive ? { fontWeight: 900 } : undefined;

	return (
		<section>
			<div className="log_view">
				<span className="name">Login</span>
				<div className="login_img"></div>
			</div>
			<div className="logged_view">
				<ul className="recipe_cathegory">
					{cathegories.map((cathegory, idx) => {
						return (
							<li className="cathegory" key={idx}>
								<NavLink style={getStyle()} to={`recipes/${cathegory}`}>
									{`${idx + 1}. ${cathegory}`}
								</NavLink>
							</li>
						);
					})}
				</ul>
				<form className="add_cath_form" onSubmit={onSubmit}>
					<label>
						<input
							name="cathegory"
							type="text"
							value={addCathegory}
							onChange={(e) => setAddCathegory(e.target.value)}
							placeholder="np.przepisy na ciasta"></input>
					</label>
					<button type="submit" className="addCath">
						Dodaj kategorię
					</button>
				</form>
			</div>
		</section>
	);
};

export default LoggedView;
