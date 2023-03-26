import Navigation from "./Navigation";
import MainView from "./MainView";
import Reg from "./Register_view";
import LoggedView from "./LoggedView";
import RecipesInCathegory from "./RecipesInCathegory";
import AddRecipe from "./AddRecipe";
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
			<Navigation isLogged={isLogged} setIsLogged={setIsLogged} />
			<Routes>
				<Route
					path="/"
					element={<AddRecipe isLogged={isLogged} setIsLogged={setIsLogged} />}
				/>
				{/* <Route path="login">
					<Route
						element={
							<LoggedView isLogged={isLogged} setIsLogged={setIsLogged} />
						}
					/>
					<Route path="recipes/:cathegory" element={<RecipesInCathegory />} />
					<Route path="recipes/:cathegory/addrecipe" element={<AddRecipe />} />
				</Route>
				<Route path="register" element={<Reg />} /> */}
			</Routes>
		</HashRouter>
	);
};

export default App;
