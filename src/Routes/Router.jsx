import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import MainLayout from "../Layout/MainLayout";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import AddPlan from "../Pages/AddPlan/AddPlan";
import Payment from "../Pages/Home/Payment/Payment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/addPlan',
                element: <AddPlan/>
            },
            {
                path: '/payment/:id',
                element: <Payment/>
            }
        ]
    },
    {
        path: '/signUp',
        element: <SignUp/>
    },
    {
        path: '/login',
        element: <Login/>
    }
])

export default router;