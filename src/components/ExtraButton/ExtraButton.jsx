import React from "react";
import css from "./ExtraButton.module.css";

const ExtraButton = ({ value, onClickHandler, id }) => {
	return (
		<button data-testid="button" id={id} className={css["button"]} onClick={onClickHandler}>
			{value}
		</button>
	);
};

export default ExtraButton;
