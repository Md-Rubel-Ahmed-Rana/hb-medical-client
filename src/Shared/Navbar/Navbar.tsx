import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import logo from "../../images/logo.jpg"

const Navbar = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="lg:px-20 px-5 bg-gray-200 lg:flex items-center justify-between py-3">
            <div className='flex items-center gap-4'>
                <img className='w-14 h-14 rounded-full' src={logo} alt="" />
                <h2 className='font-bold lg:text-3xl'>HB Medical</h2>
            </div>
            <div className='ml-16'>
                <ul className='flex flex-wrap lg:gap-10 gap-2'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/appointment">Appointment</Link></li>
                <li><Link to="/services">Services</Link></li>
                {
                    user && <li><Link to="/dashboard">Dashboard</Link></li>
                }
                {
                    user ? <li><Link to="/">Logout</Link></li> :
                    <>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    </> 
                }
            </ul>
            </div>
        </div>
    );
};

export default Navbar;