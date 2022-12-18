import React from "react";
import css from "./ExtraButton.module.css";

const ExtraButton = ({ value, onClickHandler, id }) => {
	return (
		<button id={id} className={css["button"]} onClick={onClickHandler}>
			{value}
		</button>
	);
};

export default ExtraButton;
