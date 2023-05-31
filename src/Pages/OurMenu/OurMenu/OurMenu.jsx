import { Helmet } from 'react-helmet-async';
import PageCover from '../../Shared/PageCover/PageCover';
import menuCoverBg from "../../../assets/menu/banner3.jpg";
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import MenuCategoryCover from '../MenuCategoryCover/MenuCategoryCover';
import dessertsCover from "../../../assets/menu/dessert-bg.jpeg";
import pizzasCover from "../../../assets/menu/pizza-bg.jpg";
import saladsCover from "../../../assets/menu/salad-bg.jpg";
import soupsCover from "../../../assets/menu/soup-bg.jpg";

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Our Menu | Bistro Boss restaurant</title>
            </Helmet>

            <PageCover
                image={menuCoverBg}
                coverTitle="Our Menu"
                coverSubTitle="Would you like to try a dish?"
            />

            <MenuCategoryCover
                image={dessertsCover}
                coverTitle="Desserts"
                coverSubTitle="Would you like to try our Desserts?"
            />
        </div>
    );
};

export default OurMenu;