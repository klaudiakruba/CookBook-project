import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Reg = ({ email, setEmail, password, setPassword, error, setError }) => {
	const navigate = useNavigate();

	const { createUser } = UserAuth();

	//Submit handle function
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await createUser(email, password);
			navigate("/logged");
		} catch (e) {
			setError(e.message);
			console.log(e.message);
		}
	};
	//function which set up login and password from state
	// const onClick = () => {
	// 	if (email === "Coders" && password === "Lab") {
	// 		return setIsLogged(true);
	// 	} else {
	// 		setIsLogged(false);
	// 		setError("Login lub hasło niepoprawne");
	// 	}
	// };
	return (
		<>
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
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Wpisz swój adres email"></input>
					</label>
					<label className="log_text" name="password">
						Podaj hasło:
						<input
							name="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Wpisz hasło"></input>
					</label>
					<span className={error ? "appear" : "disappear"}>{error}</span>
					<button type="submit" className="btn">
						ZAREJESTRUJ MNIE
					</button>
				</form>
			</div>
			)
		</>
	);
};
export default Reg;

//działający kod z K K
// import React, { useState } from "react";
// import { UserAuth } from "../context/AuthContext";
// const Reg = () => {
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	// const [isLogged, setIsLogged] = useState(false);
// 	const [error, setError] = useState("");
// 	const { createUser } = UserAuth();

// 	//Submit handle function
// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		setError("");
// 		try {
// 			await createUser(email, password);
// 		} catch (e) {
// 			setError(e.message);
// 			console.log(e.message);
// 		}
// 	};
// 	//function which set up login and password from state
// 	// const onClick = () => {
// 	// 	if (email === "Coders" && password === "Lab") {
// 	// 		return setIsLogged(true);
// 	// 	} else {
// 	// 		setIsLogged(false);
// 	// 		setError("Login lub hasło niepoprawne");
// 	// 	}
// 	// };
// 	return (
// 		<>
// 			: (
// 			<div className="reg_container">
// 				<div className="reg_text">
// 					<span>
// 						<strong className="special_text">
// 							Witaj, Wygląda na to, że jesteś tu pierwszy raz!
// 						</strong>
// 						<br />
// 						Podaj nam swoję imię i załóż własną książkę kucharską, do której
// 						będziesz mieć dostęp gdziekolwiek jesteś: w sklepie, w podróży, u
// 						znajomych !
// 					</span>
// 				</div>

// 				<form className="reg_form" onSubmit={handleSubmit}>
// 					<label className="log_text" name="login">
// 						Podaj login:
// 						<input
// 							name="login"
// 							type="email"
// 							value={email}
// 							onChange={(e) => setEmail(e.target.value)}
// 							placeholder="Wpisz swój adres email"></input>
// 					</label>
// 					<label className="log_text" name="password">
// 						Podaj hasło:
// 						<input
// 							name="password"
// 							type="password"
// 							value={password}
// 							onChange={(e) => setPassword(e.target.value)}
// 							placeholder="Wpisz hasło"></input>
// 					</label>
// 					<span className={error ? "appear" : "disappear"}>{error}</span>
// 					<button type="submit" className="btn">
// 						ZAREJESTRUJ MNIE
// 					</button>
// 				</form>
// 			</div>
// 			)}
// 		</>
// 	);
// };
// export default Reg;
