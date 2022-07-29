// * https://feathericons.com/
import plus_circle from "../images/plus_circle.svg";
import minus_circle from "../images/minus_circle.svg";

const Cart = (props) => {
    // Whether the cart is visible or not, the products in the cart and related functions
    const { is_open, cart_products, remove_from_cart, change_purchase_amount } =
        props;

    // What will be charged at the purchase
    let total_price = 0;

    return (
        <>
            <div className={`overlay ${is_open ? "active" : ""}`}></div>
            <div
                className={`cart_modal ${is_open ? "active" : ""}`}
                data-testid="cart_modal"
            >
                {/* Renders differently depending on whether the cart is empty or not */}
                {cart_products.length === 0 ? (
                    <div className="empty_cart">
                        It seems like you haven't selected anything yet. Choose
                        a product you'd like to buy!
                    </div>
                ) : (
                    <div className="cart_products">
                        {cart_products.map((prod, i) => {
                            total_price +=
                                Number(prod.price.slice(0, -1)) * prod.quantity;

                            return (
                                <div className="cart_item" key={i}>
                                    <button
                                        className="remove_product"
                                        onClick={() =>
                                            remove_from_cart(prod.name)
                                        }
                                    >
                                        &times;
                                    </button>
                                    <div className="item_name">{prod.name}</div>

                                    <img
                                        src={require(`../images/gemstones/${prod.img_name}`)}
                                        alt="gemstone"
                                        className="item_pic"
                                    />

                                    <div className="price_info">
                                        <div className="item_quantity">
                                            <div>Quantity: </div>
                                            <div className="change_amount">
                                                <img
                                                    src={minus_circle}
                                                    alt="minus circle"
                                                    className="buy_less"
                                                    onClick={() =>
                                                        change_purchase_amount(
                                                            "less",
                                                            prod
                                                        )
                                                    }
                                                />
                                                <div
                                                    className="selected_number"
                                                    data-testid="prod_amount"
                                                >
                                                    {prod.quantity}
                                                </div>
                                                <div className="number_items">
                                                    <img
                                                        src={plus_circle}
                                                        className="buy_more"
                                                        alt="plus circle"
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
                                        <div className="item_price">
                                            {prod.price} / unit
                                        </div>
                                        <div className="item_accumulated_price">
                                            Price:{" "}
                                            {Number(prod.price.slice(0, -1)) *
                                                prod.quantity}{" "}
                                            &
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="total_price">
                            Total price: {total_price}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;
