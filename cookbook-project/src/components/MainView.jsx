import React, { useState } from "react";
import cookbook from "../assets/cookbook.jpg";
import { Link, useNavigate } from "react-router-dom";

const MainView = ({ setUser }) => {
	const navigate = useNavigate();
	//state need to correct work
	const [email, setEmail] = useState(""); //false jesli baza danych
	const [password, setPassword] = useState(""); //false jesli baza danych
	const [errorMessage, setErrorMessage] = useState("");
	//Submit handle function
	const handleSubmit = (e) => {
		e.preventDefault();
		onClick();
	};
	//function which set up email and password from state
	const onClick = () => {
		if (email === "K" && password === "K") {
			setUser({
				email: "klaudia@onet.pl",
				username: "Klaudia",
			});
			navigate("/logged");
		} else {
			setUser(false);
			setErrorMessage("email lub hasło niepoprawne");
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
								<label className="log_text" name="email">
									email/e-mail:
								</label>
								<input
									className="input_style"
									name="email"
									type="text"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Wpisz email"></input>
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

//dzialajacy kod- wersja z logowaniem K K
// import React, { useState } from "react";
// import cookbook from "../assets/cookbook.jpg";
// import { Link, useNavigate } from "react-router-dom";

// const MainView = ({ setUser }) => {
// 	const navigate = useNavigate();
// 	//state need to correct work
// 	const [email, setEmail] = useState(""); //false jesli baza danych
// 	const [password, setPassword] = useState(""); //false jesli baza danych
// 	const [errorMessage, setErrorMessage] = useState("");
// 	//Submit handle function
// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		onClick();
// 	};
// 	//function which set up email and password from state
// 	const onClick = () => {
// 		if (email === "K" && password === "K") {
// 			setUser({
// 				email: "klaudia@onet.pl",
// 				username: "Klaudia",
// 			});
// 			navigate("/logged");
// 		} else {
// 			setUser(false);
// 			setErrorMessage("email lub hasło niepoprawne");
// 		}
// 	};
// 	return (
// 		<>
// 			<div className="first_view">
// 				<section className="first-page__main">
// 					<img src={cookbook} className="main_img" alt="CookBook"></img>
// 					<div className="main">
// 						<p className="first-page__text">
// 							Witaj
// 							<br />w C<strong className="special_text">o</strong>okBook
// 						</p>
// 						<form onSubmit={handleSubmit}>
// 							<div className="label_container">
// 								<label className="log_text" name="email">
// 									email/e-mail:
// 								</label>
// 								<input
// 									className="input_style"
// 									name="email"
// 									type="text"
// 									value={email}
// 									onChange={(e) => setEmail(e.target.value)}
// 									placeholder="Wpisz email"></input>
// 							</div>
// 							<div className="label_container">
// 								<label className="log_text" name="password">
// 									Hasło:
// 								</label>

// 								<input
// 									className="input_style"
// 									name="password"
// 									type="password"
// 									value={password}
// 									onChange={(e) => setPassword(e.target.value)}
// 									placeholder="Wpisz hasło"></input>
// 							</div>
// 							<span className={errorMessage ? "appear" : "disappear"}>
// 								{errorMessage}
// 							</span>
// 							<button type="submit" className="btn">
// 								ZALOGUJ
// 							</button>
// 						</form>

// 						<Link to="/register" className="btn btn_register">
// 							ZAREJESTRUJ SIĘ
// 						</Link>
// 					</div>
// 				</section>
// 			</div>
// 		</>
// 	);
// };

// export default MainView;
