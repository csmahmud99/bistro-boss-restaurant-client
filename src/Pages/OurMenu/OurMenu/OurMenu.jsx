import { Helmet } from 'react-helmet-async';
import PageCover from '../../Shared/PageCover/PageCover';
import menuCoverBg from "../../../assets/menu/banner3.jpg";
import MenuCategoryCover from '../MenuCategoryCover/MenuCategoryCover';
import dessertsCover from "../../../assets/menu/dessert-bg.jpeg";
import pizzasCover from "../../../assets/menu/pizza-bg.jpg";
import saladsCover from "../../../assets/menu/salad-bg.jpg";
import soupsCover from "../../../assets/menu/soup-bg.jpg";
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const OurMenu = () => {
    const [menu] = useMenu();

    const offer = menu.filter(item => item.category == "offered");

    const desserts = menu.filter(item => item.category == "dessert");
    const pizzas = menu.filter(item => item.category == "pizza");
    const salads = menu.filter(item => item.category == "salad");
    const soups = menu.filter(item => item.category == "soup");

    return (
        <div>
            <Helmet>
                <title>Our Menu | Bistro Boss restaurant</title>
            </Helmet>

            {/* Page Main Cover at the Top */}
            <PageCover
                image={menuCoverBg}
                coverTitle="Our Menu"
                coverSubTitle="Would you like to try a dish?"
            />


            {/* Today's Offer Section Items */}
            <section className="max-w-5xl mx-auto my-20">
                <div>
                    <SectionTitle
                        subHeading="Don't Miss"
                        heading="Today's Offer"
                    />

                    <MenuCategory items={offer} />

                    <div className="text-center mt-10">
                        <button className="btn btn-outline text-black border-0 border-b-4">Order Your Favorite Food</button>
                    </div>
                </div>
            </section>


            {/* Desserts Items Section */}
            <section>
                <MenuCategoryCover
                    image={dessertsCover}
                    coverTitle="Desserts"
                    coverSubTitle="Would you like to try our Desserts?"
                />

                <div className="max-w-5xl mx-auto my-20">
                    <MenuCategory items={desserts} />

                    <div className="text-center mt-10">
                        <button className="btn btn-outline text-black border-0 border-b-4">Order Your Favorite Food</button>
                    </div>
                </div>
            </section>


            {/* Pizzas Items Section */}
            <section>
                <MenuCategoryCover
                    image={pizzasCover}
                    coverTitle="Pizzas"
                    coverSubTitle="Would you like to try our Pizzas?"
                />

                <div className="max-w-5xl mx-auto my-20">
                    <MenuCategory items={pizzas} />

                    <div className="text-center mt-10">
                        <button className="btn btn-outline text-black border-0 border-b-4">Order Your Favorite Food</button>
                    </div>
                </div>
            </section>


            {/* Salads Items Section */}
            <section>
                <MenuCategoryCover
                    image={saladsCover}
                    coverTitle="Salads"
                    coverSubTitle="Would you like to try our Salads?"
                />

                <div className="max-w-5xl mx-auto my-20">
                    <MenuCategory items={salads} />

                    <div className="text-center mt-10">
                        <button className="btn btn-outline text-black border-0 border-b-4">Order Your Favorite Food</button>
                    </div>
                </div>
            </section>


            {/* Soups Items Section */}
            <section>
                <MenuCategoryCover
                    image={soupsCover}
                    coverTitle="Soups"
                    coverSubTitle="Would you like to try our Soups?"
                />

                <div className="max-w-5xl mx-auto my-20">
                    <MenuCategory items={soups} />

                    <div className="text-center mt-10">
                        <button className="btn btn-outline text-black border-0 border-b-4">Order Your Favorite Food</button>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default OurMenu;