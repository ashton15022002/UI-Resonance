import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import Diagnose from "./pages/Diagnose";
import Fetch from "./pages/Fetch";
import Input from "./pages/Input";



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
					<Route path="/input" element={<Input />} />
					<Route path="/fetch" element={<Fetch />} />
					<Route path="/diagnose" element={<Diagnose />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
