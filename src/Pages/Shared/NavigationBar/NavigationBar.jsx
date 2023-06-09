import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => console.log("User is successfully logged out"))
            .catch(error => console.log(error.message));
    };

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/our-menu">Our Menu</Link></li>
        <li><Link to="/order/salads">Order Food</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        <li>
            <Link to="/dashboard/my-cart">
                <button className="btn">
                    <FaShoppingCart className="mr-2" />My Cart
                    <div className="ml-2 badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>
        {
            user
                ? <>
                    <div className="flex items-center">
                        <span className="bg-white text-black rounded-md px-4 py-2">
                            {user?.displayName}
                        </span>
                        <button onClick={handleLogOut} className="btn btn-active btn-ghost">Log Out</button>
                    </div>
                </>
                : <>
                    <li><Link to="/login">Log In</Link></li>
                </>
        }
    </>

    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Bistro Boss</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;