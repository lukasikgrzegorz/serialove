import Loader from "../../components/Loader/Loader";
import css from "./FindSeries.module.css";
import Searchbar from "../../components/Searchbar/Searchbar";
import { debounce } from "throttle-debounce";
import { fetchByQuery } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { getHits } from "../../redux/selectors";
import { getSerchError } from "../../redux/selectors";
import { getSerchIsLoading } from "../../redux/selectors";
import { clearHits } from "../../redux/searchSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import FindSeriesItem from "../../components/FindSeriesItem/FindSeriesItem";

const FindSeries = () => {
	const dispatch = useDispatch();
	const actualHits = useSelector(getHits);
	const isLoading = useSelector(getSerchIsLoading);
	const error = useSelector(getSerchError);
	const [searchParams, setSearchParams] = useSearchParams();
	const actualQuery = searchParams.get("query");

	const setActualQuery = (e) => {
		setSearchParams({ query: e });
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
					<Searchbar startValue={actualQuery} onChange={debounce(500, setActualQuery)} />
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
									<FindSeriesItem
										name={hit.name}
										image={hit.poster_path}
										votes={hit.vote_average}
									/>
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
