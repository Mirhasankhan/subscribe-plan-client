import { Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Header';
import useAuth from '../Hooks/useAuth';
import Loader from '../Components/Shared/Loader';

const MainLayout = () => {
    const {loading} = useAuth()
    return (loading ? <Loader></Loader> :
    <div>
        <Header></Header>
        <div className='min-h-[calc(100vh-100px)]'>
            <Outlet />                
        </div>
footer
    </div>
);
};

export default MainLayout;