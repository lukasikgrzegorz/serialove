import React from "react";
import css from "./Cast.module.css";
import ScrollContainer from "react-indiana-drag-scroll";

const Cast = ({ data }) => {
	return (
		<ScrollContainer className={css["list-season"]}>
			{data.map((item) => {
				return (
					<div className={css["item-season"]}>
						<img
							className={css["image-season"]}
							src={
								item.profile_path
									? `https://www.themoviedb.org/t/p/w200/${item.profile_path}`
									: `https://via.placeholder.com/200x300?text=SeriaLove`
							}
							alt={item.name}
						/>
						<ul>
							<li>{item.name}</li>
							<li>{item.character}</li>
						</ul>
					</div>
				);
			})}
		</ScrollContainer>
	);
};

export default Cast;