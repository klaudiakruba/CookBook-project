import Navigation from "./Navigation";
import MainView from "./MainView";
import Reg from "./Register_view";
import LoggedView from "./LoggedView";
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
				<Route element={<Navigation />}>
					<Route path="login" element={<LoggedView />} />
					<Route path="register" element={<Reg />} />
				</Route>
			</Routes>
		</HashRouter>
	);
};

export default App;
