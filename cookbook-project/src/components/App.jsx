import Navigation from "./Navigation";
import MainView from "./MainView";
import Reg from "./Register_view";
import LoggedView from "./LoggedView";
import RecipesInCathegory from "./RecipesInCathegory";
import AddRecipe from "./AddRecipe";
import RecipesList from "./RecipesList";
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
	const [user, setUser] = useState(false);

	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<MainView setUser={setUser} />} />
				<Route element={<Navigation user={user} />}>
					<Route path="logged" element={<LoggedView />} />
					<Route path="recipes/:cathegory" element={<RecipesInCathegory />} />
					<Route path="recipes/:cathegory/addrecipe" element={<AddRecipe />} />
					<Route
						path="recipes/:cathegory/recipeslist"
						element={<RecipesList />}
					/>
				</Route>
				<Route path="register" element={<Reg />} />
			</Routes>
		</HashRouter>
	);
};

export default App;
