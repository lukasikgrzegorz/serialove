import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { useDispatch } from "react-redux";
import { fetchTrending } from "./redux/operations";
import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const Home = lazy(() => import("./pages/Home"));
const FindSeries = lazy(() => import("./pages/FindSeries"));
const MyList = lazy(() => import("./pages/MyList"));

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTrending());
	}, [dispatch]);

	return (
		<>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="findseries" element={<FindSeries />} />
					<Route path="mylist" element={<MyList />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
