import "./styles/Styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { useState } from "react";

const App = () => {
    // Items in the cart, ready to be purchased
    const [cart_products, set_cart_products] = useState([]);

    // Whether the cart modal is visible or not
    const [is_open, set_is_open] = useState(false);

    // Characteristics of each product in sale
    const Item = (name, img_name, price) => {
        return {
            name,
            img_name,
            price,
            quantity: 0,
        };
    };

    // All the products currently being sold in the shop
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

    // Handles selection of products by the user
    const add_product_cart = (e) => {
        // ? is it wrong to use query selector here ?
        // Gets the name of the product selected
        // TODO: use an id instead of the name
        const prod_name = e.target
            .closest(".shop_item")
            .querySelector(".item_name").textContent;

        // Finds the product object
        const selected_product = products.find(
            ({ name }) => name === prod_name
        );

        // By default, the quantity is zero
        if (selected_product.quantity === 0) selected_product.quantity = 1;

        // If the product has already been selected
        const prod_in_array = cart_products.some(
            ({ name }) => name === prod_name
        );

        // Adds it the the cart
        if (!prod_in_array)
            set_cart_products((prev_prod) => [...prev_prod, selected_product]);
    };

    // Removes an item from the cart
    const remove_from_cart = (prod_name) => {
        // Finds the item and resets its quantity
        const prod = cart_products.find(({ name }) => name === prod_name);
        prod["quantity"] = 0;

        // The id of the item, used to remove it from the cart array
        const idx = cart_products.findIndex((prod) => prod.name === prod_name);

        const without_removed = [...cart_products];
        without_removed.splice(idx, 1);

        set_cart_products([...without_removed]);
    };

    // Handles user selecting to buy multiple times the same product
    const change_purchase_amount = (operation, product) => {
        switch (operation) {
            // Adds 1 to the quantity of the item to be bought
            case "more":
                product["quantity"] += 1;

                // ? should this be done with useEffect ?
                // Updates the cart array
                set_cart_products((prev_list) => [...prev_list]);
                break;

            case "less":
                // Subtracts 1 if there are more than 1
                if (product["quantity"] > 1) product["quantity"] -= 1;
                else product["quantity"] = 1;

                set_cart_products((prev_list) => [...prev_list]);
                break;

            default:
                return;
        }
    };

    return (
        <>
            <BrowserRouter>
                <Navbar
                    cart_products={cart_products}
                    manage_modal={() =>
                        set_is_open((prev_state) => !prev_state)
                    }
                />
                <Cart
                    is_open={is_open}
                    cart_products={cart_products}
                    change_purchase_amount={change_purchase_amount}
                    remove_from_cart={remove_from_cart}
                />

                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route
                        path="/shop"
                        element={
                            <Shop
                                add_to_cart={add_product_cart}
                                products={products}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
