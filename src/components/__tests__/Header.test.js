import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should header component with a login button", () => {
  render(
    <BrowserRouter>
        <Provider store={appStore}>
         <Header />
      </Provider>
    </BrowserRouter>
  );

  const LogInButton = screen.getByRole("button", { name: "Sign in" });

  expect(LogInButton).toBeInTheDocument();
});


it("should header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByRole("Cart - (0 items)");

  expect(cartItems).toBeInTheDocument();
});