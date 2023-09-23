import { useNavigate } from "react-router-dom";
import usePlans from "../../../Hooks/usePlans";
import SubscriptionData from "./SubscriptionData";
import useAuth from "../../../Hooks/useAuth";
import Container from "../../../Components/Shared/Container";

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
        <Container>
            <div className="grid grid-cols-2 gap-12 pt-6">
            {
                plansData.map(plan => <SubscriptionData
                    key={plan._id}
                    plan={plan}
                    handleCost={handleCost}
                ></SubscriptionData>)
            }
        </div>
        </Container>
    );
};

export default Subscriptions;