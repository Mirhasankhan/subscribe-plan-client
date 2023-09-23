import { Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Header';
import useAuth from '../Hooks/useAuth';
import Loader from '../Components/Shared/Loader';
import Footer from '../Components/Shared/Footer';
import usePlans from '../Hooks/usePlans';

const MainLayout = () => {
    const [plansData,] = usePlans()
    const { loading } = useAuth()
    return (loading && plansData.length <1 ? <Loader></Loader> :
        <div>
            <Header></Header>
            <div className='min-h-[calc(100vh-100px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;