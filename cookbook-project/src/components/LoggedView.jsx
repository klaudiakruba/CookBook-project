import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LoggedView = () => {
	const [addCathegory, setAddCathegory] = useState("");
	const [cathegories, setCathegories] = useState([]);

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
			<div className="logged_view">
				<ul className="recipe_cathegory">
					{cathegories.map((cathegory, idx) => {
						return (
							<li className="cathegory" key={idx}>
								<NavLink style={getStyle()} to={`/recipes/${cathegory}`}>
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
