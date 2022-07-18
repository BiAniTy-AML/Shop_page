import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Homepage from "../components/Homepage";

describe("Testing Homepage component", () => {
    it("renders text div about the site correctly", () => {
        render(<Homepage />);

        const explanation_txt_div = screen.getByText(
            "This will be a gemstone shop, cause i like 'em"
        );

        expect(explanation_txt_div).toBeInTheDocument();
    });
});
