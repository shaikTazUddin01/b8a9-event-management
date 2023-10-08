import React from 'react';
import MainBanner from '../../assets/mainBanner.jpg'


const Banner = () => {
    return (
        <div className="bg-cover bg-no-repeat" style={{backgroundImage:`url(${MainBanner})`}}>
            <div className='bg-[#2424247a] h-[350px] flex items-center justify-center'>
                <h1 className='text-center text-6xl font-semibold text-white '>Contact Us</h1>
            </div >
        {/* <img src={MainBanner} alt="" /> */}
        </div> 

       
    );
};

export default Banner;