import { useState } from "react";
import MainView from "./MainView";
import "./App.css";
import {
	HashRouter,
	Route,
	Routes,
	Link,
	NavLink,
	Outlet,
} from "react-router-dom";
const App = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<MainView />} />
			</Routes>
		</HashRouter>
	);
};

export default App;
