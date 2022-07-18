import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Navbar from "../components/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Testing navbar component", () => {
    it("renders the navbar element", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        const navbar = screen.getByRole("navigation");

        expect(navbar).toBeInTheDocument();
        expect(navbar).toMatchSnapshot();
    });

    it("renders the navbar li's correctly", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        const pages_links = screen.getAllByRole("listitem");

        expect(pages_links.length).toBe(3);
        expect(pages_links[0].textContent).toMatch("Home");
        expect(pages_links[1].textContent).toMatch("Shop");
        expect(pages_links[2].textContent).toMatch("Cart");
    });

    it("renders the logo placeholder correctly", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        const logo_placeholder = screen.getByRole("heading");

        expect(logo_placeholder.textContent).toMatch("Logo");
    });
});
