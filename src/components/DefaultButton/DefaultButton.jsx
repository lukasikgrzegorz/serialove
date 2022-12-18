import React from "react";
import css from "./DefaultButton.module.css";

const DefaultButton = ({ value, onClickHandler, unselect, isSmall }) => {
	return (
		<button className={unselect ? css["button-unselect"] : css["button"]} onClick={onClickHandler}>
			{value}
		</button>
	);
};

export default DefaultButton;
