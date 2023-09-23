import { useNavigate } from "react-router-dom";
import usePlans from "../../../Hooks/usePlans";
import SubscriptionData from "./SubscriptionData";
import useAuth from "../../../Hooks/useAuth";

const Subscriptions = () => {
    const { user } = useAuth()
    const [plansData, refetch] = usePlans()
    const navigate = useNavigate()

    const handleCost = (id, cost) => {
        if (user?.email) {
            navigate(`/details/${id}`, {
                state: {
                    cost: cost
                }
            })
        }
        else {
            navigate('/login')
        }
    }

    return (
        <div className="grid grid-cols-2 gap-12 mx-16">
            {
                plansData.map(plan => <SubscriptionData
                    key={plan._id}
                    plan={plan}
                    handleCost={handleCost}
                ></SubscriptionData>)
            }
        </div>
    );
};

export default Subscriptions;