import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";

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
            <section>
                <SectionTitle
                    subHeading="My Cart"
                    heading="Wanna Add More?"
                />

                <div className="uppercase">
                    <h3 className="text-3xl">Total Items: {cart.length}</h3>
                    <h3 className="text-3xl">Total Price: ${total}</h3>
                    <button className="btn btn-warning bg-[#D1A054]">Pay</button>
                </div>
            </section>
        </div>
    );
};

export default MyCart;