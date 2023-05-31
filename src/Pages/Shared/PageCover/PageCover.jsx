import { Parallax } from 'react-parallax';

const PageCover = ({ image, coverTitle, coverSubTitle }) => {
    return (
        <Parallax
            blur={{ min: -70, max: 70 }}
            bgImage={image}
            bgImageAlt="our menu bg image"
            strength={-200}
        >
            <div>
                <div className="hero h-[500px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md bg-slate-800 bg-opacity-40 px-20 py-10">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{coverTitle}</h1>
                            <p className="mb-5 text-xl">
                                {coverSubTitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default PageCover;