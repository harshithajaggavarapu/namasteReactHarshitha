import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantDetails from "../RestaurantDetails";
import Cart from "../Cart";
import { act } from "react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("testing cart", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantDetails />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Recommended (15)");
  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(15);
  const addBtns = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addBtns[0]);
  expect(screen.getAllByTestId("cartItems").length).toBe(1);
  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartBtn);
  expect(screen.getAllByTestId("cartItems").length).toBe(0);
});
