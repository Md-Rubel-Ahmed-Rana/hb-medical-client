import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../Dashboard/SideBar/SideBar';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='px-10 my-5 flex gap-10'>
                <div  className='w-1/6'>
                    <SideBar />
                </div>
                <div className='w-5/6'>
                    <h2 className="text-4xl text-center">Welcome to Dashboard</h2>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;