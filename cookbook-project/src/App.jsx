import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import Navigation from "./Navigation";
import FirstPageMain from "./Main_view";
const App = () => {
	return (
		<>
			<Navigation />
			<FirstPageMain />
		</>
	);
};

export default App;
