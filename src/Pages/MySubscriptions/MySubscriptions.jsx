import useMySubscriptions from "../../Hooks/useMySubscription";
import TableRow from "./TableRow";

const MySubscriptions = () => {
    const [mySubsriptions, refetch] = useMySubscriptions()
   
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Subsrciption</th>
                        <th>Seller Email</th>
                        <th>Type</th>
                        <th>transactionId</th>
                        <th>Cost</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {mySubsriptions.map(subs => <TableRow key={subs._id} subs={subs}></TableRow>)}
                </tbody>
            </table>
        </div>
    );
};

export default MySubscriptions;