import { useState } from "react";
import Navigation from "./Navigation";
import MainView from "./MainView";
import Reg from "./Register_view";
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
		// jak zrobić zeby nawigacja odpalała się raz a komponenty zmieniały

		<HashRouter>
			<Routes>
				{/* <Route path="/" element={<Navigation />} /> */}
				{/* <Route path="/" element={<MainView />} /> */}
				<Route path="/" element={<Reg />} />
			</Routes>
		</HashRouter>
	);
};

export default App;
