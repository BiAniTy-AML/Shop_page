import add_shop_icon from "../images/plus_circle.svg";

// Each item in display
const ShopItem = (props) => {
    // The info of the item and the funtion to handle being selected
    // TODO: just receive the whole item obj instead of each part individually
    const { price, name, img_name, add_to_cart } = props;

    return (
        <>
            <img
                src={require(`../images/gemstones/${img_name}`)}
                alt=""
                className="item_pic"
            />
            <div className="item_name">{name}</div>
            <div className="item_price">{price} / unit</div>
            <div className="add_to_cart" onClick={add_to_cart}>
                <img src={add_shop_icon} alt="" />
                <div>Add to cart</div>
            </div>
        </>
    );
};

export default ShopItem;
