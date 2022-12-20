import React from "react";
import css from "./DecorativeContainer.module.css";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";

const DecorativeContainer = ({ children, image, isSmall, alt }) => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(false);
	}, [image]);

	const onLoadHandler = () => {
		setIsLoaded(true);
	};

	return (
		<>
			{!isLoaded && image && <Loader />}
			<div className={isSmall ? css["container-small"] : css["container"]}>
				<div className={css["text-backdrop"]}>{children}</div>
				<div className={css["image-wrapper"]}>
					{image && (
						<img
							onLoad={onLoadHandler}
							className={css["image"]}
							src={`https://image.tmdb.org/t/p/w1280/${image}`}
							loading="lazy"
							alt={alt}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default DecorativeContainer;
