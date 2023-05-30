import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

// React Rating
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

// React Icons
import { FaQuoteLeft } from 'react-icons/fa';



const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div>
            <section>
                <SectionTitle
                    subHeading="What Our Clients Say"
                    heading="Testimonials"
                />
            </section>

            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper" centeredSlides={true}>
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                            review={review}>
                            <div className="flex flex-col items-center text-center space-y-4 px-20">
                                <FaQuoteLeft className="text-4xl" />
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p>{review.details}</p>
                                <p className="text-[#CD9003] text-xl font-bold mt-4">{review.name}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;