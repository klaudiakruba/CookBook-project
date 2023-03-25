import React, { useState } from "react";
import { useParams } from "react-router-dom";

const LoggedView = ({ isLogged, setIsLogged }) => {
	const [addCathegory, setAddCathegory] = useState("");
	const [cathegories, setCathegories] = useState([]);

	const handleLogStatus = () => {
		if (isLogged) {
			return setIsLogged(true);
		}
	};
	const { userName } = useParams();

	const onSubmit = (e) => {
		e.preventDefault();
		setAddCathegory();
		setCathegories([...cathegories, addCathegory]);
	};
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
							<li className="cathegory" key={idx}>{`${
								idx + 1
							}. ${cathegory}`}</li>
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
