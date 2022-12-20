import React, { useEffect, useRef } from "react";
import css from "./Searchbar.module.css";

const Searchbar = (props) => {
	const { startValue } = props;
	const inputRef = useRef();

	const handleChange = (e) => {
		const query = e.target.value;
		props.onChange(query);
	};

	useEffect(() => {
		inputRef.current.value = startValue;
	}, []);

	return (
		<input
			ref={inputRef}
			className={css["serachbar__input"]}
			type="text"
			name="query"
			placeholder="Type here to search"
			autoComplete="off"
			onChange={handleChange}
		></input>
	);
};

export default Searchbar;
