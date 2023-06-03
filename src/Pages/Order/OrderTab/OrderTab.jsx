import FoodCard from "../../Shared/FoodCard/FoodCard";

const OrderTab = ({items}) => {
    return (
        <div>
            <div className="grid mx-16 md:mx-2 md:grid-cols-3 gap-20">
                {
                    items.map(item => <FoodCard
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
        </div>
    );
};

export default OrderTab;