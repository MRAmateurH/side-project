import "./App.css";

import Home from "./components/home/Home";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Dailychrono from "./components/dailychrono/Dailychrono";

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/project" element={<Project />}></Route>
				<Route path="/dailychrono" element={<Dailychrono />}></Route>
			</Routes>
		</>
	);
}

export default App;
