import React, { useState } from "react";

const LoggedView = () => {
	const [cathegories, setCathegories] = useState([]);

	const onClick = (e) => {
		e.preventDefault();
		const newCathegory = e.target.cathegory.value;
		setCathegories([...cathegories, newCathegory]);
	};
	return (
		<section>
			<div class="log_view">
				<span className="name">Imię</span>
				<div className="login_img"></div>
			</div>
			<div className="logged_view">
				<ul className="recipe_cathegory">
					{cathegories.map((cathegory, idx) => {
						return <li key={idx}>{cathegory}</li>;
					})}
				</ul>
				<form className="add_cath_form">
					<label>
						<input
							name="cathegory"
							type="text"
							value=""
							placeholder="np.przepisy na ciasta"></input>
					</label>
					<button className="addCath" onClick={onClick}>
						Dodaj kategorię
					</button>
				</form>
			</div>
		</section>
	);
};

export default LoggedView;
