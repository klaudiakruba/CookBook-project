import React from "react";
import { Outlet } from "react-router-dom";

const NavDashboard = () => {
	return (
		<>
			<nav>
				<h1 className="logo">Twoja książka kucharska</h1>
			</nav>
		</>
	);
};
const Navigation = () => {
	return (
		<>
			<NavDashboard />
			<Outlet />
		</>
	);
};

export default Navigation;
