import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrending } from "../redux/operations";
import { getTrending } from "../redux/selectors";
import { getTrendingError } from "../redux/selectors";
import { getTrendingIsLoading } from "../redux/selectors";

const Home = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(getTrendingIsLoading);
	const error = useSelector(getTrendingError);
	const trending = useSelector(getTrending);

	useEffect(() => {
		dispatch(fetchTrending());
	}, [dispatch]);

	return (
		<ul>
			{trending.map((item) => {
				return <li key={item.id}>{item.name}</li>;
			})}
		</ul>
	);
};

export default Home;
