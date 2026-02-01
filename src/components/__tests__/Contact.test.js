import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact component", () => {
  render(<Contact />);

  //Quering
  const inputBoxes = screen.getAllByRole("textbox");
  //Assertion
  expect(inputBoxes.length).toBe(3);
});

test("Heading Should load contact component", () => {
  render(<Contact />);

  //Quering
  const heading = screen.getAllByRole("heading");
  //Assertion
  expect(heading.length).toBeGreaterThan(0);
});
