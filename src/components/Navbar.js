import { Link } from "react-router-dom";

// * https://feathericons.com/
import shop_icon from "../images/shopping_bag.svg";

const Navbar = (props) => {
    // The products selected to be bought
    // and function to handle opening and closing the cart modal
    const { cart_products, manage_modal } = props;

    return (
        <nav>
            <h1 className="logo">Logo</h1>

            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/shop"}>Shop</Link>
                </li>
                <li className="shop_cart" onClick={manage_modal}>
                    <img className="shop_icon" src={shop_icon} alt="" />
                    <div className="cart_quantity">{cart_products.length}</div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
