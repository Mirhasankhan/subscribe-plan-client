import { Helmet } from "react-helmet-async";
import Container from "../../Components/Shared/Container";
import EmptyData from "../../Components/Shared/EmptyData";
import useMySubscriptions from "../../Hooks/useMySubscription";
import TableRow from "./TableRow";

const MySubscriptions = () => {
    const [mySubsriptions, refetch] = useMySubscriptions()
    console.log(mySubsriptions);

    return (
        <Container>
            <Helmet title='Subscriptions | Subscrible-Plan '></Helmet>
            <h1 className="text-center text-3xl font-semibold my-6">Your Subscribed Plans</h1>
            {mySubsriptions.length > 0 ?<div className="overflow-x-auto">
                <table className="table">
                    <thead className="bg-base-200">
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
            </div> : <EmptyData message={"No Subscriptions Found"} address={"/"} label={"Go Back"}></EmptyData>}
        </Container>
    );
};

export default MySubscriptions;