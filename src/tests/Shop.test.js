import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Shop from "../components/Shop";

describe("Testing shop component", () => {
    it("renders the main section correctly", () => {
        render(<Shop />);

        const main_container = screen.getByTestId("main_shop_container");

        expect(main_container).toBeInTheDocument();
    });

    it("renders the correct amount of products ", () => {
        render(<Shop />);

        const main_container = screen.getByTestId("main_shop_container");
        expect(main_container.childElementCount).toBe(12);

        const products = screen.getAllByTestId("product");
        expect(products.length).toBe(12);
    });
});
