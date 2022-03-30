import { Route, Routes } from "react-router-dom";

import SearchAppBar from "./components/SearchAppBar";
import Tour from "./components/Tour";
import HomePage from "./components/HomePage";

import "./App.css";

function App() {
	return (
		<>
			<SearchAppBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/:id" element={<Tour />} />
			</Routes>
		</>
	);
}

export default App;

