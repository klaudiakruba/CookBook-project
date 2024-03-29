import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faBookOpen } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
	const navigate = useNavigate();
	const { user, authFunctions } = UserAuth();
	const handleSingOut = async () => {
		try {
			await authFunctions.signOut();
			navigate("/");
			console.log("Zostałes wylogowany");
		} catch (e) {
			console.log(e.message);
		}
	};
	return (
		<>
			<nav>
				<div className="logo">
					<FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
					<h1>Twoja książka kucharska</h1>
				</div>

				<div className="left_nav">
					<div>
						<FontAwesomeIcon
							className="login_img"
							icon={faCircleUser}></FontAwesomeIcon>
					</div>
					<span className="name">Witaj, {user && user.email} !</span>
					<button onClick={handleSingOut} className="logout">
						Wyloguj
					</button>
				</div>
			</nav>

			<Outlet />
		</>
	);
};

export default Navigation;

//działający kod z K K
// import React from "react";
// import { Outlet, Link } from "react-router-dom";
// import MainView from "./MainView";

// const Navigation = ({ user }) => {
// 	return (
// 		<>
// 			<nav>
// 				<h1 className="logo">Twoja książka kucharska</h1>
// 				<div className="login_img"></div>
// 				<div className="left_nav">
// 					<span className="name">Witaj, {user.username}!</span>
// 					<Link to="/" className="logout">
// 						Wyloguj
// 					</Link>
// 				</div>
// 			</nav>

// 			<Outlet />
// 		</>
// 	);
// };

// export default Navigation;
