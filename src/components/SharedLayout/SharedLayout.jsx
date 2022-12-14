import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Container from "../Container/Container";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
	return (
		<>
			<header className={css["header"]}>
				<nav className={css["navigation"]}>
					<NavLink to="/">Trending</NavLink>
					<NavLink to="/findseries">Find Series</NavLink>
					<NavLink to="/mylist">My list</NavLink>
				</nav>
				<a href="#" className={css["logo"]}>
					Seria<span className={css["logo--accent"]}>Love</span>
				</a>
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
