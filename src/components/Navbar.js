import { Link } from "react-router-dom";

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
                <li>Cart</li>
            </ul>
        </nav>
    );
};

export default Navbar;
