import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const Details = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const cost = location?.state?.cost
    const data = useLoaderData()
   
    const handlePayment = () => {
        navigate(`/payments`, {
            state: {
                cost: cost,
                data: data
            }
        })
    }
    return (
        <div className='border-2 rounded-lg w-1/3 mx-auto p-4 mt-6'>
           <h1 className='text-xl font-semibold'>Subscription Name: {data.planName}</h1>
           <h1 className='text-xl font-semibold'>Subscription Cost: ${cost}</h1>
           <h1 className='text-xl font-semibold'>Seller Email: {data.email}</h1>
           <button onClick={handlePayment} className='btn btn-sm mt-4'>Pay</button>
        </div>
    );
};

export default Details;