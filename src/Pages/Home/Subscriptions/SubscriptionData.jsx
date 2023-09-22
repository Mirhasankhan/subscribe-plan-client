
const SubscriptionData = ({ plan,handleMonthly,handleYearly }) => {
    const { _id,planName, monthly, yearly, image } = plan;

    const divStyle = {
        backgroundImage: `url(${image})`, // Set the background image URL
        backgroundSize: 'cover', // You can adjust these styles as needed
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
   
    return (
        <div className="border p-4 h-48 flex flex-col" style={divStyle}>
            <div>
                <h1 className="text-center text-3xl font-semibold text-green-400">{planName}</h1>           
            </div>
            <div className="flex justify-between mt-auto">
                <div onClick={()=>handleMonthly(_id,monthly)} className="bg-yellow-400 font-semibold cursor-pointer p-2 text-white rounded-md">
                    <h1>Montly Subscription</h1>
                    <p>${monthly}</p>
                </div>
                <div onClick={()=>handleMonthly(_id,yearly)} className="bg-yellow-400 font-semibold cursor-pointer p-2 text-white rounded-md">
                    <h1>Yearly Subscription</h1>
                    <p>${yearly}</p>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionData;