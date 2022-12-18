import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../Dashboard/SideBar/SideBar';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='px-10 my-5 lg:flex gap-10'>
                <div  className='lg:w-1/6'>
                    <SideBar />
                </div>
                <div className='lg:w-5/6'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;