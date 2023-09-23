

const PlansTable = ({ plans,handleDeletePlan }) => {
    const { image, yearly, monthly, planName,_id } = plans;
    return (
        <tr>
            <th>
                <img className="h-12 rounded-full w-12" src={image} alt="" />
            </th>
            <td>{planName}</td>
            <td>${monthly}</td>
            <td>${yearly}</td>
            <td>
                <button className="delete-button" onClick={()=>handleDeletePlan(_id)}>Delete</button>
            </td>
        </tr>
    );
};

export default PlansTable;