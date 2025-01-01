const { render, screen } = require("@testing-library/react");
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { withPromotedLabel } from "../RestaurantCard";
import "@testing-library/jest-dom";

it("should render RestaurantCard cmponent with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard cmponent with promoted label ", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});
