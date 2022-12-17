import React from 'react';
import banner from "../../../images/banner.png"

const Banner = () => {
    return (
        <div className='relative '>
            <img className='h-screen w-screen' src={banner} alt="" />
            <div className='text-4xl p-10  text-center absolute top-[0%] left-[30%]'>
                <h3 className='text-4xl text-white'>The World Class Patient Care Hall</h3>
            </div>
        </div>
    );
};

export default Banner;