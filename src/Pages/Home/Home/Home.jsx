import FoodsCategorySlider from "../FoodsCategorySlider/FoodsCategorySlider";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider />
            <div className="max-w-5xl mx-auto">
                <FoodsCategorySlider />
            </div>
        </div>
    );
};

export default Home;