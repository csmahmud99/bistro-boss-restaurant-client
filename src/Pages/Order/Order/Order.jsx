import { Helmet } from "react-helmet-async";
import PageCover from "../../Shared/PageCover/PageCover";
import orderCoverBg from "../../../assets/shop/banner2.jpg";

const Order = () => {
    return (
        <div>
            <Helmet>
                <title>Order Food | Bistro Boss Restaurant</title>
            </Helmet>

            {/* Page Main Cover at the Top */}
            <PageCover
                image={orderCoverBg}
                coverTitle="Order Food"
                coverSubTitle="Would you like to try a dish?"
            />
        </div>
    );
};

export default Order;