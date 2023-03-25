import Navigation from "./Navigation";
import MainView from "./MainView";
import Reg from "./Register_view";
import LoggedView from "./LoggedView";
import "./App.css";
import { useState } from "react";
import {
	HashRouter,
	Route,
	Routes,
	Link,
	NavLink,
	Outlet,
} from "react-router-dom";

const App = () => {
	const [isLogged, setIsLogged] = useState(false);

	return (
		<HashRouter>
			<Routes>
				<Route
					path="/"
					element={<MainView isLogged={isLogged} setIsLogged={setIsLogged} />}
				/>
				<Route element={<Navigation />}>
					<Route path="login" element={<LoggedView />} />
					<Route path="register" element={<Reg />} />
				</Route>
			</Routes>
		</HashRouter>
	);
};

export default App;
