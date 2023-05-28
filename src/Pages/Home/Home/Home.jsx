import FoodsCategorySlider from "../FoodsCategorySlider/FoodsCategorySlider";
import HomeBgImageSection from "../HomeBgImageSection/HomeBgImageSection";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider />
            <div className="max-w-5xl mx-auto">
                <FoodsCategorySlider />
            </div>
            <div className="max-w-5xl mx-auto my-20">
                <HomeBgImageSection />
            </div>
        </div>
    );
};

export default Home;