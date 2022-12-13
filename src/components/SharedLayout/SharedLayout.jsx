import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
	return (
		<>
			<header className={css["header"]}>
				<NavLink to="/">Trending</NavLink>
				<NavLink to="/findseries">Find Series</NavLink>
				<NavLink to="/mylist">My list</NavLink>
			</header>
			<main>
				<Suspense fallback={<div>Content is Loading...</div>}>
					<Outlet />
				</Suspense>
			</main>
			<footer>FOOTER</footer>
		</>
	);
};

export default SharedLayout;
