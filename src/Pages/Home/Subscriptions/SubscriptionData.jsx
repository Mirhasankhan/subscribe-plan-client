
const SubscriptionData = ({ plan,handleCost}) => {
    const { _id,planName, monthly, yearly, image } = plan;

    const divStyle = {
        backgroundImage: `url(${image})`, // Set the background image URL
        backgroundSize: 'cover', // You can adjust these styles as needed
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
   
    return (
        <div className="border p-4 h-52 rounded-lg flex flex-col hover:scale-110 transition-transform duration-500" style={divStyle}>
            <div>
                <h1 className="text-center text-5xl font-semibold text-white">{planName}</h1>           
            </div>
            <div className="flex justify-between mt-auto">
                <div onClick={()=>handleCost(_id,monthly)} className="bg-yellow-400 font-semibold cursor-pointer p-2 rounded-md">
                    <h1>Subscribe</h1>
                    <p>${monthly}/Monthly</p>
                </div>
                <div onClick={()=>handleCost(_id,yearly)} className="bg-yellow-400 font-semibold cursor-pointer p-2 rounded-md">
                    <h1>Subscribe</h1>
                    <p>${yearly}/Yearly</p>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionData;