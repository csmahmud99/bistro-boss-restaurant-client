import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;