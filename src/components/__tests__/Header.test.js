import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render Header Component with a Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart (0)"); // good way
  //   const LogInButton = screen.getByText("Log In");

  expect(cartItems).toBeInTheDocument();
});
it("should render Header Component with a Cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/); // good way
  //   const LogInButton = screen.getByText("Log In");

  expect(cartItems).toBeInTheDocument();
});

it("should render Header Component with a login component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logIn = screen.getByRole("button"); // good way
  //   const LogInButton = screen.getByText("Log In");

  expect(logIn).toBeInTheDocument();
});
