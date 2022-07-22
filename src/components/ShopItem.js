const ShopItem = (props) => {
    const { name, img_name, description } = props;

    return (
        <>
            <img
                src={require(`../images/gemstones/${img_name}`)}
                alt=""
                className="item_pic"
            />
            <div className="item_name">{name}</div>
            <button className="add_to_cart">Add to cart</button>
        </>
    );
};

export default ShopItem;
