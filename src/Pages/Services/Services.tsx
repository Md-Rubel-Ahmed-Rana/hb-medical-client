import React from 'react';
import pathology from "../../images/pathology.png"
import mri from "../../images/mri.png"
import checkup from "../../images/checkup.png"
import doctorLogo from "../../images/doctor-logo.png"
import digitalXRay from "../../images/digital-x-ray.png"

const Services = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-10 my-20 px-10 text-center'>
            <div className='shadow-xl p-4 rounded-md'>
                <img className='h-40 w-full' src={pathology} alt="" />
                <h3 className="text-2xl">Pathology</h3>
            </div>
            <div className='shadow-xl p-4 rounded-md'>
                <img className='h-40 w-full' src={mri} alt="" />
                <h3 className="text-2xl">MRI</h3>
            </div>
            <div className='shadow-xl p-4 rounded-md'>
                <img className='h-40 w-full' src={checkup} alt="" />
                <h3 className="text-2xl">Madical Checkup</h3>
            </div>
            <div className='shadow-xl p-4 rounded-md'>
                <img className='h-40 w-full' src={doctorLogo} alt="" />
                <h3 className="text-2xl">Specialized Doctor</h3>
            </div>
            <div className='shadow-xl p-4 rounded-md'>
                <img className='h-40 w-full' src={digitalXRay} alt="" />
                <h3 className="text-2xl">Digital X-ray</h3>
            </div>
        </div>
    );
};

export default Services;