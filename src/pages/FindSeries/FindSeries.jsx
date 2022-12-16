import Loader from "../../components/Loader/Loader";
import Container from "../../components/Container/Container";
import css from "./FindSeries.module.css";
import Searchbar from "../../components/Searchbar/Searchbar";
import { fetchByQuery } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { getHits, getQuery } from "../../redux/selectors";
import { getSerchError } from "../../redux/selectors";
import { getSerchIsLoading } from "../../redux/selectors";
import { setQuery, clearHits } from "../../redux/searchSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const FindSeries = () => {
	const dispatch = useDispatch();
	const actualHits = useSelector(getHits);
	const isLoading = useSelector(getSerchIsLoading);
	const error = useSelector(getSerchError);
	const query = useSelector(getQuery);

	const fetchByActualQuery = async (e) => {
		const actualQuery = e.target.value;
		dispatch(setQuery(actualQuery));
	};

	useEffect(() => {
		if (query) {
			dispatch(fetchByQuery(query));
		}
		if (!query) {
			dispatch(clearHits());
		}
	}, [query]);

	return (
		<>
			{isLoading && !error && <Loader />}
			<section className={css["search-section"]}>
				<div className={css["input"]}>
					<Container>
						<div className={css["input-wrapper"]}>
							<Searchbar onChangeHandler={fetchByActualQuery} />
						</div>
					</Container>
				</div>
				<div className={css["hits"]}>
					<ul className={css["list"]}>
						{actualHits.map((hit) => {
							return (
								<li key={hit.id} id={hit.id} className={css["item"]}>
									<img
										className={css["image-cover"]}
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
							);
						})}
					</ul>
				</div>
			</section>
		</>
	);
};

export default FindSeries;
