import React from "react";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const Home = lazy(() => import("./pages/Home/Home"));
const FindSeries = lazy(() => import("./pages/FindSeries/FindSeries"));
const SeriesDetail = lazy(() => import("./components/SeriesDetails/SeriesDetails"));
const MyList = lazy(() => import("./pages/MyList/MyList"));

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="findseries" element={<FindSeries />} />
					<Route path="findseries/:seriesID" element={<SeriesDetail />} />
					<Route path="mylist" element={<MyList />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
