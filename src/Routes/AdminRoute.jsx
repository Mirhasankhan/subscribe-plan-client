import { Navigate } from "react-router-dom";
import Loader from "../Components/Shared/Loader";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children }) => {
    const { role, loading } = useAuth()
    
    if (loading) {
        return <Loader></Loader>
    }
    else if(role !== 'host'){
        <Loader></Loader>
    }
    else if (role == 'host') {
        return children
    }
    else {
        return <Navigate to="/"></Navigate>
    }


};

export default AdminRoute;