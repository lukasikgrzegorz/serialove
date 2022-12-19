import Loader from "../../components/Loader/Loader";
import Container from "../../components/Container/Container";
import css from "./FindSeries.module.css";
import Searchbar from "../../components/Searchbar/Searchbar";
import { debounce } from "throttle-debounce";
import { Link } from "react-router-dom";
import { fetchByQuery } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { getHits } from "../../redux/selectors";
import { getSerchError } from "../../redux/selectors";
import { getSerchIsLoading } from "../../redux/selectors";
import { clearHits } from "../../redux/searchSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const FindSeries = () => {
	const dispatch = useDispatch();
	const actualHits = useSelector(getHits);
	const isLoading = useSelector(getSerchIsLoading);
	const error = useSelector(getSerchError);
	const [searchParams, setSearchParams] = useSearchParams();
	const actualQuery = searchParams.get("query");

	const fetchByActualQuery = async (e) => {
		const actualQuery = e.target.value;
		setSearchParams({ query: actualQuery });
	};

	useEffect(() => {
		if (actualQuery) {
			dispatch(fetchByQuery(actualQuery));
		}
		if (!actualQuery) {
			dispatch(clearHits());
		}
	}, [actualQuery]);

	return (
		<>
			{isLoading && !error && <Loader />}
			<div className={css["wrapper"]}>
				<div className={css["input-holder"]}>
					<Searchbar onChangeHandler={debounce(500, fetchByActualQuery)} />
				</div>
				<div className={css["hits-holder"]}>
					<ul className={css["list"]}>
						{actualHits.map((hit) => {
							return (
								<Link
									key={hit.id}
									className={css["item"]}
									to={`${hit.id}`}
									state={{ from: `/findseries?query=${actualQuery}` }}
								>
									<li className={css["image-holder"]}>
										<img
											className={css["image"]}
											src={
												hit.poster_path
													? `https://image.tmdb.org/t/p/w200/${hit.poster_path}`
													: "https://via.placeholder.com/200x300.png?text=SeriaLove"
											}
										/>
										<div className={css["data"]}>
											<p className={css["rate"]}>{hit.vote_average.toFixed(1)}</p>
											<p className={css["title"]}>{hit.name}</p>
										</div>
									</li>
								</Link>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
};

export default FindSeries;
