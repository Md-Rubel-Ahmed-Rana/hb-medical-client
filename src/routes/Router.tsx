
import { createBrowserRouter } from "react-router-dom";
import AddDoctor from "../Dashboard/AddDoctor/AddDoctor";
import Doctors from "../Dashboard/Doctors/Doctors";
import Patients from "../Dashboard/Patients/Patients";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/appointment",
                element: <Appointment />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/dashboard",
                element: <AddDoctor />
            },
            {
                path: "/dashboard/doctors",
                element: <Doctors />
            },
            {
                path: "/dashboard/patients",
                element: <Patients />
            }
        ]
    }
])

export default router