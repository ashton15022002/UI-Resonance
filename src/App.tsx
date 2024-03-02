import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Home";

function App() {
	useEffect(() => {
		window.history.scrollRestoration = "manual";
	}, []);

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/home" element={<Home />} />

				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
