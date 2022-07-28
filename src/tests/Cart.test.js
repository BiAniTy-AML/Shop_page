import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import Cart from "../components/Cart";

const change_purchase_amount = jest.fn();

const Item = (name, img_name, price) => {
    return {
        name,
        img_name,
        price,
        quantity: 0,
    };
};

const cart_products = [
    Item("Alexandrite", "Alexandrite.png", "10000 &"),
    Item("Luz Opal", "Luz Opal.jpg", "2000 &"),
    Item("Rose Quartz Geode", "Rose Quartz Geode.jpg", "1000 &"),
];

describe("Testing the Cart component", () => {
    it("renders the cart sidebar correctly", () => {
        render(
            <Cart
                is_open={true}
                cart_products={cart_products}
                change_purchase_amount={change_purchase_amount}
            />
        );

        const sidebar = screen.getByTestId("cart_modal");

        expect(sidebar).toBeInTheDocument();
    });

    it("calls the function to change product amount when clicking the correct buttons", () => {
        render(
            <Cart
                is_open={true}
                cart_products={cart_products}
                change_purchase_amount={change_purchase_amount}
            />
        );

        const plus = screen.getAllByAltText("plus circle")[0];
        const minus = screen.getAllByAltText("minus circle")[0];

        userEvent.click(plus);
        userEvent.click(minus);

        expect(change_purchase_amount).toHaveBeenCalledTimes(2);
    });

    it("renders imgs correctly", () => {
        render(
            <Cart
                is_open={true}
                cart_products={cart_products}
                change_purchase_amount={change_purchase_amount}
            />
        );

        const imgs = screen.getAllByAltText("gemstone");

        const plus = screen.getAllByAltText("plus circle");
        const minus = screen.getAllByAltText("minus circle");

        expect(imgs.length).toBe(cart_products.length);
        expect(plus.length).toBe(cart_products.length);
        expect(minus.length).toBe(cart_products.length);
    });
});
