import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import EventDetails from "../Pages/EventDetails/EventDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Order from "../Pages/Order/Order";
import PrivateRouter from "./PrivateRouter";



const Router =  createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/eventItem.json')
            },
            {
                path:'/eventDetails/:id',
                element:<PrivateRouter><EventDetails></EventDetails></PrivateRouter>,
                loader:()=>fetch('/eventItem.json')
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:'/order',
                element:<PrivateRouter><Order></Order></PrivateRouter>
            }
        ]
    }
])
  


export default Router;