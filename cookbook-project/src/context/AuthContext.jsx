import { createContext, useContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
	// const [user, setUser] = useState({});
	const authFunctions = {
		createUser: (email, password) => {
			return createUserWithEmailAndPassword(auth, email, password);
		},
		signIn: (email, password) => {
			return signInWithEmailAndPassword(auth, email, password);
		},
		signOut: () => {
			return signOut(auth);
		},
		onAuthStateChanged: (callback) => {
			return onAuthStateChanged(auth, callback);
		},
	};

	// useEffect(() => {
	// 	const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
	// 		console.log(currentUser);
	// 		setUser(currentUser);
	// 	});
	// 	return () => {
	// 		unsubscribe();
	// 	};
	// }, []);

	return (
		<UserContext.Provider value={authFunctions}>
			{children}
		</UserContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(UserContext);
};
