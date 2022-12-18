import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
	addToWatched,
	removeFromQueque,
	removeFromWatched,
	switchToggle,
} from "../../redux/myListSlice";
import DefaultButton from "../../components/DefaultButton/DefaultButton";
import ExtraButton from "../../components/ExtraButton/ExtraButton";
import { getWatched, getQueque, getToggle } from "../../redux/selectors";
import css from "./MyList.module.css";

const MyList = () => {
	const watched = useSelector(getWatched);
	const queque = useSelector(getQueque);
	const isSwitched = useSelector(getToggle);
	const dispatch = useDispatch();

	useEffect(() => {
		localStorage.setItem("watched", JSON.stringify(watched));
	}, [watched]);

	useEffect(() => {
		localStorage.setItem("queque", JSON.stringify(queque));
	}, [queque]);

	const onClickHanlder = () => {
		dispatch(switchToggle());
	};

	const actionHandler = (e) => {
		const id = e.target.id;
		if (!isSwitched) {
			dispatch(removeFromWatched(id));
		} else {
			const wantedItem = queque.filter((item) => item.id === id)[0];
			dispatch(removeFromQueque(id));
			dispatch(addToWatched(wantedItem));
		}
	};

	return (
		<>
			<section className={css["mylist-section"]}>
				<div>
					<DefaultButton value="Watched" unselect={isSwitched} onClickHandler={onClickHanlder} />
					<DefaultButton value="Queque" unselect={!isSwitched} onClickHandler={onClickHanlder} />
				</div>
				<ul>
					{(!isSwitched ? watched : queque).map((item) => {
						return (
							<li key={item.id}>
								<img src={`https://image.tmdb.org/t/p/w200/${item.cover}`}></img>
								{item.name}
								<ExtraButton
									value={!isSwitched ? "Remove" : "Add to watched"}
									id={item.id}
									onClickHandler={actionHandler}
								/>
							</li>
						);
					})}
				</ul>
			</section>
		</>
	);
};

export default MyList;
