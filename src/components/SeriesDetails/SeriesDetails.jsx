import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { fetchByID } from "../../redux/operations";
import { Link } from "react-router-dom";
import {
	addToQueque,
	addToWatched,
	removeFromQueque,
	removeFromWatched,
} from "../../redux/myListSlice";
import {
	getDetails,
	getDetailsCast,
	getDetailsIsLoading,
	getDetailsError,
	getQueque,
	getWatched,
} from "../../redux/selectors";
import Loader from "../Loader/Loader";
import Container from "../Container/Container";
import DecorativeContainer from "../DecorativeContainer/DecorativeContainer";
import Seasons from "./Seasons/Seasons";
import Cast from "./Cast/Cast";
import DefaultButton from "../DefaultButton/DefaultButton";
import css from "./SeriesDetails.module.css";

const SeriesDetails = () => {
	const { seriesID } = useParams();
	const dispatch = useDispatch();
	const details = useSelector(getDetails);
	const cast = useSelector(getDetailsCast);
	const isLoading = useSelector(getDetailsIsLoading);
	const error = useSelector(getDetailsError);
	const watched = useSelector(getWatched);
	const queque = useSelector(getQueque);
	const isWatched = watched.some((index) => index.id === seriesID);
	const isQueque = queque.some((index) => index.id === seriesID);
	const location = useLocation();
	const backLink = location.state?.from ?? "/";

	useEffect(() => {
		dispatch(fetchByID(seriesID));
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	useEffect(() => {
		localStorage.setItem("watched", JSON.stringify(watched));
	}, [watched]);

	useEffect(() => {
		localStorage.setItem("queque", JSON.stringify(queque));
	}, [queque]);

	const addSeriestoWatched = (e) => {
		if (isQueque) {
			dispatch(removeFromQueque(seriesID));
		}
		if (!isWatched) {
			dispatch(addToWatched({ id: seriesID, name: details.name, cover: details.poster_path }));
		} else {
			dispatch(removeFromWatched(seriesID));
		}
	};

	const addSeriestoQueque = (e) => {
		if (isWatched) {
			dispatch(removeFromWatched(seriesID));
		}
		if (!isQueque) {
			dispatch(addToQueque({ id: seriesID, name: details.name, cover: details.poster_path }));
		} else {
			dispatch(removeFromQueque(seriesID));
		}
	};

	return (
		<>
			{isLoading && !error && <Loader />}

			<DecorativeContainer image={details.backdrop_path} alt={details.name} isSmall={true}>
				<div className={css["wrapper"]}>
					<Link to={backLink}>
						<button className={css["back-btn"]} type="button">
							Go back
						</button>
					</Link>
					<img
						className={css["image"]}
						src={
							details.poster_path
								? `https://image.tmdb.org/t/p/w500/${details.poster_path}`
								: "https://via.placeholder.com/500x750.png?text=SeriaLove"
						}
					/>
					<div className={css["info"]}>
						<h2 className={css["title"]}>{details.name}</h2>
						<ul>
							<li>{details.genres && details.genres.map((item) => item.name).join(", ")}</li>
							<li>
								Rating:{" "}
								<span className={css["accent"]}>
									{details.vote_average && details.vote_average.toFixed(1)}
								</span>
							</li>
							<li>
								Votes: <span className={css["accent"]}>{details.vote_count}</span>
							</li>
							<li>
								Pupularity: <span className={css["accent"]}>{details.popularity}</span>
							</li>
						</ul>
						<div>
							<DefaultButton
								value="Watched"
								onClickHandler={addSeriestoWatched}
								unselect={!isWatched}
							/>
							<DefaultButton
								value="Queque"
								onClickHandler={addSeriestoQueque}
								unselect={!isQueque}
							/>
						</div>
					</div>
				</div>
			</DecorativeContainer>
			<Container>
				{details.overview && (
					<>
						<h2 className={css["season-title"]}>Overview</h2>
						<p>{details.overview}</p>
					</>
				)}
				{cast && cast.length > 0 && (
					<>
						<h2 className={css["season-title"]}>Cast</h2>
						<Cast data={cast}></Cast>
					</>
				)}
				{details.seasons && details.seasons.length > 0 && (
					<>
						<h2 className={css["season-title"]}>Seasons</h2>
						<Seasons data={details.seasons}></Seasons>
					</>
				)}
			</Container>
		</>
	);
};
export default SeriesDetails;
