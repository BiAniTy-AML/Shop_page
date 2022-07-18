import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Navbar from "../components/Navbar";

describe("Testing navbar", () => {
    it("renders the navbar element", () => {
        render(<Navbar />);

        const navbar = screen.getByRole("navigation");

        expect(navbar).toBeInTheDocument();
    });

    it("renders the navbar li's correctly", () => {
        render(<Navbar />);

        const pages_links = screen.getAllByRole("listitem");

        expect(pages_links.length).toBe(3);
        expect(pages_links[0].textContent).toMatch("Home");
        expect(pages_links[1].textContent).toMatch("Shop");
        expect(pages_links[2].textContent).toMatch("Cart");
    });

    it("renders the logo placeholder correctly", () => {
        render(<Navbar />);

        const logo_placeholder = screen.getByRole("heading");

        expect(logo_placeholder.textContent).toMatch("Logo");
    });
});
