import React, { useState } from "react";

const Reg = () => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<div className="reg_container">
				<div className="reg_text">
					<span>
						Witaj, wygląda na to, że jesteś tu pierwszy raz! Podaj nam swoję
						imię i załóż własną ksiązkę kucharską, do której będziesz mieć
						dostęp gdziekolwiek jesteś: w sklepie, w podróży, u znajomych !
					</span>
				</div>

				<form className="reg_form" onSubmit={handleSubmit}>
					<label className="log_text" name="login">
						Podaj swój Login:
						<input
							name="login"
							type="text"
							value={login}
							onChange={(e) => setLogin(e.target.value)}
							placeholder="np. e-mail"></input>
					</label>
					<label className="log_text" name="password">
						Podaj swoje hasło:
						<input
							name="password"
							type="text"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Wpisz hasło"></input>
					</label>
					<button type="submit" className="btn">
						ZAREJESTRUJ MNIE
					</button>
				</form>
			</div>
		</>
	);
};
export default Reg;
