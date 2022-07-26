import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Shop from "../components/Shop";

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
    Item("Rose Quartz Geode", "Rose Quartz Geode.jpg", "1000 &"),
    Item("Sapphire", "Sapphire.png", "9000 &"),
    Item("Sunset Fire-Opal", "Sunset Fire Opal.jpg", "5000 &"),
    Item("Tanzanite", "Tanzanite.jpg", "4000 &"),
    Item("Red Beryl", "Red Beryl.png", "6000 &"),
    Item("Pink Diamond", "Pink Diamond.png", "7000 &"),
    Item("Fluorite", "Fluorite.png", "3000 &"),
    Item("Amethyst", "Amethyst.png", "8000 &"),
    Item("Aquamarine", "Aquamarine.png", "11000 &"),
    Item("Pink Sapphire", "Pink Sapphire.png", "12000 &"),
];

const add_to_cart = jest.fn();

describe("Testing shop component", () => {
    it("renders the main section correctly", () => {
        render(<Shop add_to_cart={add_to_cart} products={products} />);

        const main_container = screen.getByTestId("main_shop_container");

        expect(main_container).toBeInTheDocument();
    });

    it("renders the correct amount of products ", () => {
        render(<Shop add_to_cart={add_to_cart} products={products} />);

        const main_container = screen.getByTestId("main_shop_container");
        expect(main_container.childElementCount).toBe(12);

        const prods = screen.getAllByTestId("product");
        expect(prods.length).toBe(12);
    });
});
