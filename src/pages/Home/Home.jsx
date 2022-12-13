import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrending } from "../../redux/operations";
import { getActualBackground, getTrending } from "../../redux/selectors";
import { getTrendingError } from "../../redux/selectors";
import { getTrendingIsLoading } from "../../redux/selectors";
import { setActualBackground } from "../../redux/trendingSlice";
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
	};

	return (
		<>
			<div className={css["image-wrapper"]}>
				<img
					className={css["image"]}
					src={`https://image.tmdb.org/t/p/original/${actualBackgroud}`}
				/>
			</div>
			<ul>
				{trending.map((item) => {
					return (
						<li key={item.id} id={item.id} onClick={clickHandler}>
							<img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} />
						</li>
					);
				})}
			</ul>
		</>
	);
};

//

export default Home;
