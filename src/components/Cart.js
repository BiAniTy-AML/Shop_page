import plus_circle from "../images/plus_circle.svg";
import minus_circle from "../images/minus_circle.svg";

const Cart = (props) => {
    const { is_open, cart_products, change_purchase_amount } = props;

    return (
        <>
            {/* <div className="overlay"></div> */}
            <div className={`cart_modal ${is_open ? "active" : ""}`}>
                <div className="cart_products">
                    {cart_products.map((prod, i) => (
                        <div className="cart_item" key={i}>
                            <img
                                src={require(`../images/gemstones/${prod.img_name}`)}
                                alt=""
                                className="item_pic"
                            />
                            <div className="item_name">{prod.name}</div>
                            <div className="item_price">
                                {prod.price} / unit
                            </div>

                            <div className="item_quantity">
                                <div>Quantity: </div>

                                <div className="change_amount">
                                    <img
                                        src={minus_circle}
                                        className="buy_less"
                                        onClick={() =>
                                            change_purchase_amount("less", prod)
                                        }
                                    />
                                    <div className="selected_number">
                                        {prod.quantity}
                                    </div>
                                    <div className="number_items">
                                        <img
                                            src={plus_circle}
                                            className="buy_more"
                                            onClick={() =>
                                                change_purchase_amount(
                                                    "more",
                                                    prod
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Cart;
