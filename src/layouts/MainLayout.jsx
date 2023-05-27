import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';

const MainLayout = () => {
    return (
        <div>
            <NavigationBar />
            <div className="max-w-7xl mx-auto">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;