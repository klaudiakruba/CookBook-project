import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Button = () => {
	return (
		<Link to="/" className="btn">
			Zaloguj
		</Link>
	);
};

export default Button;
