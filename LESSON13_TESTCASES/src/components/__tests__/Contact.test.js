import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("contact us page heading test", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  //assertion
  expect(heading).toBeInTheDocument();
});

test("contact us page button test", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  // getByText("submit") can also be done
  expect(button).toBeInTheDocument();
});

describe("input boxes testing", () => {
  test("contact us page input test", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  test("contact us page all input boxes test", () => {
    // for multiple items we need to use getAllBy for only one item getBy
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
