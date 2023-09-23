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
        <div className="card card-side bg-base-100 shadow-xl w-2/3 mx-auto mt-6 ">
            <figure><img className='h-full w-[460px]' src={data.image} alt="Movie" /></figure>
            <div className="card-body flex-col">
                <h1 className='underline text-center text-3xl font-bold mb-4'>Subscription Details</h1>
                <h2 className="card-title text-2xl">{data.planName}</h2>
                <h1 className='font-semibold'>Subscription Cost: ${cost}</h1>
                <h1 className='font-semibold'>Seller Email: {data.email}</h1>
                <button onClick={handlePayment} className='sign-up mt-auto'>Go To Payment</button>
            </div>
        </div>
    );
};

export default Details;