import { Helmet } from "react-helmet-async";
import Featured from "../Featured/Featured";
import FoodsCategorySlider from "../FoodsCategorySlider/FoodsCategorySlider";
import HomeBgImageSection from "../HomeBgImageSection/HomeBgImageSection";
import PopularMenu from "../PopularMenu/PopularMenu";
import Slider from "../Slider/Slider";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Bistro Boss restaurant</title>
            </Helmet>
            <Slider />
            <div className="max-w-5xl mx-auto">
                <FoodsCategorySlider />
            </div>
            <div className="max-w-5xl mx-auto my-20">
                <HomeBgImageSection />
            </div>
            <div className="max-w-5xl mx-auto my-20">
                <PopularMenu />
            </div>
            <div>
                <Featured />
            </div>
            <div className="max-w-5xl mx-auto my-20">
                <Testimonials />
            </div>
        </div>
    );
};

export default Home;