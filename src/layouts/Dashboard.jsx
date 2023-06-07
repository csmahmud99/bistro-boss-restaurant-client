import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaWallet, FaShoppingCart, FaCommentDots, FaCalendarCheck, FaClipboardList, FaShoppingBag, FaUtensils, FaList, FaBook, FaUsers } from 'react-icons/fa';
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();

    // TODO: Load data from the server to have dynamic isAdmin based on Data
    const isAdmin = true;

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

                        {
                            isAdmin
                                ? <>
                                    <li><NavLink to="/dashboard/home"><FaHome /> Admin Home</NavLink></li>

                                    <li><NavLink to="/dashboard/reservation"><FaUtensils /> Add Items</NavLink></li>

                                    <li><NavLink to="/dashboard/payment-history"><FaList /> Manage Items</NavLink></li>

                                    <li><NavLink to="/dashboard/payment-history"><FaBook /> Manage Bookings</NavLink></li>

                                    <li><NavLink to="/dashboard/all-users"><FaUsers /> All Users</NavLink></li>
                                </>
                                : <>
                                    <li><NavLink to="/dashboard/home"><FaHome /> User Home</NavLink></li>

                                    <li><NavLink to="/dashboard/reservation"><FaCalendarAlt /> Reservation</NavLink></li>

                                    <li><NavLink to="/dashboard/payment-history"><FaWallet /> Payment History</NavLink></li>

                                    <li><NavLink to="/dashboard/my-cart"><FaShoppingCart /> My Cart <div className="ml-2 badge badge-secondary">+{cart?.length || 0}</div></NavLink></li>

                                    <li><NavLink to="/dashboard/add-review"><FaCommentDots /> Add Review</NavLink></li>

                                    <li><NavLink to="/dashboard/my-booking"><FaCalendarCheck /> My Booking</NavLink></li>
                                </>
                        }



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