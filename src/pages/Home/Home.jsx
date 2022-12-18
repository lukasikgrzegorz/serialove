import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTrending } from "../../redux/operations";
import { getActualItem, getTrending } from "../../redux/selectors";
import { getTrendingError } from "../../redux/selectors";
import { getTrendingIsLoading } from "../../redux/selectors";
import { setActualItem } from "../../redux/trendingSlice";
import { getActualBackdrop } from "../../redux/selectors";
import Loader from "../../components/Loader/Loader";
import DecorativeContainer from "../../components/DecorativeContainer/DecorativeContainer";
import Container from "../../components/Container/Container";
import DefaultButton from "../../components/DefaultButton/DefaultButton";
import css from "./Home.module.css";

const Home = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(getTrendingIsLoading);
	const error = useSelector(getTrendingError);
	const trending = useSelector(getTrending);
	const actualItem = useSelector(getActualItem);
	const actualBackdrop = useSelector(getActualBackdrop);

	useEffect(() => {
		dispatch(fetchTrending());
	}, [dispatch]);

	const clickHandler = (e) => {
		dispatch(setActualItem());
		const id = e.currentTarget.id;
		const data = trending.filter((item) => item.id.toString() === id);
		const wantedItem = data.map((item) => ({
			id: item.id,
			backdrop: item.backdrop_path,
			title: item.name,
			rate: item.vote_average,
			overview: item.overview,
		}));
		dispatch(setActualItem(wantedItem[0]));
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			{isLoading && !error && <Loader />}
			<DecorativeContainer image={actualBackdrop}>
				<div className={css["text-wrapper"]}>
					<h2 className={css["title"]}>{actualItem.title}</h2>
					<p className={css["rating"]}>
						Rating:{" "}
						<span className={css["accent"]}>{actualItem.rate && actualItem.rate.toFixed(1)}</span>
					</p>
					<p className={css["overview"]}>
						{actualItem.overview}
						<Link to={`findseries/${actualItem.id}`} state={{ from: "/" }}>
							<DefaultButton value={"Read more"}></DefaultButton>
						</Link>
					</p>
				</div>
			</DecorativeContainer>
			<section className={css["trending-section"]}>
				<Container>
					<ul className={css["list"]}>
						{trending.map((item) => {
							return (
								<li key={item.id} id={item.id} onClick={clickHandler} className={css["item"]}>
									<img
										className={css["image-cover"]}
										src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
									/>
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
