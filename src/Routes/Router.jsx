import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import MainLayout from "../Layout/MainLayout";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import AddPlan from "../Pages/AddPlan/AddPlan";
import Payment from "../Pages/Home/Payment/Payment";
import MySubscriptions from "../Pages/MySubscriptions/MySubscriptions";
import MyPlans from "../Pages/MyPlans/MyPlans";
import Details from "../Pages/Home/Details/Details";
import AdminRoute from "./AdminRoute";
import UserRoute from "./userRoute";

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
                element: <AdminRoute><AddPlan/></AdminRoute>
            },
            {
                path: '/mySubscriptions',
                element: <UserRoute><MySubscriptions/></UserRoute>
            },
            {
                path: '/myPlans',
                element: <AdminRoute><MyPlans/></AdminRoute>
            },
            {
                path: '/details/:id',
                element: <Details/>,
                loader: ({params})=> fetch(`https://subscribe-plan-server.vercel.app/plans/${params.id}`)
            },
            {
                path: '/payments',
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