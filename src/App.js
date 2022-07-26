import "./styles/Styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import { useState } from "react";

const App = () => {
    const [cart_products, set_cart_products] = useState([]);

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

    const add_product_cart = (e) => {
        // ? is it wrong to use query selector here ?
        const prod_name = e.target
            .closest(".shop_item")
            .querySelector(".item_name").textContent;

        const selected_product = products.find(
            ({ name }) => name === prod_name
        );

        const prod_in_array = cart_products.some(
            ({ name }) => name === prod_name
        );

        if (!prod_in_array)
            set_cart_products((prev_prod) => [...prev_prod, selected_product]);
    };

    return (
        <>
            <BrowserRouter>
                <Navbar cart_products={cart_products} />

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
