import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addToWatched, removeFromQueque, removeFromWatched } from "../../redux/myListSlice";
import DefaultButton from "../../components/DefaultButton/DefaultButton";
import ExtraButton from "../../components/ExtraButton/ExtraButton";
import { getWatched, getQueque, getToggle } from "../../redux/selectors";
import css from "./MyList.module.css";

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
				<ul className={css["list"]}>
					{(!toggle ? watched : queque).map((item) => {
						return (
							<li key={item.id} className={css["item"]}>
								<div className={css["image-holder"]}>
									<img
										className={css["image"]}
										src={
											item.cover
												? `https://image.tmdb.org/t/p/w200/${item.cover}`
												: "https://via.placeholder.com/200x300.png?text=SeriaLove"
										}
									></img>
									<div className={css["data"]}>
										<p className={css["title"]}>{item.name}</p>
									</div>
								</div>
								<ExtraButton
									value={!toggle ? "Remove" : "Add to watched"}
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
