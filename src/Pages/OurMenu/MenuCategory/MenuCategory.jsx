import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title }) => {
    return (
        <div>
            <div className="md:grid md:grid-cols-2 gap-6">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
            <div className="text-center mt-10">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline text-black border-0 border-b-4">Order Your Favorite Food</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;