import { useLocation } from "react-router-dom";

const Payment = () => {
    const location = useLocation()
    const cost = location?.state?.cost
    console.log(cost);
    return (
        <div>
            
        </div>
    );
};

export default Payment;