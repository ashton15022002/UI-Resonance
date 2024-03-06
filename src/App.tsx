import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Home";
import Input from "./Input";

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
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
