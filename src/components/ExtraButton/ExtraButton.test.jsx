import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ExtraButton from "./ExtraButton";

test(`Check text contest`, () => {
	render(<ExtraButton value={"test"} />);
	const button = screen.getByTestId("button");
	expect(button).toHaveTextContent("test");
});

test("Check click foo", () => {
	let testCounter = 0;
	render(<ExtraButton onClickHandler={() => testCounter++} />);
	const button = screen.getByTestId("button");
	fireEvent.click(button);
	expect(testCounter).toBe(1);
});
