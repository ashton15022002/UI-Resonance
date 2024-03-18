import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
<<<<<<< HEAD
import Home from "./Home";
import Input from "./Input";
=======
import Home from "./pages/Home";
import Fetch from "./pages/Fetch";
import Diagnose from "./pages/Diagnose";
>>>>>>> master

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
<<<<<<< HEAD
					<Route path="/input" element={<Input />} />
=======
					<Route path="/fetch" element={<Fetch />} />
					<Route path="/diagnose" element={<Diagnose />} />
>>>>>>> master
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
