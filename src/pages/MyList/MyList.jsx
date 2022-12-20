import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addToWatched, removeFromQueque, removeFromWatched } from "../../redux/myListSlice";
import DefaultButton from "../../components/DefaultButton/DefaultButton";
import EmptyInfo from "../../components/EmptyInfo/EmptyInfo";
import { getWatched, getQueque } from "../../redux/selectors";
import css from "./MyList.module.css";
import MyListItem from "../../components/MyListItem/MyListItem";

const MyList = () => {
	const watched = useSelector(getWatched);
	const queque = useSelector(getQueque);
	const dispatch = useDispatch();
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		localStorage.setItem("watched", JSON.stringify(watched));
	}, [watched]);

	useEffect(() => {
		localStorage.setItem("queque", JSON.stringify(queque));
	}, [queque]);

	const onClickHanlder = () => {
		const actualToggle = toggle;
		setToggle(!actualToggle);
	};

	const actionHandler = (e) => {
		const id = e.target.id;
		if (!toggle) {
			dispatch(removeFromWatched(id));
		} else {
			const wantedItem = queque.filter((item) => item.id === id)[0];
			dispatch(removeFromQueque(id));
			dispatch(addToWatched(wantedItem));
		}
	};

	return (
		<>
			<section className={css["wrapper"]}>
				<div className={css["button-holder"]}>
					<DefaultButton value="Watched" unselect={toggle} onClickHandler={onClickHanlder} />
					<DefaultButton value="Queque" unselect={!toggle} onClickHandler={onClickHanlder} />
				</div>
				{!toggle && watched && watched.length < 1 && <EmptyInfo />}
				{toggle && queque && queque.length < 1 && <EmptyInfo />}
				<ul className={css["list"]}>
					{(!toggle ? watched : queque).map((item) => {
						return (
							<li key={item.id} className={css["item"]}>
								<MyListItem
									image={item.cover}
									id={item.id}
									name={item.name}
									onClickHandler={actionHandler}
									toggle={toggle}
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
