import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchByID } from "../../redux/operations";
import { getDetails, getDetailsIsLoading, getDetailsError } from "../../redux/selectors";
import Loader from "../Loader/Loader";
import Container from "../Container/Container";
import css from "./SeriesDetails.module.css";

const SeriesDetails = () => {
	const { seriesID } = useParams();
	const dispatch = useDispatch();
	const details = useSelector(getDetails);
	const isLoading = useSelector(getDetailsIsLoading);
	const error = useSelector(getDetailsError);

	useEffect(() => {
		dispatch(fetchByID(seriesID));
	}, []);

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
									<ul className={css["list"]}>
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
			<div className={css["season-section"]}>
				<h3 className={css["season-title"]}>Seasons</h3>
				<ul className={css["list-season"]}>
					{details.seasons &&
						details.seasons.map((item) => {
							return (
								<li key={item.id} className={css["item-season"]}>
									<img
										className={css["image-season"]}
										src={
											item.poster_path
												? `https://image.tmdb.org/t/p/w200/${item.poster_path}`
												: "https://via.placeholder.com/200x300.png?text=SeriaLove"
										}
									/>
									<div>
										<ul>
											<li>{item.name}</li>
											<li>Air date: {item.air_date}</li>
											<li>Episodes: {item.episode_count}</li>
											<li>{item.overview}</li>
										</ul>
									</div>
								</li>
							);
						})}
				</ul>
			</div>
		</>
	);
};
export default SeriesDetails;
