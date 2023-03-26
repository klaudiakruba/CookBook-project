import React, { useState } from "react";
import cookbook from "../assets/cookbook.jpg";
import { Link, useNavigate } from "react-router-dom";

const MainView = ({ setUser }) => {
	const navigate = useNavigate();
	//state need to correct work
	const [login, setLogin] = useState(""); //false jesli baza danych
	const [password, setPassword] = useState(""); //false jesli baza danych
	const [errorMessage, setErrorMessage] = useState("");
	//Submit handle function
	const handleSubmit = (e) => {
		e.preventDefault();
		onClick();
	};
	//function which set up login and password from state
	const onClick = () => {
		if (login === "K" && password === "K") {
			setUser({
				email: "klaudia@onet.pl",
				username: "Klaudia",
			});
			navigate("/logged");
		} else {
			setUser(false);
			setErrorMessage("Login lub hasło niepoprawne");
		}
	};
	return (
		<>
			<div className="first_view">
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
									className="input_style"
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
									className="input_style"
									name="password"
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder="Wpisz hasło"></input>
							</div>
							<span className={errorMessage ? "appear" : "disappear"}>
								{errorMessage}
							</span>
							<button type="submit" className="btn">
								ZALOGUJ
							</button>
						</form>

						<Link to="/register" className="btn btn_register">
							ZAREJESTRUJ SIĘ
						</Link>
					</div>
				</section>
			</div>
		</>
	);
};

export default MainView;
