import React, { useState } from "react";
import cookbook from "./assets/cookbook.jpg";
import Navigation from "./Navigation";

const MainView = () => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="first_view">
			<Navigation />
			<section className="first-page__main">
				<img src={cookbook} className="main_img" alt="CookBook"></img>
				<div className="main">
					<p className="first-page__text">
						Witaj
						<br />w C<strong className="special_text">o</strong>okBook
					</p>
					<form onSubmit={handleSubmit}>
						<div className="label_container">
							<label className="log_text" name="login">
								Login/e-mail:
							</label>
							<input
								name="login"
								type="text"
								value={login}
								onChange={(e) => setLogin(e.target.value)}
								placeholder="Wpisz login"></input>
						</div>
						<div className="label_container">
							<label className="log_text" name="password">
								Hasło:
							</label>

							<input
								name="password"
								type="text"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Wpisz hasło"></input>
						</div>

						<button type="submit" className="btn">
							ZALOGUJ
						</button>
					</form>
					<button type="submit" className="btn btn_register">
						ZAREJESTRUJ SIĘ
					</button>
				</div>
			</section>
		</div>
	);
};

export default MainView;
