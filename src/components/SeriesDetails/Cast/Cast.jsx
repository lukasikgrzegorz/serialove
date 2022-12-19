import React from "react";
import css from "./Cast.module.css";
import ScrollContainer from "react-indiana-drag-scroll";

const Cast = ({ data }) => {
	return (
		<ScrollContainer className={css["list"]}>
			{data.map((item) => {
				return (
					<div key={item.id} className={css["item"]}>
						<img
							className={css["image"]}
							src={
								item.profile_path
									? `https://www.themoviedb.org/t/p/w200/${item.profile_path}`
									: `https://via.placeholder.com/200x300?text=SeriaLove`
							}
							alt={item.name}
						/>
						<div>
							<p className={css["title"]}>{item.name}</p>
							<p>{item.character}</p>
						</div>
					</div>
				);
			})}
		</ScrollContainer>
	);
};

export default Cast;
