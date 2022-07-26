import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Navbar from "../components/Navbar";
import { MemoryRouter } from "react-router-dom";

const Item = (name, img_name, price) => {
    return {
        name,
        img_name,
        price,
    };
};
const products = [
    Item("Alexandrite", "Alexandrite.png", "10000 &"),
    Item("Luz Opal", "Luz Opal.jpg", "2000 &"),
];

// TODO: find out how to mock the props passed into the Navbar componenet

describe("Testing navbar component", () => {
    it("renders the navbar element", () => {
        const cart_products = [...products];
        render(
            <MemoryRouter>
                <Navbar cart_products={cart_products} />
            </MemoryRouter>
        );

        const navbar = screen.getByRole("navigation");

        expect(navbar).toBeInTheDocument();
        expect(navbar).toMatchSnapshot();
    });

    it("renders the navbar li's correctly", () => {
        const cart_products = [...products];
        render(
            <MemoryRouter>
                <Navbar cart_products={cart_products} />
            </MemoryRouter>
        );

        const pages_links = screen.getAllByRole("listitem");

        expect(pages_links.length).toBe(3);

        expect(pages_links[0].textContent).toMatch("Home");
        expect(pages_links[1].textContent).toMatch("Shop");
    });

    it("renders the logo placeholder correctly", () => {
        const cart_products = [...products];
        render(
            <MemoryRouter>
                <Navbar cart_products={cart_products} />
            </MemoryRouter>
        );

        const logo_placeholder = screen.getByRole("heading");

        expect(logo_placeholder.textContent).toMatch("Logo");
    });
});
