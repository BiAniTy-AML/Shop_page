import { Link } from "react-router-dom";
import shop_icon from "../images/shopping_bag.svg";

const Navbar = () => {
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
                <li className="shop_cart">
                    <img className="shop_icon" src={shop_icon} alt="" />
                    <div className="cart_quantity"></div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
