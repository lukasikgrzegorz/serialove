import React from "react";
import ExtraButton from "../ExtraButton/ExtraButton";
import css from "./MyListItem.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";

const MyListItem = ({ image, name, id, onClickHandler, toggle }) => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<>
			<div className={css["image-holder"]}>
				<LazyLoadImage
					alt={name}
					className={css["image"]}
					src={
						image
							? `https://image.tmdb.org/t/p/w200/${image}`
							: "https://via.placeholder.com/200x300.png?text=SeriaLove"
					}
					afterLoad={() => {
						setIsLoading(false);
					}}
				/>
				{!isLoading && (
					<div className={css["data"]}>
						<p className={css["title"]}>{name}</p>
					</div>
				)}
			</div>
			{!isLoading && (
				<ExtraButton
					value={!toggle ? "Remove" : "Add to watched"}
					id={id}
					onClickHandler={onClickHandler}
				/>
			)}
		</>
	);
};

export default MyListItem;
