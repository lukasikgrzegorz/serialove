import { Suspense, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
	const [mobileMenu, setMobileMenu] = useState(false);

	const toogleMenu = () => {
		const actualState = mobileMenu;
		setMobileMenu(!actualState);
	};

	return (
		<>
			{mobileMenu && (
				<div className={css["mobile-navigation"]}>
					<NavLink to="/" onClick={toogleMenu}>
						Trending
					</NavLink>
					<NavLink to="/findseries" onClick={toogleMenu}>
						Find Series
					</NavLink>
					<NavLink to="/mylist" onClick={toogleMenu}>
						My List
					</NavLink>
					<button className={css["menu-btn"]} onClick={toogleMenu}>
						x
					</button>
				</div>
			)}
			<header className={css["header"]}>
				<div className={css["header-wrapper"]}>
					<button className={css["menu-btn"]} onClick={toogleMenu}>
						MENU
					</button>
					<nav className={css["navigation"]}>
						<NavLink className={css["link"]} to="/">
							Trending
						</NavLink>
						<NavLink className={css["link"]} to="/findseries">
							Find Series
						</NavLink>
						<NavLink className={css["link"]} to="/mylist">
							My List
						</NavLink>
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
