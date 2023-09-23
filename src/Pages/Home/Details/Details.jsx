import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const Details = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const cost = location?.state?.cost
    const data = useLoaderData()
    console.log(data);

    const handlePayment = () => {
        navigate(`/payments`, {
            state: {
                cost: cost,
                data: data
            }
        })
    }
    return (
        // <div className='border-2 rounded-lg w-1/3 mx-auto p-4 mt-6'>
        //    <h1 className='text-xl font-semibold'>Subscription Name: {data.planName}</h1>
        //    <h1 className='text-xl font-semibold'>Subscription Cost: ${cost}</h1>
        //    <h1 className='text-xl font-semibold'>Seller Email: {data.email}</h1>
        //    <button onClick={handlePayment} className='btn btn-sm mt-4'>Pay</button>
        // </div>
        <div className="card card-side bg-base-100 shadow-xl w-2/3 mx-auto mt-6 ">       
            <figure><img className='h-full w-[460px]' src={data.image} alt="Movie" /></figure>       
            <div className="card-body flex-col">
                <h1 className='underline text-center text-3xl font-bold mb-4'>Subscription Details</h1>
                <h2 className="card-title text-2xl">{data.planName}</h2>
                <h1 className='font-semibold'>Subscription Cost: ${cost}</h1>               
                <h1 className='font-semibold'>Seller Email: {data.email}</h1>
                <button onClick={handlePayment} className='btn btn-primary mt-auto'>Pay</button>
            </div>
        </div>
    );
};

export default Details;