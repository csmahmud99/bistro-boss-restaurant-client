import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category == "popular");
                setMenu(popularItems);
            });
    }, [])

    return (
        <div>
            <section>
                <SectionTitle
                    subHeading="Popular Items"
                    heading="From Our Menu"
                />
                <div className="md:grid md:grid-cols-2 gap-6">
                    {
                        menu.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        />)
                    }
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;