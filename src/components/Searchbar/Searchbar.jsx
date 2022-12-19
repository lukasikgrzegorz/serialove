import React from "react";
import css from "./Searchbar.module.css";

const Searchbar = ({ onChangeHandler, value }) => {
	return (
		<input
			className={css["serachbar__input"]}
			type="text"
			name="query"
			value={value}
			placeholder="Type here to search"
			autoComplete="off"
			onChange={onChangeHandler}
		></input>
	);
};

export default Searchbar;
