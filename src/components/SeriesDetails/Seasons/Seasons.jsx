import React from "react";
import css from "./Seasons.module.css";
import ScrollContainer from "react-indiana-drag-scroll";

const Seasons = ({ data }) => {
	return (
		<ScrollContainer className={css["list-season"]}>
			{data.map((item) => {
				return (
					<div key={item.id} className={css["item-season"]}>
						<img
							className={css["image-season"]}
							src={
								item.poster_path
									? `https://image.tmdb.org/t/p/w200/${item.poster_path}`
									: "https://via.placeholder.com/200x300.png?text=SeriaLove"
							}
						/>
						<div>
							<ul>
								<li>{item.name}</li>
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