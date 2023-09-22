import { useNavigate } from "react-router-dom";
import usePlans from "../../../Hooks/usePlans";
import SubscriptionData from "./SubscriptionData";

const Subscriptions = () => {
    const [plansData, refetch] = usePlans()
    const navigate = useNavigate()

    const handleMonthly = (id, cost) => {
        navigate(`/payment/${id}`, {
            state: {
                cost: cost
            }
        }) 
    }
    const handleYearly = (id, cost) => {
        navigate(`/payment/${id}`, {
            state: {
                cost: cost
            }
        })
        console.log(id, cost);
    }

    return (
        <div className="grid grid-cols-3 gap-4 mx-8">
            {
                plansData.map(plan => <SubscriptionData
                    key={plan._id}
                    plan={plan}
                    handleMonthly={handleMonthly}
                    handleYearly={handleYearly}
                ></SubscriptionData>)
            }
        </div>
    );
};

export default Subscriptions;