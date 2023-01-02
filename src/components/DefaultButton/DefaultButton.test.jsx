import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DefaultButton from "./DefaultButton";

test(`Check text contest`, () => {
	render(<DefaultButton value={"test"} />);
	const button = screen.getByTestId("button");
	expect(button).toHaveTextContent("test");
});

test("Check click foo", () => {
	let testCounter = 0;
	render(<DefaultButton onClickHandler={() => testCounter++} />);
	const button = screen.getByTestId("button");
	fireEvent.click(button);
	expect(testCounter).toBe(1);
});
