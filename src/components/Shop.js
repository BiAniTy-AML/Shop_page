import ShopItem from "./ShopItem";

const Shop = () => {
    const Item = (name, img_name, description) => {
        return {
            name,
            img_name,
            description,
        };
    };

    const products = [
        Item("Alexandrite", "Alexandrite.png", "Very cool"),
        Item("Luz Opal", "Luz Opal.jpg", "Very cool too"),
        Item("Rose Quartz Geode", "Rose Quartz Geode.jpg", "Very cool as well"),
        Item("Sapphire", "Sapphire.png", "Very cool too"),
        Item("Sunset Fire-Opal", "Sunset Fire Opal.jpg", "Very cool"),
        Item("Tanzanite", "Tanzanite.jpg", "Very cool"),
        Item("Red Beryl", "Red Beryl.png", "Very cool"),
        Item("Pink Diamond", "Pink Diamond.png", "Very cool"),
        Item("Fluorite", "Fluorite.png", "Very cool"),
        Item("Amethyst", "Amethyst.png", "Very cool"),
        Item("Aquamarine", "Aquamarine.png", "Very cool"),
        Item("Pink Sapphire", "Pink Sapphire.png", "Very cool"),
    ];

    const all_items = [];

    for (let i = 0; i < products.length; i++) {
        all_items.push(
            <div data-testid="product" className="shop_item" key={i}>
                <ShopItem
                    name={products[i].name}
                    img_name={products[i].img_name}
                    description={products[i].description}
                />
            </div>
        );
    }

    return (
        <section
            data-testid="main_shop_container"
            className="items_container main_content"
        >
            {all_items}
        </section>
    );
};

export default Shop;
