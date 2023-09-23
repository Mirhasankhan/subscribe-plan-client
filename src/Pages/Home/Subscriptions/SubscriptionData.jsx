import useMySubscriptions from "../../../Hooks/useMySubscription";

const SubscriptionData = ({ plan, handleCost }) => {
    const { _id, planName, monthly, yearly, image } = plan;
    const [mySubsriptions, refetch] = useMySubscriptions()

    const isProductInCart = mySubsriptions.some(item => item.classId === _id);

    const divStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <div className="border p-4 h-52 rounded-lg flex flex-col hover:scale-110 transition-transform duration-500" style={divStyle}>
            <div>
                <h1 className="text-center text-5xl font-semibold text-white">{planName}</h1>
            </div>
            <div className="flex justify-between mt-auto">
                {isProductInCart ? <p className="bg-orange-500 text-white font-semibold p-1 rounded-md">Already Subscribed</p> : <div onClick={() => handleCost(_id, monthly)} className="bg-orange-500 text-white font-semibold cursor-pointer p-2 rounded-md">
                    <h1>Subscribe</h1>
                    <p>${monthly}/Monthly</p>
                </div>}
                {isProductInCart ? <p className="bg-orange-500 text-white font-semibold p-1 rounded-md">Already Subscirbed</p> : <div onClick={() => handleCost(_id, yearly)} className="bg-orange-500 text-white font-semibold cursor-pointer p-2 rounded-md">
                    <h1>Subscribe</h1>
                    <p>${yearly}/Yearly</p>
                </div>}
            </div>
        </div>
    );
};

export default SubscriptionData;