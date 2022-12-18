import React from "react";
import css from "./DecorativeContainer.module.css";

const DecorativeContainer = ({ children, image, isSmall }) => {
	return (
		<div className={isSmall ? css["container-small"] : css["container"]}>
			<div className={css["text-backdrop"]}>{children}</div>
			<div className={css["image-wrapper"]}>
				{image && (
					<img className={css["image"]} src={`https://image.tmdb.org/t/p/original/${image}`} />
				)}
			</div>
		</div>
	);
};

export default DecorativeContainer;
