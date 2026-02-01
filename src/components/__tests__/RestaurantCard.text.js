import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import resList from "../../utils/mockData";

it("should render a restaurant card", () => {
    render(<RestaurantCard resData={resList} />);

    const name = screen.getByText("Meghana Foods");

    expect(name).toBeInTheDocument();
});