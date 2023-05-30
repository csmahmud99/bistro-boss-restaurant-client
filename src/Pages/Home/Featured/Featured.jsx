import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
    return (
        <div className="featured-item bg-fixed bg-slate-600 bg-opacity-40">
            <div className="bg-slate-800 bg-opacity-60">
                <section className="max-w-5xl mx-auto my-20 text-white pt-14 pb-20">
                    <SectionTitle
                        subHeading="Featured Item"
                        heading="From Our Menu"
                    />
                    <div className="md:flex justify-between items-center space-x-12">
                        <div>
                            <img src={featuredImage} alt="featured-item-image" />
                        </div>
                        <div className="space-y-4">
                            <p>March 20, 2023</p>
                            <p className="uppercase">Where Can I Get Some?</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                            </p>
                            <button className="btn btn-outline text-white border-0 border-b-4">Read More</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Featured;