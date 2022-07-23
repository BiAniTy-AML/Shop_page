import ShopItem from "./ShopItem";

const Shop = () => {
    const Item = (name, img_name, price) => {
        return {
            name,
            img_name,
            price,
        };
    };

    const products = [
        Item("Alexandrite", "Alexandrite.png", "10000 & / unit"),
        Item("Luz Opal", "Luz Opal.jpg", "2000 & / unit"),
        Item("Rose Quartz Geode", "Rose Quartz Geode.jpg", "1000 & / unit"),
        Item("Sapphire", "Sapphire.png", "9000 & / unit"),
        Item("Sunset Fire-Opal", "Sunset Fire Opal.jpg", "5000 & / unit"),
        Item("Tanzanite", "Tanzanite.jpg", "4000 & / unit"),
        Item("Red Beryl", "Red Beryl.png", "6000 & / unit"),
        Item("Pink Diamond", "Pink Diamond.png", "7000 & / unit"),
        Item("Fluorite", "Fluorite.png", "3000 & / unit"),
        Item("Amethyst", "Amethyst.png", "8000 & / unit"),
        Item("Aquamarine", "Aquamarine.png", "11000 & / unit"),
        Item("Pink Sapphire", "Pink Sapphire.png", "12000 & / unit"),
    ];

    const all_items = [];

    for (let i = 0; i < products.length; i++) {
        all_items.push(
            <div data-testid="product" className="shop_item" key={i}>
                <ShopItem
                    name={products[i].name}
                    img_name={products[i].img_name}
                    price={products[i].price}
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
