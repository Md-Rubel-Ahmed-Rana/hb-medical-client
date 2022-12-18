import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='flex justify-between lg:px-40 px-10 py-10 bg-slate-300'>
            <div>
                <p><Link to="/" className="link link-hover">Branding</Link></p>
                <p><Link to="/" className="link link-hover">Design</Link></p>
                <p><Link to="/" className="link link-hover">Marketing</Link></p>
                <p><Link to="/" className="link link-hover">Advertisement</Link></p>
            </div> 
            <div>
               <p> <Link to="/" className="link link-hover">About us</Link></p>
                <p><Link to="/" className="link link-hover">Contact</Link></p>
                <p><Link to="/" className="link link-hover">Jobs</Link></p>
                <p><Link to="/" className="link link-hover">Press kit</Link></p>
            </div>
</footer>
    );
};

export default Footer;