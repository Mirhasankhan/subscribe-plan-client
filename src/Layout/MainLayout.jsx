import { Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Header';

const MainLayout = () => {
    return (
        <div>
           <Header/>
            <Outlet/>
            fot
        </div>
    );
};

export default MainLayout;