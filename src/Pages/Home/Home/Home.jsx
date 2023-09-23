import { Helmet } from 'react-helmet-async';
import Subscriptions from '../Subscriptions/Subscriptions';

const Home = () => {
    return (
        <div>
            <Helmet title='Home | Subscrible-Plan '></Helmet>
            <Subscriptions />
        </div>
    );
};

export default Home;