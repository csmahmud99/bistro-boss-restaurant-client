import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from 'react-icons/fa';

const MyCart = () => {
    const [cart] = useCart();
    console.log(cart);
    /* 
        var arr = [{x:1}, {x:2}, {x:4}];
        var result = arr.reduce(function (acc, obj) { return acc + obj.x; }, 0);
        console.log(result);  // 7
    */

    // Ref: https://stackoverflow.com/questions/5732043/how-to-call-reduce-on-an-array-of-objects-to-sum-their-properties
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    return (
        <div>
            <Helmet>
                <title>My Cart | Bistro Boss Restaurant</title>
            </Helmet>
            <section className="bg-white p-10 min-h-full my-10">
                <SectionTitle
                    subHeading="My Cart"
                    heading="Wanna Add More?"
                />

                <div className="uppercase font-semibold flex justify-between items-center mb-4">
                    <h3 className="text-3xl">Total Items: {cart.length}</h3>
                    <h3 className="text-3xl">Total Price: ${total}</h3>
                    <button className="btn btn-warning bg-[#D1A054]">Pay</button>
                </div>

                <div className="flex justify-center">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Food Image</th>
                                    <th>Food Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    cart.map((item, index) => <tr
                                        key={item._id}
                                    >
                                        <td>
                                            {index + 1}
                                        </td>

                                        <td>
                                            <div className="space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="ordered-food-item-image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <div className="font-bold">{item.name}</div>
                                        </td>

                                        <td className="text-right">${item.price}</td>

                                        <td>
                                            <button className="btn btn-warning bg-[#B91C1C] text-white btn-sm"><FaTrashAlt /></button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyCart;