import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div  className='sticky top-0 text-center lg:text-left'>
            <p className='bg-blue-700 p-2 mb-2 rounded text-white'><Link to="/dashboard">Add New Doctor</Link></p>
            <p className='bg-blue-700 p-2 mb-2 rounded text-white'><Link to="/dashboard/doctors">All Doctors</Link></p>
            <p className='bg-blue-700 p-2 mb-2 rounded text-white'><Link to="/dashboard/patients">All Patients</Link></p>
        </div>
    );
};

export default SideBar;