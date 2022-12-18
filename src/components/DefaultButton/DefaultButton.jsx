import React from "react";
import css from "./DefaultButton.module.css";

const DefaultButton = ({ value, onClickHandler, disabled, unselect, isSmall }) => {
	return (
		<button
			className={unselect ? css["button-unselect"] : css["button"]}
			onClick={onClickHandler}
			disabled={disabled}
		>
			{value}
		</button>
	);
};

export default DefaultButton;
