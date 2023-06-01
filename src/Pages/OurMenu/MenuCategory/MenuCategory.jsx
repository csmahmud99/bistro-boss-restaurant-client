import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
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
        </div>
    );
};

export default MenuCategory;