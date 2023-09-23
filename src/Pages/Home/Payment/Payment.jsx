import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import CheckOutFrom from '../../../Components/CheckOutForm/CheckOutForm';

const striprePromise = loadStripe(import.meta.env.VITE_Stripe_Gateway_PK)

const Payment = () => {
    const location = useLocation()
    const data = location?.state?.data
    const cost = location?.state?.cost

    return (
        <div className='mx-auto w-1/2 border-2 rounded-lg p-4 mt-6'>
            <div className='w-1/2 mx-auto my-8 border-b-2 pb-3 text-center '>
                <h1 className='font-medium text-2xl md:text-3xl text-purple-600 '>Proceed Your Payment</h1>
            </div>
            <Elements stripe={striprePromise}>
                <CheckOutFrom data={data} cost={cost}></CheckOutFrom>
            </Elements>
        </div>
    );
};

export default Payment;