import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaWallet, FaShoppingCart, FaCommentDots, FaCalendarCheck, FaClipboardList, FaShoppingBag } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile bg-[#F6F6F6]">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className="max-w-3xl mx-auto">
                        {/* Page content here */}
                        <Outlet />
                    </div>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#D1A054]">
                        {/* Sidebar content here */}
                        <li><NavLink to="/dashboard/home"><FaHome /> User Home</NavLink></li>

                        <li><NavLink to="/dashboard/reservation"><FaCalendarAlt /> Reservation</NavLink></li>

                        <li><NavLink to="/dashboard/payment-history"><FaWallet /> Payment History</NavLink></li>

                        <li><NavLink to="/dashboard/my-cart"><FaShoppingCart /> My Cart</NavLink></li>

                        <li><NavLink to="/dashboard/add-review"><FaCommentDots /> Add Review</NavLink></li>

                        <li><NavLink to="/dashboard/my-booking"><FaCalendarCheck /> My Booking</NavLink></li>

                        <div className="divider"></div>

                        <li><NavLink to="/"><FaHome />Home</NavLink></li>
                        <li><NavLink to="/our-menu"><FaClipboardList /> Our Menu</NavLink></li>
                        <li><NavLink to="/order/salads"><FaShoppingBag /> Order Food</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;