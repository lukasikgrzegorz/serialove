import React from "react";
import css from "./DefaultButton.module.css";

const DefaultButton = ({ value, onClickHandler, unselect, isSmall }) => {
	return (
		<button
			data-testid="button"
			className={unselect ? css["button-unselect"] : css["button"]}
			onClick={onClickHandler}
		>
			{value}
		</button>
	);
};

export default DefaultButton;
