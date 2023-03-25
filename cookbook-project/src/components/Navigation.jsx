import React from "react";
import MainView from "./MainView";
import { Outlet } from "react-router-dom";

const Navigation = () => {
	return (
		<>
			<nav>
				<h1 className="logo">Twoja książka kucharska</h1>
			</nav>
			<Outlet />
		</>
	);
};

export default Navigation;
