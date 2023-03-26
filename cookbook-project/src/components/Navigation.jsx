import React from "react";
import { Outlet } from "react-router-dom";
import MainView from "./MainView";

const Navigation = ({ user }) => {
	return (
		<>
			<nav>
				<h1 className="logo">Twoja książka kucharska</h1>
				<div className="login_img"></div>
				<span className="name">Witaj, {user.username}!</span>
			</nav>

			<Outlet />
		</>
	);
};

export default Navigation;
