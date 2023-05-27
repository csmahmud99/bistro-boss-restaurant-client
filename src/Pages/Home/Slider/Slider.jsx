import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import sliderImage01 from "../../../assets/home/slider/01.jpg";
import sliderImage02 from "../../../assets/home/slider/02.jpg";
import sliderImage03 from "../../../assets/home/slider/03.png";
import sliderImage04 from "../../../assets/home/slider/04.jpg";
import sliderImage05 from "../../../assets/home/slider/05.png";
import sliderImage06 from "../../../assets/home/slider/06.png";

const Slider = () => {
    return (
        <div>
            <Carousel interval="3000" autoPlay="true" infiniteLoop="true" stopOnHover="false">
                <div>
                    <img src={sliderImage01} />
                </div>
                <div>
                    <img src={sliderImage02} />
                </div>
                <div>
                    <img src={sliderImage03} />
                </div>
                <div>
                    <img src={sliderImage04} />
                </div>
                <div>
                    <img src={sliderImage05} />
                </div>
                <div>
                    <img src={sliderImage06} />
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;