import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
	return (
		<>
			<header className={css["header"]}>
				<div className={css["header-wrapper"]}>
					<nav className={css["navigation"]}>
						<NavLink to="/">Trending</NavLink>
						<NavLink to="/findseries">Find Series</NavLink>
						<NavLink to="/mylist">My List</NavLink>
					</nav>
					<a href="#" className={css["logo"]}>
						Seria<span className={css["logo--accent"]}>Love</span>
					</a>
				</div>
			</header>
			<main>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</main>
			<footer className={css["footer"]}>2022 SeriaLove © Grzegorz Łukasik</footer>
		</>
	);
};

export default SharedLayout;
