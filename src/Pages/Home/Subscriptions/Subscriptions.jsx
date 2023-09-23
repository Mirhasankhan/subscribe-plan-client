import { useNavigate } from "react-router-dom";
import usePlans from "../../../Hooks/usePlans";
import SubscriptionData from "./SubscriptionData";
import useAuth from "../../../Hooks/useAuth";
import Container from "../../../Components/Shared/Container";

const Subscriptions = () => {
    const { user, loading } = useAuth()
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
            <div className="text-center my-6 border-b-2 w-1/2 mx-auto pb-3">
                <h1 className='font-medium text-2xl md:text-4xl text-purple-600 '>Subscribe Here</h1>
                <p>Enjoy Uninterruped Service</p>
            </div>
            {!loading && <div className="grid grid-cols-2 gap-12 pt-6">
                {
                    plansData.map(plan => <SubscriptionData
                        key={plan._id}
                        plan={plan}
                        handleCost={handleCost}
                    ></SubscriptionData>)
                }
            </div>}
        </Container>
    );
};

export default Subscriptions;