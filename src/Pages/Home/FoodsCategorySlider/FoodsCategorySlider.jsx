// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// Importing slider images
import sliderImage01 from "../../../assets/home/food-category-slider/slide1.jpg";
import sliderImage02 from "../../../assets/home/food-category-slider/slide2.jpg";
import sliderImage03 from "../../../assets/home/food-category-slider/slide3.jpg";
import sliderImage04 from "../../../assets/home/food-category-slider/slide4.jpg";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const FoodsCategorySlider = () => {
    return (
        <div>
            <section>
                <SectionTitle
                    subHeading={"From 11:00am to 10:00pm"}
                    heading={"Order Online"} />

                <div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={40}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={sliderImage01} alt="food-category-image" />
                            <p className="text-3xl uppercase text-center mr-8 -mt-20 text-white">
                                Salads
                            </p>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={sliderImage02} alt="food-category-image" />
                            <p className="text-3xl uppercase text-center mr-8 -mt-20 text-white">
                                Pizzas
                            </p>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={sliderImage03} alt="food-category-image" />
                            <p className="text-3xl uppercase text-center mr-8 -mt-20 text-white">
                                Soups
                            </p>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={sliderImage04} alt="food-category-image" />
                            <p className="text-3xl uppercase text-center mr-8 -mt-20 text-white">
                                Deserts
                            </p>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={sliderImage01} alt="food-category-image" />
                            <p className="text-3xl uppercase text-center mr-8 -mt-20 text-white">
                                Salads
                            </p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </div>
    );
};

export default FoodsCategorySlider;