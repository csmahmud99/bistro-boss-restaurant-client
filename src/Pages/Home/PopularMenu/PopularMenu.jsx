// import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category == "popular");
    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch("menu.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category == "popular");
    //             setMenu(popularItems);
    //         });
    // }, [])

    return (
        <div>
            <section>
                <SectionTitle
                    subHeading="Popular Items"
                    heading="From Our Menu"
                />
                <div className="md:grid md:grid-cols-2 gap-6">
                    {
                        popular.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        />)
                    }
                </div>
                <div className="text-center mt-10">
                    <button className="btn btn-outline text-black border-0 border-b-4">View Full Menu</button>
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;