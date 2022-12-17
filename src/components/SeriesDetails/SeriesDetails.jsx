import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchByID } from "../../redux/operations";
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
import Seasons from "./Seasons/Seasons";
import Cast from "./Cast/Cast";
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

	useEffect(() => {
		dispatch(fetchByID(seriesID));
	}, []);

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
		if (!isQueque) {
			dispatch(addToQueque({ id: seriesID, name: details.name, cover: details.poster_path }));
		} else {
			dispatch(removeFromQueque(seriesID));
		}
	};

	return (
		<>
			{isLoading && !error && <Loader />}
			<div className={css["title-secttion"]}>
				<div className={css["text-backdrop"]}>
					<Container>
						<div className={css["top-wrapper"]}>
							<img
								className={css["image-cover"]}
								src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
							/>
							<div>
								<div>
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

									<div className={css["overview"]}>
										<h3>Overview:</h3>
										<p>{details.overview}</p>
									</div>

									<div>
										<button onClick={addSeriestoWatched} disabled={isWatched}>
											WATCHED
										</button>
										<button onClick={addSeriestoQueque} disabled={isQueque || isWatched}>
											QUEQUE
										</button>
									</div>
								</div>
							</div>
						</div>
					</Container>
				</div>
				<div className={css["image-wrapper"]}>
					{details.backdrop_path && (
						<img
							className={css["image"]}
							src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
						/>
					)}
				</div>
			</div>
			<Container>
				<h2 className={css["season-title"]}>Cast</h2>
				{cast && <Cast data={cast}></Cast>}
				<h2 className={css["season-title"]}>Seasons</h2>
				{details.seasons && <Seasons data={details.seasons}></Seasons>}
			</Container>
		</>
	);
};
export default SeriesDetails;
