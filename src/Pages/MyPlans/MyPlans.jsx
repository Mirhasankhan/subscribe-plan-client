import { deletePlans, deleteWithPlan } from "../../API/payment";
import useMyPlans from "../../Hooks/useMyPlans";
import PlansTable from "./PlansTable";

const MyPlans = () => {
    const  [myPlansData,refetch] = useMyPlans()
    const handleDeletePlan = (id)=>{
        deletePlans(id)
        .then(data =>{
            refetch()
            console.log(data);
        })

        deleteWithPlan(id)
        .then(data =>{           
            console.log(data);
        })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
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
        </div>
    );
};

export default MyPlans;