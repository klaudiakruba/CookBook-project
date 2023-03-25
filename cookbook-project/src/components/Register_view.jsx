import React, { useState } from "react";

const Reg = () => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [isLogged, setIsLogged] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	//Submit handle function
	const handleSubmit = (e) => {
		e.preventDefault();
		onClick();
	};
	//function which set up login and password from state
	const onClick = () => {
		if (login === "Coders" && password === "Lab") {
			return setIsLogged(true);
		} else {
			setIsLogged(false);
			setErrorMessage("Login lub hasło niepoprawne");
		}
	};
	return (
		<>
			{isLogged ? (
				<LoggedView />
			) : (
				<div className="reg_container">
					<div className="reg_text">
						<span>
							<strong className="special_text">
								Witaj, Wygląda na to, że jesteś tu pierwszy raz!
							</strong>
							<br />
							Podaj nam swoję imię i załóż własną książkę kucharską, do której
							będziesz mieć dostęp gdziekolwiek jesteś: w sklepie, w podróży, u
							znajomych !
						</span>
					</div>

					<form className="reg_form" onSubmit={handleSubmit}>
						<label className="log_text" name="login">
							Podaj login:
							<input
								name="login"
								type="text"
								value={login}
								onChange={(e) => setLogin(e.target.value)}
								placeholder="np. e-mail"></input>
						</label>
						<label className="log_text" name="password">
							Podaj hasło:
							<input
								name="password"
								type="text"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Wpisz hasło"></input>
						</label>
						<span className={errorMessage ? "appear" : "disappear"}>
							{errorMessage}
						</span>
						<button type="submit" className="btn">
							ZAREJESTRUJ MNIE
						</button>
					</form>
				</div>
			)}
		</>
	);
};
export default Reg;
