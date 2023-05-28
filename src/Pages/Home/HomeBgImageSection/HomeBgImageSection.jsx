import backgroundImage from "../../../assets/home/chef-service.jpg";

const HomeBgImageSection = () => {
    return (
        <div>
            <div className="relative">
                <img src={backgroundImage} alt="chef-service" className="w-full" />
                <div className="w-2/3 text-center absolute top-1/4 right-1/4 left-40">
                    <div className="text-center text-black bg-white py-8 px-20">
                        <h3 className="text-4xl">Bistro Boss</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBgImageSection;