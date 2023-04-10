import Navigation from "./Navigation";
import MainView from "./MainView";
import Reg from "./RegisterView";
import LoggedView from "./LoggedView";
import RecipesInCategory from "./RecipesInCategory";
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
import { AuthContextProvider } from "../context/AuthContext";

const App = () => {
	const [user, setUser] = useState(false);
	const [recipes, setRecipes] = useState([]);
	const [recipeName, setRecipeName] = useState("");
	const [ingredientsList, setIngredientsList] = useState([]);
	return (
		<HashRouter>
			<AuthContextProvider>
				<Routes>
					<Route path="/" element={<MainView setUser={setUser} />} />
					<Route element={<Navigation user={user} />}>
						<Route path="logged" element={<LoggedView />} />
						<Route
							path="recipes/:category"
							element={
								<RecipesInCategory
									recipes={recipes}
									setRecipes={setRecipes}
									recipeName={recipeName}
									setRecipeName={setRecipeName}
								/>
							}
						/>

						<Route
							path="recipes/:category/:recipeName/"
							element={
								<AddRecipe
									setRecipes={setRecipes}
									setRecipeName={setRecipeName}
									setIngredientsList={setIngredientsList}
									ingredientsList={ingredientsList}
								/>
							}
						/>
						{/* <Route
						path="/recipes/:category/:recipeName/edit"
						element={<AddRecipe />}
					/> */}
					</Route>
					<Route path="register" element={<Reg />} />
				</Routes>
			</AuthContextProvider>
		</HashRouter>
	);
};

export default App;

//działający kod z K K
// import Navigation from "./Navigation";
// import MainView from "./MainView";
// import Reg from "./RegisterView";
// import LoggedView from "./LoggedView";
// import RecipesInCategory from "./RecipesInCategory";
// import AddRecipe from "./AddRecipe";
// import "./App.css";
// import { useState } from "react";
// import {
// 	HashRouter,
// 	Route,
// 	Routes,
// 	Link,
// 	NavLink,
// 	Outlet,
// } from "react-router-dom";
// import { AuthContextProvider } from "../context/AuthContext";

// const App = () => {
// 	const [user, setUser] = useState(false);
// 	const [recipes, setRecipes] = useState([]);
// 	const [recipeName, setRecipeName] = useState("");
// 	const [ingredientsList, setIngredientsList] = useState([]);
// 	return (
// 		<HashRouter>
// 			<AuthContextProvider>
// 				<Routes>
// 					<Route path="/" element={<MainView setUser={setUser} />} />
// 					<Route element={<Navigation user={user} />}>
// 						<Route path="logged" element={<LoggedView />} />
// 						<Route
// 							path="recipes/:category"
// 							element={
// 								<RecipesInCategory
// 									recipes={recipes}
// 									setRecipes={setRecipes}
// 									recipeName={recipeName}
// 									setRecipeName={setRecipeName}
// 								/>
// 							}
// 						/>

// 						<Route
// 							path="recipes/:category/:recipeName/"
// 							element={
// 								<AddRecipe
// 									setRecipes={setRecipes}
// 									setRecipeName={setRecipeName}
// 									setIngredientsList={setIngredientsList}
// 									ingredientsList={ingredientsList}
// 								/>
// 							}
// 						/>
// 						{/* <Route
// 						path="/recipes/:category/:recipeName/edit"
// 						element={<AddRecipe />}
// 					/> */}
// 					</Route>
// 					<Route path="register" element={<Reg />} />
// 				</Routes>
// 			</AuthContextProvider>
// 		</HashRouter>
// 	);
// };

// export default App;
