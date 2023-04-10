import React from "react";
import { Outlet, Link } from "react-router-dom";
import MainView from "./MainView";

const Navigation = ({ user }) => {
	return (
		<>
			<nav>
				<h1 className="logo">Twoja książka kucharska</h1>
				<div className="login_img"></div>
				<div className="left_nav">
					<span className="name">Witaj, {user.username}!</span>
					<Link to="/" className="logout">
						Wyloguj
					</Link>
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
