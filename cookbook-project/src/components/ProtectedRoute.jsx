import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();
	const { isLoggedIn } = UserAuth();
	useEffect(() => {
		if (!isLoggedIn) {
			navigate("/");
		}
	}, [isLoggedIn, navigate]);

	return isLoggedIn ? children : null;
};

export { ProtectedRoute };
