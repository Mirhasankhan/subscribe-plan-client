import toast from "react-hot-toast";
import { addNewSubscription } from "../../API/subscription";
import useAuth from "../../Hooks/useAuth";
import PlanForm from "./PlanForm";
import { Helmet } from "react-helmet-async";

const AddPlan = () => {
    const {user} = useAuth()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const planName = form.plan.value;
        const image = form.image.value;
        const monthly = form.monthly.value;
        const yearly = form.yearly.value;
        const newSubsciption = {planName,image,monthly,yearly, email: user?.email}
        addNewSubscription(newSubsciption).then(() =>{          
            toast.success('Plan Uploaded')
            form.reset()
        })
        .catch(err =>{
            console.log(err);
        })
    }
    return (
        <div>
            <Helmet title='Add Plan | Subscrible-Plan '></Helmet>
            <PlanForm
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default AddPlan;