import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import logo from "../../images/logo.jpg"

const Navbar = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="px-20 bg-gray-200 flex items-center justify-between py-3">
            <div className='flex items-center gap-4'>
                <img className='w-14 h-14 rounded-full' src={logo} alt="" />
                <h2 className='font-bold text-3xl'>HB Medical</h2>
            </div>
            <div>
                <ul className='flex gap-10'>
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