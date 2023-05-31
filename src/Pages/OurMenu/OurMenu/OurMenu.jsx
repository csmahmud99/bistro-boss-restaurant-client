import { Helmet } from 'react-helmet-async';
import PageCover from '../../Shared/PageCover/PageCover';
import menuCoverBg from "../../../assets/menu/banner3.jpg";
import PopularMenu from '../../Home/PopularMenu/PopularMenu';

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Our Menu | Bistro Boss restaurant</title>
            </Helmet>

            <PageCover
                image={menuCoverBg}
                coverTitle="Our Menu"
                coverSubTitle="Would you like to try a dish?"
            />

            <div className="max-w-5xl mx-auto my-20">
                <PopularMenu />
            </div>
        </div>
    );
};

export default OurMenu;