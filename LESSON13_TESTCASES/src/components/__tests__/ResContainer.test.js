// import { render, screen } from "@testing-library/react";
// import { ResContainer, withPromotedLabel } from "../ResContainer";
// import MOCK_DATA from "../mocks/ResContainerMock.json";
// import "@testing-library/jest-dom";

// test("res conatiner testing", () => {
//   render(<ResContainer resData={MOCK_DATA} />);

//   const name = screen.getByText("Leon Burger");

//   expect(name).toBeInTheDocument();
// });

// /// write TC for promoted label HOC

// test("res container with promoted label", () => {
//   const ResContainerWithPromotedLabel = withPromotedLabel(ResContainer);

//   render(<ResContainerWithPromotedLabel resData={MOCK_DATA} />);

//   const promotedLabel = screen.getByText("Promoted");
//   expect(promotedLabel).toBeInTheDocument();
// });
