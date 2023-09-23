import { Navigate } from "react-router-dom";
import Loader from "../Components/Shared/Loader";
import useAuth from "../Hooks/useAuth";

const UserRoute = ({children}) => {
    const { role, loading } = useAuth()

    if (loading) {
        return <Loader></Loader>
    }
    else if (role !== 'host') {
        return children
    }
    else {
        return <Navigate to="/"></Navigate>
    }
};

export default UserRoute;