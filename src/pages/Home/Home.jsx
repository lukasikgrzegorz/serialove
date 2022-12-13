import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrending } from "../../redux/operations";
import { getActualBackground, getTrending } from "../../redux/selectors";
import { getTrendingError } from "../../redux/selectors";
import { getTrendingIsLoading } from "../../redux/selectors";
import { setActualBackground } from "../../redux/trendingSlice";
import Container from "../../components/Container/Container";
import css from "./Home.module.css";

const Home = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(getTrendingIsLoading);
	const error = useSelector(getTrendingError);
	const trending = useSelector(getTrending);
	const actualBackgroud = useSelector(getActualBackground);

	useEffect(() => {
		dispatch(fetchTrending());
	}, [dispatch]);

	const clickHandler = (e) => {
		const id = e.currentTarget.id;
		let wantedItem = trending.filter((item) => item.id.toString() === id);
		dispatch(setActualBackground(wantedItem[0].backdrop_path));
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			<section className={css["title-secttion"]}>
				<div className={css["text-wrapper"]}></div>
				<div className={css["image-wrapper"]}>
					<img
						className={css["image"]}
						loading="lazy"
						src={`https://image.tmdb.org/t/p/original/${actualBackgroud}`}
					/>
				</div>
			</section>
			<section className={css["trending-section"]}>
				<Container>
					<ul className={css["list"]}>
						{trending.map((item) => {
							return (
								<li key={item.id} id={item.id} onClick={clickHandler} className={css["item"]}>
									<img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} />
								</li>
							);
						})}
					</ul>
				</Container>
			</section>
		</>
	);
};

//

export default Home;
