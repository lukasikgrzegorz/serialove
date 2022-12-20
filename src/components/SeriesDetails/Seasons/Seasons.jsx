import React from "react";
import css from "./Seasons.module.css";
import ScrollContainer from "react-indiana-drag-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Seasons = ({ data }) => {
	return (
		<ScrollContainer className={css["list"]}>
			{data.map((item) => {
				return (
					<div key={item.id} className={css["item"]}>
						<LazyLoadImage
							className={css["image"]}
							src={
								item.poster_path
									? `https://image.tmdb.org/t/p/w200/${item.poster_path}`
									: "https://via.placeholder.com/200x300.png?text=SeriaLove"
							}
						/>
						<div>
							<ul>
								<li className={css["title"]}>{item.name}</li>
								<li>Air date: {item.air_date}</li>
								<li>Episodes: {item.episode_count}</li>
							</ul>
						</div>
					</div>
				);
			})}
		</ScrollContainer>
	);
};

export default Seasons;
