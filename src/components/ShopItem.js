import add_shop_icon from "../images/plus_circle.svg";

const ShopItem = (props) => {
    const { price, name, img_name, description } = props;

    return (
        <>
            <img
                src={require(`../images/gemstones/${img_name}`)}
                alt=""
                className="item_pic"
            />
            <div className="item_name">{name}</div>
            <div className="item_price">{price}</div>
            <div className="add_to_cart">
                <img src={add_shop_icon} alt="" />
                <div>Add to cart</div>
            </div>
        </>
    );
};

export default ShopItem;
