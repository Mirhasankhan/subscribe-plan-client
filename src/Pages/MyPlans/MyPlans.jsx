import { Helmet } from "react-helmet-async";
import { deletePlans } from "../../API/payment";
import Container from "../../Components/Shared/Container";
import EmptyData from "../../Components/Shared/EmptyData";
import useMyPlans from "../../Hooks/useMyPlans";
import PlansTable from "./PlansTable";
import toast from "react-hot-toast";

const MyPlans = () => {
    const [myPlansData, refetch] = useMyPlans()
    const handleDeletePlan = (id) => {
        deletePlans(id)
            .then(data => {
                refetch()
                toast.success('Plan Deleted')
            })
    }
    return (
        <Container>
            <Helmet title='My Plans | Subscrible-Plan '></Helmet>
            <h1 className="text-center text-3xl font-semibold my-6">Your Published Plans</h1>
            {
                myPlansData.length > 0 ? <div className="overflow-x-auto">
                    <table className="table">
                        <thead className="bg-base-200">
                            <tr>
                                <th>Image</th>
                                <th>Subsrciption name</th>
                                <th>Monthly Cost</th>
                                <th>Yearly Cost</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myPlansData.map(plans => <PlansTable
                                key={plans._id}
                                plans={plans}
                                handleDeletePlan={handleDeletePlan}
                            ></PlansTable>)}
                        </tbody>
                    </table>
                </div> : <EmptyData message={"No Plans Created yet"} address={"/addPlan"} label={"Add New Plan"}></EmptyData>
            }
        </Container>
    );
};

export default MyPlans;