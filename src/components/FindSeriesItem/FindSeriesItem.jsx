import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import css from "./FindSeriesItem.module.css";

const FindSeriesItem = ({ name, image, votes }) => {
	const [isLoading, setIsLoading] = useState(true);


	return (
		<li className={css["image-holder"]}>
			<LazyLoadImage
				className={css["image"]}
				alt={name}
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
					{votes !== 0 ? (
						<p className={css["rate"]}>{votes.toFixed(1)}</p>
					) : (
						<p className={css["rate"]}></p>
					)}
					<p className={css["title"]}>{name}</p>
				</div>
			)}
		</li>
	);
};

export default FindSeriesItem;
