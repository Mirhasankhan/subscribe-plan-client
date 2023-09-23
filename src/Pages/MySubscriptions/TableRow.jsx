import { deleteSubscription } from "../../API/payment";
import useMySubscriptions from "../../Hooks/useMySubscription";

const TableRow = ({subs}) => {   
    const [, refetch] = useMySubscriptions() 
    const {_id, image, transactionId, cost, sellerEmail,planName} = subs;

    const handleDelete = (id)=>{
        deleteSubscription(id)
        .then(data =>{
            refetch()
            console.log(data);
        })
    }
    return (
        <tr>
            <th>
                <img className="h-12 rounded-full w-12" src={image} alt="" />
            </th>
            <td>{planName}</td>
            <td>{sellerEmail}</td>
            <td>Monthly</td>
            <td>{transactionId}</td>
            <td>${cost}</td>
            <td>
                <button onClick={()=>handleDelete(_id)}>Delete</button>
            </td>
        </tr>
    )
};

export default TableRow;