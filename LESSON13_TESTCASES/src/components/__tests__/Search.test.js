import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/SeachMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should have search button in body", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchbtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchinput");

  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchbtn);
  // now after clicking search btn screen should load 4 cards
  const cards = screen.getAllByTestId("resContainer");
  expect(cards.length).toBeLessThan(5);
});

it("should filter top rated restaurants", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurents",
  });

  fireEvent.click(topRatedBtn);
  const cards = screen.getAllByTestId("resContainer");
  expect(cards.length).toBeLessThan(10);
});
